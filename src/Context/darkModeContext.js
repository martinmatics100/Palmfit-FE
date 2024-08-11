import { createContext, useEffect, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITAIL_STATE = {
  // darkMode: false,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};

export const DarkModeContext = createContext(INITAIL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITAIL_STATE);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
