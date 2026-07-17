import { useId, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    FaArrowUpRightFromSquare,
    FaCheck,
    FaChevronDown,
    FaGithub,
    FaImages,
    FaLayerGroup,
    FaListCheck,
    FaLink,
    FaPenNib,
} from "react-icons/fa6";

import LightboxImage from "../../ui/LightboxImage";

const sectionIcons = {
    features: FaListCheck,
    gallery: FaImages,
    story: FaPenNib,
    relatedLinks: FaLink,
};

const ProjectLinks = ({ links = [] }) => {
    const visibleLinks = links.filter((link) => link.label);

    if (!visibleLinks.length) return null;

    return (
        <div className="featured-project-links" aria-label="Project links">
            {visibleLinks.map((link) => {
                const Icon = link.label.toLowerCase().includes("github")
                    ? FaGithub
                    : FaArrowUpRightFromSquare;
                const isDisabled = !link.url;

                if (isDisabled) {
                    return (
                        <button
                            className="featured-project-link is-disabled"
                            key={link.label}
                            type="button"
                            disabled
                        >
                            <Icon aria-hidden="true" />
                            <span>{link.label}</span>
                        </button>
                    );
                }

                return (
                    <a
                        className="featured-project-link"
                        href={link.url}
                        key={link.label}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon aria-hidden="true" />
                        <span>{link.label}</span>
                    </a>
                );
            })}
        </div>
    );
};

// const TechChips = ({ tech = [] }) => {
//     if (!tech.length) return null;

//     return (
//         <ul className="featured-project-tech" aria-label="Tech stack">
//             {tech.map((techItem) => (
//                 <li key={techItem}>{techItem}</li>
//             ))}
//         </ul>
//     );
// };

const DetailSectionTitle = ({ children, type }) => {
    const Icon = sectionIcons[type] ?? FaLayerGroup;

    return (
        <h3 className="featured-project-section-title">
            <Icon aria-hidden="true" />
            <span>{children}</span>
        </h3>
    );
};

