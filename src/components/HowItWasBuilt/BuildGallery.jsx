import { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

import GalleryInformation from "./GalleryInformation";
import GalleryMedia from "./GalleryMedia";
import { APPLE_EASE } from "./motionConfig";
import ThumbnailRail from "./ThumbnailRail";
import useGalleryKeyboardNavigation from "./useGalleryKeyboardNavigation";

const BuildGallery = ({
    activeLanguage,
    chapters,
    isActive,
    onSelect,
    selectedIndex,
}) => {
    const prefersReducedMotion = useReducedMotion();
    const chapter = chapters[selectedIndex];
    const isFirst = selectedIndex === 0;
    const isLast = selectedIndex === chapters.length - 1;
    const selectPrevious = useCallback(
        () => onSelect(selectedIndex - 1),
        [onSelect, selectedIndex],
    );
    const selectNext = useCallback(
        () => onSelect(selectedIndex + 1),
        [onSelect, selectedIndex],
    );

    useGalleryKeyboardNavigation({
        isActive,
        isFirst,
        isLast,
        onNext: selectNext,
        onPrevious: selectPrevious,
    });

    return (
        <section
            className="build-gallery"
            aria-label="Portfolio build gallery"
            style={{ "--gallery-accent": chapter.accent }}
        >
            <motion.div
                className="build-gallery__card"
                initial={
                    prefersReducedMotion
                        ? false
                        : {
                              opacity: 0,
                              y: 88,
                              scale: 0.965,
                              filter: "blur(10px)",
                          }
                }
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 1.15, ease: APPLE_EASE }}
            >
                <div className="build-gallery__media-column">
                    <GalleryMedia
                        chapter={chapter}
                        isFirst={isFirst}
                        isLast={isLast}
                        onNext={selectNext}
                        onPrevious={selectPrevious}
                        prefersReducedMotion={prefersReducedMotion}
                    />
                    <motion.div
                        initial={
                            prefersReducedMotion ? false : { opacity: 0, y: 18 }
                        }
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: APPLE_EASE,
                        }}
                    >
                        <ThumbnailRail
                            chapters={chapters}
                            selectedIndex={selectedIndex}
                            onSelect={onSelect}
                        />
                    </motion.div>
                </div>
                <GalleryInformation
                    activeLanguage={activeLanguage}
                    chapter={chapter}
                    prefersReducedMotion={prefersReducedMotion}
                    selectedIndex={selectedIndex}
                    total={chapters.length}
                />
            </motion.div>
        </section>
    );
};

export default BuildGallery;
