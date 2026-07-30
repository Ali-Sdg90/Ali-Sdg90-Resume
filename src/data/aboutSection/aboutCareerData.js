import csiLogoLarge from "../../assets/images/large-images/career/csi_logo.jpg";
import dpaLogoLarge from "../../assets/images/large-images/career/dpa_logo.jpg";
import melkRadarLogoLarge from "../../assets/images/large-images/career/melkradar_logo.jpg";
import settleitGptLogoLarge from "../../assets/images/large-images/career/settleitgpt_logo.jpg";
import csiClubBot1Large from "../../assets/images/gallery-images/large-images/career/csi/club-bot1.png";
import csiClubBot2Large from "../../assets/images/gallery-images/large-images/career/csi/club-bot2.png";
import csiContributionLarge from "../../assets/images/gallery-images/large-images/career/csi/conterbution.png";
import csiFlowChartsLarge from "../../assets/images/gallery-images/large-images/career/csi/flow-charts.png";
import csiQueueBot1Large from "../../assets/images/gallery-images/large-images/career/csi/queue-bot1.png";
import csiQueuePageLarge from "../../assets/images/gallery-images/large-images/career/csi/queue-page.png";
import dpaPage1Large from "../../assets/images/gallery-images/large-images/career/dpa/page1.png";
import dpaPage2Large from "../../assets/images/gallery-images/large-images/career/dpa/page2.png";
import dpaPage3Large from "../../assets/images/gallery-images/large-images/career/dpa/page3.png";
import settleitGptImage1Large from "../../assets/images/gallery-images/large-images/career/gpt/img1.jpg";
// import settleitGptImage2Large from "../../assets/images/gallery-images/large-images/career/gpt/img2.jpg";
import settleitGptImage3Large from "../../assets/images/gallery-images/large-images/career/gpt/img3.png";
import settleitGptImage4Large from "../../assets/images/gallery-images/large-images/career/gpt/img4.png";
import melkRadarChartsLarge from "../../assets/images/gallery-images/large-images/career/mlk/charts.png";
import melkRadarDesignLarge from "../../assets/images/gallery-images/large-images/career/mlk/desing.png";
import melkRadarMapboxLarge from "../../assets/images/gallery-images/large-images/career/mlk/mapbox.png";
import csiClubBot1Small from "../../assets/images/gallery-images/small-images/career/csi/club-bot1.jpg";
import csiClubBot2Small from "../../assets/images/gallery-images/small-images/career/csi/club-bot2.jpg";
import csiContributionSmall from "../../assets/images/gallery-images/small-images/career/csi/conterbution.jpg";
import csiFlowChartsSmall from "../../assets/images/gallery-images/small-images/career/csi/flow-charts.jpg";
import csiQueueBot1Small from "../../assets/images/gallery-images/small-images/career/csi/queue-bot1.jpg";
import csiQueuePageSmall from "../../assets/images/gallery-images/small-images/career/csi/queue-page.jpg";
import dpaPage1Small from "../../assets/images/gallery-images/small-images/career/dpa/page1.jpg";
import dpaPage2Small from "../../assets/images/gallery-images/small-images/career/dpa/page2.jpg";
import dpaPage3Small from "../../assets/images/gallery-images/small-images/career/dpa/page3.jpg";
import settleitGptImage1Small from "../../assets/images/gallery-images/small-images/career/gpt/img1.jpg";
// import settleitGptImage2Small from "../../assets/images/gallery-images/small-images/career/gpt/img2.jpg";
import settleitGptImage3Small from "../../assets/images/gallery-images/small-images/career/gpt/img3.jpg";
import settleitGptImage4Small from "../../assets/images/gallery-images/small-images/career/gpt/img4.jpg";
import melkRadarChartsSmall from "../../assets/images/gallery-images/small-images/career/mlk/charts.jpg";
import melkRadarDesignSmall from "../../assets/images/gallery-images/small-images/career/mlk/desing.jpg";
import melkRadarMapboxSmall from "../../assets/images/gallery-images/small-images/career/mlk/mapbox.jpg";

const galleryImage = (src, lightboxSrc) => ({ src, lightboxSrc });

