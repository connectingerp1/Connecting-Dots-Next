"use client";

import { useState, useContext } from "react";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Btnform from "@/components/HomePage/Btnform";
import { CityContext } from "@/context/CityContext";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/ContactUs.module.css";

const ContactPage = ({
  formData = {},
  setFormData,
  handleSubmit,
  isSubmitting,
  submissionError,
}) => {
  const { city } = useContext(CityContext);

  // Google Maps API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDBGFl3pJw6rBm6R0eX5vPZNLVkZgfcvh8",
  });

  const containerStyle = {
    width: "100%",
    height: "200px",
  };

  // Country code
  const [localFormData, setLocalFormData] = useState(
    formData || {
      name: "",
      phone: "",
      email: "",
      course: "",
      countryCode: "+91",
    }
  );

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

  // Branches information
  const branches = [
    {
      name: "PUNE BRANCH",
      phone: ["+91 9004002941", "+91 9004002958"],
      whatsapp: "https://wa.me/919004002941",
      position: { lat: 18.588048051275003, lng: 73.78119014757031 },
      address: "https://maps.app.goo.gl/v9UAPKTsSiT56VhC9",
      addresstext:
        "1st Floor,101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027",
    },
    {
      name: "MUMBAI BRANCH",
      phone: ["+91 9004001938", "+91 9004005382"],
      whatsapp: "https://wa.me/919004005382",
      position: { lat: 19.259055941077712, lng: 72.96564544031934 },
      address: "https://maps.app.goo.gl/i7W3baVVS1mDLmTJ9",
      addresstext:
        "4th Floor, Ram Niwas, B-404, Gokhale Rd, near McDonald's, Dada Patil Wadi, Naupada, Thane West, Thane, Maharashtra 400602",
    },
    {
      name: "RAIPUR BRANCH",
      phone: ["+91 9004002958", "+91 9325701555"],
      whatsapp: "https://wa.me/919325701555",
      position: { lat: 21.23944689267376, lng: 81.65363342070017 },
      address: "https://maps.app.goo.gl/F1HVVYHfApaRvFMRA",
      addresstext:
        "G-54, New Panchsheel Nagar, Civil Lines, Raipur, Chhattisgarh 492001",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalFormData((prev) => ({ ...prev, [name]: value }));
    setFormData && setFormData((prev) => ({ ...prev, [name]: value })); // Update parent state if provided
  };

  return (
    <div style={{ backgroundColor: "#F0F2F5", padding: "40px 0" }}>
      <div className="container my-4">
        <h2 className={styles.branchesTitle}>
          EXPLORE OUR EXPERT TECH TRANING SOLUTIONS
        </h2>
        <div className="row">
          <div className="col-md-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="row border-bottom pb-4 mb-4 align-items-center"
              >
                <h5 className="fw-bold text-uppercase text-left mb-3">
                  {branch.name}
                </h5>

                <div className="col-md-4 text-center">
                  <FaPhone
                    size={30}
                    className="text-primary"
                    style={{ transform: "rotate(90deg)" }}
                  />
                  <h6 className="text-secondary">Phone</h6>
                  {branch.phone.map((num, i) => (
                    <p key={i} className="text-primary m-0">
                      {num}
                    </p>
                  ))}
                </div>
                <div className="col-md-4 text-center border-start border-end">
                  <FaWhatsapp size={30} className="text-success" />
                  <h6 className="text-secondary">WhatsApp</h6>
                  <a href={branch.whatsapp} className="btn btn-success">
                    {" "}
                    Chat Now
                  </a>
                </div>
                <div className="col-md-4 9ttext-center">
                  <FaMapMarkerAlt size={30} className="text-warning my-2" />
                  <h6 className="text-secondary">Address</h6>
                  <a href={branch.address} className="text-primary m-0">
                    {branch.addresstext}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.rightSectionItDs}>
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name || ""}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
              <div className={styles.phoneInputItDs}>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode || "+91"} // Default to "+91" if undefined
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
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email || ""}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
              <input
                type="text"
                name="course"
                placeholder="Enter course name"
                value={formData.course || ""}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
              <button
                type="submit"
                className={styles.submitButtonItDs}
                disabled={isSubmitting}
              >
                Submit
              </button>
              {submissionError && (
                <p className={styles.error}>{submissionError}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* branches */}
      <div className={styles.branchesSection}>
        <h2 className={styles.branchesTitle}>OUR BRANCHES</h2>

        <div className={styles.branchesContainer}>
          {branches.map((branch, index) => (
            <div className={styles.branchCard} key={index}>
              <h3>{branch.name}</h3>
              {isLoaded ? (
                <div className={styles.mapContainer}>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={branch.position}
                    zoom={13}
                  >
                    <Marker position={branch.position} />
                  </GoogleMap>
                </div>
              ) : (
                <div>Loading Map...</div>
              )}
              <div className={styles.add2}>
                <a
                  href={branch.address}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {branch.addresstext}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
