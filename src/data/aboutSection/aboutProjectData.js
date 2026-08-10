import { projectGalleryImages } from "./projectGalleryData";

export const aboutProjectData = {
    "alis-portfolio": {
        id: "alis-portfolio",
        title: "Ali's Portfolio",
        subtitle: "Interactive portfolio with a shelf-based experience",
        year: "2026",
        // icon: "/images/projects/portfolio-icon.png",
        // image: "/images/projects/portfolio-image.png",
        summary:
            "An interactive, shelf-inspired portfolio presenting projects, skills, career milestones, and a bilingual build journal in a focused 3D experience.",
        links: [
            { label: "Live Version", url: "https://ali-sdg90.github.io" },
            {
                label: "GitHub Repo",
                url: "https://github.com/Ali-Sdg90/ali-sdg90.github.io",
            },
        ],
        tech: ["React 19", "Vite 8", "SCSS", "Framer Motion", "GitHub Pages"],
        features: [
            "Custom shelf navigation with drag momentum, friction, and infinite scrolling",
            "Reusable data system for projects, skills, career history, and impact metrics",
            "Project panels with image galleries, lightboxes, external links, and bilingual stories",
            "A 26-chapter build journal with keyboard and reduced-motion support",
        ],
        galleryImages: projectGalleryImages["alis-portfolio"],
        storyEN: "placeholder: see the bottom-right corner of the page",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Engineering",
                text: "CI/CD, PR previews, semantic releases, and GitHub Pages deployment",
                url: "https://github.com/Ali-Sdg90/ali-sdg90.github.io/blob/main/.github/workflows/ci.yml",
            },
            {
                label: "Release History",
                text: "Versioned changelog generated from the release workflow",
                url: "https://github.com/Ali-Sdg90/ali-sdg90.github.io/blob/main/CHANGELOG.md",
            },
        ],
    },
    "mlk-dvr-receiver": {
        id: "mlk-dvr-receiver",
        title: "MLK DVR Receiver",
        subtitle: "Automated Divar SMS forwarding via app and bot",
        year: "2026",
        summary:
            "An Android-to-Telegram delivery system that captures Divar verification SMS messages and routes each code privately through a secure Node.js backend.",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/Ali-Sdg90/mlk-dvr-receiver",
            },
        ],
        tech: [
            "Kotlin",
            "Android SDK",
            "Node.js",
            "Express",
            "Telegram Bot API",
        ],
        features: [
            "Keeps Telegram credentials off the Android app and sends codes only in private chats",
            "Matches each SMS to one active requester and blocks unclear dual-SIM requests",
            "Saves pending codes, retries failed deliveries, recovers recent messages, and prevents duplicates",
            "Separate development and production modes with signed requests, audit logs, health checks, and tests",
        ],
        galleryImages: projectGalleryImages["mlk-dvr-receiver"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Telegram",
                text: "Open the MLK DVR SMS bot",
                url: "https://t.me/mlk_dvr_sms_bot",
            },
            {
                label: "Deployment",
                text: "Container deployment, operations, persistence, and security guide",
                url: "https://github.com/Ali-Sdg90/mlk-dvr-receiver/blob/main/backend/DEPLOYMENT.md",
            },
            {
                label: "Quality",
                text: "Android delivery and SMS recovery test suite",
                url: "https://github.com/Ali-Sdg90/mlk-dvr-receiver/tree/main/app/src/test",
            },
            {
                label: "Quality",
                text: "Backend integration tests with a mocked Telegram client",
                url: "https://github.com/Ali-Sdg90/mlk-dvr-receiver/tree/main/backend/test",
            },
        ],
    },
    "spot-taste-tracker": {
        id: "spot-taste-tracker",
        title: "Spot Taste Tracker",
        subtitle: "Dashboard for analyzing Spotify taste over time",
        year: "2026",
        summary:
            "A browser-based dashboard for exploring how a Spotify collection changes across listening order, mood, genres, artists, and audio features.",
        links: [
            {
                label: "Live Version",
                url: "https://ali-sdg90.github.io/Spotify-Taste-Timeline",
            },
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/Spotify-Taste-Timeline",
            },
        ],
        tech: [
            "React",
            "Vite",
            "JavaScript",
            "SCSS",
            "ApexCharts",
            "PapaParse",
        ],
        features: [
            "Analyzes playlist CSV files inside the browser without uploading personal data",
            "Shows music changes over time with two timelines and moving averages for 11 audio features",
            "Compares mood, artists, genres, release age, explicit content, Camelot data, and outliers",
            "Creates an AI-ready report from summary data instead of the full listening history",
        ],
        galleryImages: projectGalleryImages["spot-taste-tracker"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "CSV Tool",
                text: "Chosic Spotify Playlist Analyzer",
                url: "https://www.chosic.com/spotify-playlist-analyzer/",
            },
            {
                label: "Deployment",
                text: "Automated GitHub Pages build and deployment workflow",
                url: "https://github.com/Ali-Sdg90/Spotify-Taste-Timeline/blob/main/.github/workflows/deploy-pages.yml",
            },
        ],
    },
    "fabrexa-ai-ollama": {
        id: "fabrexa-ai-ollama",
        title: "Fabrexa AI Ollama",
        subtitle: "Local Telegram AI chatbot powered by Ollama",
        year: "2026",
        summary:
            "A self-hosted Telegram chatbot that runs local Ollama models with configurable personalities, persistent memory, and streaming responses.",
        links: [
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/Fabrexa-AI-Ollama",
            },
            {
                label: "Telegram Bot",
                url: "https://t.me/FabrexaAIBot",
            },
        ],
        tech: ["Node.js", "Telegraf", "Ollama", "node-cron", "Axios"],
        features: [
            "Runs AI locally with Ollama, with no cloud model costs",
            "Supports reusable personalities and saves each user's selected persona",
            "Keeps short- and long-term memory and summarizes older conversations automatically",
            "Streams replies in Telegram and supports private or public access",
        ],
        galleryImages: projectGalleryImages["fabrexa-ai-ollama"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Architecture",
                text: "System design, message pipeline, memory model, and module reference",
                url: "https://github.com/Ali-Sdg90/Fabrexa-AI-Ollama/blob/main/docs/ARCHITECTURE.md",
            },
            {
                label: "Documentation",
                text: "Detailed guide to personalities, memory, streaming, and model controls",
                url: "https://github.com/Ali-Sdg90/Fabrexa-AI-Ollama/blob/main/docs/FEATURES.md",
            },
            {
                label: "Setup",
                text: "Quick-start guide for running the bot with a local Ollama model",
                url: "https://github.com/Ali-Sdg90/Fabrexa-AI-Ollama/blob/main/QUICK_START.md",
            },
        ],
    },
    "restook-admin": {
        id: "restook-admin",
        title: "Restook Admin",
        subtitle: "Production admin panel for platform management",
        year: "20XX",
        summary: "Placeholder",
        links: [
            {
                label: "Live Version",
                url: "https://admin.restook.atlon.ir/#/login",
            },
        ],
        tech: ["Placeholder"],
        features: ["Placeholder"],
        galleryImages: projectGalleryImages["restook-admin"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            { label: "Placeholder", text: "Placeholder", url: "" },
            { label: "Placeholder", text: "Placeholder", url: "" },
            { label: "Placeholder", text: "Placeholder", url: "" },
            { label: "Placeholder", text: "Placeholder", url: "" },
        ],
    },
    "settleitgpt-project": {
        id: "settleitgpt-project",
        title: "SettleitGPT",
        subtitle: "iOS app with AI personas and voice generation",
        year: "20XX",
        summary: "Placeholder",
        links: [
            {
                label: "Lunch Post",
                url: "https://www.linkedin.com/posts/ali-sdg90_settleitgpt-share-7374421474943700993-_H3R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiHtIwB6ffMAWL0iNc5fSdSRqvEYI6Q2IA",
            },
        ],
        tech: ["Placeholder"],
        features: ["Placeholder"],
        galleryImages: projectGalleryImages["settleitgpt-project"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            { label: "Placeholder", text: "Placeholder", url: "" },
            { label: "Placeholder", text: "Placeholder", url: "" },
            { label: "Placeholder", text: "Placeholder", url: "" },
            { label: "Placeholder", text: "Placeholder", url: "" },
        ],
    },
    "cs-queue-calendar": {
        id: "cs-queue-calendar",
        title: "CS Queue Calendar",
        subtitle: "Live calendar for CS Internship session planning",
        year: "2025",
        summary:
            "A responsive calendar for managing CS Internship queue meetings, announcements, and events in both Persian and Gregorian date systems.",
        links: [
            {
                label: "Live Version",
                url: "https://cs-internship.github.io/CS-Queue-Calendar",
            },
            {
                label: "Github Repo",
                url: "https://github.com/cs-internship/CS-Queue-Calendar",
            },
        ],
        tech: ["React", "Ant Design", "Sass", "Day.js", "Jalali Moment"],
        features: [
            "Shows Jalali and Gregorian dates together in one weekly calendar",
            "Creates ready-to-share weekly announcements for queue admins",
            "Adds full event details to Google Calendar with one click",
            "Uses automated tests, coverage reports, releases, deployment, and Telegram build alerts",
        ],
        galleryImages: projectGalleryImages["cs-queue-calendar"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Engineering",
                text: "Test, coverage, semantic release, deployment, and notification pipeline",
                url: "https://github.com/cs-internship/CS-Queue-Calendar/blob/main/.github/workflows/ci.yml",
            },
            {
                label: "Release History",
                text: "Versioned project changelog",
                url: "https://github.com/cs-internship/CS-Queue-Calendar/blob/main/CHANGELOG.md",
            },
            {
                label: "CS Internship",
                text: "Live Telegram queue group",
                url: "https://t.me/+5PuhQ2hDIy1lNWRi",
            },
        ],
    },
    "cs-club-bot": {
        id: "cs-club-bot",
        title: "CS Club Bot",
        subtitle: "Live Telegram bot for AI-assisted workflows",
        year: "2025",
        summary:
            "An automated Telegram bot for managing CS internship club registration, feedback, messaging, and AI-assisted group workflows.",
        links: [
            { label: "Telegram Bot", url: "https://t.me/CSIClubBot" },
            {
                label: "Github Repo",
                url: "https://github.com/cs-internship/CS-Club-Bot",
            },
        ],
        tech: [
            "Node.js",
            "Telegraf",
            "Express",
            "Notion API",
            "Perplexity AI",
            "CryptoJS",
        ],
        features: [
            "Uses Notion for registration, roles, and ban checks",
            "Creates encrypted feedback links for technical and mentorship sessions",
            "Uses Perplexity AI to analyze selected group discussions and format long Telegram replies",
            "Runs linting and Jest coverage before automatic releases and Render deployment",
        ],
        galleryImages: projectGalleryImages["cs-club-bot"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Engineering",
                text: "CI/CD pipeline for tests, coverage, releases, Render deployment, and Telegram alerts",
                url: "https://github.com/cs-internship/CS-Club-Bot/blob/main/.github/workflows/ci.yml",
            },
            {
                label: "Operations",
                text: "Scheduled Render service health and uptime workflow",
                url: "https://github.com/cs-internship/CS-Club-Bot/blob/main/.github/workflows/ping-render.yml",
            },
            {
                label: "Quality",
                text: "Extensive Jest suite covering handlers, integrations, validation, and utilities",
                url: "https://github.com/cs-internship/CS-Club-Bot/tree/main/__tests__",
            },
            {
                label: "Release History",
                text: "Versioned project changelog",
                url: "https://github.com/cs-internship/CS-Club-Bot/blob/main/CHANGELOG.md",
            },
        ],
    },
    "cs-queue-bot": {
        id: "cs-queue-bot",
        title: "CS Queue Bot",
        subtitle: "Live Telegram bot for queue management",
        year: "2025",
        summary:
            "An automated Telegram bot for managing CS Internship queue onboarding, moderation, admin tasks, and Azure DevOps candidate tracking.",
        links: [
            { label: "Telegram Bot", url: "https://t.me/CSQueueBot" },
            {
                label: "Github Repo",
                url: "https://github.com/cs-internship/CS-Queue-Bot",
            },
        ],
        tech: [
            "Node.js",
            "Telegraf",
            "Express",
            "Axios",
            "Azure DevOps REST API",
        ],
        features: [
            "Checks Telegram usernames and guides new members through onboarding",
            "Detects message spam and applies moderation rules automatically",
            "Creates and links Azure DevOps work items from bot commands",
            "Supports scheduled messages, health checks, tests, releases, and automatic Render deployment",
        ],
        galleryImages: projectGalleryImages["cs-queue-bot"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Engineering",
                text: "Test, coverage, semantic release, Render deployment, and Telegram alert pipeline",
                url: "https://github.com/cs-internship/CS-Queue-Bot/blob/main/.github/workflows/ci.yml",
            },
            {
                label: "Quality",
                text: "Jest suite covering onboarding, moderation, scheduling, Azure integration, and server health",
                url: "https://github.com/cs-internship/CS-Queue-Bot/tree/main/__tests__",
            },
            {
                label: "Release History",
                text: "Versioned project changelog",
                url: "https://github.com/cs-internship/CS-Queue-Bot/blob/main/CHANGELOG.md",
            },
        ],
    },
    "dice-distribution": {
        id: "dice-distribution",
        title: "Dice Distribution",
        subtitle: "Configurable dice probability simulator",
        year: "2023",
        summary:
            "A configurable dice simulator that visualizes accumulated roll totals as an animated distribution chart.",
        links: [
            {
                label: "Live Version",
                url: "https://ali-sdg90.github.io/React-Dice-Distribution",
            },
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/React-Dice-Distribution",
            },
        ],
        tech: ["React", "ApexCharts", "CSS"],
        features: [
            "Lets users choose 2 to 30 dice, roll speed, batch size, and continuous mode",
            "Builds an animated chart that shows the results moving toward a bell curve",
            "Supports chart zoom and SVG, PNG, or CSV export",
        ],
        galleryImages: [],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: false,
        relatedLinks: [],
    },
    "rps-battle-royale": {
        id: "rps-battle-royale",
        title: "RPS Battle Royale",
        subtitle: "Rock-paper-scissors battle royale simulator",
        year: "2026",
        summary:
            "A real-time rock-paper-scissors battle simulator where animated entities move, collide, and compete for dominance.",
        links: [
            {
                label: "Live Version",
                url: "http://ali-sdg.is-a.dev/rps-battle-royale",
            },
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/rps-battle-royale",
            },
        ],
        tech: ["React 18", "SCSS", "Context API", "Create React App"],
        features: [
            "Runs battles when moving rock, paper, and scissors entities meet",
            "Uses velocity and collision logic to create unscripted battles",
            "Lets users change population, speed, and detection range while viewing live scores",
            "Keeps hundreds of entities synchronized on different screen sizes",
        ],
        galleryImages: [],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Demo",
                text: "GitHub Pages version",
                url: "https://ali-sdg90.github.io/PSS-Project/",
            },
        ],
    },
    "gradient-paint": {
        id: "gradient-paint",
        title: "Gradient Paint",
        subtitle: "Customizable interactive gradient painting canvas",
        year: "2023",
        summary:
            "An interactive grid canvas for painting customizable color gradients through click or drag gestures.",
        links: [
            {
                label: "Live Version",
                url: "https://ali-sdg90.github.io/Custom-Gradient-Paint",
            },
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/Custom-Gradient-Paint",
            },
        ],
        tech: ["HTML", "JavaScript", "SCSS", "CSS"],
        features: [
            "Spreads fading colors across nearby grid cells from each selected point",
            "Lets users change grid size, colors, spread distance, borders, and cell numbers",
            "Supports both click painting and continuous drag painting",
        ],
        galleryImages: [],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Process",
                text: "Development time-lapse",
                url: "https://youtu.be/jG_HB7bDDH0",
            },
        ],
    },
    "quick-math": {
        id: "quick-math",
        title: "Quick Math",
        subtitle: "Timed math game with a rotating cube interface",
        year: "2023",
        summary:
            "A timed arithmetic game that presents three questions through a rotating cube interface with configurable difficulty aids.",
        links: [
            {
                label: "Live Version",
                url: "https://ali-sdg90.github.io/Quick-Math",
            },
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/Quick-Math",
            },
        ],
        tech: ["HTML", "JavaScript", "SCSS", "CSS"],
        features: [
            "Uses three-question rounds with lives, question timers, and total time tracking",
            "Shows each question on a different side of a rotating cube",
            "Saves answer hints, color themes, and ready-screen settings in local storage",
        ],
        galleryImages: [],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: false,
        relatedLinks: [],
    },
    "tic-tac-toe": {
        id: "tic-tac-toe",
        title: "Tic Tac Toe",
        subtitle: "Customizable game with multiple play modes",
        year: "2022",
        summary:
            "A customizable Tic-Tac-Toe game with local multiplayer, computer opponents, persistent settings, and unlockable challenges.",
        links: [
            {
                label: "Live Version",
                url: "https://ali-sdg90.github.io/Tic-Tac-Toe",
            },
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/Tic-Tac-Toe",
            },
        ],
        tech: ["HTML", "JavaScript", "CSS"],
        features: [
            "Includes classic, computer, local two-player, and rule-breaking unbeatable modes",
            "Adds challenges that keep progress between game sessions",
            "Saves game settings and changes the background after every move",
        ],
        galleryImages: [],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Process",
                text: "Development time-lapse",
                url: "https://youtu.be/s278dOASbqg",
            },
        ],
    },
    "path-finder": {
        id: "path-finder",
        title: "Path Finder",
        subtitle: "Customizable animated pathfinding sandbox",
        year: "2025",
        summary:
            "An interactive pathfinding sandbox that uses weighted randomness to fill a grid while favoring configurable movement directions.",
        links: [
            {
                label: "Live Version",
                url: "https://ali-sdg90.github.io/Path-Finder",
            },
            {
                label: "Github Repo",
                url: "https://github.com/Ali-Sdg90/Path-Finder",
            },
        ],
        tech: ["React", "Ant Design", "Sass", "CryptoJS"],
        features: [
            "Uses weighted random movement to favor directions selected by the user",
            "Shows the grid filling step by step instead of only displaying the final result",
            "Lets users change grid size, direction weights, colors, speed, and display options",
            "Works on both desktop and mobile screens",
        ],
        galleryImages: [],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Predecessor",
                text: "Spread Color, the related grid-propagation project",
                url: "https://github.com/Ali-Sdg90/Spread-Color",
            },
        ],
    },
};

export const getAboutProjectById = (projectId) =>
    aboutProjectData[projectId] ?? null;
