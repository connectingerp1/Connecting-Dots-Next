"use client";
import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/HomePage/Placement.module.css";

const placementStories = [
  {
    name: "Preetesh Pardeshi",
    salary: "24 LPA",
    degree: "Trained on- SAP ABAP",
    company: "Placed in",
    logo: "/Placementsection/agconsultancy.avif",
    alt: "Agricultural consultancy logo",
    topImage: "/Placementsection/pic1pp.avif",
  },
  {
    name: "Nikhilesh Landge",
    salary: "12 LPA",
    degree: "Trained on- SAP SD",
    company: "Placed in",
    logo: "/Placementsection/cltech.avif",
    alt: "CLTech logo",
    topImage: "/Placementsection/pic2pp.avif",
  },
  {
    name: "Shubham Desale",
    salary: "9 LPA",
    degree: "Trained on- SAP MM",
    company: "Placed in",
    logo: "/Placementsection/deloitte1.avif",
    alt: "Deloitte logo",
    topImage: "/Placementsection/pic3pp.avif",
  },
  {
    name: "Nitesh Kumar",
    salary: "15 LPA",
    degree: "Trained on- SAP FICO",
    company: "Placed in",
    logo: "/Placementsection/marketlegos.avif",
    alt: "Market Legos logo",
    topImage: "/Placementsection/pic4pp.avif",
  },
  {
    name: "Seshu Tamma",
    salary: "11 LPA",
    degree: "Trained on- SAP Security",
    company: "Placed in",
    logo: "/Placementsection/deloitte1.avif",
    alt: "Deloitte logo",
    topImage: "/Placementsection/pic5pp.avif",
  },
  {
    name: "Sai Srujan",
    salary: "18 LPA",
    degree: "Trained on- SAP FICO",
    company: "Placed in",
    logo: "/Placementsection/deloitte1.avif",
    alt: "Deloitte logo",
    topImage: "/FeedbacksandReviews/review image 5.avif",
  },
];

// Function to divide array into chunks dynamically
const chunkArray = (array, size) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

const PlacementSection = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 576) {
        setCardsPerSlide(1); // Mobile: 1 card
      } else if (window.innerWidth < 992) {
        setCardsPerSlide(1); // Tablet: 2 cards
      } else {
        setCardsPerSlide(3); // Desktop: 3 cards
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const chunkedStories = chunkArray(placementStories, cardsPerSlide);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className={`${styles.placementSection} text-center`}>
      <h2 className={styles.sectionTitle}>OUR STUDENTS PLACED AT</h2>

      <Carousel
        indicators={false}
        controls={false}
        interval={3000}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {chunkedStories.map((storyChunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row className="justify-content-center">
              {storyChunk.map((story, storyIndex) => (
                <Col key={storyIndex} md={4} sm={6} xs={12} className="p-2">
                  <Card className={styles.studentPlacementCard}>
                    <Image
                      src={story.topImage}
                      alt={story.alt}
                      className={styles.topImage}
                      width={300}
                      height={200}
                    />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title>{story.name}</Card.Title>
                      <div className={styles.dottedUnderline}></div>

                      {/* FIXED: Moved content out of Card.Text to avoid <p> nesting violations */}
                      <div className="card-text-container">
                        <div>
                          <strong>Salary:</strong> {story.salary}
                        </div>
                        <div className="pt-2">{story.degree}</div>
                        <div className="d-flex align-items-center gap-2 pt-2">
                          <span className="fw-bold">{story.company}</span>
                          <Image
                            src={story.logo}
                            alt={story.company}
                            className={styles.companyIcon}
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default PlacementSection;
