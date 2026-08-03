import { motion } from "framer-motion";

function Home() {
  const quickStats = [
    { title: "8.34", subtitle: "Current CGPA" },
    { title: "99.41", subtitle: "CET Percentile" },
    { title: "3", subtitle: "AI/ML Projects" },
  ];

  const services = [
    {
      title: "Software Development",
      description:
        "Building scalable applications using modern technologies and best practices.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Exploring AI-powered solutions to automate and improve real-world workflows.",
    },
    {
      title: "Machine Learning",
      description:
        "Developing predictive and intelligent systems using modern ML techniques.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden pb-24"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-32">
        {/* Intro Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-lg font-medium tracking-wide mb-3"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Tejas <span className="text-cyan-400">Dhatrak</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 font-medium mt-4"
        >
          Software Developer • AI/ML Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl text-slate-400 text-lg leading-relaxed mt-6"
        >
          Third Year B.Tech student at Veermata Jijabai Technological Institute
          (VJTI), passionate about Software Development, Artificial
          Intelligence, Machine Learning, and building impactful projects that
          solve real-world problems.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="/Tejas_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            View Resume
          </a>

          <a
            href="https://github.com/Tejas-coder-cloud"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-slate-800/90 text-white font-semibold border border-slate-700/60 hover:bg-slate-800 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            GitHub
          </a>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {quickStats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-colors shadow-lg"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                {stat.title}
              </h3>
              <p className="text-slate-400 mt-2 font-medium text-sm">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What I Do Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-400 rounded-full inline-block" />
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;