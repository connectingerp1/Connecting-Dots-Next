"use client";

import { useState, useEffect } from "react";
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
import styles from "@/styles/Common/Footer.module.css";

const Footer = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <Image
                src="/Footer/cdots.avif"
                alt="Connecting Dots ERP logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>
          <div className={`${styles.socialIcons} flex`}>
            <Link href="https://www.facebook.com/sapinstallation.pune.9">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="hover:text-blue-600 transition duration-300"
              />
            </Link>
            <Link href="https://wa.me/919004002941">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="hover:text-green-500 transition duration-300"
              />
            </Link>
            <Link href="https://youtube.com/@connectingdotserp?si=hSKEiEg3MdytdEe_">
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:text-red-600 transition duration-300"
              />
            </Link>
            <Link href="https://in.linkedin.com/in/connecting-dots-erp-043039171">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="hover:text-blue-700 transition duration-300"
              />
            </Link>
            <Link href="https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-pink-500 transition duration-300"
              />
            </Link>
          </div>
        </div>

        <div className={styles.columns}>
          {/* SAP COURSES */}
          <div className={styles.widget}>
            <div className={styles.headline}>
              <h3>SAP COURSES</h3>
            </div>
            <div
              className={`${styles.footerDropdown} ${
                isMobileView ? styles.mobileView : ""
              }`}
            >
              <div className={styles.courseCategories}>
                <div className={styles.sapFunctional}>
                  <h6>SAP FUNCTIONAL COURSES</h6>
                  <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                      <Link href="/sap-fico-course-in-pune">
                        SAP FICO COURSE
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-ariba-course-in-pune">
                        SAP ARIBA COURSE
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-sd-course-in-pune">SAP SD COURSE</Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-mm-course-in-pune">SAP MM COURSE</Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-pp-course-in-pune">SAP PP COURSE</Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-hcm-course-in-pune">
                        SAP HR/HCM COURSE
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-qm-course-in-pune">SAP QM COURSE</Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-pm-course-in-pune">SAP PM COURSE</Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-scm-course-in-pune">SAP SCM COURSE</Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-ewm-course-in-pune">SAP EWM COURSE</Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-successfactors-course-in-pune">
                        SAP SUCCESSFACTOR COURSE
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.sapTechnical}>
                  <h6>SAP TECHNICAL COURSES</h6>
                  <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                      <Link href="/sap-abap-course-in-pune">
                        SAP ABAP COURSE
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-basis-course-in-pune">
                        SAP BASIS COURSE
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-bwbi-course-in-pune">
                        SAP BW/BI COURSE
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-s4-hana-course-in-pune">
                        SAP S/4 HANA COURSE
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/sap-netweaver-course-in-pune">
                        SAP NETWEAVER COURSE
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* IT COURSES */}
          <div className={styles.widget}>
            <div className={styles.headline}>
              <h3>IT COURSES</h3>
            </div>
            <div
              className={`${styles.footerDropdown} ${
                isMobileView ? styles.mobileView : ""
              }`}
            >
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link href="/full-stack-developer-course-in-pune">
                    FULL STACK TRAINING
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/java-course-in-pune">JAVA</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/mern-stack-course-in-pune">MERN STACK</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/ui-ux-course-in-pune">UI/UX DESIGN</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/python-course-in-pune">PYTHON</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/salesforce-training-in-pune">SALESFORCE</Link>
                </li>
              </ul>
            </div>
            {/* ABOUT */}
            <div className={styles.widgetAbout}>
              <div className={styles.headline}>
                <h3>About</h3>
              </div>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link href="/aboutus">ABOUT US</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/blogs">BLOG</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/contactus">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* DIGITAL MARKETING COURSES */}
          <div className={styles.widget}>
            <div className={styles.headline}>
              <h3>DIGITAL MARKETING COURSES</h3>
            </div>
            <div
              className={`${styles.footerDropdown} ${
                isMobileView ? styles.mobileView : ""
              }`}
            >
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link href="/digital-marketing-course-in-pune">
                    ADVANCE DIGITAL MARKETING
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/digital-marketing-course-in-pune">
                    PAY PER CLICK TRAINING
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/digital-marketing-course-in-pune">
                    SEARCH ENGINE OPTIMIZATION
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/digital-marketing-course-in-pune">
                    SOCIAL MEDIA MARKETING
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/digital-marketing-course-in-pune">
                    ADVANCE ANALYTICS TRAINING
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* DATA SCIENCE COURSES */}
          <div className={styles.widget}>
            <div className={styles.headline}>
              <h3>DATA SCIENCE COURSES</h3>
            </div>
            <div
              className={`${styles.footerDropdown} ${
                isMobileView ? styles.mobileView : ""
              }`}
            >
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link href="/data-science-course-in-pune">
                    MASTERS IN DATA ANALYTICS
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/data-analytics-course-in-pune">
                    MASTERS IN DATA SCIENCE
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/business-analytics-course-in-pune">
                    MASTERS IN BUSINESS ANALYTICS
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/chatgpt-course-in-pune">CHAT GPT & AI</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* DATA VISUALISATION COURSES */}
          <div className={styles.widget}>
            <div className={styles.headline}>
              <h3>DATA VISUALISATION COURSES</h3>
            </div>
            <div
              className={`${styles.footerDropdown} ${
                isMobileView ? styles.mobileView : ""
              }`}
            >
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link href="/powerbi-course-in-pune">POWER BI</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/tableau-training-in-pune">TABLEAU</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/sql-course-in-pune">SQL</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* HR COURSES */}
          <div className={styles.widget}>
            <div className={styles.headline}>
              <h3>HR COURSES</h3>
            </div>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <Link href="/hr-training-course-in-pune">HR TRAINING</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/core-hr-course-in-pune">CORE HR</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/hr-payroll-course-in-pune">HR PAYROLL</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/hr-management-course-in-pune">HR MANAGEMENT</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/sap-hr-hcm-course-in-pune">SAP HR/HCM</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/hr-analytics-course-in-pune">HR ANALYTICS</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTACT US */}
        <div className={styles.contactUs}>
          <ul className={styles.menuContactUs}>
            {/* Additional menu items if required */}
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Connecting Dots ERP. All Rights Reserved.</p>
          <p className={styles.menuItem}>
            Address: 1st Floor,101, Police, Wireless Colony, Vishal Nagar,
            Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
