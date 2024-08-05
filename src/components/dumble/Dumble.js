import React, { useEffect, useRef } from 'react';
import styles from './Dumble.module.css';
import { Player } from '@lordicon/react';

const Dumbbell = ({ title, description, icon }) => {
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
      }, []);
  return (
    <div className={styles.dumbbell}>
      <div className={styles.circle}>
      <div className={styles.icon}>
        <Player icon={icon} ref={playerRef2} size="80%" loop={true} onComplete={handleComplete2}></Player>
      </div>
      </div>
      <div className={styles.bar}>
        <h2 className={styles.title}>{title}</h2>
        {/* <p className={styles.description}>{description}</p> */}
      </div>
      <div className={styles.circle}>
      <div className={styles.icon}>
        <Player icon={icon} ref={playerRef1} size="80%" loop={true} onComplete={handleComplete}></Player>
      </div>
      </div>
    </div>
  );
};

export default Dumbbell;