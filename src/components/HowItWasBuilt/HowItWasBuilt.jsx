import { forwardRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import howItWasBuiltData from "../../data/howItWasBuilt/howItWasBuiltData";
import BuildGallery from "./BuildGallery";
import StoryClosing from "./StoryClosing";
import StoryHeader from "./StoryHeader";
import StoryHero from "./StoryHero";

const HowItWasBuilt = forwardRef(function HowItWasBuilt(
    { isActive, onReturn, returnButtonRef },
    scrollContainerRef,
) {
    const prefersReducedMotion = useReducedMotion();
    const [activeLanguage, setActiveLanguage] = useState("en");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { page, chapters } = howItWasBuiltData;

    return (
        <section
            className={`build-story${isActive ? " is-active" : ""}`}
            aria-labelledby="build-title"
            ref={scrollContainerRef}
        >
            <div className="build-story__ambient" aria-hidden="true" />

            <StoryHeader
                activeLanguage={activeLanguage}
                onLanguageChange={setActiveLanguage}
                onReturn={onReturn}
                portfolioLabel={page.portfolioLabel}
                returnButtonRef={returnButtonRef}
            />

            <StoryHero
                prefersReducedMotion={prefersReducedMotion}
                subtitle={page.subtitle}
                title={page.title}
            />

            <BuildGallery
                key={
                    isActive ? "build-gallery-active" : "build-gallery-inactive"
                }
                activeLanguage={activeLanguage}
                chapters={chapters}
                isActive={isActive}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
            />

            <StoryClosing prefersReducedMotion={prefersReducedMotion} />
        </section>
    );
});

export default HowItWasBuilt;
