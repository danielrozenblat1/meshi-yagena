import Dumbbell from "../components/dumble/Dumble"
import styles from "./ForthScreen.module.css"
import dumble from "../Icons/wired-outline-1774-strength.json"
import Can from "../components/can/Can"
const ForthScreen=()=>{


    return <>
    <div className={styles.title}>יחד נשים סוף ל:</div>
    <div className={styles.row}>
<Can title="פציעות באימונים" icon={dumble}/>
<Can title="תזונה לא מאוזנת" icon={dumble}/>
<Can title="תקיעות בתהליך" icon={dumble}/>
<Can title="לופ של הדיאטות" icon={dumble}/>
    </div>
    </>
}
export default ForthScreen