"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  BadgeCheck,
  BarChart3,
  Braces,
  Building2,
  Cloud,
  Code2,
  Database,
  Factory,
  FileText,
  Leaf,
  LineChart,
  Network,
  Package,
  ServerCog,
  ShieldCheck,
  Truck,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";
import styles from "@/styles/Common/Navbar.module.css";

// Dynamic import for AnimatedLogo
import dynamic from "next/dynamic";
const AnimatedLogo = dynamic(() => import("../AnimatedLogo"), {
  ssr: false,
  loading: () => <div className={styles.animatedLogoPlaceholder} />,
});

// Custom component definitions
const Navbar = ({ expand, className, children, ref }) => (
  <nav
    className={`${styles.navbar} ${
      expand
        ? styles[
            `navbarExpand${expand.charAt(0).toUpperCase() + expand.slice(1)}`
          ]
        : ""
    } ${className || ""}`}
    ref={ref}
  >
    {children}
  </nav>
);

const Container = ({ fluid, className, children }) => (
  <div
    className={`${fluid ? styles.containerFluid : styles.container} ${
      className || ""
    }`}
  >
    {children}
  </div>
);

const Nav = ({ className, children }) => (
  <div className={`${styles.nav} ${className || ""}`}>{children}</div>
);

const Button = ({ className, onClick, children, ...props }) => (
  <button
    className={`${styles.btn} ${className || ""}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const sapMenuSections = [
  {
    title: "SAP Functional",
    description: "Business & Process Oriented Solutions",
    Icon: UsersRound,
    items: [
      {
        name: "SAP FICO",
        link: "/sap-fico-course-in-pune",
        Icon: LineChart,
        color: "teal",
      },
      {
        name: "SAP Ariba",
        link: "/sap-ariba-course-in-pune",
        Icon: BadgeCheck,
        color: "yellow",
      },
      {
        name: "SAP MM",
        link: "/sap-mm-course-in-pune",
        Icon: Package,
        color: "orange",
      },
      {
        name: "SAP SD",
        link: "/sap-sd-course-in-pune",
        Icon: FileText,
        color: "cyan",
      },
      {
        name: "SAP HR/HCM",
        link: "/sap-hr-hcm-course-in-pune",
        Icon: UserRound,
        color: "violet",
      },
      {
        name: "SAP PP",
        link: "/sap-pp-course-in-pune",
        Icon: Factory,
        color: "purple",
      },
      {
        name: "SAP QM",
        link: "/sap-qm-course-in-pune",
        Icon: ShieldCheck,
        color: "blue",
      },
      {
        name: "SAP PM",
        link: "/sap-pm-course-in-pune",
        Icon: Wrench,
        color: "green",
      },
      {
        name: "SAP PS",
        link: "/sap-ps-course-in-pune",
        Icon: FileText,
        color: "pink",
      },
      {
        name: "SAP EWM",
        link: "/sap-ewm-course-in-pune",
        Icon: Truck,
        color: "orange",
      },
      {
        name: "SAP SCM",
        link: "/sap-scm-course-in-pune",
        Icon: Network,
        color: "sky",
      },
      {
        name: "SAP BTP",
        link: "/sap-btp-course-in-pune",
        Icon: Cloud,
        color: "blue",
      },
      {
        name: "SAP EHS",
        link: "/sap-ehs-course-in-pune",
        Icon: Leaf,
        color: "green",
      },
      {
        name: "SAP GRC",
        link: "/sap-grc-course-in-pune",
        Icon: ShieldCheck,
        color: "violet",
      },
      {
        name: "SAP IBP",
        link: "/sap-ibp-course-in-pune",
        Icon: BarChart3,
        color: "indigo",
      },
      {
        name: "SAP SUCCESSFACTOR",
        link: "/sap-successfactors-course-in-pune",
        Icon: UsersRound,
        color: "orange",
      },
    ],
  },
  {
    title: "SAP Technical",
    description: "Technology & Development Focused",
    Icon: Code2,
    items: [
      {
        name: "SAP ABAP",
        link: "/sap-abap-course-in-pune",
        Icon: Braces,
        color: "indigo",
      },
      {
        name: "SAP S/4 HANA",
        link: "/sap-s4-hana-course-in-pune",
        Icon: Building2,
        color: "blue",
        sapBadge: true,
      },
      {
        name: "SAP BW/BI",
        link: "/sap-bwbi-course-in-pune",
        Icon: Database,
        color: "violet",
      },
      {
        name: "SAP BASIS",
        link: "/sap-basis-course-in-pune",
        Icon: ServerCog,
        color: "orange",
      },
    ],
  },
];

// IT Courses with AI — grouped into mega-menu sections, same visual language as SAP
const itMenuSections = [
  {
    title: "AI & Data Programs",
    description: "Future-ready Skills Powered by AI",
    Icon: BarChart3,
    items: [
      {
        name: "Data Science with AI",
        link: "/data-science-with-ai-course-in-pune",
        Icon: Database,
        color: "blue",
      },
      {
        name: "Generative AI",
        link: "/generative-ai-course-in-pune",
        Icon: Network,
        color: "violet",
      },
      {
        name: "Agentic AI",
        link: "/agentic-ai-course-in-pune",
        Icon: ServerCog,
        color: "indigo",
      },
      {
        name: "Python with AI",
        link: "/python-with-ai-course-in-pune",
        Icon: Braces,
        color: "teal",
      },
      {
        name: "AIML",
        link: "/ai-ml-course-in-pune",
        Icon: BarChart3,
        color: "purple",
      },
      {
        name: "Advanced Data Analytics",
        link: "/advanced-data-analytics-with-generative-ai-course-in-pune",
        Icon: LineChart,
        color: "cyan",
      },
      {
        name: "Data Visualization with AI",
        link: "/data-visualization-with-ai-course-in-pune",
        Icon: FileText,
        color: "yellow",
      },
      {
        name: "Power BI",
        link: "/power-bi-course-in-pune",
        Icon: BarChart3,
        color: "orange",
      },
      {
        name: "Tableau",
        link: "/tableau-course-in-pune",
        Icon: LineChart,
        color: "sky",
      },
    ],
  },
  {
    title: "Development & Cloud",
    description: "Full-Stack, Cloud & Enterprise Tech",
    Icon: Code2,
    items: [
      {
        name: "Full-Stack with AI",
        link: "/full-stack-with-ai-course-in-pune",
        Icon: Code2,
        color: "blue",
        sapBadge: true,
      },
      {
        name: "JAVA",
        link: "/java-course-in-pune",
        Icon: Braces,
        color: "orange",
      },
      {
        name: "AWS",
        link: "/aws-course-in-pune",
        Icon: Cloud,
        color: "yellow",
      },
      {
        name: "DevOps",
        link: "/devops-course-in-pune",
        Icon: ServerCog,
        color: "green",
      },
      {
        name: "Salesforce",
        link: "/salesforce-course-in-pune",
        Icon: Building2,
        color: "sky",
      },
    ],
  },
];

// HR Courses — single mega-menu section, same visual language as SAP
const hrMenuSections = [
  {
    title: "HR Programs",
    description: "Human Resource Skills & Career Tracks",
    Icon: UsersRound,
    items: [
      {
        name: "HR Training",
        link: "/hr-training-course-in-pune",
        Icon: UserRound,
        color: "blue",
      },
      {
        name: "Core HR",
        link: "/core-hr-course-in-pune",
        Icon: Building2,
        color: "teal",
      },
      {
        name: "HR Payroll",
        link: "/hr-payroll-course-in-pune",
        Icon: FileText,
        color: "orange",
      },
      {
        name: "HR Management",
        link: "/hr-management-course-in-pune",
        Icon: UsersRound,
        color: "violet",
      },
      {
        name: "HR Generalist",
        link: "/hr-generalist-course-in-pune",
        Icon: BadgeCheck,
        color: "yellow",
      },
      {
        name: "HR Analytics",
        link: "/hr-analytics-course-in-pune",
        Icon: BarChart3,
        color: "indigo",
      },
    ],
  },
];

// Shared renderer for a mega-menu section (used by SAP, IT, and HR dropdowns)
const renderMegaMenuSections = (sections, onItemClick) =>
  sections.map((section) => {
    const SectionIcon = section.Icon;

    return (
      <li key={section.title} className={styles.sapMenuColumn}>
        <div className={styles.sapMenuHeader}>
          <span className={styles.sapHeaderIcon}>
            <SectionIcon aria-hidden="true" size={25} strokeWidth={2} />
          </span>
          <span>
            <span className={styles.sapMenuTitle}>{section.title}</span>
            <span className={styles.sapMenuSubtitle}>
              {section.description}
            </span>
          </span>
        </div>
        <ul className={styles.sapMenuGrid}>
          {section.items.map((item) => {
            const ItemIcon = item.Icon;

            return (
              <li key={item.name}>
                <Link
                  className={styles.sapMenuLink}
                  href={item.link}
                  onClick={() => onItemClick(item.link)}
                >
                  <span
                    className={`${styles.sapItemIcon} ${
                      styles[`sapIcon${item.color}`]
                    } ${item.sapBadge ? styles.sapSapBadge : ""}`}
                  >
                    {item.sapBadge ? (
                      <span className={styles.sapLogoMark}>AI</span>
                    ) : (
                      <ItemIcon aria-hidden="true" size={18} strokeWidth={2} />
                    )}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  });

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState({
    dropdown2: false,
    dropdown3: false,
    dropdown5: false,
    dropdown6: false,
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchMoveX, setTouchMoveX] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [floatingNav, setFloatingNav] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);
  const sidebarWidthRef = useRef(0);

  // Set active link based on current pathname
  useEffect(() => {
    if (pathname) {
      if (pathname.includes("sap-course")) {
        setActiveLink("dropdown2");
      } else if (pathname.includes("it-course")) {
        setActiveLink("dropdown3");
      } else if (
        pathname.includes("data-visualization") ||
        pathname.includes("tableau") ||
        pathname.includes("power-bi") ||
        pathname.includes("sql-course")
      ) {
        setActiveLink("dropdown3");
      } else if (
        pathname.includes("hr-training") ||
        pathname.includes("hr-course")
      ) {
        setActiveLink("dropdown6");
      } else if (pathname.includes("placements")) {
        setActiveLink("placements");
      } else if (pathname.includes("aboutus")) {
        setActiveLink("aboutus");
      } else {
        setActiveLink("");
      }
    }
  }, [pathname]);

  // Enhanced scroll effect for smoother floating navbar transition
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const isScrolled = scrollY > 50;
          const shouldFloat = scrollY > 150;

          setScrolled(isScrolled);

          if (shouldFloat !== floatingNav) {
            setIsTransitioning(true);
            setFloatingNav(shouldFloat);

            // Reset transition state after animation completes
            setTimeout(() => {
              setIsTransitioning(false);
            }, 600);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [floatingNav]);

  const closeSidebar = useCallback(() => {
    setIsSidebarVisible(false);
    setMobileOpenDropdown(null);
    document.body.style.overflow = "";
    if (sidebarRef.current) {
      sidebarRef.current.style.transition = "";
      sidebarRef.current.style.transform = "";
    }
  }, []);

  // Handle click outside sidebar to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebarVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.navbarToggler}`)
      ) {
        closeSidebar();
      }
    }

    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, {
        passive: true,
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isSidebarVisible, closeSidebar]);

  // Add effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isSidebarVisible) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarVisible, closeSidebar]);

  // Add effect to manage overlay and body scroll
  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarVisible]);

  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isSidebarVisible) {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarVisible, closeSidebar]);

  const handleNavClick = useCallback(
    (link) => {
      setActiveLink(link);
      closeSidebar();
    },
    [closeSidebar]
  );

  const handleMouseEnter = useCallback((dropdown) => {
    if (window.innerWidth >= 992) {
      setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: true }));
    }
  }, []);

  const handleMouseLeave = useCallback((dropdown) => {
    if (window.innerWidth >= 992) {
      setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: false }));
    }
  }, []);

  const handleMobileDropdownToggle = useCallback(
    (dropdown) => {
      if (window.innerWidth < 992) {
        setMobileOpenDropdown(
          mobileOpenDropdown === dropdown ? null : dropdown
        );
      }
    },
    [mobileOpenDropdown]
  );

  const handleNavigation = useCallback(
    (link, section) => {
      const linkBasePath = link.split("#")[0];
      if (pathname !== linkBasePath) {
        router.push(linkBasePath).then(() => {
          if (section) {
            setTimeout(() => {
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
          }
          closeSidebar();
        });
      } else {
        if (section) {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        closeSidebar();
      }
    },
    [pathname, router, closeSidebar]
  );

  // Touch gesture handlers
  const handleTouchStart = useCallback((e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchMoveX(e.touches[0].clientX);
    if (sidebarRef.current) {
      sidebarWidthRef.current = sidebarRef.current.offsetWidth;
      sidebarRef.current.style.transition = "none";
    }
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (touchStartX === null || !sidebarRef.current) return;
      const currentX = e.touches[0].clientX;
      setTouchMoveX(currentX);

      const deltaX = currentX - touchStartX;
      const sidebarElement = sidebarRef.current;

      if (deltaX > 0) {
        sidebarElement.style.transform = `translateX(${deltaX}px)`;
      } else {
        sidebarElement.style.transform = `translateX(0px)`;
      }
    },
    [touchStartX]
  );

  const handleTouchEnd = useCallback(() => {
    if (touchStartX === null || !sidebarRef.current) return;
    const sidebarElement = sidebarRef.current;
    const deltaX = touchMoveX - touchStartX;

    if (sidebarRef.current) {
      sidebarRef.current.style.transition = "";
    }

    const threshold = sidebarWidthRef.current * 0.4;

    if (deltaX > threshold) {
      closeSidebar();
    } else {
      sidebarElement.style.transform = `translateX(0px)`;
    }
    setTouchStartX(null);
    setTouchMoveX(null);
  }, [touchStartX, touchMoveX, closeSidebar]);

  // Dropdown render functions
  const renderDropdownSAP = (isMobile = false) => (
    <div
      className={styles.dropdown}
      onMouseEnter={() => handleMouseEnter("dropdown2")}
      onMouseLeave={() => handleMouseLeave("dropdown2")}
    >
      <div className={styles.dropdownToggleWrapper}>
        <Link
          href="/sap-course-in-pune"
          className={`${styles.navLink} ${styles.dropdownToggle} ${
            activeLink === "dropdown2" ? styles.active : ""
          }`}
          id="dropdownMenuButton2"
          onClick={(e) => {
            if (isMobile) {
              e.preventDefault();
              handleMobileDropdownToggle("dropdown2");
            } else {
              handleNavClick("/sap-course-in-pune");
            }
          }}
          aria-expanded={
            (isMobile && mobileOpenDropdown === "dropdown2") ||
            (!isMobile && isDropdownVisible.dropdown2)
              ? "true"
              : "false"
          }
          aria-haspopup="true"
        >
          <span>SAP S/4 HANA</span>
          {!isMobile && <span className={styles.desktopDropdownArrow}></span>}
        </Link>
        {isMobile && (
          <button
            className={styles.mobileDropdownArrow}
            onClick={() => handleMobileDropdownToggle("dropdown2")}
            aria-label="Toggle SAP menu"
          >
            <span
              className={`${styles.arrow} ${
                mobileOpenDropdown === "dropdown2"
                  ? styles.arrowUp
                  : styles.arrowDown
              }`}
            ></span>
          </button>
        )}
      </div>
      {((isMobile && mobileOpenDropdown === "dropdown2") ||
        (!isMobile && isDropdownVisible.dropdown2)) && (
        <ul
          className={`${styles.dropdownMenu} ${styles.sapMegaMenu} ${styles.show}`}
          aria-labelledby="dropdownMenuButton2"
        >
          {renderMegaMenuSections(sapMenuSections, handleNavClick)}
        </ul>
      )}
    </div>
  );

  const renderDropdownITCourses = (isMobile = false) => (
    <div
      className={styles.dropdown}
      onMouseEnter={() => handleMouseEnter("dropdown3")}
      onMouseLeave={() => handleMouseLeave("dropdown3")}
    >
      <div className={styles.dropdownToggleWrapper}>
        <Link
          href="/it-course-with-ai-in-pune"
          className={`${styles.navLink} ${styles.dropdownToggle} ${
            activeLink === "dropdown3" ? styles.active : ""
          }`}
          id="dropdownMenuButton3"
          onClick={(e) => {
            if (isMobile) {
              e.preventDefault();
              handleMobileDropdownToggle("dropdown3");
            } else {
              handleNavClick("/it-course-with-ai-in-pune");
            }
          }}
          aria-expanded={
            (isMobile && mobileOpenDropdown === "dropdown3") ||
            (!isMobile && isDropdownVisible.dropdown3)
              ? "true"
              : "false"
          }
          aria-haspopup="true"
        >
          <span>IT Courses with AI</span>
          {!isMobile && <span className={styles.desktopDropdownArrow}></span>}
        </Link>
        {isMobile && (
          <button
            className={styles.mobileDropdownArrow}
            onClick={() => handleMobileDropdownToggle("dropdown3")}
            aria-label="Toggle IT Courses menu"
          >
            <span
              className={`${styles.arrow} ${
                mobileOpenDropdown === "dropdown3"
                  ? styles.arrowUp
                  : styles.arrowDown
              }`}
            ></span>
          </button>
        )}
      </div>
      {((isMobile && mobileOpenDropdown === "dropdown3") ||
        (!isMobile && isDropdownVisible.dropdown3)) && (
        <ul
          className={`${styles.dropdownMenu} ${styles.sapMegaMenu} ${styles.itMegaMenu} ${styles.show}`}
          aria-labelledby="dropdownMenuButton3"
        >
          {renderMegaMenuSections(itMenuSections, handleNavClick)}
        </ul>
      )}
    </div>
  );

  const renderDropdownHRCourses = (isMobile = false) => (
    <div
      className={styles.dropdown}
      onMouseEnter={() => handleMouseEnter("dropdown6")}
      onMouseLeave={() => handleMouseLeave("dropdown6")}
    >
      <div className={styles.dropdownToggleWrapper}>
        <Link
          href="/hr-training-course-in-pune"
          className={`${styles.navLink} ${styles.dropdownToggle} ${
            activeLink === "dropdown6" ? styles.active : ""
          }`}
          id="dropdownMenuButton6"
          onClick={(e) => {
            if (isMobile) {
              e.preventDefault();
              handleMobileDropdownToggle("dropdown6");
            } else {
              handleNavClick("/hr-training-course-in-pune");
            }
          }}
          aria-expanded={
            (isMobile && mobileOpenDropdown === "dropdown6") ||
            (!isMobile && isDropdownVisible.dropdown6)
              ? "true"
              : "false"
          }
          aria-haspopup="true"
        >
          <span>HR Courses</span>
          {!isMobile && <span className={styles.desktopDropdownArrow}></span>}
        </Link>
        {isMobile && (
          <button
            className={styles.mobileDropdownArrow}
            onClick={() => handleMobileDropdownToggle("dropdown6")}
            aria-label="Toggle HR Courses menu"
          >
            <span
              className={`${styles.arrow} ${
                mobileOpenDropdown === "dropdown6"
                  ? styles.arrowUp
                  : styles.arrowDown
              }`}
            ></span>
          </button>
        )}
      </div>
      {((isMobile && mobileOpenDropdown === "dropdown6") ||
        (!isMobile && isDropdownVisible.dropdown6)) && (
        <ul
          className={`${styles.dropdownMenu} ${styles.sapMegaMenu} ${styles.hrMegaMenu} ${styles.show}`}
          aria-labelledby="dropdownMenuButton6"
        >
          {renderMegaMenuSections(hrMenuSections, handleNavClick)}
        </ul>
      )}
    </div>
  );

  return (
    <>
      <Navbar
        expand="lg"
        className={`${styles.headerNav} ${scrolled ? styles.scrolled : ""} ${
          floatingNav ? styles.floating : ""
        } ${isTransitioning ? styles.transitioning : ""}`}
        ref={navbarRef}
      >
        <Container fluid className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <AnimatedLogo className={styles.animatedLogo} />
              <div className={styles.logoWrapper}>
                <Image
                  src="https://res.cloudinary.com/df65lfym1/image/upload/v1778307259/logo_rju9sa.webp"
                  alt="Logo of Connecting Dots ERP"
                  width={120}
                  height={60}
                  priority
                  className={styles.logoImage}
                  sizes="120px"
                />
              </div>
            </Link>
          </div>

          {/* Hamburger Button */}
          <Button
            className={`${styles.navbarToggler} ${
              isSidebarVisible ? styles.navbarTogglerOpen : ""
            }`}
            aria-controls="basic-navbar-nav"
            aria-expanded={isSidebarVisible ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <span className={styles.navbarTogglerIcon}></span>
          </Button>

          <Nav className={styles.navbarDesktop}>
            {renderDropdownSAP()}
            {renderDropdownITCourses()}
            {renderDropdownHRCourses()}

            <div className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${
                  activeLink === "placements" ? styles.active : ""
                }`}
                href="/placements"
                onClick={() => handleNavClick("placements")}
              >
                Placements
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${
                  activeLink === "aboutus" ? styles.active : ""
                }`}
                href="/aboutus"
                onClick={() => handleNavClick("aboutus")}
              >
                About us
              </Link>
            </div>
            {!floatingNav && (
              <>
                <div className={styles.navAction}>
                  <Link href="/contactus" className={styles.ctaButton}>
                    Contact Us
                  </Link>
                </div>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Sidebar for Smaller Screens with Touch Support */}
      {isSidebarVisible && (
        <>
          <div
            className={`${styles.sidebarOverlay} ${styles.visible}`}
            onClick={closeSidebar}
            aria-hidden="true"
          />
          <aside
            className={`${styles.sidebar} ${styles.visible}`}
            ref={sidebarRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className={styles.sidebarHeader}>
              <div className={styles.mobileLogoContainer}>
                <Link
                  href="/"
                  className={styles.mobileLogo}
                  onClick={closeSidebar}
                >
                  <AnimatedLogo className={styles.sidebarLogo} />
                  <Image
                    src="https://res.cloudinary.com/df65lfym1/image/upload/v1778307259/logo_rju9sa.webp"
                    alt="Connecting Dots ERP Logo"
                    width={130}
                    height={100}
                    loading="lazy"
                    sizes="130px"
                  />
                </Link>
              </div>
              <Button
                className={styles.btnClose}
                onClick={closeSidebar}
                aria-label="Close navigation menu"
              />
            </div>

            <Nav className={styles.sidebarNav}>
              {renderDropdownSAP(true)}
              {renderDropdownITCourses(true)}
              {renderDropdownHRCourses(true)}

              <div className={styles.mobileQuickLinks}>
                <Link
                  href="/placements"
                  onClick={() => handleNavClick("placements")}
                  className={`${styles.mobileQuickLink} ${
                    activeLink === "placements"
                      ? styles.mobileQuickLinkActive
                      : ""
                  }`}
                >
                  Placements
                </Link>
                <Link
                  href="/aboutus"
                  onClick={() => handleNavClick("aboutus")}
                  className={`${styles.mobileQuickLink} ${
                    activeLink === "aboutus"
                      ? styles.mobileQuickLinkActive
                      : ""
                  }`}
                >
                  About us
                </Link>

                <Link
                  href="/contactus"
                  onClick={() => handleNavClick("contact")}
                  className={`${styles.mobileQuickLink} ${styles.mobileContactLink}`}
                >
                  Contact Us
                </Link>
              </div>
            </Nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;