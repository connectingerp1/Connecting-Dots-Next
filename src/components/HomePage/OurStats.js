'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/HomePage/OurStats.module.css'

const OurStats = () => {
  const [cardStates, setCardStates] = useState(new Array(6).fill(false))

  const handleMouseEnter = (index) => {
    setCardStates((prev) => prev.map((state, i) => (i === index ? true : state)))
  }

  const handleMouseLeave = (index) => {
    setCardStates((prev) => prev.map((state, i) => (i === index ? false : state)))
  }

  const cardData = [
    {
      img: '/Stats gifs/10years.avif',
      alt: '10+ Years of IT Legacy',
      frontText: "Years of Legacy in <span class='highlightF'>IT</span>",
      backText: "<span class='highlightB'>Our Institute</span> has <span class='highlightB'>10+ Years</span> of excellence in IT education.",
    },
    {
      img: '/Stats gifs/cv.avif',
      alt: '10000+ Students Trained',
      frontText: "10000+ <span class='highlightF'>Students</span>",
      backText: "We have trained over <span class='highlightB'>10000+ Students</span> with industry-ready skills.",
    },
    {
      img: '/Stats gifs/growth.avif',
      alt: '100x Growth in Placements',
      frontText: "100x <span class='highlightF'>Growth</span>",
      backText: "Our graduates experience <span class='highlightB'>100x career growth</span> with salaries up to <span class='highlightB'>24 LPA</span>.",
    },
    {
      img: '/Stats gifs/mentors.avif',
      alt: '100+ MNC Professionals as Mentors',
      frontText: "100+ <span class='highlightF'>Mentors</span>",
      backText: "Guided by <span class='highlightB'>100+ MNC professionals</span>, ensuring expert mentorship.",
    },
    {
      img: '/Stats gifs/certificate.avif',
      alt: '100% Practical-Based Courses',
      frontText: "100% <span class='highlightF'>Practical</span> Based Courses",
      backText: "All our courses follow a <span class='highlightB'>100% practical</span>-based learning approach.",
    },
    {
      img: '/Stats gifs/jobs.avif',
      alt: '100+ Hiring Partners',
      frontText: "100+ <span class='highlightF'>Hiring</span> Partner",
      backText: "Our hiring partners include <span class='highlightB'>Google</span>, <span class='highlightB'>Microsoft</span>, and other <span class='highlightB'>MNCs</span>.",
    },
  ]

  return (
    <div className={styles.t2p}>
      <div className={styles.t2pTitle}>
        <h1>OUR STATS AT A GLANCE</h1>
      </div>
      <div className={styles.cardsT2pWrapper}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={styles.cardT2pContainer}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`${styles.cardT2p} ${cardStates[index] ? styles.rotated : ''}`}>
              <div className={`${styles.cardT2pContents} ${styles.cardT2pFront}`}>
                <div className={styles.cardT2pDepth}>
                  <div className={styles.cardT2pImg1}>
                    <Image src={card.img} alt={card.alt} width={100} height={100} className={styles.cardT2pLogo} />
                  </div>
                  <h2 dangerouslySetInnerHTML={{ __html: card.frontText }} />
                </div>
              </div>
              <div className={`${styles.cardT2pContents} ${styles.cardT2pBack}`}>
                <div className={styles.cardT2pDepth}>
                  <h2 dangerouslySetInnerHTML={{ __html: card.backText }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurStats
