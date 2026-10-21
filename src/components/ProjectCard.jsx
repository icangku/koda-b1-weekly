import React from "react";

function ProjectCard({ project }) {
  return (
    <div
      key={project.id}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
    >
      <div className="h-48 w-full bg-gray-100 overflow-hidden relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300"></div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-600">
              {project.category}
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={project.githubUrl}
              className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              GitHub
            </a>
            <a
              href={project.demoUrl}
              className="flex items-center justify-center py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
