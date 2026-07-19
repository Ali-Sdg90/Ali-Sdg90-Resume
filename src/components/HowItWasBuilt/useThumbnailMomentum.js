import { useCallback, useEffect, useRef } from "react";

const DRAG_THRESHOLD = 5;
const MOMENTUM_FRICTION = 0.94;
const MIN_VELOCITY = 8;

const useThumbnailMomentum = () => {
    const railRef = useRef(null);
    const dragRef = useRef(null);
    const momentumFrameRef = useRef(null);
    const suppressClickRef = useRef(false);

    const stopMomentum = useCallback(() => {
        if (momentumFrameRef.current) {
            cancelAnimationFrame(momentumFrameRef.current);
            momentumFrameRef.current = null;
        }
    }, []);

    const startMomentum = useCallback((velocity) => {
        const rail = railRef.current;
        if (!rail || Math.abs(velocity) < MIN_VELOCITY) return;

        let currentVelocity = velocity;
        let previousTime = performance.now();

        const step = (currentTime) => {
            const elapsed = Math.min(
                (currentTime - previousTime) / 1000,
                0.032,
            );
            previousTime = currentTime;
            rail.scrollLeft += currentVelocity * elapsed;
            currentVelocity *= MOMENTUM_FRICTION;

            if (Math.abs(currentVelocity) >= MIN_VELOCITY) {
                momentumFrameRef.current = requestAnimationFrame(step);
                return;
            }

            momentumFrameRef.current = null;
        };

        momentumFrameRef.current = requestAnimationFrame(step);
    }, []);

    const handlePointerDown = useCallback(
        (event) => {
            if (event.button !== 0) return;

            stopMomentum();
            dragRef.current = {
                hasDragged: false,
                lastTime: performance.now(),
                lastX: event.clientX,
                pointerId: event.pointerId,
                startScrollLeft: event.currentTarget.scrollLeft,
                startX: event.clientX,
                velocity: 0,
            };
        },
        [stopMomentum],
    );

    const handlePointerMove = useCallback((event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;

        const distance = event.clientX - drag.startX;
        if (!drag.hasDragged && Math.abs(distance) < DRAG_THRESHOLD) return;

        if (!drag.hasDragged) {
            drag.hasDragged = true;
            event.currentTarget.setPointerCapture(event.pointerId);
        }

        const now = performance.now();
        const elapsed = Math.max((now - drag.lastTime) / 1000, 0.008);
        const frameDistance = event.clientX - drag.lastX;
        const instantVelocity = -frameDistance / elapsed;

        event.currentTarget.scrollLeft = drag.startScrollLeft - distance;
        drag.velocity = drag.velocity * 0.72 + instantVelocity * 0.28;
        drag.lastTime = now;
        drag.lastX = event.clientX;
        event.preventDefault();
    }, []);

    const handlePointerEnd = useCallback(
        (event) => {
            const drag = dragRef.current;
            if (!drag || drag.pointerId !== event.pointerId) return;

            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                event.currentTarget.releasePointerCapture(event.pointerId);
            }

            if (drag.hasDragged) {
                suppressClickRef.current = true;
                startMomentum(drag.velocity);
                requestAnimationFrame(() => {
                    suppressClickRef.current = false;
                });
            }

            dragRef.current = null;
        },
        [startMomentum],
    );

    useEffect(() => stopMomentum, [stopMomentum]);

    return {
        railRef,
        suppressClickRef,
        handlePointerDown,
        handlePointerMove,
        handlePointerEnd,
        stopMomentum,
    };
};

export default useThumbnailMomentum;
