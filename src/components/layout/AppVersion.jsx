import { version as appVersion } from "../../../package.json";

export const SHOW_APP_VERSION = false;

const AppVersion = () => {
    if (!SHOW_APP_VERSION) return null;

    return (
        <small className="app-version" aria-label={`Version ${appVersion}`}>
            v {appVersion}
        </small>
    );
};

export default AppVersion;
