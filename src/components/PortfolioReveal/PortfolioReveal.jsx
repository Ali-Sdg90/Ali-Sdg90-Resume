import { useCallback, useEffect, useRef, useState } from "react";
import { Peel, PeelCorners } from "peel.js";
import "peel.js/style";

import HowItWasBuilt from "../HowItWasBuilt";
import { trackUmamiEvent } from "../../utils/analytics";

const DEFAULT_FOLD = 28;
const HOVER_FOLD = 72;
const HOVER_DURATION_MS = 340;
const PEEL_DURATION_MS = 1380;
const RETURN_DURATION_MS = 1380;
const ONBOARDING_DELAY_MS = 8000;
const ONBOARDING_DURATION_MS = 2500;

const easeInOutCubic = (value) =>
    value < 0.5 ? 4 * value ** 3 : 1 - (-2 * value + 2) ** 3 / 2;

const easeOutCubic = (value) => 1 - (1 - value) ** 3;

const PortfolioReveal = ({ children }) => {
    const peelElementRef = useRef(null);
    const peelRef = useRef(null);
    const returnButtonRef = useRef(null);
    const triggerRef = useRef(null);
    const buildStoryRef = useRef(null);
    const animationFrameRef = useRef(null);
    const foldAnimationFrameRef = useRef(null);
    const onboardingDelayRef = useRef(null);
    const onboardingEndRef = useRef(null);
    const hasInteractedRef = useRef(false);
    const isAnimatingRef = useRef(false);
    const isOpenRef = useRef(false);
    const progressRef = useRef(0);
    const foldRef = useRef(DEFAULT_FOLD);
    const pathStartFoldRef = useRef(DEFAULT_FOLD);
    const pathModeRef = useRef("open");
    const [isOpen, setIsOpen] = useState(false);
    const [isReturning, setIsReturning] = useState(false);
    const [isOnboarding, setIsOnboarding] = useState(false);
    const [hasOpenedBuildStory, setHasOpenedBuildStory] = useState(false);

    const animateFoldTo = useCallback((targetDistance) => {
        const peel = peelRef.current;
        if (!peel || isAnimatingRef.current || isOpenRef.current) return;

        cancelAnimationFrame(foldAnimationFrameRef.current);
        const startDistance = foldRef.current;
        const startTime = performance.now();

        const tick = (now) => {
            if (isAnimatingRef.current || isOpenRef.current) return;

            const elapsed = Math.min((now - startTime) / HOVER_DURATION_MS, 1);
            const distance =
                startDistance +
                (targetDistance - startDistance) * easeOutCubic(elapsed);

            foldRef.current = distance;
            peel.setPeelPosition(peel.width - distance, peel.height - distance);

            if (elapsed < 1) {
                foldAnimationFrameRef.current = requestAnimationFrame(tick);
            }
        };

        foldAnimationFrameRef.current = requestAnimationFrame(tick);
    }, []);

    const registerInteraction = useCallback(() => {
        if (hasInteractedRef.current) return;

        hasInteractedRef.current = true;
        clearTimeout(onboardingDelayRef.current);
        clearTimeout(onboardingEndRef.current);
        setIsOnboarding(false);
    }, []);

    const configurePeel = useCallback((progress = 0) => {
        const peel = peelRef.current;
        if (!peel) return;

        peel.setupDimensions();
        const { width, height } = peel;
        peel.corner = peel.getPoint(PeelCorners.BOTTOM_RIGHT);
        peel.setPeelPath(
            width - pathStartFoldRef.current,
            height - pathStartFoldRef.current,
            width * 0.66,
            height * 0.68,
            -width * 0.08,
            -height * 0.04,
            -width * 1.15,
            -height * 1.15,
        );
        peel.setTimeAlongPath(progress);
        progressRef.current = progress;
    }, []);

    const configureReturnPeel = useCallback((progress = 0) => {
        const peel = peelRef.current;
        if (!peel) return;

        peel.setupDimensions();
        const { width, height } = peel;
        peel.corner = peel.getPoint(PeelCorners.BOTTOM_RIGHT);
        peel.setPeelPath(
            -width * 1.15,
            -height * 1.15,
            -width * 0.28,
            -height * 0.3,
            width * 0.62,
            height * 0.65,
            width - DEFAULT_FOLD,
            height - DEFAULT_FOLD,
        );
        peel.setTimeAlongPath(progress);
        progressRef.current = progress;
    }, []);

    const animateTo = useCallback((targetProgress, onComplete) => {
        const peel = peelRef.current;
        if (!peel || isAnimatingRef.current) return;

        cancelAnimationFrame(foldAnimationFrameRef.current);

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reducedMotion) {
            isOpenRef.current = targetProgress === 1;
            setIsOpen(isOpenRef.current);
            peel.setTimeAlongPath(targetProgress);
            progressRef.current = targetProgress;
            onComplete?.();
            return;
        }

        isAnimatingRef.current = true;
        const startProgress = isOpenRef.current ? 1 : 0;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = Math.min((now - startTime) / PEEL_DURATION_MS, 1);
            const eased = easeInOutCubic(elapsed);
            const progress =
                startProgress + (targetProgress - startProgress) * eased;

            peel.setTimeAlongPath(progress);
            progressRef.current = progress;

            if (elapsed < 1) {
                animationFrameRef.current = requestAnimationFrame(tick);
                return;
            }

            isAnimatingRef.current = false;
            isOpenRef.current = targetProgress === 1;
            setIsOpen(isOpenRef.current);
            onComplete?.();
        };

        animationFrameRef.current = requestAnimationFrame(tick);
    }, []);

    const openPage = useCallback(() => {
        if (isOpenRef.current || isAnimatingRef.current) return;
        trackUmamiEvent("build_story_open", {
            entry_point: "page_peel",
        });
        setHasOpenedBuildStory(true);
        setIsReturning(false);
        buildStoryRef.current?.scrollTo({ top: 0 });
        triggerRef.current.hidden = true;
        pathModeRef.current = "open";
        pathStartFoldRef.current = foldRef.current;
        configurePeel(0);
        animateTo(1, () => returnButtonRef.current?.focus());
    }, [animateTo, configurePeel]);

    const closePage = useCallback(() => {
        if (!isOpenRef.current || isAnimatingRef.current) return;

        setIsReturning(true);
        cancelAnimationFrame(foldAnimationFrameRef.current);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            isOpenRef.current = false;
            foldRef.current = DEFAULT_FOLD;
            pathStartFoldRef.current = DEFAULT_FOLD;
            pathModeRef.current = "open";
            configurePeel(0);
            setIsOpen(false);
            setIsReturning(false);
            buildStoryRef.current?.scrollTo({ top: 0 });
            triggerRef.current.hidden = false;
            requestAnimationFrame(() => triggerRef.current?.focus());
            return;
        }

        pathModeRef.current = "return";
        configureReturnPeel(0);
        isAnimatingRef.current = true;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = Math.min((now - startTime) / RETURN_DURATION_MS, 1);
            const progress = easeOutCubic(elapsed);

            peelRef.current?.setTimeAlongPath(progress);
            progressRef.current = progress;

            if (elapsed < 1) {
                animationFrameRef.current = requestAnimationFrame(tick);
                return;
            }

            isAnimatingRef.current = false;
            isOpenRef.current = false;
            foldRef.current = DEFAULT_FOLD;
            pathStartFoldRef.current = DEFAULT_FOLD;
            pathModeRef.current = "open";
            configurePeel(0);
            setIsOpen(false);
            setIsReturning(false);
            buildStoryRef.current?.scrollTo({ top: 0 });
            triggerRef.current.hidden = false;
            requestAnimationFrame(() => triggerRef.current?.focus());
        };

        animationFrameRef.current = requestAnimationFrame(tick);
    }, [configurePeel, configureReturnPeel]);

    useEffect(() => {
        const element = peelElementRef.current;
        if (!element) return undefined;

        const peel = new Peel(element, {
            corner: PeelCorners.BOTTOM_RIGHT,
            backReflection: true,
            backReflectionAlpha: 0.12,
            backShadowAlpha: 0.2,
            bottomShadowDarkAlpha: 0.52,
            bottomShadowLightAlpha: 0.08,
            topShadowAlpha: 0.34,
            topShadowBlur: 10,
            clippingBoxScale: 5,
            setPeelOnInit: false,
        });
        peelRef.current = peel;
        configurePeel();

        let resizeFrame;
        const resizeObserver = new ResizeObserver(() => {
            cancelAnimationFrame(resizeFrame);
            resizeFrame = requestAnimationFrame(() => {
                if (pathModeRef.current === "return") {
                    configureReturnPeel(progressRef.current);
                    return;
                }

                configurePeel(progressRef.current);
            });
        });
        resizeObserver.observe(element);

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
            cancelAnimationFrame(foldAnimationFrameRef.current);
            cancelAnimationFrame(resizeFrame);
            resizeObserver.disconnect();
            peel.removeDragListeners();
            [peel.topClip, peel.backClip].forEach((clip) =>
                clip?.shape?.parentElement?.remove(),
            );
            peelRef.current = null;
            isAnimatingRef.current = false;
        };
    }, [configurePeel, configureReturnPeel]);

    useEffect(() => {
        onboardingDelayRef.current = window.setTimeout(() => {
            if (hasInteractedRef.current || isOpenRef.current) return;

            setIsOnboarding(true);
            animateFoldTo(HOVER_FOLD);

            onboardingEndRef.current = window.setTimeout(() => {
                setIsOnboarding(false);
                animateFoldTo(DEFAULT_FOLD);
            }, ONBOARDING_DURATION_MS);
        }, ONBOARDING_DELAY_MS);

        return () => {
            clearTimeout(onboardingDelayRef.current);
            clearTimeout(onboardingEndRef.current);
        };
    }, [animateFoldTo]);

    return (
        <div className={`page-peel-shell${isOpen ? " is-open" : ""}`}>
            <div className="page-peel peel" ref={peelElementRef}>
                <div
                    className="peel-bottom"
                    aria-hidden={!isOpen}
                    inert={isOpen ? undefined : true}
                >
                    {hasOpenedBuildStory && (
                        <HowItWasBuilt
                            ref={buildStoryRef}
                            isActive={isOpen && !isReturning}
                            returnButtonRef={returnButtonRef}
                            onReturn={closePage}
                        />
                    )}
                </div>
                <div className="peel-back" aria-hidden="true" />
                <div
                    className="peel-top"
                    aria-hidden={isOpen}
                    inert={isOpen ? true : undefined}
                >
                    <div className="page-peel-content">{children}</div>
                </div>
            </div>

            <button
                className={`page-peel-trigger${isOnboarding ? " is-onboarding" : ""}`}
                type="button"
                ref={triggerRef}
                aria-label="Reveal how this portfolio was built"
                aria-expanded={isOpen}
                onPointerEnter={() => {
                    registerInteraction();
                    animateFoldTo(HOVER_FOLD);
                }}
                onPointerLeave={() => animateFoldTo(DEFAULT_FOLD)}
                onClick={() => {
                    registerInteraction();
                    openPage();
                }}
            >
                <span className="page-peel-trigger__hint">
                    See how my portfolio was built
                </span>
            </button>
        </div>
    );
};

export default PortfolioReveal;
