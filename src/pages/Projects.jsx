import React, { useState } from "react";

function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const projects = [
    {
      id: 1,
      title: "ShopEase",
      category: "Full Stack",
      badgeColor: "bg-orange-100 text-orange-600",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, order history, wishlists, and Stripe payment integration.",
      image:
        "https://images.unsplash.com/photo-1638428355339-3ae4ae63bf4e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 2,
      title: "TaskFlow",
      category: "Frontend",
      badgeColor: "bg-orange-100 text-orange-600",
      description:
        "A drag-and-drop task management app with real-time collaboration, team workspaces, priority labels, and deadline tracking.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "TypeScript", "Firebase"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 3,
      title: "WeatherNow",
      category: "Frontend",
      badgeColor: "bg-orange-100 text-orange-600",
      description:
        "A weather dashboard with 7-day forecasts, hourly charts, interactive maps, and location-based weather alerts powered by OpenWeather.",
      image: "",
      tags: ["React", "OpenWeather API", "CSS3"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 4,
      title: "ChatSpace",
      category: "Full Stack",
      badgeColor: "bg-orange-100 text-orange-600",
      description:
        "Real-time messaging platform with channels, direct messages, file sharing, emoji reactions, and user presence indicators.",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 5,
      title: "PortfolioGen",
      category: "Full Stack",
      badgeColor: "bg-orange-100 text-orange-600",
      description:
        "A no-code portfolio builder that generates beautiful, responsive developer websites from a simple guided multi-step form.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 6,
      title: "BlogCMS",
      category: "Backend",
      badgeColor: "bg-orange-100 text-orange-600",
      description:
        "A headless CMS and blog platform with Markdown support, tags, categories, scheduled publishing, and an admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ];

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
          {filteredProjects.map((project) => (
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
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
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
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