const csiClubBot1 = galleryImage(csiClubBot1Small, csiClubBot1Large);
const csiClubBot2 = galleryImage(csiClubBot2Small, csiClubBot2Large);
const csiContribution = galleryImage(
    csiContributionSmall,
    csiContributionLarge,
);
const csiFlowCharts = galleryImage(csiFlowChartsSmall, csiFlowChartsLarge);
const csiQueueBot1 = galleryImage(csiQueueBot1Small, csiQueueBot1Large);
const csiQueuePage = galleryImage(csiQueuePageSmall, csiQueuePageLarge);
const dpaPage1 = galleryImage(dpaPage1Small, dpaPage1Large);
const dpaPage2 = galleryImage(dpaPage2Small, dpaPage2Large);
const dpaPage3 = galleryImage(dpaPage3Small, dpaPage3Large);
const settleitGptImage1 = galleryImage(
    settleitGptImage1Small,
    settleitGptImage1Large,
);
// const settleitGptImage2 = galleryImage(
//     settleitGptImage2Small,
//     settleitGptImage2Large,
// );
const settleitGptImage3 = galleryImage(
    settleitGptImage3Small,
    settleitGptImage3Large,
);
const settleitGptImage4 = galleryImage(
    settleitGptImage4Small,
    settleitGptImage4Large,
);
const melkRadarCharts = galleryImage(
    melkRadarChartsSmall,
    melkRadarChartsLarge,
);
const melkRadarDesign = galleryImage(
    melkRadarDesignSmall,
    melkRadarDesignLarge,
);
const melkRadarMapbox = galleryImage(
    melkRadarMapboxSmall,
    melkRadarMapboxLarge,
);

