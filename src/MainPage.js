import React, { useState, useEffect } from 'react';
import './MainPage.css';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const functionalities = [
    { id: 1, title: 'GPA Calculator', description: 'Calculate your GPA easily.', image: 'https://tse1.mm.bing.net/th?id=OIP.OhKSLDT3N5lU-CoST_4WWAHaGH&pid=Api&P=0&h=180' },
    { id: 2, title: 'Resource Library', description: 'Access a variety of study materials.', image: 'https://tse3.mm.bing.net/th?id=OIP.a3mpdBtHMVCC4kDM6PFvfAHaDn&pid=Api&P=0&h=180' },
    { id: 3, title: 'Teacher Review System', description: 'Rate and review your teachers.', image: 'https://tse2.mm.bing.net/th?id=OIP.HD425E4H6Gplrk4_D6pjwAAAAA&pid=Api&P=0&h=180' },
    { id: 4, title: 'Academic Calendar', description: 'Stay updated on important dates.', image: 'https://tse2.mm.bing.net/th?id=OIP.cJB3esCrwSewrA-OpqF_xAHaHa&pid=Api&P=0&h=180' },
    { id: 5, title: 'Discussion Forum', description: 'Let our friendly AI assistant solve your issues.', image: 'https://tse4.mm.bing.net/th?id=OIP.CU8rnS327_H5PhbmxCf0lAHaDt&pid=Api&P=0&h=180' },
    { id: 6, title: 'Timetable Helper', description: 'Organize your classes effectively.', image: 'https://tse4.mm.bing.net/th?id=OIP.rvyDyNqkuhHTZSzoVWRgYAAAAA&pid=Api&P=0&h=180' },
    { id: 8, title: 'Workshops', description: 'Participate in skill-building workshops.', image: 'https://tse4.mm.bing.net/th?id=OIP.y_fAyXBAl-_0HpuKSAFWeAHaEK&pid=Api&P=0&h=180' },
    { id: 9, title: 'Progress Tracking', description: 'Track your academic progress.', image: 'https://tse2.mm.bing.net/th?id=OIP.5vsOJANzXuBQE8OlUD6SJgHaEx&pid=Api&P=0&h=180' },
    { id: 10, title: 'CGPA Calculator', description: 'Calculate your CGPA easily.', image: 'https://tse3.mm.bing.net/th?id=OIP.wbpM13dcwIqVwmKpOYvwTgHaEo&pid=Api&P=0&h=180' },
    { id: 11, title: 'To-Do List', description: 'Manage your tasks efficiently.', image: 'https://tse3.mm.bing.net/th?id=OIP.G5aDymogMJl16R1bNoyv9wHaHa&pid=Api&P=0&h=180' },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredFunctionalities = functionalities.filter(func =>
    func.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Remove previous bot scripts, if any
    const removeOldBotScripts = () => {
      const oldScripts = document.querySelectorAll("script[src*='botpress.cloud'], script[src*='bpcontent.cloud']");
      oldScripts.forEach(script => document.body.removeChild(script));
    };
    
    removeOldBotScripts();

    // Load new Botpress chat script
    const botpressScript = document.createElement('script');
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    // Load the specific bot script
    const specificBotScript = document.createElement('script');
    specificBotScript.src = "https://files.bpcontent.cloud/2024/10/22/17/20241022172554-33XFH5OB.js";
    specificBotScript.async = true;
    document.body.appendChild(specificBotScript);

    // Cleanup function to remove the new scripts on unmount
    return () => {
      document.body.removeChild(botpressScript);
      document.body.removeChild(specificBotScript);
    };
  }, []);

  return (
    <div className={`main-page ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>Our Services</h1>
        <div className="header-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="toggle-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <div className="functionality-grid">
        {filteredFunctionalities.map(func => (
          <Link 
            to={
              func.title === 'CGPA Calculator' 
              ? '/cgpa-calculator' 
              : func.title === 'To-Do List' 
              ? '/todo-list' 
              : func.title === 'Teacher Review System' 
              ? '/teacher-review' 
              : func.title === 'Academic Calendar' 
              ? '/calendar' 
              : func.title === 'Progress Tracking' 
              ? '/Pt'
              : func.title === 'GPA Calculator' 
              ? '/gpa'
              : func.title === 'Quiz' 
              ? '/quiz'
              : func.title === 'Timetable Helper' 
              ? '/th'
              : func.title === 'Discussion Forum' 
              ? '/df'
              : func.title === 'Workshops' 
              ? '/ws'
              : '#'
            } 
            key={func.id} 
            className="functionality-block" 
            style={{ backgroundImage: `url(${func.image})` }}
          >
            <div className="overlay"></div>
            <h2>{func.title}</h2>
            <p>{func.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;