import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../util/data";

function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);
  return (
    <>
      <section className="pt-16 pb-12 text-center bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-3 block">
            PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            My Projects
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A collection of work that demonstrates my skills across the full
            development stack.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-center items-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-200/80 shadow-sm gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === category
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
