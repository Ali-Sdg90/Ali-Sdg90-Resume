import { HiArrowUpRight } from "react-icons/hi2";

import { version as appVersion } from "../../../package.json";
import {
    PROJECT_REPOSITORY_URL,
    SHOW_UNDER_CONSTRUCTION_BADGE,
} from "./constants";
import "./under-construction-badge.scss";

const UnderConstructionBadge = () => {
    if (!SHOW_UNDER_CONSTRUCTION_BADGE) return null;

    return (
        <div
            className="construction-badge"
            tabIndex={0}
            aria-label="Show project construction status"
        >
            <span className="construction-badge__tape" aria-hidden="true">
                <span>Work in progress</span>
            </span>

            <span className="construction-badge__hanger" aria-hidden="true" />

            <a
                className="construction-badge__card"
                href={PROJECT_REPOSITORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Project is under construction, version ${appVersion}. View the project repository on GitHub.`}
            >
                <span className="construction-badge__title">
                    <span aria-hidden="true" />
                    Project is under construction
                </span>

                <span className="construction-badge__meta">
                    <span className="construction-badge__version">
                        v{appVersion}
                    </span>
                    <span
                        className="construction-badge__repository"
                        aria-hidden="true"
                    >
                        View source
                        <HiArrowUpRight />
                    </span>
                </span>
            </a>
        </div>
    );
};

export default UnderConstructionBadge;
