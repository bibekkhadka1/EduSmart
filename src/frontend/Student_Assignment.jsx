import React from "react";
import "./Student_Assignment.css";

const assignments = [
  {
    title: "Assignment 1: HTML Basics",
    course: "Web Development",
    due: "Due: June 10, 2025"
  },
  {
    title: "Assignment 2: Linear Regression",
    course: "Data Science",
    due: "Due: June 15, 2025"
  },
  {
    title: "Assignment 3: RSA Encryption",
    course: "Computer Security",
    due: "Due: June 20, 2025"
  }
];

const Assignments = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">E</div>
          <div className="logo-text">EduSmart</div>
        </div>

        <div className="nav-section">
          <div className="nav-header">Main</div>
          <ul className="nav-items">
            <li className="nav-item"><a href="dashboard.html"><div className="nav-item-icon">📊</div><span>Dashboard</span></a></li>
            <li className="nav-item"><a href="courses.html"><div className="nav-item-icon">📚</div><span>My Courses</span></a></li>
            <li className="nav-item"><a href="schedule.html"><div className="nav-item-icon">📆</div><span>Schedule</span></a></li>
            <li className="nav-item active"><a href="assignments.html"><div className="nav-item-icon">📝</div><span>Assignments</span></a></li>
            <li className="nav-item"><a href="grades.html"><div className="nav-item-icon">📊</div><span>Grades</span></a></li>
          </ul>
        </div>

        <div className="nav-section">
          <div className="nav-header">Resources</div>
          <ul className="nav-items">
            <li className="nav-item"><a href="/resources/books.html"><div className="nav-item-icon">📖</div><span>Book Library</span></a></li>
            <li className="nav-item"><a href="/resources/recommendations.html"><div className="nav-item-icon">🔍</div><span>Recommendations</span></a></li>
            <li className="nav-item"><a href="/resources/skills.html"><div className="nav-item-icon">📱</div><span>Skills Exchange</span></a></li>
            <li className="nav-item"><a href="/resources/groups.html"><div className="nav-item-icon">👥</div><span>Study Groups</span></a></li>
          </ul>
        </div>

        <div className="nav-section">
          <div className="nav-header">Settings</div>
          <ul className="nav-items">
            <li className="nav-item"><a href="/settings/profile.html"><div className="nav-item-icon">👤</div><span>Profile</span></a></li>
            <li className="nav-item"><a href="/settings/settings.html"><div className="nav-item-icon">⚙️</div><span>Settings</span></a></li>
            <li className="nav-item"><a href="/settings/helpcenter.html"><div className="nav-item-icon">❓</div><span>Help Center</span></a></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h1 className="page-title">Assignments</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" className="search-input" placeholder="Search assignments..." />
              <span className="search-icon">🔍</span>
            </div>
            <div className="user-profile">
              <div className="avatar">U</div>
              <span className="username">Username</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Upcoming Assignments</div>
            <div className="card-actions">
              <button className="btn btn-sm btn-outline">Filter</button>
              <button className="btn btn-sm btn-primary">New Assignment</button>
            </div>
          </div>

          <div className="assignment-list">
            {assignments.map((a, index) => (
              <div className="assignment-item" key={index}>
                <div className="assignment-details">
                  <div className="assignment-title">{a.title}</div>
                  <div className="assignment-course">{a.course}</div>
                </div>
                <div className="assignment-due">{a.due}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assignments;
