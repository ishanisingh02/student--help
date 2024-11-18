// Timetable.js
import React, { useState } from 'react';
import './timetable.css'; // Importing the CSS file for styles

const Timetable = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');
  const [entries, setEntries] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject && time) {
      setEntries([...entries, { subject, time }]);
      setSubject('');
      setTime('');
    }
  };

  return (
    <div className={`timetable ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <nav className="navbar">
          <h1 className="logo">Timetable Helper</h1>
          <button className="toggle-mode-btn" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      <section className="form-section">
        <form onSubmit={handleSubmit} className="timetable-form">
          <input
            type="text"
            placeholder="Subject Name"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Timing (e.g., 10:00 AM)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <button type="submit">Add to Timetable</button>
        </form>
      </section>

      <section className="entries-section">
        <h2>Your Timetable Entries</h2>
        <div className="timetable-entries">
          {entries.map((entry, index) => (
            <div key={index} className="timetable-entry">
              {entry.subject} - {entry.time}
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Timetable Helper. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Timetable;
