import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="toggle-theme-button"
    >
      {theme === 'light' ? '☀️ Light Mode'  :  '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;