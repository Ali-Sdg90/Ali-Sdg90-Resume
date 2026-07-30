import portfolioThumbnail1 from "../../assets/images/gallery-images/small-images/projects/portfolio/img1.jpg";
import portfolioThumbnail2 from "../../assets/images/gallery-images/small-images/projects/portfolio/img2.jpg";
import portfolioThumbnail3 from "../../assets/images/gallery-images/small-images/projects/portfolio/img3.jpg";
import portfolioImage1 from "../../assets/images/gallery-images/large-images/projects/portfolio/img1.png";
import portfolioImage2 from "../../assets/images/gallery-images/large-images/projects/portfolio/img2.png";
import portfolioImage3 from "../../assets/images/gallery-images/large-images/projects/portfolio/img3.png";

import spotTasteThumbnail1 from "../../assets/images/gallery-images/small-images/projects/spot/img1.jpg";
import spotTasteThumbnail2 from "../../assets/images/gallery-images/small-images/projects/spot/img2.jpg";
import spotTasteThumbnail3 from "../../assets/images/gallery-images/small-images/projects/spot/img3.jpg";
import spotTasteImage1 from "../../assets/images/gallery-images/large-images/projects/spot/img1.png";
import spotTasteImage2 from "../../assets/images/gallery-images/large-images/projects/spot/img2.png";
import spotTasteImage3 from "../../assets/images/gallery-images/large-images/projects/spot/img3.png";

import fabrexaThumbnail1 from "../../assets/images/gallery-images/small-images/projects/fabrexa/img1.jpg";
import fabrexaThumbnail2 from "../../assets/images/gallery-images/small-images/projects/fabrexa/img2.jpg";
import fabrexaThumbnail3 from "../../assets/images/gallery-images/small-images/projects/fabrexa/img3.jpg";
import fabrexaImage1 from "../../assets/images/gallery-images/large-images/projects/fabrexa/img1.png";
import fabrexaImage2 from "../../assets/images/gallery-images/large-images/projects/fabrexa/img2.png";
import fabrexaImage3 from "../../assets/images/gallery-images/large-images/projects/fabrexa/img3.png";

import restookThumbnail1 from "../../assets/images/gallery-images/small-images/career/dpa/page1.jpg";
import restookThumbnail2 from "../../assets/images/gallery-images/small-images/career/dpa/page2.jpg";
import restookThumbnail3 from "../../assets/images/gallery-images/small-images/career/dpa/page3.jpg";
import restookImage1 from "../../assets/images/gallery-images/large-images/career/dpa/page1.png";
import restookImage2 from "../../assets/images/gallery-images/large-images/career/dpa/page2.png";
import restookImage3 from "../../assets/images/gallery-images/large-images/career/dpa/page3.png";

import settleitGptThumbnail1 from "../../assets/images/gallery-images/small-images/career/gpt/img1.jpg";
import settleitGptThumbnail2 from "../../assets/images/gallery-images/small-images/career/gpt/img3.jpg";
import settleitGptThumbnail3 from "../../assets/images/gallery-images/small-images/career/gpt/img4.jpg";
import settleitGptImage1 from "../../assets/images/gallery-images/large-images/career/gpt/img1.jpg";
import settleitGptImage2 from "../../assets/images/gallery-images/large-images/career/gpt/img3.png";
import settleitGptImage3 from "../../assets/images/gallery-images/large-images/career/gpt/img4.png";

import queueCalendarThumbnail1 from "../../assets/images/gallery-images/small-images/projects/calendar/img1.jpg";
import queueCalendarThumbnail2 from "../../assets/images/gallery-images/small-images/projects/calendar/img3.jpg";
import queueCalendarThumbnail3 from "../../assets/images/gallery-images/small-images/career/csi/queue-page.jpg";
import queueCalendarImage1 from "../../assets/images/gallery-images/large-images/projects/calendar/img1.png";
import queueCalendarImage2 from "../../assets/images/gallery-images/large-images/projects/calendar/img3.png";
import queueCalendarImage3 from "../../assets/images/gallery-images/large-images/career/csi/queue-page.png";

import clubBotThumbnail1 from "../../assets/images/gallery-images/small-images/career/csi/club-bot1.jpg";
import clubBotThumbnail2 from "../../assets/images/gallery-images/small-images/career/csi/club-bot2.jpg";
import clubBotThumbnail3 from "../../assets/images/gallery-images/small-images/projects/club/img3.jpg";
import clubBotImage1 from "../../assets/images/gallery-images/large-images/career/csi/club-bot1.png";
import clubBotImage2 from "../../assets/images/gallery-images/large-images/career/csi/club-bot2.png";
import clubBotImage3 from "../../assets/images/gallery-images/large-images/projects/club/img3.png";

