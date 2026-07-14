import { useCallback, useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import {
    CONSTRUCTION_NOTICE_EXIT_DURATION_MS,
    CONSTRUCTION_NOTICE_SHOW_DELAY_MS,
    CONSTRUCTION_NOTICE_VISIBILITY_DURATION_MS,
    SHOW_CONSTRUCTION_NOTICE_TOAST,
} from "./constants";
import {
    hasConstructionNoticeCookie,
    setConstructionNoticeCookie,
} from "./cookie";
import "./temporary-construction-notice.scss";

const TemporaryConstructionNotice = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissing, setIsDismissing] = useState(false);
    const dismissTimerRef = useRef(null);
    const removeTimerRef = useRef(null);

    const dismiss = useCallback(() => {
        clearTimeout(dismissTimerRef.current);
        setIsDismissing(true);
        removeTimerRef.current = window.setTimeout(
            () => setIsVisible(false),
            CONSTRUCTION_NOTICE_EXIT_DURATION_MS,
        );
    }, []);

    useEffect(() => {
        if (!SHOW_CONSTRUCTION_NOTICE_TOAST) return undefined;
        if (hasConstructionNoticeCookie()) return undefined;

        const showTimer = window.setTimeout(() => {
            if (hasConstructionNoticeCookie()) return;

            setConstructionNoticeCookie();
            setIsVisible(true);
            dismissTimerRef.current = window.setTimeout(
                dismiss,
                CONSTRUCTION_NOTICE_VISIBILITY_DURATION_MS,
            );
        }, CONSTRUCTION_NOTICE_SHOW_DELAY_MS);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(dismissTimerRef.current);
            clearTimeout(removeTimerRef.current);
        };
    }, [dismiss]);

    if (!isVisible) return null;

    return (
        <aside
            className={`construction-notice${isDismissing ? " construction-notice--dismissing" : ""}`}
            role="status"
            aria-live="polite"
        >
            <div className="construction-notice__accent" aria-hidden="true" />

            <div className="construction-notice__content">
                <p>
                    This portfolio is still under construction, and I’m actively
                    working on it.
                </p>
                <p>
                    You can follow the project’s progress on{" "}
                    <a
                        href="https://github.com/Ali-Sdg90/ali-sdg90.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ali-Sdg90/ali-sdg90.github.io
                    </a>
                </p>
                <p>Thank you for checking out my projects! ;)</p>
            </div>

            <button
                className="construction-notice__close"
                type="button"
                onClick={dismiss}
                aria-label="Close construction notice"
            >
                <IoCloseOutline aria-hidden="true" />
            </button>
        </aside>
    );
};

export default TemporaryConstructionNotice;
