import React, { useState } from "react";

function About() {
  const academicBackground = [
    {
      title: "B.S. Computer Science",
      institution: "UC Berkeley – Berkeley, CA",
      period: "2017 - 2021",
      description:
        "Graduated with Honors. Focus on Software Engineering, Distributed Systems, and Human-Computer Interaction.",
    },
    {
      title: "Full-Stack Web Development",
      institution: "Bootcamp Cert - Online",
      period: "2021",
      description:
        "Intensive program covering Modern JavaScript, React, Node.js, Databases, and Industry Best Practices.",
    },
    {
      title: "Data Structures & Algorithms",
      institution: "Coursera — Stanford Online",
      period: "2021",
      description:
        "Certificate course covering problem-solving, graphs, dynamic programming, and complexity analysis.",
    },
  ];

  const workExperience = [
    {
      role: "Junior Full-Stack Developer",
      company: "TECH CORP INC. – San Francisco, CA",
      period: "Jan 2022 - Present",
      bullets: [
        "Build and maintain full-stack features for 100k+ active users platform.",
        "Collaborate with design and product team to deliver sleek features.",
        "Refactored legacy codebase to React, increasing performance and load speed.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "StartUpXYZ – San Jose, CA",
      period: "May 2021 - Aug 2021",
      bullets: [
        "Developed microservices for the company's customer-facing dashboard.",
        "Wrote unit and integration tests, achieving 85% code coverage across new modules.",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance – Remote",
      period: "Jan 2020 - Dec 2020",
      bullets: [
        "Built responsive websites and web applications for small business clients.",
        "Managed client communication, requirement gathering, hosting, and deployment.",
      ],
    },
  ];

  const technicalProficiency = [
    { skill: "React / Next.js", percentage: 90 },
    { skill: "TypeScript / JavaScript", percentage: 88 },
    { skill: "Node.js / Express", percentage: 85 },
    { skill: "Python / Django", percentage: 75 },
    { skill: "PostgreSQL / MongoDB", percentage: 80 },
    { skill: "Docker / CI/CD", percentage: 70 },
  ];

  const hobbies = [
    "Open Source",
    "UI/UX Design",
    "Machine Learning",
    "System Design",
    "Rock Climbing",
    "Photography",
    "Coffee Brewing",
    "Traveling",
  ];

  return (
    <>
      <section className="text-center space-y-3">
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
          GET TO KNOW ME
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          About Alex
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
          A passionate software engineer who loves building things that make a
          real difference.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 flex justify-center">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
              alt="Alex Carter"
              className="w-56 h-64 md:w-full md:h-72 object-cover rounded-2xl shadow-md border border-gray-100"
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
            Building the web, one line at a time.
          </h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              I'm Alex Carter, a Full-Stack Software Developer based in San
              Francisco, CA. I graduated from UC Berkeley with a B.S. in
              Computer Science in 2021 and have been building web products
              professionally ever since.
            </p>
            <p>
              My stack spans React and TypeScript on the frontend, Node.js and
              Python on the backend, and PostgreSQL/MongoDB for data. I care
              deeply about performance, accessibility, and writing code that my
              future self won't hate.
            </p>
            <p>
              When I'm not coding, you'll find me tinkering with open-source,
              experimenting with computer vision, or seeking coffee shops. I'm
              currently looking for my next challenge.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            <span className="px-3 py-1.5 bg-gray-100 rounded-lg border border-gray-200/60">
              📍 San Francisco, CA
            </span>
            <span className="px-3 py-1.5 bg-gray-100 rounded-lg border border-gray-200/60">
              💼 Open to Work
            </span>
            <span className="px-3 py-1.5 bg-gray-100 rounded-lg border border-gray-200/60">
              🎓 UC Berkeley
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            EDUCATION
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Academic Background
          </h2>
          <div className="w-8 h-0.5 bg-gray-900 mx-auto mt-2"></div>
        </div>

        <div className="space-y-4">
          {academicBackground.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative pl-8"
            >
              <div className="absolute left-3 top-7 w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-orange-50 text-orange-600 rounded-md self-start sm:self-auto">
                  {item.period}
                </span>
              </div>
              <p className="text-xs font-medium text-orange-500 mb-2">
                {item.institution}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            CAREER
          </span>
          <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
          <div className="w-8 h-0.5 bg-gray-900 mx-auto mt-2"></div>
        </div>

        <div className="space-y-4">
          {workExperience.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative pl-8"
            >
              <div className="absolute left-3 top-7 w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="font-bold text-gray-900">{item.role}</h3>
                <span className="text-xs font-medium text-gray-400 self-start sm:self-auto">
                  {item.period}
                </span>
              </div>
              <p className="text-xs font-semibold text-gray-500 mb-3">
                {item.company}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 leading-relaxed">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            SKILLS
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Technical Proficiency
          </h2>
          <div className="w-8 h-0.5 bg-gray-900 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {technicalProficiency.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-800">{item.skill}</span>
                <span className="text-xs font-bold text-orange-500">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gray-900 h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            PERSONAL
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Interests & Hobbies
          </h2>
          <p className="text-xs text-gray-500">
            A few things I'm passionate about beyond the keyboard.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {hobbies.map((hobby, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white border border-gray-200 text-xs font-medium text-gray-700 rounded-full shadow-xs hover:border-gray-400 transition-colors cursor-default"
            >
              {hobby}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
