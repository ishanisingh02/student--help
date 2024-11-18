import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage'; // Your front page component
import Login from './Login'; // Correctly import the Login component
import MainPage from './MainPage'; // Other components
import CGPA from './Cgpa';
import ToDoList from './tdl';
import TeacherReviewSystem from './trs';
import Calendar from './Calendar';
import ProgressTracker from './ProgressTracker';
import GPA from './gpa';
import QuizApp from './QuizApp';
import Signup from './Signup';
import Timetable from './timetable';
import DiscussionForum from './df';
import Workshops from './Workshop';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<Login />} /> {/* Ensure the login route is defined */}
        <Route path="/cgpa-calculator" element={<CGPA />} />
        <Route path="/todo-list" element={<ToDoList />} />
        <Route path="/teacher-review" element={<TeacherReviewSystem />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/pt" element={<ProgressTracker />} />
        <Route path="/gpa" element={<GPA />} />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/th" element={<Timetable />} />
        <Route path="/df" element={<DiscussionForum />} />
        <Route path="/ws" element={<Workshops />} />
      </Routes>
    </Router>
  );
}

export default App;
