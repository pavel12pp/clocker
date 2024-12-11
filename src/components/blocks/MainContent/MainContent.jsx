import React from 'react';
import TimerClock from './clocks/TimerClock';
import TimerControls from './controls/ClockControls';

import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <section className={styles.mainContent}>
      <TimerClock />
      <TimerControls />
    </section>
  );
};

export default MainContent