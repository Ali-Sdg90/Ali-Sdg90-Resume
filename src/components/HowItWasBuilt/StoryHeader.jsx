import { FaArrowLeftLong } from "react-icons/fa6";

const LANGUAGES = [
    ["en", "EN"],
    ["fa", "FA"],
];

const StoryHeader = ({
    activeLanguage,
    onLanguageChange,
    onReturn,
    portfolioLabel,
    returnButtonRef,
}) => (
    <header className="build-story__nav">
        <button
            className="build-story__return"
            type="button"
            ref={returnButtonRef}
            onClick={onReturn}
        >
            <FaArrowLeftLong aria-hidden="true" />
            <span>{portfolioLabel}</span>
        </button>

        <div className="build-story__language-control">
            <span>Image info</span>
            <div
                className="build-story__language-toggle"
                aria-label="Change image information language"
                role="group"
            >
                {LANGUAGES.map(([language, label]) => (
                    <button
                        className={
                            activeLanguage === language ? "is-active" : ""
                        }
                        type="button"
                        aria-pressed={activeLanguage === language}
                        key={language}
                        onClick={() => onLanguageChange(language)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    </header>
);

export default StoryHeader;
