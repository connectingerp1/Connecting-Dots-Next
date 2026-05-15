
// Footer.js

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

// Import the new Client Component that handles interactivity
import FooterClient from "./FooterClient";

const socialLinks = [
  {
    href: "https://www.facebook.com/sapinstallation.pune.9",
    label: "Visit Connecting Dots ERP on Facebook",
    icon: faFacebookF,
    hoverClass: "hover:bg-[#3b5998]",
  },
  {
    href: "https://wa.me/919004002941",
    label: "Chat with Connecting Dots ERP on WhatsApp",
    icon: faWhatsapp,
    hoverClass: "hover:bg-[#25d366]",
  },
  {
    href: "https://youtube.com/@connectingdotserp?si=hSKEiEg3MdytdEe_",
    label: "Watch Connecting Dots ERP on YouTube",
    icon: faYoutube,
    hoverClass: "hover:bg-[#ff0000]",
  },
  {
    href: "https://in.linkedin.com/in/connecting-dots-erp-043039171",
    label: "Visit Connecting Dots ERP on LinkedIn",
    icon: faLinkedinIn,
    hoverClass: "hover:bg-[#0077b5]",
  },
  {
    href: "https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Visit Connecting Dots ERP on Instagram",
    icon: faInstagram,
    hoverClass: "hover:bg-[#c13584]",
  },
];

