import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow Effects */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* Main Content */}

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-32">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-lg font-medium mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Tejas{" "}
          <span className="text-cyan-400">
            Dhatrak
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mt-6"
        >
          Software Developer • AI/ML Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl text-slate-400 text-lg leading-9 mt-8"
        >
          Third Year B.Tech student at Veermata Jijabai
          Technological Institute (VJTI), passionate about
          Software Development, Artificial Intelligence,
          Machine Learning, and building impactful projects
          that solve real-world problems.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-5 mt-10"
        >

          <a
            href="/Tejas_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
    px-10 py-5
    rounded-2xl
    bg-cyan-500
    text-black
    font-semibold
    hover:bg-cyan-400
    hover:scale-105
    transition-all
    duration-300
    cursor-pointer
  "
          >
            View Resume
          </a>

          <a
            href="https://github.com/Tejas-coder-cloud"
            target="_blank"
            rel="noreferrer"
            className="
    px-10 py-5
    rounded-2xl
    bg-slate-800
    text-white
    font-semibold
    hover:bg-slate-700
    hover:scale-105
    transition-all
    duration-300
    cursor-pointer
  "
          >
            GitHub
          </a>

        </motion.div>

        {/* Quick Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              8.34
            </h3>

            <p className="text-slate-400 mt-2">
              Current CGPA
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              99.41
            </h3>

            <p className="text-slate-400 mt-2">
              CET Percentile
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              3
            </h3>

            <p className="text-slate-400 mt-2">
              AI/ML Projects
            </p>
          </motion.div>

        </div>

        {/* What I Do */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold mb-8">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                Software Development
              </h3>

              <p className="text-slate-400 mt-4">
                Building scalable applications using modern
                technologies and best practices.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                Artificial Intelligence
              </h3>

              <p className="text-slate-400 mt-4">
                Exploring AI-powered solutions to automate
                and improve real-world workflows.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                Machine Learning
              </h3>

              <p className="text-slate-400 mt-4">
                Developing predictive and intelligent systems
                using modern ML techniques.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default Home;