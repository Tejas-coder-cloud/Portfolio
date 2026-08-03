import { motion } from "framer-motion";
import { FaGraduationCap, FaExternalLinkAlt, FaAward } from "react-icons/fa";

function About() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Python"],
    },
    {
      title: "AI / ML",
      skills: ["Pandas", "NumPy", "Matplotlib", "Machine Learning", "Streamlit"],
    },
    {
      title: "Tools",
      skills: ["GitHub", "VS Code", "Google Colab", "Jupyter Notebook"],
    },
    {
      title: "Areas of Interest",
      skills: ["Software Development", "AI", "Machine Learning", "NLP"],
    },
  ];

  const achievements = [
    {
      title: "8.34",
      subtitle: "Current CGPA",
    },
    {
      title: "99.41",
      subtitle: "MHT-CET Percentile",
    },
    {
      title: "2+",
      subtitle: "Major AI Projects",
    },
    {
      title: "Machine Learning",
      subtitle: "Coursera Certificate",
      link: "https://www.coursera.org/account/accomplishments/verify/HO41FF6K78O3",
    },
  ];

  const education = [
    {
      institution: "Veermata Jijabai Technological Institute",
      degree: "B.Tech Electronics & Telecommunication Engineering",
      details: "CGPA: 8.34 | 2024 - 2028",
    },
    {
      institution: "Ramnivas Ruia Junior College",
      degree: "HSC & MHT-CET",
      details: "HSC: 87.33% | MHT-CET: 99.41",
    },
    {
      institution: "St. Joseph's High School",
      degree: "Secondary School Certificate (SSC)",
      details: "SSC: 92.80%",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-2 rounded-full border border-cyan-500/40 text-cyan-400 text-sm font-medium tracking-wider bg-cyan-500/10">
            ABOUT ME
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 tracking-tight">
            Background & <span className="text-cyan-400">Expertise</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-4xl mt-6 leading-relaxed">
            Third Year B.Tech student in Electronics & Telecommunication
            Engineering at Veermata Jijabai Technological Institute (VJTI),
            Mumbai. Passionate about Software Development, Artificial
            Intelligence, and Machine Learning. I enjoy building intelligent
            applications that solve real-world problems and continuously
            improving my technical skills.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-400 rounded-full inline-block" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
              >
                <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-slate-800/80 text-slate-300 text-sm font-medium border border-slate-700/50 hover:border-cyan-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-400 rounded-full inline-block" />
            Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) =>
              item.link ? (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 text-center flex flex-col justify-between hover:border-cyan-400/60 transition-all duration-300 group shadow-lg"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 mt-2 text-sm font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 inline-flex items-center justify-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 text-center flex flex-col justify-center shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mt-2 text-sm font-medium">
                    {item.subtitle}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* Education */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-400 rounded-full inline-block" />
            Education
          </h2>

          <div className="space-y-4">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FaGraduationCap className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.institution}
                  </h3>
                  <p className="text-slate-400 mt-1 font-medium text-sm">
                    {item.degree}
                  </p>
                  <p className="text-cyan-400 text-sm font-semibold mt-2">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;