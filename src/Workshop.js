import React, { useState } from 'react';
import './Workshops.css';

const Workshops = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute('data-theme', darkMode ? '' : 'dark');
    };

    const workshops = [
        { title: "Workshop 1", description: "Description for Workshop 1" },
        { title: "Workshop 2", description: "Description for Workshop 2" },
        { title: "Workshop 3", description: "Description for Workshop 3" },
    ];

    const videos = [
        { title: "Video 1", link: "https://example.com/video1" },
        { title: "Video 2", link: "https://example.com/video2" },
        { title: "Video 3", link: "https://example.com/video3" },
    ];

    return (
        <div className="workshops-container">
            <h1>Upcoming Workshops</h1>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <div className="workshops-list">
                {workshops.map((workshop, index) => (
                    <div className="workshop-card" key={index}>
                        <h2>{workshop.title}</h2>
                        <p>{workshop.description}</p>
                    </div>
                ))}
            </div>
            <h1>Existing Videos</h1>
            <div className="videos-list">
                {videos.map((video, index) => (
                    <div className="video-card" key={index}>
                        <h2>{video.title}</h2>
                        <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Video</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Workshops;