// Centralize all the link data here. This is passed to FooterClient.
const footerSections = [
  {
    title: "SAP S/4 HANA COURSES",
    categories: [
      {
        title: "SAP FUNCTIONAL COURSES",
        links: [
          { href: "/sap-fico-course-in-pune", text: "SAP FICO COURSE" },
          { href: "/sap-ariba-course-in-pune", text: "SAP ARIBA COURSE" },
          { href: "/sap-sd-course-in-pune", text: "SAP SD COURSE" },
          { href: "/sap-hr-hcm-course-in-pune", text: "SAP HR/HCM" },
          { href: "/sap-mm-course-in-pune", text: "SAP MM COURSE" },
          { href: "/sap-pp-course-in-pune", text: "SAP PP COURSE" },
          { href: "/sap-qm-course-in-pune", text: "SAP QM COURSE" },
          { href: "/sap-pm-course-in-pune", text: "SAP PM COURSE" },
          { href: "/sap-scm-course-in-pune", text: "SAP SCM COURSE" },
          { href: "/sap-ewm-course-in-pune", text: "SAP EWM COURSE" },
          { href: "/sap-btp-course-in-pune", text: "SAP BTP COURSE" },
          { href: "/sap-ehs-course-in-pune", text: "SAP EHS COURSE" },
          { href: "/sap-grc-course-in-pune", text: "SAP GRC COURSE" },
          { href: "/sap-ibp-course-in-pune", text: "SAP IBP COURSE" },
          {
            href: "/sap-successfactors-course-in-pune",
            text: "SAP SUCCESSFACTOR",
          },
        ],
      },
      {
        title: "SAP TECHNICAL COURSES",
        links: [
          { href: "/sap-abap-course-in-pune", text: "SAP ABAP COURSE" },
          { href: "/sap-basis-course-in-pune", text: "SAP BASIS COURSE" },
          { href: "/sap-bwbi-course-in-pune", text: "SAP BW/BI COURSE" },
          { href: "/sap-s4-hana-course-in-pune", text: "SAP S/4 HANA COURSE" },
        ],
      },
    ],
  },
  {
    title: "IT COURSES",
    links: [
      {
        href: "/full-stack-developer-course-in-pune",
        text: "FULL STACK TRAINING",
      },
      { href: "/java-course-in-pune", text: "JAVA" },
      { href: "/mern-stack-course-in-pune", text: "MERN STACK" },
      { href: "/ui-ux-course-in-pune", text: "UI/UX DESIGN" },
      { href: "/python-course-in-pune", text: "PYTHON" },
      { href: "/aws-course-in-pune", text: "AWS" },
      { href: "/azure-course-in-pune", text: "AZURE" },
      { href: "/devops-course-in-pune", text: "DEVOPS" },
      { href: "/ai-ml-course-in-pune", text: "AIML" },
      { href: "/salesforce-course-in-pune", text: "SALESFORCE" },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { href: "/aboutus", text: "ABOUT US" },
      { href: "/blogs", text: "BLOG" },
      { href: "/contactus", text: "CONTACT US" },
      { href: "/sitemap", text: "CITY SITEMAP" },
      { href: "/all-course-links", text: "ALL COURSES" },
      { href: "/sitemap.xml", text: "SITEMAP" },
      { href: "/quiz", text: "QUIZ" },
    ],
  },
  {
    title: "DIGITAL MARKETING",
    links: [
      {
        href: "/digital-marketing-course-in-pune",
        text: "ADVANCE DIGITAL MARKETING",
      },
      {
        href: "/digital-marketing-course-in-pune",
        text: "PAY PER CLICK TRAINING",
      },
      {
        href: "/digital-marketing-course-in-pune",
        text: "SEARCH ENGINE OPTIMIZATION",
      },
      {
        href: "/digital-marketing-course-in-pune",
        text: "SOCIAL MEDIA MARKETING",
      },
    ],
  },
  {
    title: "DATA SCIENCE",
    links: [
      {
        href: "/data-analytics-course-in-pune",
        text: "MASTERS IN DATA ANALYTICS",
      },
      { href: "/data-science-course-in-pune", text: "MASTERS IN DATA SCIENCE" },
      {
        href: "/business-analytics-course-in-pune",
        text: "MASTERS IN BUSINESS ANALYTICS",
      },
      { href: "/generative-ai-course-in-pune", text: "Generative AI" },
    ],
  },
  {
    title: "DATA VISUALIZATION",
    links: [
      { href: "/power-bi-course-in-pune", text: "POWER BI" },
      { href: "/tableau-course-in-pune", text: "TABLEAU" },
      { href: "/sql-course-in-pune", text: "SQL" },
    ],
  },
  {
    title: "HR COURSES",
    links: [
      { href: "/hr-training-course-in-pune", text: "HR TRAINING" },
      { href: "/core-hr-course-in-pune", text: "CORE HR" },
      { href: "/hr-payroll-course-in-pune", text: "HR PAYROLL" },
      { href: "/hr-management-course-in-pune", text: "HR MANAGEMENT" },
      { href: "/hr-generalist-course-in-pune", text: "HR GENERALIST" },
      { href: "/hr-analytics-course-in-pune", text: "HR ANALYTICS" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#182e4a] text-[#ecf0f1] font-sans w-full max-w-[1800px] mx-auto relative">
      <div className="px-10 lg:px-24 flex flex-col">
        {/* Top Section with Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-2.5 border-b border-white/10 pb-2.5 gap-5 md:gap-0">
          <div className="w-[180px] h-auto">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/df65lfym1/image/upload/v1777627056/cdots_g3izdp.webp"
                alt="Connecting Dots ERP logo"
                width={150}
                height={50}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, icon, hoverClass }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={`text-[#ecf0f1] text-lg w-9 h-9 flex items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 ${hoverClass} hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
              >
                <FontAwesomeIcon icon={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Column 1: SAP S/4 HANA COURSES */}
          <div className="lg:col-span-1">
            <FooterClient sections={[footerSections[0]]} />
          </div>

          {/* Column 2: IT COURSES + ABOUT */}
          <div className="lg:col-span-1">
            <FooterClient sections={[footerSections[1], footerSections[2]]} />
          </div>

          {/* Column 3: DIGITAL MARKETING + DATA SCIENCE */}
          <div className="lg:col-span-1">
            <FooterClient sections={[footerSections[3], footerSections[4]]} />
          </div>

          {/* Column 4: DATA VISUALIZATION + HR COURSES */}
          <div className="lg:col-span-1">
            <FooterClient sections={[footerSections[5], footerSections[6]]} />
          </div>

          {/* Column 5: CONTACT US */}
          <div className="lg:col-span-1">
            <div className="mb-2.5">
              <div className="bg-white/5 rounded px-4 py-2 h-full">
                <h3 className="text-sm font-semibold uppercase relative pb-2.5 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#3498db]">
                  CONTACT US
                </h3>
                <div className="flex flex-col gap-5">
                  {/* Pune Office */}
                  <div className="pb-4 border-b border-dashed border-white/10">
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-[#3498db] text-lg min-w-[18px] mt-1"
                      />
                      <div>
                        <a
                          href="https://maps.app.goo.gl/DNwzKa2Yt1WB6zUB7"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open Pune Office location in Google Maps"
                          className="text-base font-semibold text-[#5dade2] m-0 mb-1.5 block text-decoration-none"
                        >
                          Pune Office
                        </a>
                        <p className="m-0 text-sm leading-normal">
                          1st Floor, 101, Police, Wireless Colony, Vishal Nagar,
                          Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra
                          411027
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-[#3498db] text-lg min-w-[18px]"
                      />
                      <a
                        href="tel:+919004002941"
                        className="text-[#ecf0f1] no-underline text-sm transition-colors hover:text-[#3498db]"
                      >
                        +91 9004002941
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-[#3498db] text-lg min-w-[18px]"
                      />
                      <a
                        href="tel:+919004002958"
                        className="text-[#ecf0f1] no-underline text-sm transition-colors hover:text-[#3498db]"
                      >
                        +91 9004002958
                      </a>
                    </div>
                  </div>

                  {/* Mumbai Office */}
                  <div className="pb-4 border-b border-dashed border-white/10 last:border-b-0">
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-[#3498db] text-lg min-w-[18px] mt-1"
                      />
                      <div>
                        <a
                          href="https://maps.app.goo.gl/i7W3baVVS1mDLmTJ9"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open Mumbai Office 1 location in Google Maps"
                          className="text-base font-semibold text-[#5dade2] m-0 mb-1.5 block text-decoration-none"
                        >
                          Mumbai Office 1
                        </a>
                          <p className="m-0 text-sm leading-normal">
                          Paradise Tower, next to MCDonalds, Thane West, Thane,
                          Maharashtra 400601
                        </p>
                        <a
                        href="tel:+919004001938"
                        className="text-[#ecf0f1] no-underline text-sm transition-colors hover:text-[#3498db]"
                      >
                        +91 9004001938
                      </a>

                      <div className="my-3 border-b border-dashed border-white/10"></div>

                      <a
                          href="https://maps.app.goo.gl/i7W3baVVS1mDLmTJ9"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open Mumbai Office 2 location in Google Maps"
                          className="text-base font-semibold text-[#5dade2] m-0 mb-1.5 block text-decoration-none"
                        >
                          Mumbai Office 2
                        </a>
                        <p className="m-0 text-sm leading-normal mt-2">
                          4th Floor, Ram Niwas, B-404, Gokhale Rd, near
                          McDonald's, Dada Patil Wadi, Naupada, Thane West, Thane,
                          Maharashtra 400602
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-[#3498db] text-lg min-w-[18px]"
                      />
                      <a
                        href="tel:+919004005382"
                        className="text-[#ecf0f1] no-underline text-sm transition-colors hover:text-[#3498db]"
                      >
                        +91 9004005382
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-5 text-center pt-5 border-t border-white/10">
          <p className="m-0 text-xs text-[#95a5a6]">
            &copy; 2026 Connecting Dots ERP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
