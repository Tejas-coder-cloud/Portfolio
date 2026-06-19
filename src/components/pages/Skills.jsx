function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-12">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold text-cyan-400">
              Resume-JD Matcher
            </h3>

            <p className="mt-4 text-slate-300 leading-8">
              AI-powered multilingual Resume and Job Description
              matching system using SBERT, Gemini AI and Streamlit.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <span className="bg-slate-800 px-3 py-1 rounded-full">
                Python
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-full">
                NLP
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-full">
                Streamlit
              </span>
            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold text-cyan-400">
              Aithentic
            </h3>

            <p className="mt-4 text-slate-300 leading-8">
              Deepfake Detection System using EfficientNet-B3,
              MobileNetV3 and Bi-LSTM models.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <span className="bg-slate-800 px-3 py-1 rounded-full">
                CNN
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-full">
                Bi-LSTM
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-full">
                Python
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;