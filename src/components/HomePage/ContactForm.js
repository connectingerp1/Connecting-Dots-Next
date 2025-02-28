"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/HomePage/ContactForm.module.css"; // Import module CSS
import axios from "axios";
import { IonIcon } from "@ionic/react";
import { personOutline, mailOutline, callOutline } from "ionicons/icons";

const ContactForm = ({ course, formData, onClose }) => {
  const [formValues, setFormValues] = useState({});
  const [isThankYouVisible, setThankYouVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const formRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (formData?.fields) {
      const initialFormValues = formData.fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});
      setFormValues(initialFormValues);
    }
  }, [formData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading

    try {
      await axios.post("https://serverbackend-0nvg.onrender.com/api/submit", formValues);

      setIsLoading(false);
      setThankYouVisible(true);

      setTimeout(() => {
        setThankYouVisible(false);
        onClose(); // Close form after showing Thank You
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);

      if (error.response?.status === 400) {
        alert(error.response.data.message || "Email already exists. Try another email.");
      } else {
        alert("An error occurred while submitting the form.");
      }
    }
  };

  if (!formData) return null;

  const buttonText = formData.submitButton.includes("Demo")
    ? formData.submitButton.replace(/Demo\s*Demo/, "Demo")
    : formData.submitButton;

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContent} ${isInView ? styles.backgroundLoaded : ""}`} ref={formRef}>
        <span className={styles.closeBtnContact} onClick={onClose}>
          &times;
        </span>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {formData.fields
            .filter((field) => field.name !== "message")
            .map((field, index) => (
              <div className={styles.contactFormGroup} key={index}>
                <div className={styles.inputWithIcon}>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.label}
                    required
                  />
                  <IonIcon icon={field.name === "name" ? personOutline : mailOutline} />
                </div>
              </div>
            ))}

          <div className={styles.contactFormGroup}>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formValues["contact"] || ""}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
              <IonIcon icon={callOutline} />
            </div>
          </div>

          <button type="submit" className={styles.submitBtnContact} disabled={isLoading}>
            {isLoading ? "Submitting..." : buttonText}
          </button>
        </form>

        {/* Thank You Popup */}
        {isThankYouVisible && (
          <div className={styles.thankYouPopup}>
            <p>🎉 Thank you for submitting! We’ll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
