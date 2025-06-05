import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const scheduleData = [
    {
      time: '09:30 - 10:30',
      event: 'Web Development Lecture',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    {
      time: '11:30 - 12:30',
      event: 'Web Development Tutorial',
      days: ['Monday'],
    },
  ];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="page-wrapper">
      <div className="schedule-container">
        <h2>Weekly Schedule</h2>
        <div className="schedule-controls">
          <button>Previous</button>
          <button>Next</button>
        </div>
        <table className="schedule-table">
          <thead>
            <tr>
              {days.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(2)].map((_, rowIdx) => (
              <tr key={rowIdx}>
                {days.map(day => {
                  const item = scheduleData.find(
                    entry => entry.days.includes(day) && scheduleData.indexOf(entry) === rowIdx
                  );
                  return (
                    <td key={day + rowIdx}>
                      {item ? (
                        <>
                          <div>{item.time}</div>
                          <div>{item.event}</div>
                        </>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
