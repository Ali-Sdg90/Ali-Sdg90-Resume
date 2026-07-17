import { forwardRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

import howItWasBuiltData from "../../data/howItWasBuilt/howItWasBuiltData";
import BuildProgress from "./BuildProgress";
import ShowcaseRow from "./ShowcaseRow";

const HowItWasBuilt = forwardRef(function HowItWasBuilt(
    { isActive, onReturn, returnButtonRef },
    scrollContainerRef,
) {
    const prefersReducedMotion = useReducedMotion();
    const [activeLanguage, setActiveLanguage] = useState("en");
    const { page, chapters } = howItWasBuiltData;

    return (
        <section
            className={`build-story${isActive ? " is-active" : ""}`}
            aria-labelledby="build-title"
            ref={scrollContainerRef}
        >
            <div className="build-story__ambient" aria-hidden="true" />

            <header className="build-story__nav">
                <button
                    className="build-story__return"
                    type="button"
                    ref={returnButtonRef}
                    onClick={onReturn}
                >
                    <FaArrowLeftLong aria-hidden="true" />
                    <span>{page.portfolioLabel}</span>
                </button>
                <div className="build-story__language-control">
                    <span>Image info</span>
                    <div
                        className="build-story__language-toggle"
                        aria-label="Change image information language"
                        role="group"
                    >
                        {[
                            ["en", "EN"],
                            ["fa", "FA"],
                        ].map(([language, label]) => (
                            <button
                                className={
                                    activeLanguage === language
                                        ? "is-active"
                                        : ""
                                }
                                type="button"
                                aria-pressed={activeLanguage === language}
                                key={language}
                                onClick={() => setActiveLanguage(language)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <BuildProgress
                scrollContainerRef={scrollContainerRef}
                total={chapters.length}
            />

            <motion.div
                className="build-story__hero"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 id="build-title">{page.title}</h1>
                <p className="build-story__subtitle">{page.subtitle}</p>
            </motion.div>

            <div className="build-story__chapters">
                {chapters.map((chapter, index) => (
                    <ShowcaseRow
                        chapter={chapter}
                        activeLanguage={activeLanguage}
                        index={index}
                        key={chapter.id}
                    />
                ))}
            </div>

            <footer className="build-story__footer">
                <button type="button" onClick={onReturn}>
                    {page.returnLabel} <FaArrowLeftLong aria-hidden="true" />
                </button>
            </footer>
        </section>
    );
});

export default HowItWasBuilt;
