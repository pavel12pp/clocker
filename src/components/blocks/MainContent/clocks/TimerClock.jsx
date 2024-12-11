import React, { useContext } from 'react';

import styles from "./TimerClock.module.scss";
import {TimersContext, SetTimersContext} from './../../../../utils/TimersContext';

const TimerClock = () => {
  let timers = useContext(TimersContext);
  let setTimers = useContext(SetTimersContext);
  let timer = timers.find((timer) => timer.isCurrent)

  let stillTime = timer.stillTime
  let originalTime = timer.originalTimes[timer.currentTime];
  let remainTime = stillTime / originalTime;
  if (timer.isActive) {
    setTimeout(() => {
      setTimers({
        type: "updateTime",
        timerId: timer.id,
      })
    }, 10)
  }
  return (
    <div className={styles.clock} style={{"--remainTime": remainTime}}>
      <div className={styles.clock__wrapper}>
        <time className={styles.clock__date}>{Math.floor(stillTime / 1000)} секунд / {timer.originalTimes.length - timer.currentTime - 1} повторов</time>
      </div>
    </div>
  );
};

export default TimerClock