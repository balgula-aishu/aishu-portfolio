import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Event Management"
          main="this Event Management is the process of planning and organizing events, from budgeting and venue selection to coordinating vendors and ensuring a smooth experience for attendees."
        />
        <ProjectCard
          title="Recipe Search"
          main="this Recipe Search allows users to find recipes based on ingredients, cuisine, dietary preferences, or meal type. It helps discover new dishes, save favorites, and find cooking instructions quickly."
        />
        <ProjectCard
          title="WellNessPlan Bloom"
          main="this WellnessPlan Bloom is a personalized wellness platform that offers customized fitness, nutrition, and mental health plans. "
        />
      </div>
    </div>
  );
};

export default Projects;
