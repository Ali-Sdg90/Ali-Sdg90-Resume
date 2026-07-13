import placeholderImage from "../../../assets/images/global/placeholder.jpg";
import { getAboutCareerById } from "../../../data/aboutSection/aboutCareerData";
import { getAboutImpactById } from "../../../data/aboutSection/aboutImpactData";
import { getAboutProjectById } from "../../../data/aboutSection/aboutProjectData";
import { getAboutTechStackById } from "../../../data/aboutSection/aboutTechStackData";
import FeaturedProjectAbout from "../FeaturedProjectAbout";

const sectionSubtitles = {
    projects: "Project detail placeholder",
    achievements: "Impact detail placeholder",
    "tech-stack": "Technology detail placeholder",
    "career-journey": "Career detail placeholder",
};

const getGenericImage = (item, section, lightboxSrc) => {
    if (item.image) {
        return {
            src: item.image,
            lightboxSrc,
            alt: `${item.title} logo`,
            width: 512,
            height: 512,
            zoom: 1,
        };
    }

    return {
        src: placeholderImage,
        alt: `${section.label} placeholder`,
        width: 1024,
        height: 1024,
        zoom: 1,
    };
};

export const getShelfItemDetailModule = ({ item, section }) => {
    if (!item || !section) return null;

    if (section.id === "projects") {
        const projectDetail = getAboutProjectById(item.id);

        return {
            title: projectDetail?.title ?? item.title,
            subtitle: projectDetail
                ? `${projectDetail.subtitle} · ${projectDetail.year}`
                : "Project details coming soon",
            image: {
                src: projectDetail?.image ?? item.image ?? placeholderImage,
                lightboxSrc: projectDetail?.lightboxImage,
                alt: `${projectDetail?.title ?? item.title} project preview`,
                width: 1280,
                height: 720,
                zoom: 1,
            },
            tags: [],
            detail: projectDetail,
            detailVariant: "featured",
            Component: FeaturedProjectAbout,
        };
    }

    if (section.id === "career-journey") {
        const careerDetail = getAboutCareerById(item.id);

        return {
            title: careerDetail?.title ?? item.title,
            subtitle: item.meta,
            image: getGenericImage(item, section, careerDetail?.lightboxImage),
            tags: [],
            detail: careerDetail,
            detailVariant: "compact",
            Component: FeaturedProjectAbout,
        };
    }

    if (section.id === "achievements") {
        const impactDetail = getAboutImpactById(item.id);

        return {
            title: impactDetail?.title ?? item.title,
            subtitle: "",
            image: getGenericImage(item, section),
            tags: [],
            detail: impactDetail,
            detailVariant: "compact",
            Component: FeaturedProjectAbout,
        };
    }

    if (section.id === "tech-stack") {
        const techDetail = getAboutTechStackById(item.id);

        return {
            title: techDetail?.title ?? item.title,
            subtitle: "",
            image: getGenericImage(item, section, techDetail?.lightboxImage),
            tags: [],
            detail: techDetail,
            detailVariant: "compact",
            Component: FeaturedProjectAbout,
        };
    }

    return {
        title: item.title,
        subtitle: sectionSubtitles[section.id] ?? `${section.label} detail`,
        image: getGenericImage(item, section),
        tags: [],
        detail: null,
        detailVariant: "compact",
        Component: FeaturedProjectAbout,
    };
};
