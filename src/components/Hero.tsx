import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[60vh] flex items-start bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 sm:px-8 lg:px-16 pt-8"
    >
      <div className="w-full max-w-7xl mx-auto mt-8 flex justify-center">
        <motion.div
          className="flex flex-col max-w-3xl w-full bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-10 md:p-16 border border-gray-100 dark:border-gray-800 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2"
          >
            Hey, It's{" "}
            <span className="text-blue-600 dark:text-blue-400 drop-shadow-lg">
              Pranjal
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-medium"
          >
            Web Development | AI/ML | Infosec Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg text-black dark:text-black max-w-2xl"
          >
            Weaving AI, Code, and Imagination into Tomorrow’s Web.
            <br />
            Finished my Master's in Computer Applications with hands-on
            experience in full-stack development and Info-Sec .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex justify-center items-center mb-2"
          >
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-7 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1_cIGMjkWOusjgTRMlSUw0T1W0mgcTFXY/view?usp=sharing"
                download
                className="px-7 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition font-semibold flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12v1a8 8 0 0016 0v-1"
                  />
                  <polyline points="8 12 12 16 16 12" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
