import { motion, useReducedMotion } from "framer-motion";

import LightboxImage from "../ui/LightboxImage";

const ShowcaseRow = ({ activeLanguage, chapter, index }) => {
    const prefersReducedMotion = useReducedMotion();
    const isReversed = index % 2 === 1;
    const offset = isReversed ? 56 : -56;
    const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
    const copy = chapter.translations[activeLanguage];
    const isFarsi = activeLanguage === "fa";

    return (
        <article
            className={`build-showcase-row${isReversed ? " is-reversed" : ""}`}
            id={chapter.id}
            style={{ "--chapter-accent": chapter.accent }}
        >
            <motion.div
                className="build-showcase-row__visual"
                initial={
                    prefersReducedMotion ? false : { opacity: 0, x: offset }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={transition}
            >
                <LightboxImage
                    image={chapter.image}
                    buttonClassName="build-showcase-row__image-frame"
                >
                    <span
                        className="build-showcase-row__image-glow"
                        aria-hidden="true"
                    />
                    <img
                        src={chapter.image.src}
                        alt={chapter.image.alt}
                        loading="lazy"
                        decoding="async"
                    />
                </LightboxImage>
            </motion.div>

            <motion.div
                className={`build-showcase-row__copy${isFarsi ? " is-farsi" : ""}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ ...transition, delay: 0.1 }}
            >
                <p className="build-showcase-row__eyebrow" dir="ltr">
                    {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                    className={isFarsi ? "is-farsi-text" : ""}
                    dir={isFarsi ? "rtl" : "ltr"}
                >
                    {copy.title}
                </h2>
                <p
                    className={`build-showcase-row__description${isFarsi ? " is-farsi-text" : ""}`}
                    dir={isFarsi ? "rtl" : "ltr"}
                >
                    {copy.description}
                </p>
            </motion.div>
        </article>
    );
};

export default ShowcaseRow;
