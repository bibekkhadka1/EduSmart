import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './frontend/Student/MainLayout';

import Skills from './frontend/Student/Skills';
import StudyGroups from './frontend/Student/StudyGroups';
import Profile from './frontend/Student/Profile';
import Settings from './frontend/Student/Settings';
import Schedule from './frontend/Student/Schedule';
import Assignments from './frontend/Student/Assignments';
import SkillProgressDetail from './frontend/Student/SkillProgressDetail';
import MyCourses from './frontend/Student/MyCourses';
import GradesPage from './frontend/Student/GradesPage';
import Attendance from './frontend/Student/Attendance';
import BookLibrary from './frontend/Student/BookLibrary';
import BookRecommendations from './frontend/Student/BookRecommendations';
import HelpCenter from './frontend/Student/HelpCenter';
import Dashboard from './frontend/Student/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
        <Route index element = {<Dashboard />} />
        <Route path="dashboard" element ={<Dashboard />}/>

        <Route index element={<MyCourses />} /> 
        <Route path="courses" element={<MyCourses />} /> 

        <Route index element={<Schedule />} />
        <Route path="schedule" element={<Schedule />} />

             <Route index element={<Assignments />} />
        <Route path="assignments" element={<Assignments />} />

          <Route index element={<GradesPage/>} />
        <Route path="grades" element={<GradesPage />} />

          <Route index element={<Attendance />} />
        <Route path="attendance" element={<Attendance />} />

          <Route index element={<BookLibrary/>} />
        <Route path="library" element={<BookLibrary/>} />

          <Route index element={<BookRecommendations />} />
        <Route path="recommendations" element={<BookRecommendations/>} />

          <Route index element={<Skills />} />
        <Route path="skills" element={<Skills/>} />

          <Route index element={<SkillProgressDetail />} />
        <Route path="progress" element={<SkillProgressDetail />} />

          <Route index element={<StudyGroups />} />
        <Route path="groups" element={<StudyGroups />} />

          <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />

          <Route index element={<Settings />} />
        <Route path="settings" element={<Settings />} />

        <Route index element={<HelpCenter/>} />
        <Route path="help" element={<HelpCenter />} />
    
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
