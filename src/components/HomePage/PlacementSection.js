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
    alt: "Logo of an agricultural consultancy featuring modern design elements and earthy color tones, symbolizing growth and expertise.",
    topImage: "/Placementsection/pic1pp.avif",
  },
  {
    name: "Nikhilesh Landge",
    salary: "12 LPA",
    degree: "Trained on- SAP SD",
    company: "Placed in",
    logo: "/Placementsection/cltech.avif",
    alt: "Logo of CLTech, a tech support company, featuring modern design elements and a professional color palette.",
    topImage: "/Placementsection/pic2pp.avif",
  },
  {
    name: "Shubham Desale",
    salary: "9 LPA",
    degree: "Trained on- SAP MM",
    company: "Placed in",
    logo: "/Placementsection/deloitte1.avif",
    alt: "Deloitte logo displayed prominently on a sleek black background, emphasizing the brands professional identity.",
    topImage: "/Placementsection/pic3pp.avif",
  },
  {
    name: "Nitesh Kumar",
    salary: "15 LPA",
    degree: "Trained on- SAP FICO",
    company: "Placed in",
    logo: "/Placementsection/marketlegos.avif",
    alt: "Market Legos logo displayed prominently on a sleek black background, emphasizing its modern design and branding.",
    topImage: "/Placementsection/pic4pp.avif",
  },
  {
    name: "Seshu Tamma",
    salary: "11 LPA",
    degree: "Trained on- SAP Security",
    company: "Placed in",
    logo: "/Placementsection/deloitte1.avif",
    alt: "Deloitte logo displayed prominently on a sleek black background, emphasizing the brands professional identity.",
    topImage: "/Placementsection/pic5pp.avif",
  },
  {
    name: "Sai Srujan",
    salary: "18 LPA",
    degree: "Trained on- SAP FICO",
    company: "Placed in",
    logo: "/Placementsection/deloitte1.avif",
    alt: "Deloitte logo displayed prominently on a sleek black background, emphasizing the brands professional identity.",
    topImage: "/FeedbacksandReviews/review image 5.avif",
  },
];

const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, size + i));
  }
  return chunked;
};

const PlacementSection = () => {
  const [index, setIndex] = useState(0);
  const chunkedStoriesDesktop = chunkArray(placementStories, 3);
  const chunkedStoriesMobile = chunkArray(placementStories, 1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className={`${styles.placementSection} text-center`}>
      <h2 className={styles.sectionTitle}>OUR STUDENTS PLACED AT</h2>
      <Carousel
        indicators={false}
        controls={true}
        className="d-none d-md-block"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {chunkedStoriesDesktop.map((storyChunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row>
              {storyChunk.map((story, storyIndex) => {
                const cardClassName = `${styles.studentPlacementCard} ${
                  styles[`card-${chunkIndex * 3 + storyIndex}`]
                }`;
                return (
                  <Col key={storyIndex} md={4} className="p-2">
                    <Card className={cardClassName}>
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
                        <Card.Text>
                          <div>
                            <strong>Salary:</strong> {story.salary}
                          </div>
                          <div className="pt-2">{story.degree}</div>
                          <div className="flex gap-2r">
                            {" "}
                            <h6 className="pt-3"> {story.company} </h6>{" "}
                            <Image
                              src={story.logo}
                              alt={story.company}
                              className={styles.companyIcon}
                              width={50}
                              height={50}
                            />
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel
        indicators={false}
        controls={false}
        interval={3000}
        className="d-block d-md-none"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {chunkedStoriesMobile.map((storyChunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {storyChunk.map((story, storyIndex) => {
                const cardClassName = `${styles.studentPlacementCard} ${
                  styles[`card-${index * 1 + storyIndex}`]
                }`;
                return (
                  <Col key={storyIndex} xs={12} className="p-2 d-flex justify-center">
                    <Card className={cardClassName}>
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
                        <Card.Text>
                          <div>
                            <strong>Salary:</strong> {story.salary}
                          </div>
                          <div className="pt-2">{story.degree}</div>
                          <div className="flex gap-2">
                            {" "}
                            <h6 className="pt-3"> {story.company} </h6>{" "}
                            <Image
                              src={story.logo}
                              alt={story.company}
                              className={styles.companyIcon}
                              width={50}
                              height={50}
                            />
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className={styles.radioButtons}>
        {chunkedStoriesDesktop.map((_, btnIndex) => (
          <input
            type="radio"
            name="carousel-btn"
            key={btnIndex}
            checked={index === btnIndex}
            onChange={() => handleSelect(btnIndex)}
          />
        ))}
      </div>
    </Container>
  );
};

export default PlacementSection;
