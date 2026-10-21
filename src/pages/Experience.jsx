import React, { useState } from "react";
import { Download } from "lucide-react";

function Experience() {
  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Junior Software Developer",
      duration: "Jan 2023 – Present",
      location: "San Francisco, CA",
      type: "Full Time",
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Jun 2022 – Dec 2022",
      location: "Remote",
      type: "Contract",
    },
    {
      company: "StartupXYZ",
      position: "Software Engineering Intern",
      duration: "May 2022 – Aug 2022",
      location: "San Jose, CA",
      type: "Internship",
    },
    {
      company: "UC Berkeley Tech Club",
      position: "President & Lead Developer",
      duration: "Sep 2021 – May 2023",
      location: "Berkeley, CA",
      type: "Volunteer",
    },
  ];

  const certifications = [
    {
      code: "AWS",
      certification: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      issued_date: "Dec 2023",
      expiration_date: "Dec 2026",
    },
    {
      code: "GCD",
      certification: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      issued_date: "Oct 2023",
      expiration_date: "Oct 2026",
    },
    {
      code: "MDB",
      certification: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      issued_date: "Mar 2022",
      expiration_date: "Mar 2025",
    },
  ];

  const awards = [
    {
      title: "Employee of the Month",
      date: "March 2024",
      organization: "TechCorp Inc.",
      description:
        "Recognized for delivering the customer portal redesign ahead of schedule with zero post-launch bugs.",
    },
    {
      title: "Best Overall Project",
      date: "November 2022",
      organization: "Bay Area CodeFest Hackathon",
      description:
        "First place out of 48 teams for building a real-time food rescue coordination app in 24 hours.",
    },
    {
      title: "Dean's List",
      date: "2021 & 2022",
      organization: "UC Berkeley",
      description:
        "Achieved top academic standing in the College of Engineering for two consecutive academic years.",
    },
    {
      title: "Outstanding Senior Project",
      date: "May 2023",
      organization: "CS Department, UC Berkeley",
      description:
        "Capstone project — an AI-assisted code review tool — recognized as the top project in the graduating class.",
    },
  ];
  return (
    <>
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/80 pb-10">
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            CAREER HISTORY
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
            Experience
          </h1>
          <p className="text-base md:text-lg text-gray-500 mt-2 max-w-2xl">
            My professional journey, credentials, and recognition.
          </p>
        </div>

        <button
          onClick={() => alert("Downloading Alex_Carter_Resume.pdf")}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-95 self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </button>
      </section>

      <section className="space-y-6">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            WORK HISTORY
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
            Professional Experience
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Company</th>
                  <th className="py-4 px-6">Position</th>
                  <th className="py-4 px-6">Duration</th>
                  <th className="py-4 px-6">Location</th>
                  <th className="py-4 px-6 text-center">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {experiences.map((exp) => (
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                      {exp.company}
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium whitespace-nowrap">
                      {exp.position}
                    </td>
                    <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                      {exp.duration}
                    </td>
                    <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                      {exp.location}
                    </td>
                    <td className="py-4 px-6 text-center whitespace-nowrap">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full">
                        {exp.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            CREDENTIALS
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center font-extrabold text-orange-600 text-xs shrink-0">
                {cert.code}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-gray-900 leading-snug">
                  {cert.certification}
                </h3>
                <p className="text-xs font-medium text-orange-600">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-400 pt-1">
                  {cert.expiration_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            RECOGNITION
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
            Awards & Honors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {award.title}
                  </h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {award.date}
                  </span>
                </div>
                <p className="text-xs font-semibold text-orange-600 mt-0.5">
                  {award.organization}
                </p>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
