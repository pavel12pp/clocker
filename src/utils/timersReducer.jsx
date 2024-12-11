import { cloneDeep } from 'lodash';

export default function timersReducer(timers, action) {
  let actions = [
    "updateTime",
    "toggleActive",
    "reset",

    "create",
    "update",
  ]
  let currentTimer;
  if (!(action.type in ['create'])) {
    currentTimer = cloneDeep(timers.find((timer) => timer.id === action.timerId));
  }
  switch (action.type) {
    case 'updateTime': {
      currentTimer.stillTime = currentTimer.stillTime - (Math.floor(Date.now()) - currentTimer.lastStart)
      currentTimer.lastStart = Math.floor(Date.now())
      if (currentTimer.stillTime <= 0) {
        if (currentTimer.originalTimes.length - 1 > currentTimer.currentTime) {
          currentTimer.currentTime += 1;
          currentTimer.stillTime = currentTimer.originalTimes[currentTimer.currentTime];
        } else {
          currentTimer.stillTime = 0;
          currentTimer.isActive = false;
          currentTimer.isEnd = true;
        }
      } 
      return [
        ...timers.map((timer) => {
          return timer
        }).filter((timer) => {
          return timer.id !== currentTimer.id
        }),
        currentTimer
      ]
    }
    case 'toggleActive': {
      currentTimer.isActive = currentTimer.isActive ? false : true;
      if (currentTimer.isActive) {
        currentTimer.lastStart = Math.floor(Date.now()) 
      }
      return [
        ...timers.map((timer) => {
          return timer
        }).filter((timer) => {
          return timer.id !== currentTimer.id
        }),
        currentTimer
      ]
    }
    case 'reset': {
      currentTimer.reset()
      return [
        ...timers.map((timer) => {
          return timer
        }).filter((timer) => {
          return timer.id !== currentTimer.id
        }),
        currentTimer
      ]
    }
    case 'update': {
      return [
        ...timers.map((timer) => {
          return timer
        }).filter((timer) => {
          return timer.id !== currentTimer.id
        }),
        action.newTimer,
      ]
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}