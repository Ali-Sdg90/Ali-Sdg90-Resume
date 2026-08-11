import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import lightbulbHintIcon from "../../assets/images/ui/shelf-hint-lightbulb.png";

const SHELF_HINT_DELAY_MS = 4_000;

const ShelfInteractionHint = ({ hasInteracted }) => {
    const [hasDelayElapsed, setHasDelayElapsed] = useState(false);

    useEffect(() => {
        if (hasInteracted) return undefined;

        const showTimer = window.setTimeout(
            () => setHasDelayElapsed(true),
            SHELF_HINT_DELAY_MS,
        );

        return () => window.clearTimeout(showTimer);
    }, [hasInteracted]);

    const shouldShow = hasDelayElapsed && !hasInteracted;

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.p
                    className="shelf-interaction-hint"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <img
                        className="shelf-interaction-hint__icon"
                        src={lightbulbHintIcon}
                        alt=""
                        width="128"
                        height="128"
                        aria-hidden="true"
                    />
                    <span>Select a shelf card to explore its details</span>
                </motion.p>
            )}
        </AnimatePresence>
    );
};

export default ShelfInteractionHint;
