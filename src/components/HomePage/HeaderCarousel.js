"use client";

import { useEffect, useState } from "react";
import { Carousel, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/HomePage/HeaderCarousel.module.css";
import Btnform from "./Btnform";

const TEXTS1 = [
  "Connect Your Dots with SAP Expertise",
  "Connect Your Dots with Data Science",
  "Connect Your Dots in IT Excellence",
  "Connect Your Dots in Digital Marketing",
];

const IMAGES = [
  "/Headercarousel/SAP module1.avif",
  "/Headercarousel/DSh.avif",
  "/Headercarousel/IT.avif",
  "/Headercarousel/DGM.avif",
];

const HeaderCarousel = ({ scrollToPopCourses }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [index, setIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState({
    title:
      "Welcome to the <span style='color: #2277d3; font-weight: bold;'>Quiz!</span>",
    text: "Hover over or click a question button to see the question here.",
  });

  // Check if viewport is mobile-sized
  useEffect(() => {
    const checkMobileView = () => setIsMobileView(window.innerWidth <= 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % TEXTS1.length);
        setTextVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Lato&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const questionData = {
    Q1: {
      title:
        "Q.What is the function of an <span style='color: #2277d3; font-weight: bold;'>HR Payroll</span> system?",
      text: "The function of an <span style='color: #2277d3; font-weight: bold;'>HR payroll system</span> is to automate and manage employee compensation processes, including calculating wages, withholding taxes, and ensuring compliance with labor laws. It streamlines payroll operations, reduces errors, and provides accurate and timely payments to employees.",
    },
    Q2: {
      title:
        "Q.What is the purpose of the <span style='color: #2277d3; font-weight: bold;'>CO</span> module in <span style='color: #2277d3; font-weight: bold;'>SAP FICO</span>?",
      text: "The <span style='color: #2277d3; font-weight: bold;'>CO (Controlling)</span> module in <span style='color: #2277d3; font-weight: bold;'>SAP FICO</span> helps manage and monitor internal costs. It supports internal reporting by tracking and analyzing costs and revenues, aiding in budgeting, planning, and controlling operations to ensure effective cost management within an organization.",
    },
    Q3: {
      title:
        "Q.What is the role of <span style='color: #2277d3; font-weight: bold;'>Express.js</span> in the <span style='color: #2277d3; font-weight: bold;'>MERN</span> stack?",
      text: "<span style='color: #2277d3; font-weight: bold;'>Express.js</span> is a lightweight web application framework for Node.js, used in the <span style='color: #2277d3; font-weight: bold;'>MERN</span> stack. It simplifies the development of server-side applications by providing robust features for web and mobile applications, such as routing, middleware integration, and handling HTTP requests and responses.",
    },
  };

  const handleButtonClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Carousel className={styles.carousel}>
          <Carousel.Item>
            <div className={styles.carouselSlide}>
              <div className={styles.carouselText}>
                <h2>
                  Unlock your <span className={styles.highlight}>Career</span>{" "}
                  potential
                </h2>
                <h3>
                  <span className={styles.highlight}>No.1 Training &</span>{" "}
                  Placement Center
                </h3>
                <p>
                  For more than 10 years, we've been passionate about providing
                  engaging, instructor-led training that helps professionals
                  around the world grow and succeed.
                </p>
                <Col>
                  <p>
                    Est. 2013 Trusted by{" "}
                    <span className={styles.highlight}>10000+</span> Students
                  </p>
                </Col>
                <Button
                  className={`${styles.customBtn} ${styles.btn3}`}
                  onClick={handleButtonClick}
                >
                  <span>Free Consultation</span>
                </Button>

                <div className={styles.logoStrip}>
                  <img src="/Headercarousel/logo strip.avif" alt="companies" />
                </div>
              </div>
              <div className={styles.carouselImage}>
                <img
                  src="/Headercarousel/headerManimg.avif"
                  alt="Career Potential"
                />
              </div>
            </div>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <div className={styles.carouselSlide2}>
              <div className={styles.carouselText2}>
                <h2>
                  All Our <span className={styles.highlight}>Top Programs</span>{" "}
                  Include <br />
                  <span className={styles.highlight}>Generative AI </span>
                  Components
                </h2>
                <h1>
                  Be a Leader in your field <br />
                  <span className={styles.highlight}>
                    Change, Adapt, and Build
                  </span>{" "}
                  with AI.
                </h1>
                <div className="">
                  <Button
                    className={styles.slide2Btn}
                    onClick={scrollToPopCourses}
                  >
                    <span>Explore Our Top Programs</span>
                  </Button>
                </div>
              </div>
              <div className={styles.cardBox2}>
                <div className={styles.cardH2}>
                  <Card.Img
                    className={styles.transitionImage}
                    variant="top"
                    src={IMAGES[index]}
                    alt="Future Starts Here"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Third Slide (Only for Desktop View) */}
          {!isMobileView && (
            <Carousel.Item>
              <div className={styles.carouselSlide3}>
                <div className={styles.leftSideH3}>
                  <h1>
                    Secure your{" "}
                    <span className={styles.highlight}>Dream Career</span> with{" "}
                    <span className="bold">Live Classes</span> From Industry
                    Experts.
                  </h1>
                  <h2>
                    Our <span className={styles.highlight}>Mentors</span> Come
                    From Top <span className={styles.highlight}>MNCs</span>
                  </h2>
                  <div className="d-flex items-center">
                    <img
                      src="/Headercarousel/assurance.avif"
                      alt="Assurance badge"
                      className={styles.assuredPlacementImage}
                    />
                    <h2>Assured Placement Opportunity*</h2>
                  </div>
                </div>
                <div className={styles.cardBox3}>
                  <div className={styles.cardH3}>
                    <h2>Our Mentors Come From</h2>
                    <div className={styles.content3}>
                      <div className={styles.imageGrid}>
                        <img
                          src="/Headercarousel/ibm1.avif"
                          alt="ibm logo"
                          className={styles.gridImageIbm}
                        />
                        <img
                          src="/Headercarousel/tcs1.avif"
                          alt="tcs logo"
                          className={styles.gridImageTcs}
                        />
                        <img
                          src="/Headercarousel/LnT.avif"
                          alt="Lnt logo"
                          className={styles.gridImageLnt}
                        />
                        <img
                          src="/Headercarousel/amdocs1.avif"
                          alt="amdocs logo"
                          className={styles.gridImageAmd}
                        />
                        <img
                          src="/Headercarousel/infosys2.avif"
                          alt="Infosys logo"
                          className={styles.gridImageInfo}
                        />
                        <img
                          src="/Headercarousel/wipro.avif"
                          alt="wipro logo"
                          className={styles.gridImageWip}
                        />
                        <img
                          src="/Headercarousel/deloitte.avif"
                          alt="deloitte logo"
                          className={styles.gridImageDel}
                        />
                        <img
                          src="/Headercarousel/accenture1.avif"
                          alt="accenture logo"
                          className={styles.gridImageAcc}
                        />
                        <img
                          src="/Headercarousel/BMW.avif"
                          alt="bmw logo"
                          className={styles.gridImageBmw}
                        />
                        <img
                          src="/Headercarousel/cognizant1.avif"
                          alt="cognizant logo"
                          className={styles.gridImageCog}
                          loading="lazy"
                        />
                        <img
                          src="/Headercarousel/Cisco.avif"
                          alt="cisco logo"
                          className={styles.gridImageCis}
                        />
                        <img
                          src="/Headercarousel/TechM.avif"
                          alt="tech mahindra logo"
                          className={styles.gridImageTec}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          )}

          {/* Fourth Slide */}
          <Carousel.Item>
            <div className={styles.carouselSlide4}>
              <div className={styles.leftSideH}>
                <h1 dangerouslySetInnerHTML={{ __html: question.title }}></h1>
                <p dangerouslySetInnerHTML={{ __html: question.text }}></p>
                <div className={styles.quizOptions}>
                  <div className={styles.quizOption}>
                    <button
                      className={styles.circularButton}
                      onMouseEnter={() => setQuestion(questionData.Q1)}
                      onClick={() => setQuestion(questionData.Q1)}
                    >
                      Q1
                    </button>
                  </div>
                  <div className={styles.quizOption}>
                    <button
                      className={styles.circularButton}
                      onMouseEnter={() => setQuestion(questionData.Q2)}
                      onClick={() => setQuestion(questionData.Q2)}
                    >
                      Q2
                    </button>
                  </div>
                  <div className={styles.quizOption}>
                    <button
                      className={styles.circularButton}
                      onMouseEnter={() => setQuestion(questionData.Q3)}
                      onClick={() => setQuestion(questionData.Q3)}
                    >
                      Q3
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.rightSideH}>
                <img
                  src="/Headercarousel/quizbg.avif"
                  alt="quiz"
                  className="plants-image"
                />
                <button className={styles.goButton}>Quiz→</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {showForm && <Btnform onClose={handleCloseForm} />}
      </div>
    </>
  );
};

export default HeaderCarousel;
