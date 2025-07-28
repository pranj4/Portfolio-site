import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 w-full px-6 sm:px-8 lg:px-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-black dark:text-white mb-10 text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Passionate about creating clean, user‑focused applications and equally
          fascinated by Information Security. I enjoy exploring how the web
          works under the hood — building seamless experiences while ensuring
          they’re secure against modern threats.Constantly learning,
          experimenting, and eager to grow, I aim to bridge creativity with
          security in everything I build. Currently learning LangGraph and building multi-agent systems with inter-agent communication using
          Google’s A2A protocol
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Full Stack Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Experienced in building end-to-end web applications using React,
              Node.js, and modern databases.
            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2a4 4 0 018 0v2m-4-6a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              AI & Machine Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Building intelligent Agents with LangGraph,CrewAI 
            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              DevOps & Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Proficient in Docker, GitHub Actions, and modern development
              workflows for scalable applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
