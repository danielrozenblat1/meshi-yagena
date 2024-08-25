import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import styles from "./FirstScreen.module.css";
import meshi from "../images/משי יגנה תמונת תדמית.png";

const TEXTS = [
  "בניית תוכניות אימון",
  "ליווי אונליין",
  "ייעוץ תזונה"
];

const FirstScreen = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // שינוי כל 3 שניות
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className={props.scrolled ? styles.descriptionP : styles.description}>מה אם הייתי אומרת לך שאני יכולה לעזור לך להשיג את גוף החלומות שלך, להתחזק ולשבור מחסומים פיזיים ומנטליים ולהתגבר על החששות מאוכל?</div>

      <h1 className={styles.title}>משי יגנה</h1>
      
      <div className={styles.center}><img className={styles.image} src={meshi} alt="משי יגנה"/></div>
      <h2 className={styles.job}>
        <TextTransition springConfig={presets.wobbly} inline className={styles.textTransition}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h2>
      <div className={styles.description}>הייתי באותו מקום כמוך ולכן אני מכירה את כל התחושות הנלוות לאיפה שאת נמצאת עכשיו</div>
    </>
  );
}

export default FirstScreen;