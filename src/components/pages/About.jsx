import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 text-sm">
            ABOUT ME
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Background &{" "}
            <span className="text-cyan-400">
              Expertise
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-4xl mt-6 leading-8">
            Third Year B.Tech student in Electronics &
            Telecommunication Engineering at Veermata Jijabai
            Technological Institute (VJTI), Mumbai.

            Passionate about Software Development,
            Artificial Intelligence and Machine Learning.

            I enjoy building intelligent applications that
            solve real-world problems and continuously
            improving my technical skills.
          </p>
        </motion.div>

        {/* Skills */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold mb-8">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Languages
              </h3>

              <div className="flex flex-wrap gap-3">
                {["C++", "Python"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                AI / ML
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "Machine Learning",
                  "Streamlit",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "GitHub",
                  "VS Code",
                  "Google Colab",
                  "Jupyter Notebook",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Areas of Interest
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Software Development",
                  "AI",
                  "Machine Learning",
                  "NLP",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </section>

        {/* Achievements */}

<section className="mt-20">

  <h2 className="text-3xl font-bold mb-8">
    Achievements
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

    {[
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
    ].map((item, index) => (

      item.link ? (

        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            text-center
            block
            hover:border-cyan-400
            transition
          "
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {item.title}
          </h3>

          <p className="text-slate-400 mt-3">
            {item.subtitle}
          </p>

          <p className="text-cyan-400 mt-4 text-sm">
            View Certificate →
          </p>

        </motion.a>

      ) : (

        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {item.title}
          </h3>

          <p className="text-slate-400 mt-3">
            {item.subtitle}
          </p>

        </motion.div>

      )

    ))}

  </div>

</section>


        {/* Education */}
        <section className="mt-12">

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Education
          </h2>

          <div className="space-y-4">

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5"
            >
              <h3 className="text-xl font-semibold">
                Veermata Jijabai Technological Institute
              </h3>

              <p className="text-slate-400 mt-1">
                B.Tech Electronics & Telecommunication Engineering
              </p>

              <p className="text-cyan-400 mt-2">
                CGPA: 8.34 | 2024 - 2028
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5"
            >
              <h3 className="text-xl font-semibold">
                Ramnivas Ruia Junior College
              </h3>

              <p className="text-cyan-400 mt-2">
                HSC: 87.33% | MHT-CET: 99.41
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5"
            >
              <h3 className="text-xl font-semibold">
                St. Joseph's High School
              </h3>

              <p className="text-cyan-400 mt-2">
                SSC: 92.80%
              </p>
            </motion.div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default About;