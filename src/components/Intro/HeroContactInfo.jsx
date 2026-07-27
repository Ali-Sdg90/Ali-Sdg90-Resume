import { contactItems, socialItems } from "../../data/portfolio/profileLinks";
import { trackUmamiEvent } from "../../utils/analytics";

const trackContactClick = (channel, group) => {
    trackUmamiEvent("contact_link_click", { channel, group });
};

const HeroContactInfo = () => {
    return (
        <>
            <address className="hero-contact" aria-label="Ali contact details">
                {contactItems.map(({ id, icon: Icon, label, href }) => (
                    <a
                        href={href}
                        key={label}
                        target="_blank"
                        onClick={() => trackContactClick(id, "contact")}
                    >
                        <Icon aria-hidden="true" size={20} />
                        <span>{label}</span>
                    </a>
                ))}
            </address>

            <div className="hero-socials" aria-label="Ali social links">
                {socialItems.map(({ id, icon: Icon, label, href }) => (
                    <a
                        href={href}
                        key={label}
                        aria-label={label}
                        target="_blank"
                        onClick={() => trackContactClick(id, "social")}
                    >
                        <Icon aria-hidden="true" size={21} />
                    </a>
                ))}
            </div>
        </>
    );
};

export default HeroContactInfo;
