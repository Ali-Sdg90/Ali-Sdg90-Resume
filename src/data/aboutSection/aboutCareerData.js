export const aboutCareerData = {
    "cs-internship": {
        id: "cs-internship",
        title: "CS Internship",
        subtitle: "Placeholder",
        summary: "Placeholder",
        tech: ["Placeholder"],
        featuresTitle: "Focus Areas",
        features: ["Placeholder"],
        storyTitle: "Story",
        story: "Placeholder",
    },
    melkradar: {
        id: "melkradar",
        title: "MelkRadar",
        subtitle: "Placeholder",
        summary: "Placeholder",
        tech: ["Placeholder"],
        featuresTitle: "Focus Areas",
        features: ["Placeholder"],
        storyTitle: "Story",
        story: "Placeholder",
    },
    "dadeh-pardazi-azmoudeh-karan": {
        id: "dadeh-pardazi-azmoudeh-karan",
        title: "Dadeh Pardazi Azmoudeh Karan",
        subtitle: "Placeholder",
        summary: "Placeholder",
        tech: ["Placeholder"],
        featuresTitle: "Focus Areas",
        features: ["Placeholder"],
        storyTitle: "Story",
        story: "Placeholder",
    },
    settleitgpt: {
        id: "settleitgpt",
        title: "SettleitGPT",
        subtitle: "Placeholder",
        summary: "Placeholder",
        tech: ["Placeholder"],
        featuresTitle: "Focus Areas",
        features: ["Placeholder"],
        storyTitle: "Story",
        story: "Placeholder",
    },
};

export const getAboutCareerById = (careerId) =>
    aboutCareerData[careerId] ?? null;
