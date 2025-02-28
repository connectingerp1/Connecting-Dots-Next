"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/HomePage/FeedbackandReviews.module.css";

const reviews = [
  {
    name: "Niveath P",
    review:
      "I completed the SAP HCM course at Connecting Dots ERP in Mumbai, where expert instructors guided me through SAP complexities with clarity. The comprehensive, well-designed course covered all essential modules.",
    image: "/FeedbacksandReviews/review image 3.avif",
  },
  {
    name: "Shweta Udainiya",
    review:
      "Connecting Dots Advancements offers top SAP training in Mumbai with expert coaches, flexible learning, and strong job support. I completed my SAP SD Course here, highly recommending it for a successful SAP career.",
    image: "/FeedbacksandReviews/review image 1.avif",
  },
  {
    name: "Seshu Tamma",
    review:
      "In my opinion, Connecting Dots is Mumbai's best SAP training center, offering top-notch SAP Aruba courses with a comprehensive curriculum, expert instructors, and excellent placement assistance.",
    image: "/FeedbacksandReviews/review image 2.avif",
  },
  {
    name: "Shreyansh Gupta",
    review:
      "Connecting Dots Advancements offers top SAP training in Mumbai with expert coaches, flexible learning, and strong job support. I completed my SAP SD Course here, highly recommending it for a successful SAP career.",
    image: "/FeedbacksandReviews/review image 4.avif",
  },
  {
    name: "Sai Srujan",
    review:
      "I completed the SAP HCM course at Connecting Dots ERP in Mumbai, where expert instructors guided me through SAP complexities with clarity. The comprehensive, well-designed course covered all essential modules.",
    image: "/FeedbacksandReviews/review image 5.avif",
  },
  {
    name: "Seshu Tamma",
    review:
      "In my opinion, Connecting Dots is Mumbai's best SAP training center, offering top-notch SAP Aruba courses with a comprehensive curriculum, expert instructors, and excellent placement assistance.",
    image: "/FeedbacksandReviews/review image 2.avif",
  },
];

const FeedbackAndReviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Toggle expand state for reviews
  const toggleExpand = useCallback((index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  // Handle clicks outside the review cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setExpandedIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Handle screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid className={styles.feedbackSection} ref={containerRef}>
      <h3 className={styles.sectionSubtitle}>FEEDBACKS & REVIEWS</h3>
      <Carousel
        activeIndex={selectedIndex}
        onSelect={setSelectedIndex}
        indicators={false}
        controls={false}
      >
        {isMobile
          ? reviews.map((review, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  <Col xs={12} className="d-flex justify-content-center mb-4">
                    <Card
                      className={`${styles.feedbackCard} ${
                        expandedIndex === index ? styles.expanded : ""
                      }`}
                      onClick={() => toggleExpand(index)}
                    >
                      <div className={`${styles.cardBodyWrapper}`}>
                        <div className={styles.imgContainer}>
                          <Image
                            src={review.image}
                            alt={review.name}
                            width={80}
                            height={80}
                            className={styles.reviewImage}
                          />
                          <Image
                            src="/FeedbacksandReviews/google-logo.avif"
                            alt="Google Logo"
                            width={50}
                            height={50}
                            className={styles.googleLogo}
                          />
                        </div>
                        <Card.Body className={styles.cardContent}>
                          <i className={`fa fa-quote-left ${styles.icon}`}></i>
                          <Card.Title className={styles.reviewName}>
                            {review.name}
                          </Card.Title>
                          <Card.Text className={styles.reviewText}>
                            {expandedIndex === index
                              ? review.review
                              : `${review.review.substring(0, 80)}...`}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))
          : reviews.reduce((acc, review, index) => {
              if (index % 3 === 0) {
                acc.push(
                  <Carousel.Item key={index}>
                    <Row className="justify-content-center">
                      {[index, index + 1, index + 2].map((i) => (
                        <Col
                          key={i}
                          md={4}
                          xs={12}
                          className="d-flex justify-content-center mb-4"
                        >
                          {reviews[i] && (
                            <Card
                              className={`${styles.feedbackCard} ${
                                expandedIndex === i ? styles.expanded : ""
                              }`}
                              onClick={() => toggleExpand(i)}
                            >
                              <div
                                className={`${styles.cardBodyWrapper} d-flex`}
                              >
                                <div className={styles.imgContainer}>
                                  <Image
                                    src={reviews[i].image}
                                    alt={reviews[i].name}
                                    width={80}
                                    height={80}
                                    className={styles.reviewImage}
                                  />
                                  <Image
                                    src="/FeedbacksandReviews/google-logo.avif"
                                    alt="Google Logo"
                                    width={50}
                                    height={50}
                                    className={styles.googleLogo}
                                  />
                                </div>
                                <Card.Body>
                                  <i
                                    className={`fa fa-quote-left ${styles.icon}`}
                                  ></i>
                                  <Card.Title className={styles.reviewName}>
                                    {reviews[i].name}
                                  </Card.Title>
                                  <Card.Text className={styles.reviewText}>
                                    {expandedIndex === i
                                      ? reviews[i].review
                                      : `${reviews[i].review.substring(
                                          0,
                                          80
                                        )}...`}
                                  </Card.Text>
                                </Card.Body>
                              </div>
                            </Card>
                          )}
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                );
              }
              return acc;
            }, [])}
      </Carousel>
    </Container>
  );
};

export default FeedbackAndReviews;
