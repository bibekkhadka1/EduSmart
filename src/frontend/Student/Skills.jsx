import React from "react";
import "./Skills.css";
import { FaLaptopCode } from "react-icons/fa";
import { LuChartLine } from "react-icons/lu"; // ✅ you're keeping this
import { FaPenNib } from "react-icons/fa6";

const skillsData = [
  {
    title: "Web Development",
    author: "Emma Johnson",
    icon: <FaLaptopCode />,
    level: "Advanced",
  },
  {
    title: "Data Analysis",
    author: "Michael Chen",
    icon: <LuChartLine />, // ✅ FIXED: matches imported component
    level: "Intermediate",
  },
  {
    title: "Creative Writing",
    author: "Emma Sarah Williams",
    icon: <FaPenNib />,
    level: "Beginner",
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2>Available Skills</h2>
        <div className="skills-controls">
          <select className="filter-dropdown">
            <option>All levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <button className="offer-skill-btn">+ Offer Skill</button>
        </div>
      </div>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-info">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-text">
                <h3>{skill.title}</h3>
                <p>{skill.author}</p>
              </div>
            </div>
            <button className={`skill-level-btn ${skill.level.toLowerCase()}`}>
              {skill.level}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
