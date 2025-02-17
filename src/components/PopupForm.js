'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/PopupForm.module.css';
import axios from 'axios';

const PopupForm = ({ onSubmitData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [location, setLocation] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const hiddenPages = ['/adminlogin', '/dashboard', '/blogs', '/blogsadmin'];
    const currentPath = router.pathname.toLowerCase();

     if (hiddenPages.includes(currentPath)) {
      setIsVisible(false);
      return;
     }

    const showTimer = setTimeout(() => {
       if (!hiddenPages.includes(currentPath)) {
       }
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, [router.pathname]);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name.length > 50 ||
      !/^[0-9]{10}$/.test(mobile) ||
      !/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z]{2,}$/.test(email) ||
      course.length > 50 ||
      !isChecked
    ) {
      alert('Please check your input');
      return;
    }

    const formData = {
      name,
      contact: mobile,
      email,
      coursename: course,
      location,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('https://serverbackend-0nvg.onrender.com/api/submit', formData);
      alert('Registration complete!');
      onSubmitData(formData);
      
      setName('');
      setMobile('');
      setEmail('');
      setCourse('');
      setLocation('');
      setIsChecked(false);
      setIsVisible(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupFormOverlay}>
      <div className={styles.popupFormContainer}>
        <button className={styles.closeButton} onClick={() => setIsVisible(false)}>X</button>
        <div className={styles.headerContainer}>
          <img src="https://i.imgur.com/zQll9tI.png" alt="Logo" className={styles.logo} />
          <h2>Register now</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} required maxLength="50" />
          <input type="email" placeholder="E-mail*" value={email} onChange={(e) => setEmail(e.target.value)} required pattern="[a-z]+[a-z0-9._]+@[a-z]+\.[a-z]{2,}$" />
          <input type="tel" placeholder="Mobile Number*" value={mobile} onChange={(e) => setMobile(e.target.value)} required pattern="[0-9]{10}" />
          <input type="text" placeholder="Which course are you looking for?*" value={course} onChange={(e) => setCourse(e.target.value)} required maxLength="50" />
          <input type="text" placeholder="Add your Location*" value={location} onChange={(e) => setLocation(e.target.value)} required maxLength="20" />
          <div className={styles.termsCheckbox}>
            <input type="checkbox" id="terms" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} required />
            <label htmlFor="terms">
              I hereby accept the <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a> and
              <a href="/privacy" target="_blank" rel="noopener noreferrer"> privacy policy</a> of Connecting Dots ERP.
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