const FeaturesCard = ({ features = [], title = "Features" }) => {
    if (!features.length) return null;

    return (
        <section className="featured-project-card">
            <DetailSectionTitle type="features">{title}</DetailSectionTitle>
            <ul className="featured-project-features">
                {features.map((feature) => (
                    <li key={feature}>
                        <span className="featured-project-feature-icon">
                            <FaCheck aria-hidden="true" />
                        </span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

const DetailGallery = ({ columns = 3, images = [], title }) => {
    if (!images.length) return null;

    const galleryColumns = Math.min(3, Math.max(1, columns));

    return (
        <section className="featured-project-section">
            <DetailSectionTitle type="gallery">Gallery</DetailSectionTitle>
            <div
                className="featured-project-gallery"
                style={{ "--gallery-columns": galleryColumns }}
            >
                {images.map((image, imageIndex) => {
                    const galleryImage =
                        typeof image === "string" ? { src: image } : image;

                    return (
                        <LightboxImage
                            image={{
                                ...galleryImage,
                                alt:
                                    galleryImage.alt ??
                                    `${title} gallery ${imageIndex + 1}`,
                            }}
                            key={galleryImage.src}
                            buttonClassName="featured-project-gallery-button"
                            fallbackClassName="featured-project-gallery-image featured-project-gallery-image-fallback"
                            imageClassName="featured-project-gallery-image"
                            imageProps={{
                                loading: "lazy",
                                decoding: "async",
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const ProjectStory = ({
    activeLanguage,
    languageToggle,
    storyEN,
    storyFA,
    title = "Story",
    titleFA,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isStoryClamped, setIsStoryClamped] = useState(true);
    const [storyHeights, setStoryHeights] = useState({
        collapsed: 0,
        expanded: 0,
    });
    const storyContentRef = useRef(null);
    const storyId = useId();
    const isFarsi = activeLanguage === "FA" && storyFA;
    const visibleStory = isFarsi ? storyFA : storyEN;
    const visibleTitle = isFarsi ? (titleFA ?? title) : title;
    const paragraphs = visibleStory
        ?.split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

    useLayoutEffect(() => {
        const storyContent = storyContentRef.current;

        if (!storyContent) return undefined;

        const measureStory = () => {
            const firstParagraph = storyContent.querySelector("p");
            const paragraphStyles = firstParagraph
                ? window.getComputedStyle(firstParagraph)
                : null;
            const lineHeight = paragraphStyles
                ? Number.parseFloat(paragraphStyles.lineHeight)
                : 0;

            setStoryHeights({
                collapsed: Math.min(storyContent.scrollHeight, lineHeight * 3),
                expanded: storyContent.scrollHeight,
            });
        };

        measureStory();

        const resizeObserver = new ResizeObserver(measureStory);
        resizeObserver.observe(storyContent);

        return () => resizeObserver.disconnect();
    }, [visibleStory]);

    if (!paragraphs?.length) return null;

    return (
        <section className="featured-project-section">
            <div className="featured-project-story-header">
                <DetailSectionTitle type="story">
                    {visibleTitle}
                </DetailSectionTitle>
                {languageToggle}
            </div>
            <motion.div
                className={[
                    "featured-project-story",
                    isExpanded ? "is-expanded" : "is-collapsed",
                    isFarsi ? "is-farsi-text" : "",
                ]
                    .filter(Boolean)
                    .join(" ")}
                dir={isFarsi ? "rtl" : undefined}
                lang={isFarsi ? "fa" : undefined}
                id={storyId}
                initial={false}
                animate={{
                    height: isExpanded
                        ? storyHeights.expanded
                        : storyHeights.collapsed,
                }}
                transition={{
                    duration: isExpanded ? 1.5 : 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                onAnimationComplete={() => {
                    if (!isExpanded) setIsStoryClamped(true);
                }}
            >
                <div
                    className={[
                        "featured-project-story-content",
                        isStoryClamped ? "is-clamped" : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
                <div
                    className="featured-project-story-measure"
                    aria-hidden="true"
                    ref={storyContentRef}
                >
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>
            <button
                className="featured-project-story-toggle"
                type="button"
                aria-expanded={isExpanded}
                aria-controls={storyId}
                onClick={() => {
                    if (!isExpanded) setIsStoryClamped(false);
                    setIsExpanded((current) => !current);
                }}
            >
                <span>{isExpanded ? "Collapse story" : "Expand story"}</span>
                <FaChevronDown aria-hidden="true" />
            </button>
        </section>
    );
};

const RelatedLinks = ({ links = [] }) => {
    const visibleLinks = links.filter(
        (link) => link.label || link.text || link.url,
    );

    if (!visibleLinks.length) return null;

    return (
        <section className="featured-project-section">
            <DetailSectionTitle type="relatedLinks">
                Related links
            </DetailSectionTitle>
            <ul className="featured-project-related-links">
                {visibleLinks.map((link, index) => {
                    const content = (
                        <>
                            <span className="featured-project-related-link-copy">
                                <span className="featured-project-related-link-label">
                                    {link.label}
                                </span>
                                <span className="featured-project-related-link-text">
                                    {link.text}
                                </span>
                            </span>
                            <FaArrowUpRightFromSquare aria-hidden="true" />
                        </>
                    );

                    return (
                        <li key={`${link.label}-${index}`}>
                            {link.url ? (
                                <a
                                    className="featured-project-related-link"
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={link.text}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div className="featured-project-related-link is-disabled">
                                    {content}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

const FeaturedProjectAbout = ({
    activeLanguage,
    detail,
    item,
    languageToggle,
    section,
}) => {
    if (!detail) {
        return (
            <div className="featured-project-about">
                <p className="featured-project-summary">
                    Project detail content is being prepared for this shelf
                    item.
                </p>
            </div>
        );
    }

    const shouldHideSummary = section?.id === "tech-stack";
    const summary =
        section?.id === "achievements" ? item?.meta : detail.summary;

    return (
        <div className="featured-project-about">
            {!shouldHideSummary && summary && (
                <p className="featured-project-summary">{summary}</p>
            )}
            <ProjectLinks links={detail.links} />
            {/* <TechChips tech={detail.tech} /> */}
            <DetailGallery
                columns={detail.galleryColumns}
                images={detail.galleryImages}
                title={detail.title}
            />
            <FeaturesCard
                features={detail.features}
                title={detail.featuresTitle}
            />
            <ProjectStory
                activeLanguage={activeLanguage}
                languageToggle={languageToggle}
                storyEN={detail.storyEN}
                storyFA={detail.storyFA}
                title={detail.storyTitle}
                titleFA={detail.storyTitleFA}
            />
            {detail.hasRelatedLinks && (
                <RelatedLinks links={detail.relatedLinks} />
            )}
        </div>
    );
};

export default FeaturedProjectAbout;
