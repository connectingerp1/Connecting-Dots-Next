"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/BlogPage/Components/BlogCarousel.module.css";

const BlogCarousel = ({ blogs, BASE_URL }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, blogs.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prev} onClick={handlePrev}>
        &#10094;
      </button>

      <div className={styles.carousel} ref={carouselRef}>
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className={`${styles.carouselItem} ${
              index === currentIndex ? styles.active : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Ensure sliding effect
          >
            <Link href={`/blogs/${blog._id}`} className={styles.linkTag}>
              <img
                src={
                  blog.image?.startsWith("http")
                    ? blog.image
                    : `${BASE_URL}${blog.image}`
                }
                alt={blog.title}
                className={styles.blogImage}
              />
              <div className={styles.overlay}>
                <h2>{blog.title}</h2>
                <p className={styles.blogAuthor}>By {blog.author}</p>
                <span className={styles.readMore}>Read More →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button className={styles.next} onClick={handleNext}>
        &#10095;
      </button>

      {/* Navigation Dots */}
      <div className={styles.dots}>
        {blogs.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
