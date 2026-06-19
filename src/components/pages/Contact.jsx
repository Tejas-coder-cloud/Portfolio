import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "EMAIL",
      value: "dhatraktejas07@gmail.com",
      link: "mailto:dhatraktejas07@gmail.com",
      color: "text-cyan-400",
    },
    {
      icon: <FaPhoneAlt />,
      title: "PHONE",
      value: "+91 9321477063",
      link: "tel:+919321477063",
      color: "text-yellow-400",
    },
    {
      icon: <FaLinkedin />,
      title: "LINKEDIN",
      value: "linkedin.com/in/tejas-dhatrak-01815a332",
      link: "https://www.linkedin.com/in/tejas-dhatrak-01815a332/",
      color: "text-cyan-400",
    },
    {
      icon: <FaGithub />,
      title: "GITHUB",
      value: "github.com/Tejas-coder-cloud",
      link: "https://github.com/Tejas-coder-cloud",
      color: "text-green-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "LOCATION",
      value: "Mumbai, Maharashtra",
      link: null,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          Let's{" "}
          <span className="text-cyan-400">
            Connect
          </span>
        </h1>

        <p className="text-slate-400 text-lg mb-12">
          Open to internship opportunities, collaborations,
          AI/ML projects and exciting conversations.
        </p>

        <div className="space-y-5">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link || "#"}
              target={item.link ? "_blank" : ""}
              rel="noreferrer"
              whileHover={{
                scale: 1.02,
                x: 10,
              }}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex justify-between items-center block"
            >
              <div className="flex items-center gap-5">

                <div
                  className={`text-3xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-slate-500 text-sm tracking-widest">
                    {item.title}
                  </p>

                  <p className="text-lg text-white">
                    {item.value}
                  </p>
                </div>

              </div>

              {item.link && (
                <FaExternalLinkAlt className="text-slate-500" />
              )}

            </motion.a>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Contact;