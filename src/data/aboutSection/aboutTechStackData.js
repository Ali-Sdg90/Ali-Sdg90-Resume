const createTechDetail = ({ id, title }) => ({
    id,
    title,
    subtitle: "Placeholder",
    summary: "Placeholder",
    tech: ["Placeholder"],
    featuresTitle: "Where It Helps",
    features: ["Placeholder"],
    storyTitle: "Story",
    story: "Placeholder",
});

export const aboutTechStackData = {
    react: createTechDetail({
        id: "react",
        title: "React",
    }),
    javascript: createTechDetail({
        id: "javascript",
        title: "JavaScript",
    }),
    scss: createTechDetail({
        id: "scss",
        title: "SCSS",
    }),
    antDesign: createTechDetail({
        id: "antDesign",
        title: "Ant Design",
    }),
    tanStackQuery: createTechDetail({
        id: "tanStackQuery",
        title: "TanStack Query",
    }),
    restApis: createTechDetail({
        id: "restApis",
        title: "REST APIs",
    }),
    semanticRelease: createTechDetail({
        id: "semanticRelease",
        title: "Semantic Release",
    }),
    prettier: createTechDetail({
        id: "prettier",
        title: "Prettier",
    }),
    eslint: createTechDetail({
        id: "eslint",
        title: "ESLint",
    }),
    vite: createTechDetail({
        id: "vite",
        title: "Vite",
    }),
    expo: createTechDetail({
        id: "expo",
        title: "Expo",
    }),
    reactNative: createTechDetail({
        id: "reactNative",
        title: "React Native",
    }),
    nodejs: createTechDetail({
        id: "nodejs",
        title: "Node.js",
    }),
    githubActions: createTechDetail({
        id: "githubActions",
        title: "GitHub Actions",
    }),
    gitGithub: createTechDetail({
        id: "gitGithub",
        title: "Git/GitHub",
    }),
    firebase: createTechDetail({
        id: "firebase",
        title: "Firebase",
    }),
    chartjs: createTechDetail({
        id: "chartjs",
        title: "Chart.js",
    }),
    githubPages: createTechDetail({
        id: "githubPages",
        title: "GitHub Pages",
    }),
    ollama: createTechDetail({
        id: "ollama",
        title: "Ollama",
    }),
    azureDevops: createTechDetail({
        id: "azureDevops",
        title: "Azure DevOps",
    }),
    reactRouter: createTechDetail({
        id: "reactRouter",
        title: "React Router",
    }),
    axios: createTechDetail({
        id: "axios",
        title: "Axios",
    }),
    swagger: createTechDetail({
        id: "swagger",
        title: "Swagger",
    }),
};

export const getAboutTechStackById = (techId) =>
    aboutTechStackData[techId] ?? null;
