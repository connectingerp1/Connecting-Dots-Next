"use client"

import React, { useState, useEffect } from "react";
import styles from "@/styles/AboutPage/AboutMission.module.css";

const AboutMission = ({ pageId }) => {
  const [missionData, setMissionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        const response = await fetch("/Jsonfolder/aboutData.json");
        if (!response.ok) throw new Error("Failed to fetch mission data");

        const jsonData = await response.json();
        const pageMission = jsonData.pages.find(
          (page) => page.pageId === pageId
        );

        if (pageMission) {
          setMissionData(pageMission);
        } else {
          throw new Error("Mission data not found for the specified page ID");
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMissionData();
  }, [pageId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!missionData) return <p>No mission data available.</p>;

  return (
    <div className={styles.aboutHalfHalfImageText}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutRow}>
          <div className={styles.aboutCol12}>
            <h1>{missionData.missionTitle}</h1>
          </div>
        </div>
        <div className={styles.aboutRow}>
          <div className={`${styles.aboutCol12} ${styles.aboutColLg6}`}>
            <div className={styles.aboutContent}>
              <p>{missionData.missionText}</p>
            </div>
          </div>
          <div className={`${styles.aboutCol12} ${styles.aboutColLg6}`}>
            <div
              className={styles.aboutImg}
              style={{
                background: `url('${missionData.imageURL}') no-repeat center`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
