import { useEffect } from "react";

const useGalleryKeyboardNavigation = ({
    isActive,
    isFirst,
    isLast,
    onNext,
    onPrevious,
}) => {
    useEffect(() => {
        if (!isActive) return undefined;

        const handleKeyDown = (event) => {
            if (
                event.defaultPrevented ||
                document.querySelector(".about-panel-lightbox")
            ) {
                return;
            }

            if (event.key === "ArrowLeft" && !isFirst) {
                event.preventDefault();
                onPrevious();
            }

            if (event.key === "ArrowRight" && !isLast) {
                event.preventDefault();
                onNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isActive, isFirst, isLast, onNext, onPrevious]);
};

export default useGalleryKeyboardNavigation;
