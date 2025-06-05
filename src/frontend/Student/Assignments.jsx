import React from 'react';
import './Assignments.css';

const assignments = [
  {
    title: 'HTML Project',
    description: 'Introduction to Web Development',
    dueDate: 'March 1, 2025',
  },
  {
    title: 'Calculus Problem Set',
    description: 'Advanced Calculus',
    dueDate: 'April 1, 2025',
  },
  {
    title: 'Book Review',
    description: 'Contemporary American Fiction',
    dueDate: 'May 1, 2025',
  },
];

const Assignments = () => {
  return (
    <div className="assignments-page">
      <div className="assignments-container">
        <div className="assignments-header">
          <h2>Pending Assignments</h2>
          <button className="filter-btn">Filter</button>
        </div>

        {assignments.map((assignment, index) => (
          <div className="assignment-card" key={index}>
            <div className="assignment-info">
              <strong>{assignment.title}</strong>
              <p>{assignment.description}</p>
            </div>
            <div className="due-date">Due: {assignment.dueDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
