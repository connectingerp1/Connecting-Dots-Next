"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState({
   dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsSidebarVisible(false);
  };

  const handleMouseEnter = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: true }));

  const handleMouseLeave = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: false }));

  const handleNavigation = (link, section) => {
    if (pathname !== link) {
      router.push(link);
      setTimeout(() => {
        window.location.hash = section;
        setIsSidebarVisible(false);
      }, 100);
    } else {
      window.location.hash = section;
      setIsSidebarVisible(false);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="headerNav">
        <Container fluid className="alignItemsCenter justifyContentBetween">
          <div className="logo">
            <Link href="/">
              <img src="/logo.avif" alt="Logo of Connecting Dots ERP" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <Button
            className="navbarToggler"
            aria-controls="basicNavbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <span className="navbarTogglerIcon"></span>
          </Button>

          <Nav className="navbarNav justifyContentEnd flexGrow1 pe3 dNone dLgFlex">
            <div className="dropdownSap">
              <Link className="navLink" href="/sap-course-in-pune">
                SAP
              </Link>
            </div>
            <div className="dropdownItCourses">
              <Link className="navLink" href="/it-course-in-pune">
                IT Courses
              </Link>
            </div>
            <div className="dropdownDataVisualisation">
              <Link className="navLink" href="/data-visualisation-course-in-pune">
                Data Visualisation
              </Link>
            </div>
            <div className="dropdownDigitalMarketing">
              <Link className="navLink" href="/digital-marketing-course-in-pune">
                Digital Marketing
              </Link>
            </div>
            <div className="dropdownHrCourses">
              <Link className="navLink" href="/hr-course-in-pune">
                HR Courses
              </Link>
            </div>
            <div className="aboutUs">
              <Link className="navLink" href="/aboutus">
                About Us
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* Sidebar for Smaller Screens */}
      {isSidebarVisible && (
        <div className="sidebar">
          <div className="sidebarHeader">
            <Button className="btnClose" onClick={() => setIsSidebarVisible(false)} />
          </div>
          <Nav className="flexColumn">
            <Link className="navLink" href="/aboutus">
              About Us
            </Link>
            <Link className="navLink" href="/AdminLogin">
              Login
            </Link>
            <div className="dropdownSap">
              <Link className="navLink" href="/sap-course-in-pune">
                SAP
              </Link>
            </div>
            <div className="dropdownItCourses">
              <Link className="navLink" href="/it-course-in-pune">
                IT Courses
              </Link>
            </div>
            <div className="dropdownDataVisualisation">
              <Link className="navLink" href="/data-visualisation-course-in-pune">
                Data Visualisation
              </Link>
            </div>
            <div className="dropdownDigitalMarketing">
              <Link className="navLink" href="/digital-marketing-course-in-pune">
                Digital Marketing
              </Link>
            </div>
            <div className="dropdownHrCourses">
              <Link className="navLink" href="/hr-course-in-pune">
                HR Courses
              </Link>
            </div>
          </Nav>
        </div>
      )}
    </>
  );
};

export default Header;
