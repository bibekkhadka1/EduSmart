import './MyCourses.css';

function MyCourses() {
  const courses = [
    {
      title: 'Introduction to Web Development',
      progress: 75,
      image: 'https://via.placeholder.com/300x180?text=Web+Dev',
    },
    {
      title: 'Advanced Calculus',
      progress: 60,
      image: 'https://via.placeholder.com/300x180?text=Calculus',
    },
    {
      title: 'Contemporary American Fiction',
      progress: 45,
      image: 'https://via.placeholder.com/300x180?text=Fiction',
    },
  ];

  return (
    <div className="my-courses">
      <div className="top-bar">
        <button>View All</button>
        <button className="add-btn">+ Add Course</button>
      </div>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>Progress: {course.progress}%</p>
            <div className="progress-bar">
              <div style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
