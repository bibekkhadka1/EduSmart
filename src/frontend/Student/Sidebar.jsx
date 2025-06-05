import React from 'react';
import { 
  FaHome, FaBook, FaClipboardList, FaChartBar, FaCalendarAlt, FaUser, FaCogs, FaUsers 
} from 'react-icons/fa';
import { MdLibraryBooks, MdHelpOutline, MdLogout } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <div className="logo-circle">E</div>
        <h2>EduSmart</h2>
      </div>

      <div className="section-title">MAIN</div>
      <ul className="menu">
        <li><FaHome /> Dashboard</li>
        <li className="active"><FaBook /> My Courses</li>
        <li><FaCalendarAlt /> Schedule</li>
        <li><FaClipboardList /> Assignments</li>
        <li><FaChartBar /> Grades</li>
        <li><IoMdSchool /> Attendance</li>
      </ul>

      <div className="section-title">RESOURCES</div>
      <ul className="menu">
        <li><MdLibraryBooks /> Book Library</li>
        <li><FaUsers /> Recommendations</li>
        <li><FaUsers /> Skills Exchange</li>
        <li><FaUsers /> Study Groups</li>
      </ul>

      <div className="section-title">SETTINGS</div>
      <ul className="menu">
        <li><FaUser /> Profile</li>
        <li><FaCogs /> Settings</li>
        <li><MdHelpOutline /> Help Center</li>
        <li><MdLogout /> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
