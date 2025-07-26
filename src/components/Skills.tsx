import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 w-full px-6 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Technologies and tools I work with to bring ideas to life
        </motion.p>
        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              category: "Programming Languages",
              items: ["JavaScript", "C++", "Python"],
            },
            {
              category: "Frontend",
              items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
            },
            {
              category: "Backend",
              items: ["Node.js", "Express.js", "RESTful APIs"],
            },
            {
              category: "Databases",
              items: ["MongoDB", "PostgreSQL", "Redis"],
            },
            {
              category: "Tools & DevOps",
              items: ["Git", "Docker", "GitHub Actions"],
            },
            {
              category: "AI & Infosec",
              items: [
                "NLP",
                "LangGraph",
                "Ollama",
                "CyberForensics",
                "Malware Analysis",
              ],
            },
          ].map((group, idx) => (
            <motion.div
              key={group.category}
              className={`p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
