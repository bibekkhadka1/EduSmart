import React from 'react';
import ReactDOM from 'react-dom/client';
// import StudentAssignment from './frontend/Student_Assignment';
// import './frontend/Student_Assignment';
// import MyCourses from './frontend/Student/MyCourses';
// import './frontend/Student/MyCourses';
import Sidebar from './frontend/Student/Sidebar';
import Footer from './frontend/Student/Footer';
import Schedule from './frontend/Student/Schedule';
import Assignments from './frontend/Student/Assignments';
import Attendance from './frontend/Student/Attendance';
import GradesPage from './frontend/Student/GradesPage';
import BookLibrary from './frontend/Student/BookLibrary';
import BookRecommendations from './frontend/Student/BookRecommendations';
// import Header from './frontend/Student/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <StudentAssignment /> */}
    {/* <MyCourses /> */}
    {/* <Sidebar />
    <Footer /> */}
    {/* <Schedule /> */}
    {/* <Assignments /> */}
    {/* <Attendance /> */}
    {/* <GradesPage /> */}
    <BookLibrary />
    {/* <BookRecommendations /> */}
  
  </React.StrictMode>
);

