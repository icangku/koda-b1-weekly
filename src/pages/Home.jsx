import React from "react";
import { Link } from "react-router";
import { projects } from "../util/data";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
      <section id="home" className="py-12 lg:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">
                  Available For Hire
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                  Hi, I'm <span className="text-slate-900">Alex Carter</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-700">
                  Full-Stack Software Developer
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                I build fast, accessible, and beautifully designed web
                applications. With 3+ years of experience across the full stack,
                I turn complex problems into elegant digital products.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:border-slate-400 rounded-xl transition-all duration-200 hover:bg-slate-50 active:scale-95"
                >
                  Contact Me
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    3+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-xl border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="Alex Carter Profile"
                    className="w-full h-[420px] object-cover rounded-2xl"
                    onerror="this.src='https://placehold.co/600x800/1e293b/ffffff?text=Alex+Carter'"
                  ></img>
                  <div className="absolute bottom-6 left-6 bg-brand-500 text-white px-4 py-2 rounded-xl font-medium text-sm shadow-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
                    Open to work
                  </div>

                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md border border-slate-200/60 flex items-center gap-1.5">
                    <i
                      data-lucide="code-2"
                      className="w-4 h-4 text-brand-500"
                    ></i>
                    Full Stack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-brand-500 uppercase">
              Technical Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              What I Work With
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              A curated stack of tools and technologies I use to build modern,
              production-ready web applications.
            </p>
            <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              React
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              Node.js
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              Python
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              PostgreSQL
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              MongoDB
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              Docker
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              AWS
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              Next.js
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              REST APIs
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              GraphQL
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              Figma
            </span>
            <span className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm rounded-xl shadow-sm hover:border-brand-300 transition-all cursor-default">
              Git
            </span>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-16 bg-white border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-500 uppercase">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Featured Projects
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              A selection of projects that showcase my skills across the full
              development stack.
            </p>
            <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-200 shadow-sm active:scale-95"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-16 bg-slate-50 border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-500 uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              What Clients Say
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Feedback from people I've had the pleasure of working with.
            </p>
            <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "Alex delivered our e-commerce platform ahead of schedule. The
                code quality and UI clarity exceeded our expectations!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                  alt="Sarah Johnson"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  onerror="this.src='https://placehold.co/100x100/1e293b/ffffff?text=SJ'"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Sarah Johnson
                  </h4>
                  <p className="text-xs text-slate-500">CEO, ShopTech</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "Working with Alex was a pleasure. They understood our
                requirements immediately and provided creative solutions to
                complex problems."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                  alt="Michael Chen"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  onerror="this.src='https://placehold.co/100x100/1e293b/ffffff?text=MC'"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Michael Chen
                  </h4>
                  <p className="text-xs text-slate-500">CTO, TaskLabs</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "Alex transformed our outdated website into a modern, responsive
                platform. Traffic increased 40% in the first month post-launch!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                  alt="Emily Rodriguez"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  onerror="this.src='https://placehold.co/100x100/1e293b/ffffff?text=ER'"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Emily Rodriguez
                  </h4>
                  <p className="text-xs text-slate-500">
                    Marketing Director, Acme Corp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and full-time
            opportunities. Let's build something great.
          </p>
          <div className="pt-4">
            <a
              href="mailto:alex.carter@example.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/20 active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
