const AboutMeContent = ({ direction, language, paragraphs }) => {
    return (
        <div
            className={[
                "about-panel-text",
                language === "FA" ? "is-farsi-text" : "",
            ]
                .filter(Boolean)
                .join(" ")}
            dir={direction}
            lang={language === "FA" ? "fa" : "en"}
        >
            {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    );
};

export default AboutMeContent;
