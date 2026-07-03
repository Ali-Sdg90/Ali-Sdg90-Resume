import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const AboutPanelExpandToggle = ({ isExpanded, onToggle }) => {
    const Icon = isExpanded ? FaAnglesRight : FaAnglesLeft;

    return (
        <button
            className="about-panel-expand-toggle"
            type="button"
            aria-label={
                isExpanded ? "Collapse About panel" : "Expand About panel"
            }
            aria-expanded={isExpanded}
            onClick={onToggle}
        >
            <Icon aria-hidden="true" />
        </button>
    );
};

export default AboutPanelExpandToggle;
