import styles from "./FifthScreen.module.css"
import meshi from "../videos/משי יגנה תדמית.mp4"
const FifthScreen=()=>{

    return <>
      <div className={styles.title}>חשוב לי שתביני</div>
      <div className={styles.description}>אני עוסקת בתחום מרצון לשינוי! אני רוצה לעזור לכל מי שנמצאת במקום שהייתי לעבור את התהליך בצורה בריאה,נכונה ומקצועית יותר! אני איתך לאורך כל הדרך , תרגיל תרגיל , סט סט ,יום יום!</div>
      <div className={styles.center}><video className={styles.video} src={meshi} alt="משי יגנה סרטון תדמית" autoPlay loop muted playsInline controls/></div>  
     {/* <div className={styles.title}>מקבץ קטן מהאווירה בסטודיו</div> */}
    
    </>
}
export default FifthScreen