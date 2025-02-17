import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/styles/HomePage/Btnform.module.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Btnform = ({ onClose }) => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 10;
      const offsetY = ((y - middleY) / middleY) * 10;

      document.querySelector(`.${styles.BtnContact}`)?.style.setProperty('--rotateX', -1 * offsetY + 'deg');
      document.querySelector(`.${styles.BtnContact}`)?.style.setProperty('--rotateY', offsetX + 'deg');
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    const contactPattern = /^[789]\d{9}$/;
    if (!formData.contact || !contactPattern.test(formData.contact)) {
      newErrors.contact = 'Please enter a valid 10-digit Indian mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('https://serverbackend-0nvg.onrender.com/api/submit', formData);
      alert('Form submitted successfully!');
      onClose();

      setFormData({ name: '', email: '', contact: '', location: '' });
    } catch (error) {
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className={styles.BtnSuperContainer}>
      <div className={`${styles.BtnContainer} ${isSent ? styles.BtnSent : ''}`}>
        <button onClick={onClose} className={styles.BtnClose}>
          X
        </button>
        <span className={styles.BtnMail}>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <span className={styles.BtnHidden}>Thank you so much! 😊</span>
        <div className={styles.BtnTopHeading}>
          <h1>Get in Touch with Our Team</h1>
        </div>
        <form className={styles.BtnContactForm} onSubmit={handleSubmit}>
          <div className={styles.BtnBlock}>
            <div className={styles.BtnField}>
              <label>Your Name</label>
              <input
                className={styles.Btncntip}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.BtnField}>
              <label>Your E-mail</label>
              <input
                className={styles.Btncntip}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
          </div>
          <div className={styles.BtnField}>
            <label>Contact No.</label>
            <input
              className={styles.Btncntip}
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            {errors.contact && <span className={styles.error}>{errors.contact}</span>}
          </div>
          <div className={styles.BtnField}>
            <label>Location</label>
            <input
              className={styles.Btncntip}
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            {errors.location && <span className={styles.error}>{errors.location}</span>}
          </div>
          <div className={styles.BtnButtonContainer}>
            <button className={styles.BtnSend} type="submit">
              Send
            </button>
            <button type="reset" onClick={() => setFormData({ name: '', email: '', contact: '', location: '' })}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Btnform;
