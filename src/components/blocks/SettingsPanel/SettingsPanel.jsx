import React from 'react';
import TimerUpdateSettingsPanel from './createSettingsPanels/CreateSettingsPanel';
import TimerCreateSettingsPanel from './updateSettingsPanels/UpdateSettingsPanel';

const SettingsPanel = () => {
  return (
    <section>
      <TimerUpdateSettingsPanel />
      <TimerCreateSettingsPanel />
    </section>
  );
};

export default SettingsPanel