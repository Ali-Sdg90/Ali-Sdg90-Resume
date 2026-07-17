import { motion } from "framer-motion";

import emojiSignature from "../../assets/images/global/emoji-signature.webp";
import { REVEAL_TRANSITION } from "./motionConfig";
import useLotusEasterEgg from "./useLotusEasterEgg";

const StoryClosing = ({ prefersReducedMotion }) => {
    const { animation, handleClick } = useLotusEasterEgg(prefersReducedMotion);

    return (
        <>
            <motion.div
                className="build-story__closing"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={REVEAL_TRANSITION}
            >
                <motion.p
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ ...REVEAL_TRANSITION, delay: 0.1 }}
                >
                    That’s how it came together. Thanks for joining me on <br />{" "}
                    this journey and checking out my work.
                </motion.p>

                <motion.button
                    className="build-story__signature"
                    type="button"
                    aria-label="Open a small surprise"
                    onClick={handleClick}
                    animate={animation}
                    style={{ transformOrigin: "50% 50%" }}
                    initial={
                        prefersReducedMotion
                            ? false
                            : { opacity: 0, scale: 0.72 }
                    }
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.22,
                        ease: [0.34, 1.56, 0.64, 1],
                    }}
                >
                    <img src={emojiSignature} alt="" draggable="false" />
                </motion.button>
            </motion.div>

            <motion.footer
                className="build-story__footer"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span>Designed &amp; Developed with ❤️ by Ali Sadeghi</span>
                <span>© 2026 Ali Sadeghi. All rights reserved.</span>
            </motion.footer>
        </>
    );
};

export default StoryClosing;
