'use client'

import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styles from '@/styles/Stickyform.module.css'
import { usePathname } from 'next/navigation'

const SContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    course: '',
    email: '',
    countryCode: '+91',
  })

  const [isMobileView, setIsMobileView] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(true)
  const [isFooterApproaching, setIsFooterApproaching] = useState(false)

  const pathname = usePathname()
  const hiddenPages = ['/adminlogin', '/dashboard', '/blogs', '/blogsadmin']
  const footerRef = useRef(null)

  useEffect(() => {
    // Hide form on specific pages
    if (hiddenPages.includes(pathname.toLowerCase())) {
      setIsFormVisible(false)
      return
    }

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768
      setIsMobileView(isMobile)
      setIsFormVisible(!isMobile)
    }

    setIsMobileView(window.innerWidth <= 768)
    setIsFormVisible(window.innerWidth > 768)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [pathname])

  // Detect footer visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterApproaching(entry.isIntersecting)
      },
      { root: null, threshold: 0, rootMargin: '150px' } // Hide form 200px before footer
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

   // Detect footer visibility
   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWasFormVisible(isFormVisible) // Store previous state before hiding
          setIsFormVisible(false)
        } else {
          setIsFormVisible(wasFormVisible) // Restore visibility when footer is out of view
        }
        setIsFooterApproaching(entry.isIntersecting)
      },
      { root: null, threshold: 0, rootMargin: '10px' } // Hide form 200px before footer
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [isFormVisible]) // Track visibility state

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      alert('Please enter your name.')
      return
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      alert('Contact number must be exactly 10 digits.')
      return
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }
    if (!formData.course) {
      alert('Please select a course.')
      return
    }


    const submissionData = {
      name: formData.name.trim(),
      contact: `${formData.countryCode}-${formData.contact}`,
      email: formData.email.trim(),
      coursename: formData.course,
    }

    try {
      const response = await axios.post(
        'https://serverbackend-0nvg.onrender.com/api/submit',
        submissionData
      )

      if (response.status === 200) {
        alert('Form submitted successfully!')
        setFormData({
          name: '',
          contact: '',
          course: '',
          email: '',
          countryCode: '+91',
        })
        setIsFormVisible(false)
      } else {
        alert('Failed to submit the form. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('An error occurred while submitting the form.')
    }
  }
  
  return (
    <>
      {isMobileView && !isFooterApproaching && (
        <button
          className={styles.contactUsButton}
          onClick={() => setIsFormVisible((prev) => !prev)}
        >
          {isFormVisible ? 'Close' : 'Contact Us'}
        </button>
      )}

      {!isFooterApproaching && isFormVisible && (
        <div className={styles.stickyformContainer}>
          {isMobileView && (
            <button
              className={styles.closeButton}
              onClick={() => setIsFormVisible(false)}
            >
              &times;
            </button>
          )}

          <form onSubmit={handleSubmit} className={styles.contactFormS}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="E.g., Ram"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength="50"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E.g., ram@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact">Contact Number</label>
                <div className={styles.contactField}>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+91">(+91) India</option>
                    <option value="+1">(+1) USA</option>
                    <option value="+44">(+44) UK</option>
                  </select>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="1234567890"
                    value={formData.contact}
                    onChange={handleChange}
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="course">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  <option value="SAP">SAP</option>
                  <option value="IT Courses">IT Courses</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Data Visualisation">Data Visualisation</option>
                  <option value="HR Courses">HR Courses</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Hidden footer reference */}
      <footer ref={footerRef}></footer>
    </>
  )
}



export default SContactForm
