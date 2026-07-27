import { useCallback, useEffect, useRef } from "react";

import { trackUmamiEvent } from "../utils/analytics";

const createSession = (selectedIndex, chapters) => ({
    activeMilliseconds: 0,
    activeSegmentStartedAt:
        document.visibilityState === "visible" ? performance.now() : null,
    completed: false,
    exitTracked: false,
    maxChapterIndex: selectedIndex,
    maxChapterId: chapters[selectedIndex]?.id ?? "",
    maxScrollPercent: 0,
});

const useBuildStoryAnalytics = ({
    chapters,
    completionElementRef,
    isActive,
    scrollContainerRef,
    selectedIndex,
}) => {
    const chaptersRef = useRef(chapters);
    const selectedIndexRef = useRef(selectedIndex);
    const sessionRef = useRef(null);

    useEffect(() => {
        chaptersRef.current = chapters;
    }, [chapters]);

    useEffect(() => {
        selectedIndexRef.current = selectedIndex;
    }, [selectedIndex]);

    const pauseActiveTimer = useCallback(() => {
        const session = sessionRef.current;

        if (!session?.activeSegmentStartedAt) return;

        session.activeMilliseconds +=
            performance.now() - session.activeSegmentStartedAt;
        session.activeSegmentStartedAt = null;
    }, []);

    const resumeActiveTimer = useCallback(() => {
        const session = sessionRef.current;

        if (
            !session ||
            session.exitTracked ||
            session.activeSegmentStartedAt ||
            document.visibilityState !== "visible"
        ) {
            return;
        }

        session.activeSegmentStartedAt = performance.now();
    }, []);

    const updateScrollProgress = useCallback(() => {
        const session = sessionRef.current;
        const scrollContainer = scrollContainerRef.current;

        if (!session || !scrollContainer) return;

        const maximumScroll =
            scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const scrollPercent =
            maximumScroll <= 0
                ? 100
                : (scrollContainer.scrollTop / maximumScroll) * 100;

        session.maxScrollPercent = Math.max(
            session.maxScrollPercent,
            Math.min(100, Math.round(scrollPercent)),
        );
    }, [scrollContainerRef]);

    const getSessionData = useCallback(() => {
        const session = sessionRef.current;

        if (!session) return null;

        const currentActiveMilliseconds = session.activeSegmentStartedAt
            ? performance.now() - session.activeSegmentStartedAt
            : 0;

        return {
            active_seconds: Number(
                (
                    (session.activeMilliseconds + currentActiveMilliseconds) /
                    1000
                ).toFixed(1),
            ),
            max_scroll_percent: session.maxScrollPercent,
            max_chapter_number: session.maxChapterIndex + 1,
            max_chapter_id: session.maxChapterId,
            total_chapters: chapters.length,
        };
    }, [chapters.length]);

    const finishSession = useCallback(
        (exitReason) => {
            const session = sessionRef.current;

            if (!session || session.exitTracked) return;

            updateScrollProgress();
            pauseActiveTimer();

            trackUmamiEvent("build_story_exit", {
                ...getSessionData(),
                completed: session.completed,
                exit_reason: exitReason,
            });

            session.exitTracked = true;
        },
        [getSessionData, pauseActiveTimer, updateScrollProgress],
    );

    useEffect(() => {
        if (!isActive || !sessionRef.current) return;

        const session = sessionRef.current;

        if (selectedIndex > session.maxChapterIndex) {
            session.maxChapterIndex = selectedIndex;
            session.maxChapterId = chapters[selectedIndex]?.id ?? "";
        }
    }, [chapters, isActive, selectedIndex]);

    useEffect(() => {
        if (!isActive) return undefined;

        sessionRef.current = createSession(
            selectedIndexRef.current,
            chaptersRef.current,
        );

        const scrollContainer = scrollContainerRef.current;
        const completionElement = completionElementRef.current;

        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                resumeActiveTimer();
                return;
            }

            pauseActiveTimer();
        };
        const handlePageHide = () => finishSession("page_leave");
        const completionObserver = completionElement
            ? new IntersectionObserver(
                  ([entry]) => {
                      const session = sessionRef.current;

                      if (
                          !entry.isIntersecting ||
                          !session ||
                          session.completed
                      ) {
                          return;
                      }

                      updateScrollProgress();
                      session.completed = true;
                      trackUmamiEvent("build_story_complete", getSessionData());
                  },
                  {
                      root: scrollContainer,
                      threshold: 0.6,
                  },
              )
            : null;

        updateScrollProgress();
        scrollContainer?.addEventListener("scroll", updateScrollProgress, {
            passive: true,
        });
        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("pagehide", handlePageHide);
        completionObserver?.observe(completionElement);

        return () => {
            scrollContainer?.removeEventListener(
                "scroll",
                updateScrollProgress,
            );
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
            window.removeEventListener("pagehide", handlePageHide);
            completionObserver?.disconnect();
            finishSession("story_closed");
        };
    }, [
        completionElementRef,
        finishSession,
        getSessionData,
        isActive,
        pauseActiveTimer,
        resumeActiveTimer,
        scrollContainerRef,
        updateScrollProgress,
    ]);

    return { finishSession };
};

export default useBuildStoryAnalytics;
