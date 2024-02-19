/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

// Create a context for the display mode
const DisplayModeContext = createContext();

// Create a custom hook to use the display mode context
export const useDisplayMode = () => {
  return useContext(DisplayModeContext);
};

// Create a provider component for the display mode context
export const DisplayModeProvider = ({ children }) => {
  const [displayMode, setDisplayMode] = useState("light"); // Default display mode is 'light'

  const toggleDisplayMode = () => {
    setDisplayMode((prevMode) => (prevMode === "light" ? "dark" : "light")); // Toggle between 'light' and 'dark' mode
  };

  return (
    <DisplayModeContext.Provider value={{ displayMode, toggleDisplayMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
};
