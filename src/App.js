import OptionsMainContent from "./components/blocks/OptionsMainContent/OptionsMainContent.jsx"; 
import MainContent from "./components/blocks/MainContent/MainContent.jsx"; 
import SettingsPanel from "./components/blocks/SettingsPanel/SettingsPanel.jsx"; 
import Header from "./components/blocks/Header/Header.jsx";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <OptionsMainContent />
        <MainContent />
        <SettingsPanel />
      </main>
    </div>
  );
}

export default App;
