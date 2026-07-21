"use client";

import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { durationLabel, formatMonths, monthsBetween } from "@/lib/duration";
import { TypewriterText, MatrixRain } from "@/components/TerminalComp/effects";
import {
  CHATI_INTERN_START,
  CHATI_INTERN_END,
  CHATI_JR_START,
  PROMINDS_START,
} from "@/lib/portfolio-data";



const Experience: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [duration, setDuration] = useState({
    chatiTotal: "",
    chatiIntern: "",
    chatiJr: "",
    promindsTotal: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 0);
    const now = new Date();
    setDuration({
      chatiTotal: durationLabel(CHATI_INTERN_START, now),
      chatiIntern: formatMonths(
        monthsBetween(CHATI_INTERN_START, CHATI_INTERN_END)
      ),
      chatiJr: durationLabel(CHATI_JR_START, now),
      promindsTotal: durationLabel(PROMINDS_START, now),
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />

      <div
        className={`relative z-10 max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Terminal header */}
        <div className="mb-6 sm:mb-8 border border-green-800 bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4">
          <div>
            <span className="text-green-400 font-mono text-sm sm:text-base">
              <TypewriterText text="Loading experience..." delay={50} />
            </span>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Experience Section */}
          <section className="border border-green-800/30 bg-gradient-to-br from-green-900/10 to-black/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-green-900/20 hover:shadow-green-900/40 transition-all duration-500">
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-green-400 font-mono mr-2 sm:mr-4"></span>
              <h2 className="text-lg sm:text-2xl text-green-400 font-bold font-mono tracking-wider">
                EXPERIENCE.log
              </h2>
              <div className="ml-auto">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="ml-3 sm:ml-6 border-l-2 border-green-800/30 pl-3 sm:pl-6 space-y-8">
              {/* Syntechcraft */}
              <div className="border-b border-green-800/20 pb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-green-400 font-semibold text-base sm:text-lg font-mono flex flex-wrap items-center gap-2">
                      Syntechcraft
                      <a 
                        href="https://www.syntechcraft.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400/80 hover:text-blue-400 text-xs sm:text-sm font-normal underline decoration-blue-400/30 hover:decoration-blue-400/80 transition-colors"
                      >
                        [www.syntechcraft.com]
                      </a>
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      5 mos
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Colombo, Sri Lanka · Remote
                    </p>
                  </div>
                </div>

                <ol className="relative border-l-2 border-green-800/30 ml-2 sm:ml-3 space-y-6">
                  <li className="pl-4 sm:pl-5 relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-black shadow-[0_0_0_2px_rgba(74,222,128,0.35)]"
                    />
                    <h4 className="text-green-400 font-semibold text-sm sm:text-base font-mono">
                      Co-Founder & Fullstack Developer
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Full-time</p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Mar 2026 — Present · 5 mos
                    </p>

                    <ul className="mt-3 list-disc list-outside space-y-1 text-gray-300 text-sm sm:text-base ml-4 sm:ml-5">
                      <li>
                        Web Applications: Building complete, reliable web apps for clients from start to finish.
                      </li>
                      <li>
                        Database Design: Setting up and managing secure databases to store and track backend data smoothly.
                      </li>
                      <li>
                        Team Deployment: Working closely with my team to put projects online and keep our servers running well.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Department of Examination Sri Lanka */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-green-400 font-semibold text-base sm:text-lg font-mono">
                      Department of Examination Sri Lanka
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      7 mos
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Colombo, Sri Lanka · On-site
                    </p>
                  </div>
                </div>

                <ol className="relative border-l-2 border-green-800/30 ml-2 sm:ml-3 space-y-6">
                  <li className="pl-4 sm:pl-5 relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-green-700"
                    />
                    <h4 className="text-green-400 font-semibold text-sm sm:text-base font-mono">
                      Software Engineer Intern
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Internship</p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Oct 2025 — Apr 2026 · 7 mos
                    </p>

                    <ul className="mt-3 list-disc list-outside space-y-1 text-gray-300 text-sm sm:text-base ml-4 sm:ml-5">
                      <li>
                        Development & Data: Helped build web apps and manage databases. Wrote fast queries to load data and make useful reports.
                      </li>
                      <li>
                        Fixing Errors: Found and fixed system errors and data issues during very busy times to keep everything running smoothly.
                      </li>
                      <li>
                        Teamwork: Worked with senior staff and users to find out what they needed, create data reports, and help deliver good IT solutions.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Status footer */}
          <div className="mt-8 sm:mt-12 border-t border-green-800/30 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-green-400/70 font-mono text-xs sm:text-sm space-y-2 sm:space-y-0">
              <span>Status: Ready for new challenges</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
