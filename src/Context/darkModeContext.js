import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITAIL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITAIL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITAIL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
