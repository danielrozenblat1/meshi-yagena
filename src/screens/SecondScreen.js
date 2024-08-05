import Dumbbell from "../components/dumble/Dumble"
import styles from "./SecondScreen.module.css"
import sweet from "../Icons/wired-outline-620-candy.json"
import stuck from "../Icons/wired-outline-2377-wasting-time.json"
import side from "../Icons/wired-outline-1779-treadmill.json"
import gym from "../Icons/wired-outline-2101-gang.json"
const SecondScreen=()=>{


    return <>
    <div className={styles.title}>אני יודעת איך זה</div>
    <div className={styles.row}>
    <Dumbbell 
        title="להשבר מול דוכן מתוקים" 
        description="כל ביס מתוק מרגיש כמו כישלון, אבל זה לא אומר שאת כישלון. זה רק אומר שאת אנושית."
        icon={sweet}
      />
      <Dumbbell 
        title="להוריד ולחזור לאותו משקל בכל פעם מחדש" 
        description="קשה לראות שינוי כשהמשקל לא זז, אבל כל אימון הוא ניצחון על הספה. את מתקדמת, גם אם לא רואים את זה על המשקל."
        icon={stuck}
      />
      <Dumbbell 
        title="לתפוס את הצד בריצה" 
        description="כל צעד הוא הישג, גם אם הנשימה כבדה. הגוף שלך לומד, מתחזק, ומתרגל - בדיוק כמוך."
        icon={side}
      />
         <Dumbbell 
        title="להרגיש קטן בחדר כושר" 
        description="להכנס לחדר כושר, לראות את כל הענקים מסביב ולהרגיש חוסר בטחון לידם"
        icon={gym}
      />
    </div>
    <div className={styles.description}>
אני רק רוצה שתבינ/י - את/ה לא עובר/ת את האתגרים והקשיים האלה לבד - המון אנשים נאבקים בהרגלי תזונה והתמדה
        </div>
        <div className={styles.description}>
ואחרי נסיון של שנים בתחום אני גאה להגיד שיש לי את הכלים לעזור לך לנצח את הקשיים האלה!
        </div>
    </>
}
export default SecondScreen