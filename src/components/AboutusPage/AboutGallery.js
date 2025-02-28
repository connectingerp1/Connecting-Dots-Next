import React from "react";
import { Carousel, CarouselItem, Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/AboutPage/AboutGallery.module.css";

// Debugging: Check if Carousel is properly imported
console.log("Carousel:", Carousel);
console.log("Carousel.Item:", CarouselItem);

const images = [
  "/Acheivements/ach1.avif",
  "/Acheivements/ach1.avif",
  "/Acheivements/ach1.avif",
  "/Acheivements/ach2.avif",
  "/Acheivements/ach3.avif",
  "/Acheivements/ach4.avif",
  "/Acheivements/ach5.avif",
  "/Acheivements/ach6.avif",
];

const Gallery = () => {
  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  return (
    <Container className={`my-5 ${styles.galleryContainer}`}>
      <div className={styles.galleryTitleAbout}>
        <h2 className={styles.galleryTitle}>Our Gallery</h2>
      </div>
      <Carousel indicators={false} controls={true} interval={null}>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Row>
              {slide.map((image, idx) => (
                <Col key={idx} md={3} sm={6} xs={12} className="mb-4">
                  <div className={styles.galleryImageContainer}>
                    <Image
                      src={image}
                      alt={`Gallery Image ${index * 4 + idx + 1}`}
                      className="shadow-sm rounded"
                      width={500}
                      height={400}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
};

export default Gallery;
