import React from 'react';
import TimerClock from './clocks/TimeClock';
import TimerControls from './controls/ClockControls';

const MainContent = () => {
  return (
    <section>
      <TimerClock />
      <TimerControls />
    </section>
  );
};

export default MainContent