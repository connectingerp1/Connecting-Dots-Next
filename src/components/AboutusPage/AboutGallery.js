"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "@/styles/AboutPage/AboutGallery.module.css";

const AboutGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Fixed images array - removed the duplicate
  const images = [
    "/Acheivements/ach1.avif",
    "/Acheivements/ach2.avif",
    "/Acheivements/ach3.avif",
    "/Acheivements/ach4.avif",
    "/Acheivements/ach5.avif",
    "/Acheivements/ach6.avif",
  ];

  useEffect(() => {
    // Check if mobile on component mount and window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    // Auto-rotate gallery images every 3 seconds on desktop
    const interval = !isMobile && setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      interval && clearInterval(interval);
    };
  }, [images.length, isMobile]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.gallerySection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.galleryTitle}>Our Achievements</h2>
          <p className={styles.gallerySubtitle}>Discover our journey through milestones and success stories</p>
        </div>

        {/* Main gallery display */}
        <div className={styles.galleryContainer}>
          {/* Featured image */}
          <div className={styles.featuredImageContainer}>
            <div 
              className={styles.featuredImage}
              style={{ transform: `scale(${isHovered === 'featured' ? 1.03 : 1})` }}
              onMouseEnter={() => setIsHovered('featured')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={images[activeIndex]} 
                  alt={`Achievement ${activeIndex + 1}`} 
                  width={800}
                  height={600}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: '500px'
                  }}
                  className={styles.image}
                  priority
                />
              </div>
            </div>

            {/* Navigation arrows */}
            <div className={styles.navArrows}>
              <button 
                className={styles.navArrow}
                onClick={prevImage}
                aria-label="Previous image"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button 
                className={styles.navArrow}
                onClick={nextImage}
                aria-label="Next image"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* Thumbnail gallery */}
          <div className={styles.thumbnailContainer}>
            <Row className="g-2">
              {images.map((image, index) => (
                <Col xs={4} md={3} key={`${image}-${index}`}>
                  <div 
                    className={`${styles.thumbnail} ${activeIndex === index ? styles.activeThumbnail : ''}`}
                    onClick={() => handleImageClick(index)}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                    style={{ transform: `translateY(${isHovered === index ? -5 : 0}px)` }}
                  >
                    <div className={styles.thumbnailWrapper}>
                      <Image 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`} 
                        width={150}
                        height={100}
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover'
                        }}
                        className={styles.thumbnailImage}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutGallery;