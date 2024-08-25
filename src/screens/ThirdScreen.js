import React from 'react';
import styles from './ThirdScreen.module.css';
import Button from '../components/newButton/Button';

const TrainingOptions = () => {
  return (
    <div className={styles.container} id="המסלולים שלי">
      <p className={styles.mainTitle}>איך זה עובד</p>
    
      
      <div className={styles.optionsWrapper}>
        <div className={styles.option}>
          <h3 className={styles.optionTitle}>אימונים אישיים</h3>
          <ul className={styles.optionList}>
            <li>נעשה שיחת ייעוץ - כשנדבר אבין את המטרות שלך ונתחיל לבנות את התכנית האידיאלית עבורך!</li>
            <li>אימון ראשון - נתחיל להכיר את הגוף שלך, מה מתאים ונכון לך, נעקוב אחר ההתקדמות שלך, נעשה התאמות לפי הצורך ונעוף על המטרות שלך!</li>
          </ul>
          <div className={styles.bonus}>
            <p>הטבה מיוחדת למגיעות עם חברות!</p>
          </div>
        </div>
        
        <div className={styles.option}>
          <h3 className={styles.optionTitle}>אימוני אונליין 1:1</h3>
          <ul className={styles.optionList}>
            <li>נעשה שיחת ייעוץ בטלפון או בזום, אבין את המטרות שלך, הלו״ז שלך ואבנה תוכנית אימונים מותאמת ומפורטת.</li>
            <li>אני במעקב על ביצוע האימונים, הטכניקה, ההצלחות והקשיים בדרך.</li>
            <li>אני זמינה לך לכל שאלה, התייעצות ותמיכה</li>
            <li>פגישות בזום למעקב ועידכונים</li>
          </ul>
          
        </div>
      </div>
      
      <div className={styles.commonInfo}>
        <h3>בכל מסלול שרק תבחרי:</h3>
        <p>אני כאן כל הזמן בכדי לעזור לך עם ההתמדה והמשמעות העצמית, והכי חשוב, אדאג שתאהבי את התהליך ותהני מהדרך, כי מניסיון – זה מה שמשנה הכי הרבה!</p>
      </div>
      
      <div className={styles.cta}>

        <h3 className={styles.subtitle}>מוכנה לשמוע עוד?</h3>
 <Button text="מעניין אותי לשמוע על האימונים הפרונטלים" message="היי משי, אשמח לשמוע עוד על האימונים הפרונטלים"/>
 <Button text="מעניין אותי לשמוע על הליווי אונליין" message="היי משי, אשמח לשמוע עוד על האימונים הדיגיטלים"/>
      </div>
    </div>
  );
};

export default TrainingOptions;