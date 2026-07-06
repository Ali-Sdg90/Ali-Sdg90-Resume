import { useCallback, useLayoutEffect, useRef } from "react";

const THUMB_HEIGHT_PERCENT = 60;
const MAX_THUMB_TOP_PERCENT = 100 - THUMB_HEIGHT_PERCENT;
const LINE_SCROLL_PX = 16;
const WHEEL_SCROLL_DURATION_MS = 300;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getWheelDeltaY = (event, viewport) => {
    if (event.deltaMode === 1) {
        return event.deltaY * LINE_SCROLL_PX;
    }

    if (event.deltaMode === 2) {
        return event.deltaY * viewport.clientHeight;
    }

    return event.deltaY;
};

const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

const CustomScrollbar = ({
    children,
    className = "",
    contentKey,
    viewportClassName = "",
}) => {
    const rootRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const thumbRef = useRef(null);
    const dragOffsetRef = useRef(0);
    const animationFrameRef = useRef(null);
    const targetScrollTopRef = useRef(0);

    const stopScrollAnimation = useCallback(() => {
        if (animationFrameRef.current) {
            window.cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    }, []);

    const updateScrollbar = useCallback(() => {
        const root = rootRef.current;
        const viewport = viewportRef.current;
        const thumb = thumbRef.current;
        if (!root || !viewport || !thumb) return;

        const rootRect = root.getBoundingClientRect();
        const viewportRect = viewport.getBoundingClientRect();
        const trackTop = Math.max(0, viewportRect.top - rootRect.top);
        const trackBottom = Math.max(0, rootRect.bottom - viewportRect.bottom);
        const maxScrollTop = viewport.scrollHeight - viewport.clientHeight;
        const isScrollable = maxScrollTop > 1;
        const scrollProgress = isScrollable
            ? viewport.scrollTop / maxScrollTop
            : 0;
        const thumbTopPercent = scrollProgress * MAX_THUMB_TOP_PERCENT;

        if (!animationFrameRef.current) {
            targetScrollTopRef.current = viewport.scrollTop;
        }

        root.dataset.scrollable = isScrollable ? "true" : "false";
        root.style.setProperty("--custom-scrollbar-track-top", `${trackTop}px`);
        root.style.setProperty(
            "--custom-scrollbar-track-bottom",
            `${trackBottom}px`,
        );
        thumb.style.setProperty(
            "--custom-scrollbar-thumb-top",
            `${thumbTopPercent}%`,
        );
    }, []);

    const scrollToPointer = useCallback(
        (clientY, shouldCenterThumb) => {
            const viewport = viewportRef.current;
            const track = trackRef.current;
            if (!viewport || !track) return;

            stopScrollAnimation();

            const trackRect = track.getBoundingClientRect();
            const thumbHeight = trackRect.height * (THUMB_HEIGHT_PERCENT / 100);
            const maxThumbTop = trackRect.height - thumbHeight;
            const pointerOffset = shouldCenterThumb
                ? thumbHeight / 2
                : dragOffsetRef.current;
            const thumbTop = clamp(
                clientY - trackRect.top - pointerOffset,
                0,
                maxThumbTop,
            );
            const scrollProgress = maxThumbTop > 0 ? thumbTop / maxThumbTop : 0;

            viewport.scrollTop =
                scrollProgress *
                (viewport.scrollHeight - viewport.clientHeight);
            targetScrollTopRef.current = viewport.scrollTop;
            updateScrollbar();
        },
        [stopScrollAnimation, updateScrollbar],
    );

    const animateScrollTo = useCallback(
        (nextScrollTop) => {
            const viewport = viewportRef.current;
            if (!viewport) return;

            stopScrollAnimation();

            const startScrollTop = viewport.scrollTop;
            const scrollDistance = nextScrollTop - startScrollTop;
            const startTime = window.performance.now();

            const step = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = clamp(
                    elapsed / WHEEL_SCROLL_DURATION_MS,
                    0,
                    1,
                );

                viewport.scrollTop =
                    startScrollTop + scrollDistance * easeOutCubic(progress);
                updateScrollbar();

                if (progress < 1) {
                    animationFrameRef.current =
                        window.requestAnimationFrame(step);
                    return;
                }

                viewport.scrollTop = nextScrollTop;
                animationFrameRef.current = null;
                updateScrollbar();
            };

            animationFrameRef.current = window.requestAnimationFrame(step);
        },
        [stopScrollAnimation, updateScrollbar],
    );

    const handleWheel = useCallback(
        (event) => {
            const viewport = viewportRef.current;
            if (!viewport) return;

            const maxScrollTop = viewport.scrollHeight - viewport.clientHeight;
            if (maxScrollTop <= 1) return;

            event.preventDefault();
            event.stopPropagation();

            targetScrollTopRef.current = clamp(
                targetScrollTopRef.current + getWheelDeltaY(event, viewport),
                0,
                maxScrollTop,
            );
            animateScrollTo(targetScrollTopRef.current);
        },
        [animateScrollTo],
    );

    const handleTrackPointerDown = useCallback(
        (event) => {
            if (event.target !== event.currentTarget) return;

            event.preventDefault();
            scrollToPointer(event.clientY, true);
        },
        [scrollToPointer],
    );

    const handleThumbPointerDown = useCallback(
        (event) => {
            event.preventDefault();
            event.stopPropagation();

            rootRef.current?.setAttribute("data-dragging", "true");

            const thumbRect = event.currentTarget.getBoundingClientRect();
            dragOffsetRef.current = event.clientY - thumbRect.top;

            const handlePointerMove = (moveEvent) => {
                moveEvent.preventDefault();
                scrollToPointer(moveEvent.clientY, false);
            };
            const handlePointerUp = () => {
                rootRef.current?.setAttribute("data-dragging", "false");
                window.removeEventListener("pointermove", handlePointerMove);
                window.removeEventListener("pointerup", handlePointerUp);
            };

            window.addEventListener("pointermove", handlePointerMove, {
                passive: false,
            });
            window.addEventListener("pointerup", handlePointerUp, {
                once: true,
            });
        },
        [scrollToPointer],
    );

    useLayoutEffect(() => {
        const viewport = viewportRef.current;
        const root = rootRef.current;
        if (!viewport || !root) return undefined;

        let animationFrameId = window.requestAnimationFrame(updateScrollbar);
        const resizeObserver =
            typeof ResizeObserver === "undefined"
                ? null
                : new ResizeObserver(updateScrollbar);

        viewport.addEventListener("scroll", updateScrollbar, {
            passive: true,
        });
        root.addEventListener("wheel", handleWheel, {
            passive: false,
        });
        resizeObserver?.observe(root);
        resizeObserver?.observe(viewport);

        if (viewport.firstElementChild) {
            resizeObserver?.observe(viewport.firstElementChild);
        }

        window.addEventListener("resize", updateScrollbar);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            stopScrollAnimation();
            viewport.removeEventListener("scroll", updateScrollbar);
            root.removeEventListener("wheel", handleWheel);
            resizeObserver?.disconnect();
            window.removeEventListener("resize", updateScrollbar);
        };
    }, [contentKey, handleWheel, stopScrollAnimation, updateScrollbar]);

    return (
        <div
            className={["custom-scrollbar", className]
                .filter(Boolean)
                .join(" ")}
            data-scrollable="false"
            ref={rootRef}
        >
            <div
                className={["custom-scrollbar__viewport", viewportClassName]
                    .filter(Boolean)
                    .join(" ")}
                ref={viewportRef}
            >
                {children}
            </div>
            <div
                className="custom-scrollbar__track"
                aria-hidden="true"
                ref={trackRef}
                onPointerDown={handleTrackPointerDown}
            >
                <div
                    className="custom-scrollbar__thumb"
                    onPointerDown={handleThumbPointerDown}
                    ref={thumbRef}
                    style={{
                        "--custom-scrollbar-thumb-height": `${THUMB_HEIGHT_PERCENT}%`,
                        "--custom-scrollbar-thumb-top": "0%",
                    }}
                />
            </div>
        </div>
    );
};

export default CustomScrollbar;
