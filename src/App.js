import React, { useReducer } from "react";

import OptionsMainContent from "@components/blocks/OptionsMainContent/OptionsMainContent.jsx"; 
import MainContent from "@components/blocks/MainContent/MainContent.jsx"; 
import SettingsPanel from "@components/blocks/SettingsPanel/SettingsPanel.jsx"; 
import Header from "@components/blocks/Header/Header.jsx";
import useSCSSTools from "./hooks/useWindowResize";

import styles from "./styles/App.module.scss";
import { GeneratorTimer } from "./utils/defaultStates";
import timersReducer from './utils/timersReducer';
import {TimersContext, SetTimersContext} from './utils/TimersContext';

function App() {
  useSCSSTools()
  let [timers, setTimers] = useReducer(timersReducer, [GeneratorTimer(), ]);
  
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <TimersContext.Provider value={timers}>
          <SetTimersContext.Provider value={setTimers}>
            <OptionsMainContent />
            <MainContent />
            <SettingsPanel />
          </SetTimersContext.Provider>
        </TimersContext.Provider>
      </main>
    </div>
  );
}

export default App;
