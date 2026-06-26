import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-14"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* NotesFlow */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -10 }}
  transition={{ duration: 0.4 }}
  className="
    bg-gradient-to-br
    from-slate-900
    to-slate-950
    border border-slate-800
    rounded-3xl
    overflow-hidden
    hover:border-emerald-400
    transition-all
  "
>

  <div className="p-8">

    <div className="flex justify-between items-start">

      <span
        className="
          px-4 py-1
          rounded-full
          bg-emerald-500/10
          text-emerald-400
          text-sm
          font-medium
        "
      >
        MERN Stack
      </span>

      <div className="flex gap-3">

        <a
          href="https://github.com/Tejas-coder-cloud/NotesFlow"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-800 p-3 rounded-xl hover:bg-emerald-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://notes-flow-nu.vercel.app/dashboard"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-800 p-3 rounded-xl hover:bg-emerald-500 transition"
        >
          <FaExternalLinkAlt />
        </a>

      </div>

    </div>

    <h3 className="text-3xl font-bold mt-6 text-emerald-400">
      NotesFlow
    </h3>

    <p className="text-slate-400 mt-2">
      Secure Notes Management Platform
    </p>

  </div>

  <div className="border-t border-slate-800 p-8">

    <p className="text-slate-300 leading-8">
      A full-stack MERN application that allows users to securely
      create, edit, organize, search and delete notes using JWT
      authentication and MongoDB.
    </p>

    <ul className="space-y-3 mt-6 text-slate-400">

      <li>▸ JWT Authentication</li>

      <li>▸ Create, Update & Delete Notes</li>

      <li>▸ Instant Search Functionality</li>

      <li>▸ Responsive MERN Stack Application</li>

    </ul>

    <h4 className="mt-8 text-slate-500 uppercase text-sm tracking-widest">
      Tech Stack
    </h4>

    <div className="flex flex-wrap gap-3 mt-4">

      {[
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ].map((tech) => (
        <span
          key={tech}
          className="
            px-4 py-2
            bg-slate-800
            rounded-full
            text-sm
          "
        >
          {tech}
        </span>
      ))}

    </div>

  </div>

</motion.div>

          {/* Resume JD Matcher */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className="
              bg-gradient-to-br
              from-slate-900
              to-slate-950
              border border-slate-800
              rounded-3xl
              overflow-hidden
              hover:border-cyan-400
              transition-all
            "
          >
            <div className="p-8">

              <div className="flex justify-between items-start">

                <span className="
                  px-4 py-1
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-400
                  text-sm
                  font-medium
                ">
                  NLP Project
                </span>

                <div className="flex gap-3">

                  <a
                    href="https://github.com/Tejas-coder-cloud/Resume-Job-description-matcher"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 p-3 rounded-xl hover:bg-cyan-500 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://resume-job-description-matcher-zdad2qvfwikr7mwsk33p9y.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 p-3 rounded-xl hover:bg-cyan-500 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

              <h3 className="text-3xl font-bold mt-6 text-cyan-400">
                Resume-JD Matcher
              </h3>

              <p className="text-slate-400 mt-2">
                AI Powered Recruitment Assistant
              </p>

            </div>

            <div className="border-t border-slate-800 p-8">

              <p className="text-slate-300 leading-8">
                Intelligent Resume and Job Description matching
                platform that evaluates candidate suitability
                using Natural Language Processing and Semantic
                Similarity techniques.
              </p>

              <ul className="space-y-3 mt-6 text-slate-400">

                <li>▸ Semantic Similarity using SBERT embeddings</li>

                <li>▸ Gemini AI powered candidate evaluation</li>

                <li>▸ Multilingual Resume support</li>

                <li>▸ Interactive Streamlit dashboard</li>

              </ul>

              <h4 className="mt-8 text-slate-500 uppercase text-sm tracking-widest">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3 mt-4">

                {[
                  "Python",
                  "SBERT",
                  "Gemini AI",
                  "NLP",
                  "Streamlit"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      bg-slate-800
                      rounded-full
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

          {/* AIthentic */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.7 }}
            className="
              bg-gradient-to-br
              from-slate-900
              to-slate-950
              border border-slate-800
              rounded-3xl
              overflow-hidden
              hover:border-purple-400
              transition-all
            "
          >
            <div className="p-8">

              <div className="flex justify-between items-start">

                <span className="
                  px-4 py-1
                  rounded-full
                  bg-purple-500/10
                  text-purple-400
                  text-sm
                  font-medium
                ">
                  Deep Learning
                </span>

                <div className="flex gap-3">

                  <a
                    href="https://github.com/sahil1399m/AI_DEEPFAKE_FINAL_MODEL"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 p-3 rounded-xl hover:bg-purple-500 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://aideepfakefinalmodel-8klv8esicpxfjwcq3b7jjj.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 p-3 rounded-xl hover:bg-purple-500 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

              <h3 className="text-3xl font-bold mt-6 text-purple-400">
                AIthentic
              </h3>

              <p className="text-slate-400 mt-2">
                Deepfake Detection Platform
              </p>

            </div>

            <div className="border-t border-slate-800 p-8">

              <p className="text-slate-300 leading-8">
                Deep Learning based system capable of identifying
                manipulated videos using both spatial and temporal
                feature extraction techniques.
              </p>

              <ul className="space-y-3 mt-6 text-slate-400">

                <li>▸ EfficientNet-B3 feature extraction</li>

                <li>▸ MobileNetV3 lightweight inference</li>

                <li>▸ Bi-LSTM temporal sequence learning</li>

                <li>▸ FaceForensics++ dataset training</li>

              </ul>

              <h4 className="mt-8 text-slate-500 uppercase text-sm tracking-widest">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3 mt-4">

                {[
                  "Python",
                  "PyTorch",
                  "CNN",
                  "Bi-LSTM",
                  "OpenCV"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      bg-slate-800
                      rounded-full
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Projects;