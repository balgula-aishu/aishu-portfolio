import React from "react";
const ProjectCard = ({ title, main}) => {
    const githubLinks={
        "Event Management":"https://github.com/balgula-aishu/Event_Management.git",
        "Recipe Search":"https://github.com/balgula-aishu/Recipe-Search.git",
        "WellnessPlan Bloom":"https://github.com/balgula-aishu/WellNessPlan-Bloom.git"
    }
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-4 p-2 md:p-4 flex justify-center">
        <a
          href={githubLinks[title] || "https://github.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-5 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
