import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 mt-20">

            <div className="max-w-7xl mx-auto px-8 py-12">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Left Section */}

                    <div>
                        <h2 className="text-4xl font-bold text-white">
                            Tejas
                            <span className="text-cyan-400">.</span>
                        </h2>

                        <p className="text-slate-300 mt-4 text-lg">
                            Software Developer
                            <br />
                            AI/ML Enthusiast
                        </p>

                        <p className="text-slate-400 mt-4 flex items-center gap-2">
                            <FaMapMarkerAlt />
                            Mumbai, Maharashtra
                        </p>

                        <div className="flex gap-4 mt-5">

                            <a
                                href="/Tejas_Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                            >
                                View Resume
                            </a>

                            <a
                                href="/Tejas_Resume.pdf"
                                download="Tejas_Dhatrak_Resume.pdf"
                                className="px-4 py-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition"
                            >
                                Download Resume
                            </a>

                        </div>
                    </div>

                    {/* Middle Section */}

                    <div>
                        <h3 className="text-white font-semibold text-xl mb-5">
                            Navigate
                        </h3>

                        <div className="flex flex-col gap-4">
                            <Link
                                to="/"
                                className="text-slate-300 hover:text-cyan-400 transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="text-slate-300 hover:text-cyan-400 transition"
                            >
                                About
                            </Link>

                            <Link
                                to="/projects"
                                className="text-slate-300 hover:text-cyan-400 transition"
                            >
                                Projects
                            </Link>


                            <Link
                                to="/contact"
                                className="text-slate-300 hover:text-cyan-400 transition"
                            >
                                Contact
                            </Link>

                        </div>
                    </div>

                    {/* Right Section */}

                    <div>
                        <h3 className="text-white font-semibold text-xl mb-5">
                            Connect
                        </h3>

                        <p className="text-slate-400 mb-6">
                            Let's connect and build something amazing.
                        </p>

                        <div className="flex gap-4">

                            {/* GitHub */}

                            <a
                                href="https://github.com/Tejas-coder-cloud"
                                target="_blank"
                                rel="noreferrer"
                                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  text-slate-300
                  hover:text-cyan-400
                  hover:border-cyan-400
                  hover:-translate-y-1
                  transition-all duration-300
                "
                            >
                                <FaGithub size={22} />
                            </a>

                            {/* LinkedIn */}

                            <a
                                href="https://www.linkedin.com/in/tejas-dhatrak-01815a332/"
                                target="_blank"
                                rel="noreferrer"
                                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  text-slate-300
                  hover:text-cyan-400
                  hover:border-cyan-400
                  hover:-translate-y-1
                  transition-all duration-300
                "
                            >
                                <FaLinkedin size={22} />
                            </a>

                            {/* Email */}

                            <a
                                href="mailto:dhatraktejas07@gmail.com"
                                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  text-slate-300
                  hover:text-cyan-400
                  hover:border-cyan-400
                  hover:-translate-y-1
                  transition-all duration-300
                "
                            >
                                <FaEnvelope size={22} />
                            </a>

                        </div>

                        <p className="text-slate-400 mt-6">
                            dhatraktejas07@gmail.com
                        </p>

                    </div>

                </div>

                {/* Bottom Line */}

                <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">

                    © 2026 Tejas Dhatrak • Built with React & Tailwind CSS

                </div>

            </div>

        </footer>
    );
}

export default Footer;