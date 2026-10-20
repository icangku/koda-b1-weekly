import React from "react";
import { Link } from "react-router";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-slate-950 text-gray-400 text-xs py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
        <div className="space-y-3">
          <h3 className="text-white text-base font-bold">Alex Carter</h3>
          <p className="leading-relaxed max-w-xs text-gray-400">
            Full-stack software developer based in San Francisco, CA. Building
            thoughtful web experiences one commit at a time.
          </p>
          <div className="flex space-x-2 pt-2">
            <span className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded text-[11px]">
              GitHub
            </span>
            <span className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded text-[11px]">
              LinkedIn
            </span>
            <span className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded text-[11px]">
              Twitter
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experiences" className="hover:text-white transition">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
            Contact
          </h4>
          <div className="space-y-2 text-gray-400">
            <p>alex.carter@email.com</p>
            <p>+1 (415) 555-0192</p>
            <p>San Francisco, CA 94105</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between pt-6">
        <p>© 2026 Alex Carter. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-gray-300 transition-colors"
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
