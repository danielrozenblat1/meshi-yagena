import Dumbbell from "../components/dumble/Dumble"
import styles from "./SecondScreen.module.css"
import sweet from "../Icons/wired-outline-620-candy.json"
import stuck from "../Icons/wired-outline-2377-wasting-time.json"
import side from "../Icons/wired-outline-1779-treadmill.json"
import gym from "../Icons/wired-outline-2101-gang.json"
const SecondScreen=()=>{


    return <>
    <div className={styles.title}>אני מכירה את התחושה של</div>
    <div className={styles.row}>

      <Dumbbell 
        title="להתאמץ לרדת במשקל ולהעלות אותו מיד אחרי" 
        description="קשה לראות שינוי כשהמשקל לא זז, אבל כל אימון הוא ניצחון על הספה. את מתקדמת, גם אם לא רואים את זה על המשקל."
        icon={stuck}
      />
          <Dumbbell 
        title="ליפול למאכלים לא בריאים באופן תכוף" 
        description="כל ביס מתוק מרגיש כמו כישלון, אבל זה לא אומר שאת כישלון. זה רק אומר שאת אנושית."
        icon={sweet}
      />
      <Dumbbell 
        title="לא להעריך את עצמך ואת איך שאת נראית" 
        description="לעמוד מול המראה ולהרגיש שאת לא בשיא שלך"
        icon={side}
      />
         <Dumbbell 
        title="להרגיש ששינוי לא אפשרי!" 
        description="המחשבות על שינוי תמיד עולות אבל עולות איתן אמונות מגבילות וחסמים כל פעם מחדש"
        icon={gym}
      />
    </div>
    <div className={styles.description}>
    את מרגישה לבד במאבק הזה? אל תדאגי, את לא היחידה. אני מכירה מקרוב את הקשיים שאת עוברת, ואני  כאן כדי לעזור לך לצלוח אותם.</div>

    </>
}
export default SecondScreen