import React, { useContext } from 'react';
import { TimersContext, SetTimersContext } from '../../../../utils/TimersContext';

import styles from "./ClockControls.module.scss";

const TimerControls = () => {
  let timers = useContext(TimersContext);
  let setTimers = useContext(SetTimersContext);
  let timer = timers.find((timer) => timer.isCurrent);
  function toggleActiveTimer(e) {
    e.preventDefault();
    setTimers({
      type: "toggleActive",
      timerId: timer.id,
    }) 
  }
  function resetTimer(e) {
    e.preventDefault();
    setTimers({
      type: "reset",
      timerId: timer.id,
    }) 
  }
  return (
    <section className={styles.controls}>
      <button className={styles.controls__toggle} onClick={toggleActiveTimer} disabled={timer.isEnd}>{timer.isActive ? "Stop" : "Start"}</button>
      <button className={styles.controls__reset} onClick={resetTimer} >Reset</button>
    </section>
  );
};

export default TimerControls