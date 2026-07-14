import {
    CONSTRUCTION_NOTICE_COOKIE_DURATION_MINUTES,
    CONSTRUCTION_NOTICE_COOKIE_NAME,
} from "./constants";

export const hasConstructionNoticeCookie = () =>
    document.cookie.split("; ").some((cookie) => {
        const separatorIndex = cookie.indexOf("=");
        const name =
            separatorIndex === -1 ? cookie : cookie.slice(0, separatorIndex);

        return decodeURIComponent(name) === CONSTRUCTION_NOTICE_COOKIE_NAME;
    });

export const setConstructionNoticeCookie = () => {
    const maxAgeInSeconds = CONSTRUCTION_NOTICE_COOKIE_DURATION_MINUTES * 60;
    const secureAttribute =
        window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `${encodeURIComponent(CONSTRUCTION_NOTICE_COOKIE_NAME)}=true; Max-Age=${maxAgeInSeconds}; Path=/; SameSite=Lax${secureAttribute}`;
};
