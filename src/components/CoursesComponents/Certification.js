"use client"; //  Next.js Client Component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/CoursesComponents/Certificate.module.css"; //  Use module CSS

const Thumbnail = () => {
  const [thumbData, setThumbData] = useState([]);

  useEffect(() => {
    fetch("/Jsonfolder/certification.json") //  JSON file should be in `public/Jsonfolder`
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setThumbData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  if (thumbData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.whiteContainer}>
      <div className={styles.thumbnailContainer}>
        {thumbData.map((thumb, index) => (
          <div className={styles.thumb} key={index}>
            <a href="#">
              <Image
                src={thumb.imageUrl} // Image optimization
                alt={thumb.label}
                width={200} //  Set fixed width
                height={150} //  Set fixed height
                className={styles.thumbImage}
                priority={index === 0} //  Load first image faster
              />
              <span className={styles.label}>{thumb.label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;


