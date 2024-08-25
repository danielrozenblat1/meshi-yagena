import styles from "./WhoFits.module.css"
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

import fit from "../../Icons/wired-outline-1774-strength.json"

import ScrollReveal from "scrollreveal";
import Button from "../newButton/Button";

const WhoFits = () => {
  useEffect(() => {
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
  }, [])

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

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapY}>
          <h1 className={styles.header}>אז מה אני מציעה?</h1>
          <Player icon={fit} ref={playerRef1} size="30%" loop={true} onComplete={handleComplete}></Player>
          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            תוכניות לכל רמות הכושר – בין אם את מתחילה או מתקדמת
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            תקועה באימונים – אני פה כדי לעזור לך להתקדם, לשנות וליצור ביטחון מחדש
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            גם אם לקחת הפסקה ארוכה מדי – שינוי של תוכנית האימון וליווי צמוד עוזר להדליק את הניצוץ מחדש
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            מוטיבציה ותמיכה לאורך כל הדרך
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            סובלת או סבלת מפציעות בעבר? 
            תוכניות מותאמות לכל מצב בריאותי מניסיון רב שנים
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            בהריון או לאחר לידה – עם ניסיון בנושא שיכול למקד אימונים לנשים במצבים רגישים אלו
            </div>
          </div>
        </div>
      </div>
      <Button text="אני מתאימה לתהליך , בואי נדבר"/>
    </>
  )
}

export default WhoFits