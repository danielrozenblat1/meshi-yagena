import React from 'react';
import styles from './Me.module.css';
import meshi from "../../images/משי יגנה תדמית.png"

const AboutMe = () => {
  return <>
      <div className={styles.header} id="קצת עלי">אז..מי אני?</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={meshi} alt="משי יגנה" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>משי יגנה</h1>
        <h2 className={styles.subtitle}>
         בניית תוכניות אימון | ליווי אונליין | יעוץ תזונה | אימונים פרונטלים 
  </h2>
        <p className={styles.description}>
  פעם הייתי מהבנות שמפחדות להתאמן כדי לא להראות גברית והאימונים היחידים שעשיתי היו אימוני אירובי, היום? היום אני עוזרת לך להבין שאפשר להיות חזקה ולהראות נשית, עדינה ובשיא שלך!
        </p>
        <p className={styles.description}>
 הייתי גם במקום שאת נמצאת בו ונאבקתי בעצמי, בהרגלים הישנים שלי ובחוסר מוטיבציה וחוסר התמדה ולכן אני יודעת איך בדיוק להוציא אותך משם!
        </p>


      </div>
    
    </div>

    </>
};

export default AboutMe;