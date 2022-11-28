import { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Render based on desktop size
  function windowResize() {
    window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      windowResize();
    });
    return window.removeEventListener("resize", () => {
      windowResize();
    });
  }, []);
  //

  return (
    <AppContext.Provider value={{ isDesktop, setIsDesktop }}>
      {children}
    </AppContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(AppContext);
}
