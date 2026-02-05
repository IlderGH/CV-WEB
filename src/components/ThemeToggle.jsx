import React, { useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="theme-toggle">
      <ion-icon className="theme-toggle-moonIcon" name="moon-sharp"></ion-icon>
      <label className="switch">
        <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <ion-icon className="theme-toggle-sunnyIcon" name="sunny"></ion-icon>
    </div>
  );
}


export default ThemeToggle;