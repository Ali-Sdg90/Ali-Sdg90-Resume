export const trackUmamiEvent = (eventName, eventData) => {
    if (typeof window === "undefined") return false;

    const track = window.umami?.track;

    if (typeof track !== "function") return false;

    try {
        window.umami.track(eventName, eventData);
    } catch {
        return false;
    }

    return true;
};
