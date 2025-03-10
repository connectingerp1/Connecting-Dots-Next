"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/HomePage/ContactForm.module.css"; // Import module CSS
import axios from "axios";
import { IonIcon } from "@ionic/react";
import { personOutline, mailOutline, callOutline } from "ionicons/icons";

// Define countryCodes array
const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+86", country: "China" },
  { code: "+7", country: "Russia" },
  { code: "+39", country: "Italy" },
  { code: "+55", country: "Brazil" },
  { code: "+34", country: "Spain" },
  { code: "+27", country: "South Africa" },
  { code: "+971", country: "UAE" },
  { code: "+62", country: "Indonesia" },
  { code: "+90", country: "Turkey" },
  { code: "+82", country: "South Korea" },
  { code: "+60", country: "Malaysia" },
  { code: "+31", country: "Netherlands" },
  { code: "+52", country: "Mexico" },
];

const ContactForm = ({ course, formData, onClose }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "+91", // Default country code
  });
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
          {/* Name Field */}
          <div className={styles.contactFormGroup}>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues["name"] || ""}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <IonIcon icon={personOutline} />
            </div>
          </div>

          {/* Email Field */}
          <div className={styles.contactFormGroup}>
            <div className={styles.inputWithIcon}>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues["email"] || ""}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <IonIcon icon={mailOutline} />
            </div>
          </div>

          {/* Country Code and Contact Number Field */}
          <div className={styles.contactFormGroup}>
            <div className={styles.inputWithIcon}>
              {/* Country Code Dropdown */}
              <select
                id="countryCode"
                name="countryCode"
                value={formValues["countryCode"] || "+91"} // Default to India
                onChange={handleChange}
                className={styles.selectCountryCode}
              >
                {countryCodes.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {`${code} ${country}`} {/* Display both code and country */}
                  </option>
                ))}
              </select>
              {/* Contact Number Input */}
              <input
                type="tel"
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

          {/* Submit Button */}
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