import React from 'react';
import styles from './Me.module.css';
import meshi from "../../images/משי יגנה תדמית.png"

const AboutMe = () => {
  return <>
      <div className={styles.header} id="קצת עלי">אז נעים להכיר</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={meshi} alt="משי יגנה" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>משי יגנה</h1>
        <h2 className={styles.subtitle}>
         בניית תוכניות אימון | ליווי אונליין | ייעוץ תזונה | אימונים פרונטלים 
  </h2>
        <p className={styles.description}>
        אני משי יגנה, וכמו רבות אחרות גם אני נאבקתי עם דימוי גוף שלילי והפרעת אכילה. גם אני חוויתי את התחושה של 'עוד ניסיון אחד' ואת הקושי להבין איך לגרום לשינוי להחזיק מעמד. שנים של מאבק במשקל, דיאטות וחוסר קבלה עצמית. אבל היום אחרי מסע ארוך של למידה והתפתחות, אני יכולה להגיד בגאווה שהצלחתי לשנות את החיים שלי.  גיליתי את הכוח שיש בקבלה עצמית, בתזונה מאוזנת, ובאימונים שמותאמים אישית. אני מאמינה שכל אחת יכולה להגיע לגוף חזק ובריא לא משנה מה הרקע או המטרה הסופית שלה.  אני כאן כדי ללוות אותך צעד אחר צעד,להעניק לך את הכלים והתמיכה שאת צריכה, ולהעצים אותך להשיג את המטרות שלך בדרך שתהני ממנה.
        </p>



      </div>
    
    </div>

    </>
};

export default AboutMe;