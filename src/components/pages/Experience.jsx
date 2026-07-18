import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 text-sm">
            EXPERIENCE
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Professional{" "}
            <span className="text-cyan-400">
              Journey
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mt-6 leading-8">
            My journey of applying Artificial Intelligence and
            Machine Learning concepts through industry-oriented
            training programs and practical learning experiences.
          </p>

        </motion.div>

        {/* Lenovo Experience */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.5 }}
          className="
            mt-16
            bg-gradient-to-br
            from-slate-900
            to-slate-950
            border
            border-slate-800
            rounded-3xl
            overflow-hidden
            hover:border-cyan-400
            transition-all
          "
        >

          <div className="p-8">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

              <div>

                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                    <FaBriefcase className="text-cyan-400 text-2xl" />

                  </div>

                  <div>

                    <h2 className="text-3xl font-bold">
                      Lenovo India
                    </h2>

                    <p className="text-cyan-400 mt-1">
                      Artificial Intelligence Intern
                    </p>

                  </div>

                </div>

                <p className="text-slate-400 mt-6 leading-8">
                  Successfully completed the
                  <span className="text-cyan-400">
                    {" "}Lenovo LEAP NextGen Scholar Program{" "}
                  </span>
                  focused on Artificial Intelligence, Machine Learning,
                  and practical problem-solving through hands-on learning.
                </p>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-2 justify-end text-slate-400">

                  <FaCalendarAlt />

                  <span>June 2026</span>

                </div>

                <div className="mt-4 inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400">

                  Grade B

                </div>

              </div>

            </div>

          </div>

          <div className="border-t border-slate-800 p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Key Highlights
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              {[
                "Completed 60+ Hours of AI Learning",
                "Artificial Intelligence Fundamentals",
                "Machine Learning Concepts",
                "Problem Solving & Analytical Thinking",
                "Industry Exposure through Lenovo",
                "Successfully Awarded Grade B",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-cyan-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <h3 className="text-2xl font-semibold mt-12">
              Technologies & Skills
            </h3>

            <div className="flex flex-wrap gap-4 mt-6">

              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Python",
                "Problem Solving",
                "Data Analysis",
              ].map((tech) => (

                <span
                  key={tech}
                  className="
                    px-5
                    py-2
                    rounded-full
                    bg-slate-800
                    text-slate-300
                    hover:bg-cyan-500
                    hover:text-black
                    transition
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            <a
              href="/Lenovo_skill_india_assesment_certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                text-black
                font-semibold
                hover:bg-cyan-400
                hover:scale-105
                transition-all
              "
            >
              View Certificate

              <FaExternalLinkAlt />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;