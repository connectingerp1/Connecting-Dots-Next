"use client";

import { useState, useEffect, useMemo, useContext } from "react";
import Head from "next/head";
import { CityContext } from "@/context/CityContext";
import styles from "@/styles/CoursesComponents/Header.module.css";
import Btnform from "@/components/HomePage/Btnform";

const DSHeader = ({ pageId, pageType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ countryCode: "+91", contact: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const { city } = useContext(CityContext);
  const [showForm, setShowForm] = useState(false);

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA" },
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const cachedData = localStorage.getItem(
          `dsHeader_${pageId}_${pageType}`
        );
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch("/Jsonfolder/dsHeaderData.json");
        if (!response.ok) throw new Error("Failed to load data");

        const jsonData = await response.json();
        const pageData = jsonData[pageType]?.[pageId];

        if (pageData) {
          pageData.title = pageData.title.replace(/{city}/g, city);
          pageData.subtitle = pageData.subtitle.replace(/{city}/g, city);
          pageData.description = pageData.description.replace(/{city}/g, city);
          pageData.features = pageData.features.map((feature) =>
            feature.replace(/{city}/g, city)
          );
          pageData.alumni = pageData.alumni.map((company) => ({
            ...company,
            name: company.name.replace(/{city}/g, city),
          }));
          pageData.buttons = pageData.buttons.map((button) => ({
            ...button,
            text: button.text.replace(/{city}/g, city),
          }));

          localStorage.setItem(
            `dsHeader_${pageId}_${pageType}`,
            JSON.stringify(pageData)
          );
          setData(pageData);
        } else {
          throw new Error("Page data not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId, pageType, city]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    if (!formData.name || !formData.email || !formData.contact) {
      setSubmissionError("Fill all required fields");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.contact)) {
      setSubmissionError(
        "Phone number must start with +91 and be followed by exactly 10 digits"
      );
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmissionError("Enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://serverbackend-0nvg.onrender.com/api/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Submission failed");
      alert("Form submitted successfully!");
      setFormData({ contact: "" });
    } catch (error) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const RenderFormInputs = ({ data, formData, handleChange }) => {
    return useMemo(() => {
      if (!data || !data.form?.inputs) return null;

      return data.form.inputs.map((input, index) => {
        return input.countryCode ? (
          <div key={index} className={styles.phoneInputItDs}>
            <div className={styles.countryCodeWrapper}>
              {countryCodes.map(({ code }) => (
                <select
                  key={code}
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className={styles.selectCountryCode} // Ensure this class is styled
                >
                  <option value={code}>{code}</option>
                </select>
              ))}
            </div>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Enter your phone number"
              value={formData.contact}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>
        ) : (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            className={styles.input}
            value={formData[input.name] || ""}
            onChange={handleChange}
          />
        );
      });
    }, [data, formData]);
  };

  const handleButtonClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;
  if (!data) return <div>No data available for the specified page.</div>;

  return (
    <div className={styles.containerItDsHeader}>
      <Head>
        <title>{data.title || "Default Title"}</title>
        <meta
          name="description"
          content={data.description || "Default description"}
        />
        <meta
          name="keywords"
          content={data.keywords?.join(", ") || "Default, Keywords"}
        />
      </Head>

      {/* 🔹 Background Video */}
      <video
        className={styles.backgroundVideo}
        src="https://i.imgur.com/DpOvcpk.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className={styles.leftSectionItDs}>
        <h1>
          <span className={styles.dsHeaderSpan}>{data.title}</span>
        </h1>
        <h2>
          <span className={styles.dsHeaderSpan2}>{data.subtitle}</span>
        </h2>
        <p>{data.description}</p>
        <ul className={styles.featuresItDs}>
          {data.features.map((feature, index) => (
            <li className={styles.featuresItDsli} key={index}>
              {feature}
            </li>
          ))}
        </ul>
        <div className={styles.alumniItDs}>
          <span>Find our Alumni at -</span>
          <div className={styles.alumniLogosItDs}>
            {data.alumni.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={`${company.name} logo`}
              />
            ))}
          </div>
        </div>
        <div className={styles.buttons}>
          {data.buttons.map((button, index) => (
            <button
              key={index}
              className={
                index === 0 ? styles.buttonStyle1 : styles.buttonStyle2
              }
              onClick={handleButtonClick}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.rightSectionItDs}>
        <h3>{data.form.title}</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          {data.form.inputs.map((input, index) =>
            input.countryCode ? (
              <div key={index} className={styles.phoneInputItDs}>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className={styles.selectCountryCode}
                >
                  {countryCodes.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  placeholder="Enter your phone number"
                  value={formData.contact || ""}
                  onChange={handleChange}
                  maxLength="10"
                  required
                />
              </div>
            ) : (
              <input
                key={index}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                value={formData[input.name] || ""}
                onChange={handleChange}
                className={styles.inputField}
              />
            )
          )}

          <button
            type="submit"
            className={styles.submitButtonItDs}
            disabled={isSubmitting}
          >
            {data.form.submitText}
          </button>

          {submissionError && <p className={styles.error}>{submissionError}</p>}
        </form>
      </div>

      {showForm && <Btnform onClose={handleCloseForm} />}
    </div>
  );
};

export default DSHeader;
