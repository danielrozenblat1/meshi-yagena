import styles from "./WhoFits.module.css"
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

import fit from "../../Icons/wired-outline-1774-strength.json"

import ScrollReveal from "scrollreveal";
import Button from "../newButton/Button";
const WhoFits=()=>{

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.header}`, {
      duration: 600,
      distance: "60px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
  },[])

    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const handleComplete2 = () => {
        setTimeout(() => {
          playerRef2?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

      const playerRef1 = useRef(null);
      const playerRef2 = useRef(null);

    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
    
    },[])

return <>


<div className={styles.wrapper}>

{/* לא מתאים */}
<div className={styles.wrapY}>

<h1  className={styles.header}>התהליך איתי מתאים לך</h1>
<Player icon={fit} ref={playerRef1} size="30%" loop={true} onComplete={handleComplete}></Player>
<div className={styles.text}>
                <span className={styles.checkmark}>❣️</span>
                <div className={styles.description}>
                אם את מתאמנת מתחילה או מתקדמת - תוכניות לכל רמות הכושר 
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>❣️</span>
                <div className={styles.description}>
                ️אם את רוצה להתחיל או לחזור להתאמן אחרי תקופה - קבלי הדרכה צעד אחר צעד
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>❣️</span>
                <div className={styles.description}>
                אם את מרגישה תקועה באימונים שלך ורוצה להתקדם, ולקחת את האימונים שלך כמה רצה מעל
                </div>
              
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>❣️</span>
                <div className={styles.description}>
                אם חסרה לך הדחיפה - תקבלי תמיכה ומוטיבציה לאורך כל הדרך
                </div>
              
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>❣️</span>
                <div className={styles.description}>
                 אם את סובלת מפציעות/כאבים - תקבלי תוכניות מותאמות לכל מצב בריאותי.
                </div>
              
              
  </div>
  <div className={styles.text}>
                <span className={styles.checkmark}>❣️</span>
                <div className={styles.description}>
                 אם את בהריון או לאחר לידה ורוצה לשפר את איכות החיים שלך במהלך ההריון, ואחריו.


                </div>
              
              
  </div>
</div>





</div>
<Button text="אני מתאימה לתהליך , בואי נדבר"/>
</>

    }
    export default WhoFits