export const aboutCareerData = {
    "cs-internship": {
        id: "cs-internship",
        title: "CS Internship",
        lightboxImage: csiLogoLarge,
        summary:
            "Contributed to CS Internship by mentoring web interns, improving program processes, and building internal tools that supported operations at scale.",
        tech: [
            "Technical Mentorship",
            "Process Design",
            "Program Operations",
            "Workflow Automation",
            "React",
            "Telegram Bots",
            "Azure Boards",
        ],
        featuresTitle: "Focus Areas",
        features: [
            "Mentored 30+ web development interns through technical coaching and progress reviews",
            "Personally onboarded 8 interns into the program and supported their early journey",
            "Led the redesign of the program entry process over a 6-month period with the governance team",
            "Designed and improved internal systems, workflows, roles, and operating processes",
            "Built 5 internal automation tools for queue management, club feedback, scheduling, and admin operations",
        ],
        galleryColumns: 3,
        galleryImages: [
            csiClubBot2,
            csiContribution,
            csiFlowCharts,
            csiQueueBot1,
            csiClubBot1,
            csiQueuePage,
        ],
        storyTitle: "Story",
        storyEN: `I started my path in CS as an intern. I completed the web track, and around the middle of my study period, I got the opportunity to also take part in the program as someone who could contribute to its management and improvement.

After some time, my role changed from a regular intern to a coordinator, and I became responsible for supporting and onboarding new interns. A little later, I worked as an assistant mentor and technical mentor. I held technical sessions for web-track interns, reviewed their technical work, followed their progress, and guided them throughout the program.

The more I got to know the program and its needs, the more serious my role became. I joined governance meetings and started contributing to decisions about the structure and future of the program. Over time, a large part of my work became focused on designing, redesigning, and implementing the program's rules and processes.

During this path, I worked on many different parts of the program, from redesigning the full onboarding process and designing the technical mentor process, to reshaping how interns participated in the program, defining roles more clearly, and updating internal rules and structures.

Alongside all of that, whenever I felt a need could be solved better with a tool or automation, I built something for it with the knowledge I had. Some of those tools, along with their links and details, are included in the projects section. And honestly, there are quite a few of them :)

Being part of CS was not just an internship experience for me. It was where I learned effective communication, community and team management, process design, and how to turn an idea or need into an executable system.

The most valuable part of this journey for me was its human impact. I was able to affect the path of many friends and people who joined the program, help them begin their technical journey, and later see some of them enter different companies and professional positions.

Being able to make the program more organized, scalable, automated, and truly more like a living community was deeply valuable to me. The real value of my work was in the people who benefited from it at the time, and in the future people who will join the program and use my redesigns in their own growth path.`,
        storyFA: `من مسیرم در CS را به‌عنوان یک اینترن شروع کردم. دوره‌ی وب را گذراندم و از اواسط دوره‌ی مطالعاتی، این فرصت را پیدا کردم که در خود برنامه هم به‌عنوان عضوی که می‌تونه در مدیریت برنامه اثرگذار باشه نقش داشته باشم.

بعد از مدتی، نقشم از یک اینترن معمولی به کوردینیتور تغییر کرد و مسئول همراهی و آنبورد اینترن‌های جدید شدم. کمی بعد، به‌عنوان دستیار منتور و منتور فنی فعالیت کردم؛ جلسات فنی اینترن‌های دوره‌ی وب را برگزار می‌کردم، روی مسیر و کارهای فنی آن‌ها نظارت داشتم و در طول دوره راهنمایی‌شان می‌کردم.

هرچه بیشتر با برنامه و نیازهایش آشنا شدم، حضورم هم جدی‌تر شد. وارد جلسات گاورننس شدم و در تصمیم‌گیری‌های مربوط به ساختار و آینده‌ی برنامه مشارکت کردم. به‌مرور، بخش اصلی فعالیتم به طراحی، بازطراحی و اجرای قوانین و فرایندهای برنامه تبدیل شد.

در این مسیر روی بخش‌های مختلفی کار کردم؛ از بازطراحی کامل فرایند ورود به برنامه و طراحی فرایند منتور فنی، تا بازطراحی نحوه‌ی فعالیت اینترن‌ها، تعریف دقیق‌تر نقش‌ها و به‌روزرسانی ساختارها و قوانین داخلی برنامه.

در کنار این‌ها، هرجا احساس می‌کردم یک نیاز می‌تواند با ابزار یا اتوماسیون بهتر حل شود، برایش ابزاری با سوادی که داشتم می‌ساختم. تعدادی از این ابزارها، همراه با لینک و توضیحاتشان، در بخش پروژه‌ها قرار دارد. تعدادش هم اصلا کم نیست :)

بودن در CS برای من فقط یک تجربه‌ی کارآموزی نبود. جایی بود که در آن ارتباط مؤثر، مدیریت کامیونیتی و تیم، طراحی فرایند و تبدیل یک ایده یا نیاز به یک سیستم قابل‌اجرا را یاد گرفتم.

باارزش‌ترین بخش این مسیر برای من، اثر انسانی آن بود. توانستم روی مسیر تعداد زیادی از دوستانم و آدم‌هایی که وارد برنامه شدند تأثیر بگذارم، به شروع مسیر فنی‌شان کمک کنم و ببینم که بعضی از آن‌ها بعدتر وارد شرکت‌ها و موقعیت‌های حرفه‌ای مختلف شدند.

اینکه توانستم برنامه را منظم‌تر، مقیاس‌پذیرتر و خودکارتر و واقعا شبیه یک کامیونیتی زنده بکنم برام خیلی ارزشمند بود. ارزشی که کارم برای آدم‌های اون زمان و آیندگانی که وارد برنامه خواهند شد و از بازطراحی‌های من در مسیر رشد خودشون استفاده می‌کنن.`,
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "CS Queue Calendar",
                text: "React calendar for displaying CS Internship queue meetings with Persian/Gregorian support.",
                url: "https://github.com/cs-internship/CS-Queue-Calendar",
            },
            {
                label: "CS Club Bot",
                text: "Automated Telegram bot for CS internship clubs, with feedback system and AI-driven analysis.",
                url: "https://github.com/cs-internship/CS-Club-Bot",
            },
            {
                label: "CS Queue Bot",
                text: "Automated Telegram bot for managing the CS Internship queue group, with Azure DevOps integration.",
                url: "https://github.com/cs-internship/CS-Queue-Bot",
            },
            {
                label: "CS Feedback Webhook",
                text: "Automated Telegram bot for CS Internship feedback, integrated with Notion and Tally.",
                url: "https://github.com/cs-internship/CS-Feedback-Webhook",
            },
            {
                label: "CS Queue Message Maker",
                text: "Simplifies queue updates for CS Internship admins.",
                url: "https://github.com/cs-internship/CS-Queue-Message-Maker",
            },
            {
                label: "My CS Steps",
                text: "My CS Internship Journey Documentation",
                url: "https://github.com/Ali-Sdg90/CS-Steps",
            },
            {
                label: "CS Azure Board Automation",
                text: "Automate Azure Board updates for CS Internship program",
                url: "https://github.com/Ali-Sdg90/CS-Azure-Board-Automation",
            },
            {
                label: "CS Internship Specifications",
                text: "Specifications for the CS Internship program.",
                url: "https://github.com/cs-internship/cs-internship-spec",
            },
        ],
    },
    melkradar: {
        id: "melkradar",
        title: "MelkRadar",
        lightboxImage: melkRadarLogoLarge,
        summary:
            "Front-End Technical Lead across the MelkRadar ecosystem, contributing to 6 internal products, building core front-end structures and reusable components, reviewing production code, mentoring new team members, and working closely with design, product, backend, and front-end teams.",
        tech: [
            "React",
            "JavaScript",
            "SCSS",
            "Ant Design",
            "Chart.js",
            "Mapbox GL JS",
            "Git/GitHub",
            "Code Review",
            "UI Architecture",
            "Technical Mentorship",
            "Product Collaboration",
            "Frontend Leadership",
        ],
        featuresTitle: "Focus Areas",
        features: [
            "Worked across 6 MelkRadar products, including the main platform, extension, KhodroRadar, and external projects.",
            "Helped shape core structures, reusable components, and design system foundations with high-quality front-end output.",
            "Served as one of the main front-end code reviewers for 1.5 years, supporting clean and maintainable code.",
            "Delivered 50+ production-ready Chart.js visualizations under tight deadlines.",
            "Integrated Mapbox GL JS and onboarded the front-end team on using it effectively.",
            "Onboarded 4 front-end engineers, improved the onboarding process, and mentored new teammates.",
            "Worked closely with design, product, backend, and front-end teams.",
        ],
        galleryColumns: 3,
        galleryImages: [melkRadarMapbox, melkRadarCharts, melkRadarDesign],
        storyTitle: "Story",
        storyEN: `I joined MelkRadar as an intern. My internship ended earlier than planned, and after that, I continued as a full-time team member at the company.

During my time there, I was involved in different parts of the MelkRadar ecosystem, from the main MelkRadar website and MelkRadar extension to the start and development of the company’s new project, KhodroRadar, TonReach, and two other external projects the company had taken on.

I always tried to deliver my work with the highest quality possible. I was genuinely satisfied with the quality and care behind my work, and I could see that the team was satisfied with the quality of what I delivered.

After a while, I became one of the reviewers on the front-end team. This meant that I was both writing code myself and reviewing and merging code from other team members.

During this time, I onboarded several new people into the team, and I recorded different onboarding videos to improve the onboarding process.

At MelkRadar, I was deeply involved in different parts of the work. Frequent meetings with the design team, product design, backend developers, guiding front-end teammates, consulting on task distribution, and many other responsibilities had all become part of my work.

After a certain point, I reduced my role in the company and continued working with the team mostly as a reviewer and merger of front-end code.

This experience was heavy, valuable, and sweet for me. It became the real beginning of teamwork in my career. I have a deep sense of satisfaction from being in that professional and complex environment, and I was able to build many of my personal and professional foundations there.`,

        storyFA: `من به عنوان نیروی کارآموز وارد ملک‌رادار شدم. دوره کارآموزیم زودتر از زمانی که قرار بود تموم شد و بعد از اون به عنوان نیروی استخدامی شرکت ادامه دادم.

در طول حضورم، در بخش‌های مختلفی از اکوسیستم ملک‌رادار نقش داشتم؛ از سایت اصلی ملک‌رادار و اکستنشن ملک‌رادار گرفته تا شروع و ساخت پروژه جدید شرکت، خودرو رادار، تون‌ریچ و دو پروژه خارجی دیگری که شرکت گرفته بود.

همیشه سعی می‌کردم کارهایی که انجام می‌دم رو با بهترین کیفیت ممکن تحویل بدم و واقعاً هم خودم از کیفیت و ظرافت کارهام راضی بودم و می‌دیدم تیم هم از کیفیت کارم رضایت داره.

بعد از مدتی تبدیل به یکی از ریویوئرهای تیم فرانت شدم؛ یعنی هم خودم کد می‌زدم، هم کدهای بقیه اعضای تیم رو ریویو و مرج می‌کردم.

در این مدت چند نفر جدید رو به تیم آنبورد کردم و برای بهتر شدن روند آنبوردینگ، ویدئوهای مختلفی ضبط کردم.

در ملک‌رادار خیلی درگیر بخش‌های مختلف کار بودم. جلسه‌های متعدد با تیم دیزاین، طراحی محصول، بچه‌های بک‌اند، راهنمایی بچه‌های فرانت، مشاوره برای تقسیم تسک‌ها و مسائل مختلف دیگه، همگی بخشی از کارهایم شده بودند.

بعد از یه مقطع، نقشم رو در شرکت کم‌تر کردم و بیشتر به عنوان ریویوئر و مرج‌کننده کدهای فرانت با تیم همکاری داشتم.

این تجربه برای من سنگین، ارزشمند و شیرین بود؛ تجربه‌ای که شروع جدی کار تیمی رو برای من ساخت. از بودن در اون محیط حرفه‌ای و پیچیده رضایت عمیقی دارم و خیلی از پایه‌های شخصیتی و حرفه‌ایم رو تونستم اونجا برای خودم بسازم.`,
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Company",
                text: "MelkRadar Official Website",
                url: "https://melkradar.com/p/search",
            },
            {
                label: "Chart.js Work",
                text: "Chart.js templates from my chart-building work at MelkRadar.",
                url: "https://github.com/Ali-Sdg90/Learning-Chart.js-",
            },
        ],
    },
    "dadeh-pardazi-azmoudeh-karan": {
        id: "dadeh-pardazi-azmoudeh-karan",
        title: "Dadeh Pardazi Azmoudeh Karan",
        lightboxImage: dpaLogoLarge,
        summary:
            "Built the front end of a large administrative platform from scratch, translating Figma designs into a production-ready React application with Ant Design and 60+ API integrations.",
        tech: [
            "React",
            "JavaScript",
            "Ant Design",
            "REST APIs",
            "Swagger",
            "Figma",
            "Large-scale Front-End",
            "Component Architecture",
        ],
        featuresTitle: "Focus Areas",
        features: [
            "Built the entire front end of the platform from scratch.",
            "Integrated 60+ REST APIs using Swagger.",
            "Created reusable components and a maintainable project structure.",
            "Turned Figma designs into a production-ready React application.",
            "Improved and refactored the codebase as the project evolved.",
        ],
        galleryColumns: 3,
        galleryImages: [dpaPage1, dpaPage2, dpaPage3],
        storyTitle: "Story",
        storyEN: `I joined Dadeh Pardazi Azmoudeh Karan after passing the company’s entry assessments. There, we worked as a two-person development team; I was responsible for building and developing the entire front end from scratch, while my teammate built and expanded the back end.

This was the first project where I was fully responsible for the front end from beginning to end. Throughout the project, I learned a lot about proper project structure, designing core components, and the foundations needed for a project to grow in a healthy and maintainable way.

The project was relatively large and connected to an extensive database containing restaurant information, restaurant members, resumes submitted to each restaurant, and various other types of data that were displayed across the website in different ways.

The project was built around Ant Design, so I needed to become comfortable with it before starting development. Learning and working with it was a challenging but enjoyable experience, and the final result was a high-quality product that I am very proud of.

The project required integration with more than 60 APIs. I used Swagger to test those APIs and then implemented them throughout the application.

Building the project took around seven months. After that, the website was ready for its marketing activities and the next stages of the product, and my work on the project came to an end.

This experience was very valuable to me because building and managing the front end of a large project from start to finish was entirely my responsibility. Along the way, I often had to learn new things in the moment so I could keep the project moving forward.

However, there was not a broad team-based experience in this project. I received tasks, completed and delivered them, and marked them as Done. Unlike my experience at MelkRadar, I did not directly work with a complete team that included testing, design, and other departments. This sometimes made the working experience more difficult, but overall, it was an interesting and highly educational experience.`,

        storyFA: `با پشت سر گذاشتن آزمون‌های ورودی وارد شرکت داده‌پردازی آزموده‌کاران شدم. آنجا در یک تیم دو نفره مسئول ساخت سایت بودیم؛ من باید کل فرانت‌اند را از پایه می‌ساختم و توسعه می‌دادم و همکارم هم بک‌اند را از ابتدا پیاده‌سازی و گسترش می‌داد.

این اولین پروژه‌ای بود که از ابتدا تا انتها مسئولیت کامل فرانت‌اند آن بر عهده خودم بود. در طول پروژه چیزهای زیادی درباره ساختار درست پروژه، طراحی کامپوننت‌های اصلی و مواردی که برای رشد سالم و قابل‌مدیریت پروژه لازم بود، یاد گرفتم.

پروژه نسبتاً بزرگ بود و به یک پایگاه داده گسترده متصل می‌شد که اطلاعات رستوران‌ها، اعضای هر رستوران، رزومه‌های ارسال‌شده برای آن‌ها و اطلاعات مختلف دیگری را به شکل‌های گوناگون در سایت نمایش می‌داد.

پروژه بر پایه Ant Design بود و لازم بود قبل از شروع کار به آن مسلط شوم. فرایند یادگیری و کار با آن برایم چالشی شیرین و جالب بود و در نهایت هم خروجی باکیفیت و خوبی حاصل شد که بهش خیلی افتخار می‌کنم.

این پروژه بیش از ۶۰ API برای اتصال داشت و من با استفاده از Swagger آن‌ها را تست می‌کردم و در پروژه پیاده‌سازی می‌کردم.

ساخت پروژه حدود هفت ماه طول کشید و بعد از آن، سایت آماده شد تا فعالیت‌های بازاریابی و مراحل بعدی آن شروع شود و کار من روی پروژه به پایان رسید.

این تجربه برای من خیلی ارزشمند بود؛ چون ساخت و مدیریت فرانت‌اند یک پروژه بزرگ از ابتدا تا انتها کاملاً بر عهده خودم بود و در طول مسیر لازم بود چیزهای زیادی را همان لحظه یاد بگیرم تا بتوانم پروژه را جلو ببرم.

البته تجربه تیمی گسترده‌ای در این پروژه وجود نداشت. من تسک‌ها را دریافت می‌کردم، انجام می‌دادم، تحویل می‌دادم و آن‌ها را Done می‌کردم. برخلاف تجربه‌ام در ملک‌رادار، ارتباط مستقیمی با یک تیم کامل شامل تست، طراحی و بخش‌های دیگر نداشتم و همین موضوع گاهی تجربه کاری را برایم سخت‌تر می‌کرد؛ ولی در مجموع، تجربه آموزنده و جالبی بود.`,
        hasRelatedLinks: false,
        relatedLinks: [],
    },
    settleitgpt: {
        id: "settleitgpt",
        title: "SettleitGPT",
        lightboxImage: settleitGptLogoLarge,
        summary:
            "Co-developed and launched an AI-powered iOS application with React Native and Expo, taking the product from an early MVP to a complete App Store release.",
        tech: [
            "React Native",
            "Expo",
            "JavaScript",
            "iOS Development",
            "Firebase",
            "REST APIs",
            "AI Integration",
            "Prompt Engineering",
            "Voice Generation",
            "Native Device APIs",
        ],
        featuresTitle: "Focus Areas",
        features: [
            "Built AI-powered character personas for judging user discussions.",
            "Integrated native iOS features including the microphone, camera, and photo library.",
            "Implemented AI-generated voice responses for selected characters.",
            "Worked across both the React Native app and Firebase backend.",
            "Helped prepare and publish the app on the Apple App Store.",
        ],
        galleryColumns: 3,
        galleryImages: [
            settleitGptImage1,
            // settleitGptImage2,
            settleitGptImage4,
            settleitGptImage3,
        ],
        storyTitle: "Story",
        storyEN: `I worked on this project with one of my friends. He had already built the initial version as an MVP, and after that, we worked together to finalize and complete the product.

The app was designed to run on Apple devices, so I needed to learn the SDKs and iOS development workflow before I could properly contribute. I installed the iOS simulator and developed the application on macOS. The app was built with Expo and React Native.

The project had a very creative concept. Two people would present their arguments and points of view, then choose a famous character to act as the judge. That selected character was defined through a custom prompt and passed to the AI, which then decided who had won the argument.

The app could even generate the voice of the selected character, meaning users could receive the final judgment in a generated version of that character’s voice and tone.

During the project, I also learned how to work with native iOS capabilities such as the microphone, photo library, and camera, and how to implement them inside the application.

The app used Firebase for its back end, and changes to each feature usually required updates on both sides of the project. Both my friend and I worked across the front end and back end, and in the end, we were able to complete the app, pass the App Store review process, and publish it on the Apple App Store.

To support the launch, I also published an introduction and promotional post for the app, which received strong reach and engagement.

This experience took me far outside my comfort zone, but at the same time, it was a very rewarding, exciting, and enjoyable experience.`,

        storyFA: `این پروژه را همراه با یکی از دوستانم پیش بردم. او نسخه اولیه پروژه را در حد MVP ساخته بود و بعد از آن، با همکاری هم فرایند نهایی‌سازی و تکمیل پروژه را انجام دادیم.

اپ قرار بود روی گوشی‌های اپل اجرا شود، بنابراین لازم بود SDKها و روش توسعه برای iOS را یاد بگیرم تا بتوانم روی پروژه کار کنم. شبیه‌ساز iOS را نصب کردم و توسعه اپ را روی سیستم macOS انجام دادم. اپ با Expo و بر پایه React Native ساخته شده بود.

پروژه ایده خیلی خلاقانه‌ای داشت. دو نفر منطق و دیدگاه خودشان را مطرح می‌کردند و بعد یکی از شخصیت‌های معروف را به‌عنوان داور انتخاب می‌کردند. شخصیت انتخاب‌شده از طریق پرامپتی که برایش تعریف شده بود به هوش مصنوعی داده می‌شد و در نهایت اعلام می‌کرد کدام طرف برنده بحث است.

اپ حتی می‌توانست صدای آن شخصیت را هم تولید کند؛ یعنی نتیجه بحث را با لحن و صدای تولیدشده همان شخصیت دریافت می‌کردی.

در طول پروژه یاد گرفتم از قابلیت‌های داخلی iOS مثل میکروفون، گالری و دوربین هم استفاده کنم و آن‌ها را داخل اپ پیاده‌سازی کنم.

اپ برای بک‌اند از Firebase استفاده می‌کرد و تغییرات هر بخش معمولاً نیازمند به‌روزرسانی در هر دو سمت پروژه بود. در این پروژه هم من و هم دوستم روی فرانت‌اند و بک‌اند کار می‌کردیم و در نهایت توانستیم اپ را کامل کنیم، تأیید اپ استور را بگیریم و آن را در Apple App Store منتشر کنیم.

برای معرفی و انتشار اپ، یک پست تبلیغاتی و معرفی هم منتشر کردم که بازدید و تعامل خیلی خوبی گرفت.

این تجربه خیلی خارج از محدوده امنم بود، اما در عین حال تجربه‌ای بسیار شیرین، جذاب و لذت‌بخش بود.`,
        hasRelatedLinks: true,
        relatedLinks: [
            {
                label: "Launch Post",
                text: "SettleitGPT Introduction on LinkedIn",
                url: "https://www.linkedin.com/posts/ali-sdg90_settleitgpt-share-7374421474943700993-_H3R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiHtIwB6ffMAWL0iNc5fSdSRqvEYI6Q2IA",
            },
        ],
    },
};

export const getAboutCareerById = (careerId) =>
    aboutCareerData[careerId] ?? null;
