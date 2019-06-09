import React from "react";
import ProjectSummary from "./ProjectSummary";
// import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
