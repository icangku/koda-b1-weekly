import React, { useState } from "react";
import { Download } from "lucide-react";

function Experience() {
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
                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                    TechCorp Inc.
                  </td>
                  <td className="py-4 px-6 text-gray-600 font-medium whitespace-nowrap">
                    Junior Software Developer
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    Jan 2023 – Present
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    San Francisco, CA
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full">
                      Full Time
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                    Freelance
                  </td>
                  <td className="py-4 px-6 text-gray-600 font-medium whitespace-nowrap">
                    Web Developer
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    Jun 2022 – Dec 2022
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    Remote
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full">
                      Contract
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                    StartupXYZ
                  </td>
                  <td className="py-4 px-6 text-gray-600 font-medium whitespace-nowrap">
                    Software Engineering Intern
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    May 2022 – Aug 2022
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    San Jose, CA
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full">
                      Internship
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                    UC Berkeley Tech Club
                  </td>
                  <td className="py-4 px-6 text-gray-600 font-medium whitespace-nowrap">
                    President & Lead Developer
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    Sep 2021 – May 2023
                  </td>
                  <td className="py-4 px-6 text-gray-500 whitespace-nowrap">
                    Berkeley, CA
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full">
                      Volunteer
                    </span>
                  </td>
                </tr>
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
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center font-extrabold text-orange-600 text-xs shrink-0">
              AWS
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                AWS Certified Developer – Associate
              </h3>
              <p className="text-xs font-medium text-orange-600">
                Amazon Web Services
              </p>
              <p className="text-xs text-gray-400 pt-1">
                Dec 2023 · Valid until Dec 2026
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center font-extrabold text-orange-600 text-xs shrink-0">
              GCP
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                Google Professional Cloud Developer
              </h3>
              <p className="text-xs font-medium text-orange-600">
                Google Cloud
              </p>
              <p className="text-xs text-gray-400 pt-1">
                Oct 2023 · Valid until Oct 2026
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center font-extrabold text-orange-600 text-xs shrink-0">
              MDB
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                MongoDB Certified Developer Associate
              </h3>
              <p className="text-xs font-medium text-orange-600">
                MongoDB Inc.
              </p>
              <p className="text-xs text-gray-400 pt-1">
                Mar 2022 · Valid until Mar 2025
              </p>
            </div>
          </div>
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
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-bold text-gray-900">
                  Employee of the Month
                </h3>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  March 2024
                </span>
              </div>
              <p className="text-xs font-semibold text-orange-600 mt-0.5">
                TechCorp Inc.
              </p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                Recognized for delivering the customer portal redesign ahead of
                schedule with zero post-launch bugs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-bold text-gray-900">
                  Best Overall Project
                </h3>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  November 2022
                </span>
              </div>
              <p className="text-xs font-semibold text-orange-600 mt-0.5">
                Bay Area CodeFest Hackathon
              </p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                First place out of 48 teams for building a real-time food rescue
                coordination app in 24 hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-bold text-gray-900">
                  Dean's List
                </h3>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  2021 & 2022
                </span>
              </div>
              <p className="text-xs font-semibold text-orange-600 mt-0.5">
                UC Berkeley
              </p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                Achieved top academic standing in the College of Engineering for
                two consecutive academic years.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-bold text-gray-900">
                  Outstanding Senior Project
                </h3>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  May 2023
                </span>
              </div>
              <p className="text-xs font-semibold text-orange-600 mt-0.5">
                CS Department, UC Berkeley
              </p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                Capstone project — an AI-assisted code review tool — recognized
                as the top project in the graduating class.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
