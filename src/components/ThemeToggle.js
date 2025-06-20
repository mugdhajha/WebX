// import React from 'react';
// import { useTheme } from '../context/ThemeContext';

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="toggle-theme-button"
//     >
//       {theme === 'light' ? '☀️ Light Mode'  :  '🌙 Dark Mode'}
//     </button>
//   );
// };

// export default ThemeToggle;
// components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css'; // <-- Ensure you place your custom CSS here

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme !== 'dark'}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span className="star star_1"></span>
        <span className="star star_2"></span>
        <span className="star star_3"></span>
        <svg className="cloud" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="16" fill="#fff" />
        </svg>
      </span>
    </label>
  );
};

export default ThemeToggle;
