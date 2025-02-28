'use client';

import { useState, useEffect, useContext } from 'react';
import { CityContext } from '@/context/CityContext';
import styles from '@/styles/CoursesComponents/Why.module.css';

const Why = ({ pageId, pageType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { city } = useContext(CityContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Jsonfolder/Whyds.json');
        if (!response.ok) throw new Error('Network response was not ok');

        const jsonData = await response.json();
        const pageData = jsonData?.[pageType]?.[pageId];

        if (pageData) {
          pageData.title = pageData.title?.replace(/{city}/g, city);
          pageData.cards = pageData.cards?.map((card) => ({
            ...card,
            title: card.title?.replace(/{city}/g, city),
            content: Array.isArray(card.content)
              ? card.content.map((text) => text.replace(/{city}/g, city))
              : card.content?.replace(/{city}/g, city),
            listItems: card.listItems?.map((item) => item.replace(/{city}/g, city)),
          }));
          setData(pageData);
        } else {
          throw new Error('Page data not found');
        }

        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId, pageType, city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  if (!data) return <p>No data available for the specified page.</p>;

  return (
    <div className={styles.containerYds}>
      <SectionComponent section={data} />
    </div>
  );
};

const SectionComponent = ({ section }) => {
  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.accent}>{section.title}</span>
      </h1>
      <div className={styles.cardsContainerYds}>
        {section.cards && section.cards.length > 0 ? (
          section.cards.map((card, index) => (
            <DataCard key={index} title={card.title} content={card.content} listItems={card.listItems} />
          ))
        ) : (
          <p>No cards available.</p>
        )}
      </div>
    </>
  );
};

const DataCard = ({ title, content, listItems }) => {
  return (
    <div className={styles.cardClassYds}>
      <h2 className={styles.textPrimaryClass} dangerouslySetInnerHTML={{ __html: title }}></h2>
      {Array.isArray(content) ? (
        content.map((paragraph, idx) => (
          <p key={idx} className={styles.textMutedForegroundClass} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        ))
      ) : (
        <p className={styles.textMutedForegroundClass} dangerouslySetInnerHTML={{ __html: content }}></p>
      )}
      {listItems && listItems.length > 0 && (
        <ul className={styles.listClass}>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Why;