import mlkDvrBotLarge from "../../assets/images/large-images/projects/mlk-dvr-bot.png";
import mlkDvrBotThumbnail from "../../assets/images/thumbnails/projects/mlk-dvr-bot.jpg";
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
        subtitle: "Automated and secure Divar verification code delivery",
        year: "2026",
        image: mlkDvrBotThumbnail,
        lightboxImage: mlkDvrBotLarge,
        imageWidth: 1254,
        imageHeight: 1254,
        lightboxWidth: 1254,
        lightboxHeight: 1254,
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
            "Automates the Divar verification code workflow from SMS reception to private Telegram delivery",
            "Matches each verification code to the correct active requester and keeps codes out of group chats",
            "Creates a traceable history of code requests and delivery outcomes for accountability and auditing",
            "Built for reliable unattended operation with background recovery, authenticated backend communication, and automated delivery",
        ],
        galleryImages: projectGalleryImages["mlk-dvr-receiver"],
        storyEN: `Building MLK DVR Receiver was one of the most enjoyable and rewarding programming experiences I have had.

Previously, the process of receiving login codes for Divar accounts was completely manual. When someone needed a code, they would ask in the group who was online. The person who was available would send their phone number in the group, the requester would enter that number on the website, an SMS would be sent to the phone owner, and they would then have to send the code back into the group so the requester could enter it.

The whole process was manual, time-consuming, and inconvenient for everyone involved.

When I saw how the process worked, I felt it could be made much simpler.

I shared my idea in the group and mentioned the CEO and CTO. My proposal was to build a separate app that could be installed on the phones. The app would stay active in the background, detect incoming Divar SMS messages, automatically extract the verification code, and send it to the group through the Telegram API.

After getting initial approval, I built the first version only for my own phone. It was a simple app that stayed active in the background and automatically sent the code to the group whenever a Divar SMS arrived.

Requesters would enter my phone number, and a few moments later they could receive the code directly in the group.

After only one day of using this version and receiving very positive feedback from the requesters, the CEO suggested that the other people in the group install the app as well. Within a short time, around 6 or 7 people had installed it on their phones, and getting login codes had become significantly easier for the requesters.

But this was only the MVP, and it had one important problem: security and traceability.

In the first version, there was no clear record of who had requested a code. The app simply extracted the code from the SMS and sent it into the group. If a problem later happened with one of the accounts, there was no reliable way to determine who had received its login code and at what time.

Because of that, I decided to design a more complete and professional version.

The new version included a backend for managing requests, authentication, and event logging. In about three days, I implemented the first version of this architecture and introduced it in the group for testing.

In the new version, the requester first sent a command such as /code 09901234567 inside the group. The bot recorded who had requested a code for which phone number and created a temporary two-minute request for that number.

If a Divar SMS containing a login code arrived on the phone associated with that number during those two minutes, the app sent the code to the backend. The backend found the active request, and the Telegram bot sent the code privately to the exact person who had requested it. The group only received a message confirming that the code had been received and delivered to the requester.

This meant that login codes were no longer exposed directly inside the group and were only delivered to the person who had an active and valid request.

At the same time, the system created a traceable history of the requests: who requested a code, when they requested it, which phone number the request was for, and whether the code was received successfully. If something later went wrong with an account, the request history could be reviewed.

During the testing phase, the backend ran on my own system for about two days. After we became confident that the system was working properly, we moved it to MelkRadar's servers.

Later, I realized that some Android devices required additional settings and permissions to prevent the operating system from stopping the app in the background. I investigated that part as well, improved the app setup process, and tested it with several people across different devices.

Eventually, the system reached a point where the app, backend, and bot could operate independently without requiring my supervision.

To make sure using the system would not depend on me either, I recorded a roughly 10-minute video explaining installation, setup, and how to use the bot. I also prepared full documentation and a Quick Guide and shared them in the group.

After that, more people installed the app and the requesters started using the bot as part of their normal workflow.

In the first three days after introducing the final version, the system was used 118 times!

What makes this experience even more interesting to me is that the entire process, from identifying the problem and proposing the idea, to building the MVP and getting real user feedback, designing a more secure version, building the backend and bot, testing across different devices, moving the system to the company servers, and finally preparing the video and documentation, all happened within about seven days.

For me, MLK DVR Receiver was not just about building an app or a bot. It was an experience where I saw a manual and inconvenient process, built a solution for it, discovered the weaknesses of the first version through real usage, and gradually turned it into a more secure, reliable, and independent system.

That is why it is still one of my favorite and most rewarding programming experiences.`,
        storyFA: `ساخت MLK DVR Receiver یکی از شیرین‌ترین تجربه‌های برنامه‌نویسی من بود.

قبلاً فرایند دریافت کد ورود به اکانت‌های دیوار کاملاً دستی بود. وقتی کسی به یک کد نیاز داشت، داخل گروه می‌پرسید چه کسی آنلاین است. فردی که آنلاین بود شماره‌اش را در گروه می‌فرستاد، درخواست‌کننده آن شماره را در سایت ثبت می‌کرد، SMS برای صاحب شماره ارسال می‌شد و او باید کد را دوباره داخل گروه می‌فرستاد تا درخواست‌کننده بتواند آن را وارد کند.

این فرایند برای همه‌ی افراد درگیر، دستی، زمان‌بر و پردردسر بود.

وقتی این روند را دیدم، احساس کردم می‌شود خیلی ساده‌ترش کرد.

ایده‌ام را داخل گروه مطرح کردم و CEO و CTO را منشن کردم. پیشنهادم این بود که یک اپ جداگانه روی گوشی نصب شود؛ اپ در پس‌زمینه منتظر SMSهای دیوار بماند و وقتی پیام حاوی کد ورود دریافت شد، کد را به‌صورت خودکار استخراج کند و از طریق Telegram API داخل گروه بفرستد.

بعد از گرفتن تأیید اولیه، اولین نسخه را فقط برای گوشی خودم پیاده‌سازی کردم. یک اپ ساده که در پس‌زمینه فعال بود و هر زمان SMS دیوار دریافت می‌کرد، کد را مستقیماً داخل گروه می‌فرستاد.

درخواست‌کننده‌ها شماره من را ثبت می‌کردند و چند لحظه بعد کد را داخل گروه دریافت می‌کردند.

بعد از فقط یک روز استفاده از این نسخه و بازخورد خیلی خوب درخواست‌کننده‌ها، CEO به بقیه افراد گروه هم پیشنهاد داد برنامه را نصب کنند. در مدت کوتاهی حدود ۶ یا ۷ نفر اپ را روی گوشی خودشان نصب کرده بودند و دریافت کد برای درخواست‌کننده‌ها به شکل قابل‌توجهی ساده‌تر شده بود.

اما این فقط MVP بود و یک مشکل مهم داشت: امنیت و قابلیت ردیابی.

در نسخه اولیه مشخص نبود چه کسی درخواست دریافت یک کد را داده است. اپ فقط کد را از SMS استخراج می‌کرد و داخل گروه می‌فرستاد. اگر بعدها برای یکی از اکانت‌ها مشکلی پیش می‌آمد، راه دقیقی برای مشخص کردن اینکه چه کسی و در چه زمانی کد آن اکانت را دریافت کرده وجود نداشت.

به همین دلیل تصمیم گرفتم نسخه کامل‌تر و حرفه‌ای‌تری طراحی کنم.

نسخه جدید یک backend برای مدیریت درخواست‌ها، احراز هویت و ثبت رویدادها داشت. طی حدود سه روز نسخه اولیه این معماری را پیاده‌سازی کردم و برای تست داخل گروه قرار دادم.

در نسخه جدید، درخواست‌کننده ابتدا داخل گروه دستوری مثل /code 09901234567 ارسال می‌کرد. بات ثبت می‌کرد چه کسی برای چه شماره‌ای درخواست کد داده و یک درخواست موقت دو دقیقه‌ای برای آن شماره ایجاد می‌شد.

اگر در این دو دقیقه روی گوشی مربوط به آن شماره SMS دیوار حاوی کد ورود دریافت می‌شد، اپ کد را به backend ارسال می‌کرد. Backend درخواست فعال را پیدا می‌کرد و کد از طریق بات تلگرام، به‌صورت خصوصی برای همان فردی که درخواست را ثبت کرده بود ارسال می‌شد. داخل گروه هم فقط اعلام می‌شد که کد دریافت و برای درخواست‌کننده ارسال شده است.

به این شکل دیگر کدهای ورود مستقیماً داخل گروه قرار نمی‌گرفتند و فقط فردی که درخواست معتبر ثبت کرده بود آن‌ها را دریافت می‌کرد.

در کنار آن، سیستم یک مسیر قابل‌ردیابی از درخواست‌ها ایجاد می‌کرد: چه کسی، در چه زمانی، برای چه شماره‌ای درخواست دریافت کد ثبت کرده و آیا کد را دریافت کرده است یا نه. در نتیجه اگر مشکلی برای یک اکانت پیش می‌آمد، امکان بررسی تاریخچه درخواست‌ها وجود داشت.

Backend برای حدود دو روز و در مرحله تست روی سیستم خودم اجرا می‌شد و بعد از اینکه عملکرد سیستم مطمئن شد، آن را به سرورهای MelkRadar منتقل کردیم.

در ادامه متوجه شدم روی بعضی گوشی‌های Android لازم است تنظیمات و دسترسی‌های خاصی انجام شود تا سیستم‌عامل اپ را در پس‌زمینه متوقف نکند. این بخش را هم بررسی کردم، راه‌اندازی اپ را بهبود دادم و با چند نفر روی دستگاه‌های مختلف تست کردم.

در نهایت سیستم به نقطه‌ای رسید که اپ، backend و بات می‌توانستند بدون نظارت من و به‌صورت مستقل کار کنند.

برای اینکه استفاده از سیستم هم وابسته به من نباشد، یک ویدیوی حدود ۱۰ دقیقه‌ای برای نصب، راه‌اندازی و کار با بات ضبط کردم و در کنار آن documentation کامل و یک Quick Guide آماده کردم و داخل گروه قرار دادم.

بعد از آن افراد بیشتری برنامه را نصب کردند و درخواست‌کننده‌ها شروع به استفاده روزمره از بات کردند.

در سه روز اول معرفی نسخه نهایی، سیستم ۱۱۸ بار مورد استفاده قرار گرفت!

و چیزی که این تجربه را برای من جذاب‌تر می‌کند این است که تمام این مسیر، از دیدن مشکل و مطرح کردن ایده، ساخت MVP و گرفتن بازخورد واقعی، طراحی نسخه امن‌تر، ساخت backend و بات، تست روی دستگاه‌های مختلف، انتقال به سرورهای شرکت و در نهایت آماده کردن ویدیو و مستندات، همگی در حدود هفت روز انجام شدند.

MLK DVR Receiver برای من فقط ساخت یک اپ یا یک بات نبود. تجربه‌ای بود که در آن یک فرایند دستی و پردردسر را دیدم، برایش راه‌حل ساختم، با استفاده واقعی افراد ضعف‌های راه‌حل اولیه را پیدا کردم و قدم‌به‌قدم آن را به سیستمی امن‌تر، قابل‌اتکاتر و مستقل تبدیل کردم.

به همین دلیل هنوز هم یکی از دوست‌داشتنی‌ترین و شیرین‌ترین تجربه‌های برنامه‌نویسی من است.`,
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Telegram",
                text: "Open the MLK DVR SMS bot",
                url: "https://t.me/mlk_dvr_sms_bot",
            },
            {
                label: "Deployment",
                text: "Deployment and security guide",
                url: "https://github.com/Ali-Sdg90/mlk-dvr-receiver/blob/main/docs/DEPLOYMENT.md",
            },
            {
                label: "Onboarding Video",
                text: "Installation and usage walkthrough",
                url: "https://youtu.be/_IXXjlE-Cyg?si=YTcUeUdOdqjAaL5N",
            },
            {
                label: "Process Flowcharts - EN",
                text: "System architecture and flow in English",
                url: "https://github.com/Ali-Sdg90/mlk-dvr-receiver/blob/main/docs/system-flow.md",
            },
            {
                label: "Process Flowcharts - FA",
                text: "System architecture and flow in Farsi",
                url: "https://github.com/Ali-Sdg90/mlk-dvr-receiver/blob/main/docs/system-flow-fa.md",
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
        galleryImages: projectGalleryImages["gradient-paint"],
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
        galleryImages: projectGalleryImages["quick-math"],
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
        galleryImages: projectGalleryImages["tic-tac-toe"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "??",
                text: "Project interdiction post",
                url: "https://x.com/Ali_Sdg90/status/1663115176504344576?s=20",
            },
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
        galleryImages: projectGalleryImages["path-finder"],
        storyEN: "Placeholder",
        storyFA: "Placeholder",
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "??",
                text: "Project interdiction post",
                url: "https://x.com/Ali_Sdg90/status/1963653671083790650?s=20",
            },
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