import queueBotThumbnail1 from "../../assets/images/gallery-images/small-images/career/csi/queue-bot1.jpg";
import queueBotThumbnail2 from "../../assets/images/gallery-images/small-images/projects/queue/img1.jpg";
import queueBotThumbnail3 from "../../assets/images/gallery-images/small-images/projects/queue/img3.jpg";
import queueBotImage1 from "../../assets/images/gallery-images/large-images/career/csi/queue-bot1.png";
import queueBotImage2 from "../../assets/images/gallery-images/large-images/projects/queue/img1.png";
import queueBotImage3 from "../../assets/images/gallery-images/large-images/projects/queue/img3.png";

const galleryImage = (src, lightboxSrc, alt, width, height) => ({
    src,
    lightboxSrc,
    alt,
    width,
    height,
});

export const projectGalleryImages = {
    "alis-portfolio": [
        galleryImage(
            portfolioThumbnail1,
            portfolioImage1,
            "Ali's Portfolio interactive shelf overview",
            1919,
            903,
        ),
        galleryImage(
            portfolioThumbnail3,
            portfolioImage3,
            "Ali's Portfolio build story",
            1919,
            904,
        ),
        galleryImage(
            portfolioThumbnail2,
            portfolioImage2,
            "Ali's Portfolio project detail experience",
            1919,
            908,
        ),
    ],
    "spot-taste-tracker": [
        galleryImage(
            spotTasteThumbnail1,
            spotTasteImage1,
            "Spot Taste Tracker overview dashboard",
            1919,
            1079,
        ),
        galleryImage(
            spotTasteThumbnail2,
            spotTasteImage2,
            "Spot Taste Tracker listening analytics",
            1919,
            1079,
        ),
        galleryImage(
            spotTasteThumbnail3,
            spotTasteImage3,
            "Spot Taste Tracker taste history",
            1919,
            1079,
        ),
    ],
    "fabrexa-ai-ollama": [
        galleryImage(
            fabrexaThumbnail1,
            fabrexaImage1,
            "Fabrexa AI Ollama chat interface",
            1919,
            1079,
        ),
        galleryImage(
            fabrexaThumbnail2,
            fabrexaImage2,
            "Fabrexa AI Ollama Telegram conversation",
            1046,
            1481,
        ),
        galleryImage(
            fabrexaThumbnail3,
            fabrexaImage3,
            "Fabrexa AI Ollama mobile chat flow",
            1234,
            2215,
        ),
    ],
    "restook-admin": [
        galleryImage(
            restookThumbnail1,
            restookImage1,
            "Restook Admin management page",
            888,
            1204,
        ),
        galleryImage(
            restookThumbnail2,
            restookImage2,
            "Restook Admin data management view",
            1224,
            870,
        ),
        galleryImage(
            restookThumbnail3,
            restookImage3,
            "Restook Admin operational dashboard",
            1064,
            894,
        ),
    ],
    "settleitgpt-project": [
        galleryImage(
            settleitGptThumbnail1,
            settleitGptImage1,
            "SettleitGPT argument setup screen",
            589,
            1280,
        ),
        galleryImage(
            settleitGptThumbnail2,
            settleitGptImage2,
            "SettleitGPT celebrity judge selection",
            589,
            1280,
        ),
        galleryImage(
            settleitGptThumbnail3,
            settleitGptImage3,
            "SettleitGPT argument history screen",
            438,
            962,
        ),
    ],
    "cs-queue-calendar": [
        galleryImage(
            queueCalendarThumbnail1,
            queueCalendarImage1,
            "CS Queue Calendar schedule overview",
            2559,
            1599,
        ),
        galleryImage(
            queueCalendarThumbnail3,
            queueCalendarImage3,
            "CS Queue Calendar queue page",
            2559,
            1340,
        ),
        galleryImage(
            queueCalendarThumbnail2,
            queueCalendarImage2,
            "CS Queue Calendar session planning view",
            2559,
            1340,
        ),
    ],
    "cs-club-bot": [
        galleryImage(
            clubBotThumbnail2,
            clubBotImage2,
            "CS Club Bot workflow overview",
            2559,
            1599,
        ),
        galleryImage(
            clubBotThumbnail1,
            clubBotImage1,
            "CS Club Bot Telegram interface",
            864,
            1633,
        ),
        galleryImage(
            clubBotThumbnail3,
            clubBotImage3,
            "CS Club Bot conversation flow",
            1226,
            3427,
        ),
    ],
    "cs-queue-bot": [
        galleryImage(
            queueBotThumbnail2,
            queueBotImage2,
            "CS Queue Bot queue management page",
            1919,
            1079,
        ),
        galleryImage(
            queueBotThumbnail1,
            queueBotImage1,
            "CS Queue Bot command interface",
            1012,
            909,
        ),
        galleryImage(
            queueBotThumbnail3,
            queueBotImage3,
            "CS Queue Bot mobile workflow",
            1048,
            1933,
        ),
    ],
};
