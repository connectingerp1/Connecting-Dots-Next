"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/HomePage/PopCourses.module.css";
import ContactForm from "@/components/HomePage/ContactForm";
import dynamic from "next/dynamic";

// Dynamically import Btnform to prevent SSR-related issues
const Btnform = dynamic(() => import("@/components/HomePage/Btnform"), {
  ssr: false,
});

const courses = [
  {
    id: "SAP HANA Course",
    name: "SAP S/4 HANA Courses",
    count: 25,
    icon: "/Icons/sap (3).avif",
  },
  {
    id: "Data Science Course",
    name: "Masters in Data Science",
    count: 25,
    icon: "/Icons/MnDS.avif",
  },
  {
    id: "Data Analytics Course",
    name: "Masters in Data Analytics",
    count: 16,
    icon: "/Icons/online-analytical.avif",
  },
  {
    id: "Salesforce Course",
    name: "Salesforce",
    count: 30,
    icon: "/Icons/salesforce.avif",
  },
  {
    id: "HR courses",
    name: "HR Courses",
    count: 8,
    icon: "/Icons/HR PR2.avif",
  },
  {
    id: "Full stack Python Course",
    name: "Full-Stack Python",
    count: 12,
    icon: "/Icons/python-file.avif",
  },
  {
    id: "Full stack Java Course",
    name: "Full-Stack Java",
    count: 17,
    icon: "/Icons/java.avif",
  },
  {
    id: "Power BI Course",
    name: "PowerBI",
    count: 17,
    icon: "/Icons/business-intelligence.avif",
  },
  {
    id: "AWS/Azure/GCP Courses",
    name: "AWS/Azure/Google Cloud Platform",
    count: 17,
    icon: "/Icons/cloud-data.avif",
  },
];

const Courses = () => {
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (showPopupForm) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showPopupForm]);

  const handleEnrollNowClick = async (courseId) => {
    await fetchFormData(courseId);
    setSelectedCourseId(courseId);
    setShowPopupForm(true);
  };

  const fetchFormData = async (courseId) => {
    try {
      const response = await fetch("/Jsonfolder/formData.json");
      const data = await response.json();
      setFormData(data.forms[courseId] || data.forms["default"]);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  const handleClosePopupForm = () => {
    setShowPopupForm(false);
    setSelectedCourseId(null);
  };

  const handleButtonClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div id="popCourses" className={`${styles.coursesContainer} text-center`}>
      <Head>
        <title>Connecting Dots</title>
        <meta
          name="description"
          content="Explore our most popular courses including SAP, Data Science, Salesforce, and more. Enroll now and secure your seat!"
        />
        <meta
          name="keywords"
          content="SAP courses, Data Science, Salesforce, HR courses, Full-Stack Python, PowerBI, AWS, Azure, Google Cloud"
        />
      </Head>

      <div className={styles.coursesTitle}>
        <h2>Our Popular Courses</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <div
            key={course.id}
            className={styles.courseCard}
            onClick={() => handleEnrollNowClick(course.id)}
          >
            <div className={styles.iconContainer}>
              <Image
                src={course.icon}
                alt={`${course.name} icon`}
                width={80}
                height={80}
                className={styles.courseIcon}
              />
            </div>
            <h3>{course.name}</h3>
            <p>{course.count} Seats Left</p>
          </div>
        ))}
      </div>
      <div className="mb-3">
        <Button className={styles.outlineBtnn} onClick={handleButtonClick}>
          Download Brochure
        </Button>
        {showForm && <Btnform onClose={handleCloseForm} />}
        <Button
          className={styles.outlineBtnn}
          onClick={() => handleEnrollNowClick("demo")}
        >
          Book a Free Demo
        </Button>
      </div>
      {showPopupForm && formData && (
        <ContactForm
          course={selectedCourseId}
          formData={formData}
          onClose={handleClosePopupForm}
        />
      )}
    </div>
  );
};

export default Courses;
