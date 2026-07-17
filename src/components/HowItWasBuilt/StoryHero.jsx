import { motion } from "framer-motion";

import { REVEAL_TRANSITION } from "./motionConfig";

const StoryHero = ({ prefersReducedMotion, subtitle, title }) => (
    <motion.div
        className="build-story__hero"
        initial="hidden"
        animate="visible"
        variants={{
            hidden: {},
            visible: {
                transition: { staggerChildren: 0.14, delayChildren: 0.1 },
            },
        }}
    >
        <motion.h1
            id="build-title"
            variants={{
                hidden: prefersReducedMotion
                    ? {}
                    : { opacity: 0, y: 44, scale: 0.975 },
                visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={REVEAL_TRANSITION}
        >
            {title}
        </motion.h1>
        <motion.p
            className="build-story__subtitle"
            variants={{
                hidden: prefersReducedMotion ? {} : { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={REVEAL_TRANSITION}
        >
            {subtitle}
        </motion.p>
    </motion.div>
);

export default StoryHero;
