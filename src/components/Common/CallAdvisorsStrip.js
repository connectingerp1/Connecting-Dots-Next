"use client";

import styles from "@/styles/Common/CallAdvisorsStrip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp, faYoutube, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/connectingdotshrcourse",
    label: "Facebook",
    icon: faFacebookF,
    hoverClass: styles.facebookHover,
  },
  {
    href: "https://wa.me/919004002941",
    label: "WhatsApp",
    icon: faWhatsapp,
    hoverClass: styles.whatsappHover,
  },
  {
    href: "https://youtube.com/@connectingdotserp?si=hSKEiEg3MdytdEe_",
    label: "YouTube",
    icon: faYoutube,
    hoverClass: styles.youtubeHover,
  },
  {
    href: "https://in.linkedin.com/in/connecting-dots-erp-043039171",
    label: "LinkedIn",
    icon: faLinkedinIn,
    hoverClass: styles.linkedinHover,
  },
  {
    href: "https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
    icon: faInstagram,
    hoverClass: styles.instagramHover,
  },
];

const CallAdvisorsStrip = () => {
  const advisorsContact = "9004001938";

  return (
    <div className={styles.callAdvisorsStrip}>
      {/* Right side content - Social Icons */}
      <div className={styles.rightStripContent}>
        <div>
          <div className={styles.socialIconsStrip}>
            {SOCIAL_LINKS.map(({ href, label, icon, hoverClass }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={hoverClass}
              >
                <FontAwesomeIcon icon={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Left side content (Call Advisors) */}
      <div className={styles.leftStripContent}>
        <span className={styles.phoneIcon}>
          <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
        </span>
        <span className={styles.advisorText}>
          {/* This text is static, consider if it should also be dynamic */}
          Get Free Career Counselling:
        </span>

        {/* --- Use a standard <a> tag for the tel: link --- */}
        <a
          href={`tel:${advisorsContact}`} // Use the state variable
          className={`${styles.advisorNumber} text-decoration-none`} // Keep your styles
        >
          {advisorsContact} {/* Display the number from state */}
        </a>
      </div>
    </div>
  );
};

export default CallAdvisorsStrip;
