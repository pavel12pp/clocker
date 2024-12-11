import React, { useRef, useState, useContext, Fragment } from 'react';
import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import styles from "./UpdateSettingsPanel.module.scss";
import { GeneratorTimer } from './../../../../utils/defaultStates';
import { SetTimersContext, TimersContext } from '../../../../utils/TimersContext';

const TimerCreateSettingsPanel = () => {
  let timers = useContext(TimersContext);
  let setTimers = useContext(SetTimersContext);
  let timer = timers.find((timer) => timer.isCurrent)

  let [updatingTimer, setUpdatingTimer] = useState({...cloneDeep(timer), lastStart: null, currentTime: 0,});
  let [error, setError] = useState('');
  const timeKeys = useRef(
    Array.from({ length: updatingTimer.originalTimes.length }, () => uuidv4())
  );
  if (timeKeys.current.length > updatingTimer.originalTimes.length) {
    timeKeys.current = timeKeys.current.splice(updatingTimer.originalTimes.length - timeKeys.current.length, (updatingTimer.originalTimes.length - timeKeys.current.length));
  } else if (timeKeys.current.length < updatingTimer.originalTimes.length) {
    let addedTimeKeys = Array.from({ length: updatingTimer.originalTimes.length - timeKeys.current.length}, () => uuidv4());
    timeKeys.current = [...timeKeys.current, ...addedTimeKeys];
  }
  function handlerAddTime(e) {
    let newUpdatingTimer = {...cloneDeep(updatingTimer), originalTimes: updatingTimer.originalTimes.concat([1000, ])};
    setUpdatingTimer(newUpdatingTimer)
    e.preventDefault();
  }
  function handlerDeleteTime(e) {
    let indexTime = Number(e.target.closest("." + styles.updatePanel__fieldTime).querySelector('input').name.slice(4));
    let newUpdatingTimer = {...cloneDeep(updatingTimer), originalTimes: cloneDeep([...updatingTimer.originalTimes.slice(0, indexTime), ...(updatingTimer.originalTimes.slice(indexTime + 1))])};
    setUpdatingTimer(newUpdatingTimer)
    e.preventDefault();
  }
  function handlerReset(e) {
    setUpdatingTimer(cloneDeep(timer));
    e.preventDefault()
  }
  function validateSave(newTimer) {
    let supArray = updatingTimer.originalTimes.filter((ot) => {
      return ot < 1 || Math.floor(ot) !== ot
    });
    if (updatingTimer.originalTimes.length < 1) {
      return "Колво таймеров меньше 1"
    } else if (supArray.length !== 0) {
      return "Некорректное значение одного из таймеров"
    } else {
      return ""
    }
  }
  function handlerSave(e) {
    let validateResult = validateSave(updatingTimer);
    setError(validateResult)
    if (validateResult === '') {
      setTimers({
        type: 'update',
        timerId: updatingTimer.id,
        newTimer: {
          ...updatingTimer,
          stillTime: updatingTimer.originalTimes[0],
        },
      })
    } 
    e.preventDefault();
  }
  return (
    <section className={styles.updatePanel}>
      <form className={styles.updatePanel__form} action="">
        <input type="text" value={updatingTimer.name} onChange={(e) => (setUpdatingTimer({...updatingTimer, name: e.target.value}))} name='name' className={styles.updatePanel__field}/>
        <div className={styles.updatePanel__fieldGroup}>
          {timeKeys.current.map((timeKey, index) => {
            return (
              <div className={styles.updatePanel__fieldTime} key={timeKey}>
                <input className={styles.updatePanel__field} type="number" name={"time" + String(index)} value={updatingTimer.originalTimes[index]} onChange={(e) => (setUpdatingTimer({...updatingTimer, originalTimes: [
                  ...updatingTimer.originalTimes.slice(0, index),
                  Number(e.target.value),
                  ...updatingTimer.originalTimes.slice(index + 1),
                ]}))} />
                <button className={styles.updatePanel__deleteField} onClick={handlerDeleteTime}>X</button>
              </div>
            )
          })}
          <button className={styles.updatePanel__addButton} onClick={handlerAddTime}>Add time</button>
        </div>
        <span className={styles.updatePanel__error}>{error}</span>
        <div className={styles.updatePanel__buttons}>
          <button className={styles.updatePanel__saveButton} onClick={handlerSave}>Save</button>
          <button className={styles.updatePanel__resetButton} onClick={handlerReset}>Reset</button>
        </div>
      </form>
    </section>
  );
};

export default TimerCreateSettingsPanel