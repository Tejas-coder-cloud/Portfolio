import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaRocket,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}

      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-white"
        >
          Tejas
          <span className="text-cyan-400">.</span>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="text-white text-3xl hover:text-cyan-400 transition cursor-pointer"
        >
          <FaBars />
        </button>

      </nav>

      {/* Fullscreen Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-50
              bg-gradient-to-br
              from-slate-950
              via-slate-900
              to-black
              overflow-y-auto
            "
          >

            {/* Background Glow */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* Close Button */}

            <button
              onClick={() => setIsOpen(false)}
              className="
                absolute
                top-6
                right-6
                z-[100]
                text-3xl
                md:text-4xl
                text-white
                hover:text-cyan-400
                transition
                cursor-pointer
              "
            >
              <FaTimes />
            </button>

            {/* Content */}

            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">

              {/* Heading */}

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Menu
              </h2>

              <p className="text-sm md:text-base text-slate-400 mb-8">
                Navigate through my portfolio
              </p>

              {/* Navigation Cards */}

              <div className="w-full max-w-md flex flex-col gap-4">

                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center gap-4
                    bg-slate-900/70
                    border border-slate-800
                    rounded-2xl
                    px-6 py-4
                    text-lg md:text-xl
                    text-slate-200
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    hover:scale-[1.03]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <FaHome />
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center gap-4
                    bg-slate-900/70
                    border border-slate-800
                    rounded-2xl
                    px-6 py-4
                    text-lg md:text-xl
                    text-slate-200
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    hover:scale-[1.03]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <FaUser />
                  About
                </Link>

                <Link
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center gap-4
                    bg-slate-900/70
                    border border-slate-800
                    rounded-2xl
                    px-6 py-4
                    text-lg md:text-xl
                    text-slate-200
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    hover:scale-[1.03]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <FaRocket />
                  Projects
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center gap-4
                    bg-slate-900/70
                    border border-slate-800
                    rounded-2xl
                    px-6 py-4
                    text-lg md:text-xl
                    text-slate-200
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    hover:scale-[1.03]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <FaPhone />
                  Contact
                </Link>

              </div>

              {/* Social Icons */}

              <div className="flex justify-center gap-5 mt-10">

                <a
                  href="https://github.com/Tejas-coder-cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14 h-14
                    rounded-full
                    bg-slate-800
                    flex items-center justify-center
                    text-xl text-slate-300
                    hover:bg-cyan-500
                    hover:text-black
                    hover:scale-110
                    transition-all
                    cursor-pointer
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tejas-dhatrak-01815a332/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14 h-14
                    rounded-full
                    bg-slate-800
                    flex items-center justify-center
                    text-xl text-slate-300
                    hover:bg-cyan-500
                    hover:text-black
                    hover:scale-110
                    transition-all
                    cursor-pointer
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:dhatraktejas07@gmail.com"
                  className="
                    w-14 h-14
                    rounded-full
                    bg-slate-800
                    flex items-center justify-center
                    text-xl text-slate-300
                    hover:bg-cyan-500
                    hover:text-black
                    hover:scale-110
                    transition-all
                    cursor-pointer
                  "
                >
                  <FaEnvelope />
                </a>

              </div>

              {/* Resume Button */}

              <a
                href="/Tejas_Resume.pdf"
                download
                className="
                  mt-10
                  w-full
                  max-w-md
                  text-center
                  px-5
                  py-3
                  rounded-2xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  hover:bg-cyan-400
                  hover:scale-[1.02]
                  transition-all
                  cursor-pointer
                "
              >
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;