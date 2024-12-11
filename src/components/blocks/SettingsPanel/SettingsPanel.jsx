import React from 'react';

import TimerUpdateSettingsPanel from './createSettingsPanels/CreateSettingsPanel';
import TimerCreateSettingsPanel from './updateSettingsPanels/UpdateSettingsPanel';
import styles from "./SettingsPanel.module.scss";


const SettingsPanel = () => {
  return (
    <section className={styles.settingPanel}>
      <TimerUpdateSettingsPanel />
      <TimerCreateSettingsPanel />
    </section>
  );
};

export default SettingsPanel