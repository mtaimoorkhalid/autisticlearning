import { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Check if the user visited before and turned on comfort mode
  const [comfortMode, setComfortMode] = useState(() => {
    return localStorage.getItem('comfortMode') === 'true';
  });

  // Whenever comfortMode changes, update the actual HTML body
  useEffect(() => {
    if (comfortMode) {
      document.body.classList.add('comfort-mode');
      localStorage.setItem('comfortMode', 'true');
    } else {
      document.body.classList.remove('comfort-mode');
      localStorage.setItem('comfortMode', 'false');
    }
  }, [comfortMode]);

  const toggleComfortMode = () => {
    setComfortMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ comfortMode, toggleComfortMode }}>
      {children}
    </ThemeContext.Provider>
  );
}