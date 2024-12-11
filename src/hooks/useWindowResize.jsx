import { useEffect } from 'react';

const useSCSSTools = () => {
  useEffect(() => {
    let handleResizeWindow = () => {
      document.documentElement.style.setProperty("--viewport-width", window.innerWidth);
    }
    handleResizeWindow()
    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []); 

};

export default useSCSSTools;