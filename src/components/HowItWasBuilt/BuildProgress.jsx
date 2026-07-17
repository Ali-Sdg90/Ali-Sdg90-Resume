import { motion, useScroll, useSpring } from "framer-motion";

const BuildProgress = ({ scrollContainerRef, total }) => {
    const { scrollYProgress } = useScroll({
        container: scrollContainerRef,
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 28,
        restDelta: 0.001,
    });

    return (
        <div className="build-progress" aria-hidden="true">
            <span className="build-progress__label">Process</span>
            <span className="build-progress__track">
                <motion.span
                    className="build-progress__fill"
                    style={{ scaleY }}
                />
            </span>
            <span className="build-progress__number">
                {String(total).padStart(2, "0")}
            </span>
        </div>
    );
};

export default BuildProgress;
