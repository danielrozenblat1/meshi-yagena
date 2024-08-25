import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../newButton/Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px #444',
          width: "100%",
          margin: "auto",
          background:" linear-gradient(90deg, #FFCECE 0%, #E79C9C 50.27%, #FFCECE 100%);",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return <>
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות ותשובות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">שאלות נפוצות שלכן..</div>
      <DropdownAccordion title="אני סטודנטית וקשה לי לשלב תהליך אימונים במהלך הלימודים, יש לך פתרון?" content={<><div className={styles.description}>בוודאי! במיוחד עבור הסטודנטים קיים המסלול הדיגיטלי שלי- את/ה יכול/ה להמשיך ללמוד למבחנים ועדיין לשמור על הכושר מרחוק!</div>
      <Button text="לחצי כאן לעוד פרטים על המסלול הדיגיטלי" message="היי משי, אני סטודנטית ואשמח לשמוע עוד על המסלול הדיגיטלי"/></>} />
      <DropdownAccordion title="נכוותי מליווי דומה בעבר - איך אני יכול לסמוך עלייך?" content="יש המון סוגי ליווים בתחום ואני יכולה לשער שכנראה אותו אדם פשוט לא היה קשוב לצרכים שלך ולא התאים את התכנית לקצב שלך.. אני מזמינה אותך לשלוח לי הודעה , נתאם שיחה ונבין איפה הבעיה הייתה כדי שנתקן את החוויה הקודמת שלך "/>

      <DropdownAccordion title="כמה זמן אורך הליווי אונליין?" content="ש 2 אופציות  לליווי, מוזמנת להשאיר הודעה ונדבר"/>
      <DropdownAccordion title="מה אם לא התאמנתי מעולם? " content="בשביל זה אני פה! תקבלי הדרכה והסבר על כל תרגיל ותיקונים במידת הצורך!"/>
      <DropdownAccordion title="למי מיועד הליווי אונליין?" content="למתאמנים חדשים וותיקים כאחד, שנוח להם יותר להתאמן לבד, או שהלו״ז שלהם לא כלכך מסודר (סטודנטים/ אנשי עסקים/ מטיילים וכו׳) ויוכלו לקבל התאמה לתקופה בה נמצאים"/>
      <DropdownAccordion title="למי מיועד הליווי הפרונטלי?" content="לאנשים שרוצים את הליווי הצמוד, העיניים עליהם במהלך כל האימון ואנשים שחוששים מפציעות."/>
    </div>

    <Button text="יש לך עוד שאלות? לחצי כאן :)"/>
 </>
}
