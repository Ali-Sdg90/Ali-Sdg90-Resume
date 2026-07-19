import { useRef } from "react";
import { useAnimation } from "framer-motion";

import { APPLE_EASE } from "./motionConfig";

const CLICK_WINDOW_MS = 1000;
const REQUIRED_CLICKS = 5;
const EASTER_EGG_URL = "https://also-ali-sdg90.github.io/ICARUS/";

const useLotusEasterEgg = (prefersReducedMotion) => {
    const animation = useAnimation();
    const clicksRef = useRef([]);

    const handleClick = () => {
        if (!prefersReducedMotion) {
            animation.start({
                scale: [1, 1.018, 1],
                y: [0, -2, 0],
                transition: {
                    duration: 0.72,
                    times: [0, 0.36, 1],
                    ease: APPLE_EASE,
                },
            });
        }

        const now = Date.now();
        clicksRef.current = [...clicksRef.current, now].filter(
            (clickedAt) => now - clickedAt <= CLICK_WINDOW_MS,
        );

        if (clicksRef.current.length >= REQUIRED_CLICKS) {
            clicksRef.current = [];
            window.open(EASTER_EGG_URL, "_blank", "noopener,noreferrer");
        }
    };

    return { animation, handleClick };
};

export default useLotusEasterEgg;
