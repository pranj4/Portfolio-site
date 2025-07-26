import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "PhishGuard AI",
      description:
"Built two specialized AI agents (email analyzer + link verifier) using LangGraph orchestration and Ollama-hosted LLM for finding Phishing mails. • Designed Streamlit GUI enabling real-time email risk scoring with color-coded alerts, reducing manual analysis time by 70 percent for security teams.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["Python", "LangGraph", "Ollama", "Streamlit", "FastAPI"],
      github: "https://github.com/pranj4/PhishGuard-AI",
      deploy: "https://phishguard-ai.streamlit.app",
    },
    {
      title: " Document Classification & Invoice Extraction API",
      description:
        "Developed a robust API for document classification and invoice extraction, leveraging advanced NLP techniques for accurate data extraction.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["Python", "NLP", "Model Training", "FastAPI"],
      github: "https://github.com/pranj4/Document-Classifier-",
      deploy: "https://document-classifier-api.herokuapp.com",
    },
    {
      title: "AI Virtual Assistant ",
      description: `The assistant listens to your voice commands using speech recognition.
It replies with a human-like voice,
It can tell you the current time whenever you ask.
It fetches and shares information from Wikipedia based on what you want to know.`,
      image: "https://via.placeholder.com/400x300",
      technologies: ["Python", "pyaudio", "pyttsx3"],
      github: "https://github.com/pranj4/AI-Virtual-Assistant",
      deploy: "",
    },
    {
      title: "Invoice Generator",
      description: `This app lets you sign up or log in securely.
You can add as many products as you want, with their prices and quantities.
It automatically calculates GST and totals for you—no need for manual math!
When you're done, you can generate and download nice-looking PDF invoices.`,
      image: "https://via.placeholder.com/400x300",
      technologies: [
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "MongoDB",
        "Puppeteer",
        "Express.js",
      ],
      github: "https://github.com/pranj4/Invoice-Generator",
      deploy:
        "https://invoice-generator-fry6wh8qo-pranjals-projects-f57b5a0c.vercel.app",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="py-20 w-full px-6 sm:px-8 lg:px-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-orange-200 dark:border-orange-400 transition-all duration-300 hover:scale-105 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800 text-orange-800 dark:text-orange-200 rounded-full text-xs font-medium border border-orange-200 dark:border-orange-700 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg shadow-md hover:shadow-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 text-sm font-medium text-center transform hover:scale-105"
                      >
                        {project.title === "AI Virtual Assistant "
                          ? "🚀 Live Demo"
                          : "🌐 Website"}
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg shadow-md hover:shadow-lg hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 text-sm font-medium text-center transform hover:scale-105"
                    >
                      <svg
                        className="inline-block w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 w-full px-6 sm:px-8 lg:px-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Experience
          </h2>
          <div className="space-y-6">
            {/* Example Experience Card */}
            {[
              {
                role: "Frontend Developer Intern",
                company: "Erebrus powered by NetSepio",
                date: "July 2025 - Present",
                description:
                  "Building modern, responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with designers and backend engineers to deliver high-quality products.",

              },
              {
                role: "Full-Stack Developer Intern",
                company: "Zeptik",
                date: "Dec 2024 - Apr 2025",
                description: `Integrated custom APIs with frontend components for features like user profile updates, authentication, and debugged and resolved API-related issues to ensure seamless communication between frontend and backend.`,
                certificate: "https://drive.google.com/file/d/1_uEgdf9ZuIc0NejlZi6KjwcGYEmhklrH/view?usp=sharing",
              },
              {
                role: "Software Developer Intern",
                company: "Iqvia",
                date: "",
                description: `Trained and worked on IQVIA’s product OCE as Salesforce admin on live project related to pharma companies like Corium ,Mission etc. deployment pipelines using tools like Jenkins,Git and other services on demand of client.Managed user permissions and Identity and Access Management (IAM) to safeguard sensitive information within the Salesforce ecosystem`,
                certificate: "https://drive.google.com/file/d/19o_yjW70jXGfqZ9ofhjh9SBCab7rQ4Fj/view?usp=drive_link",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100 dark:border-gray-800 p-6 flex flex-col md:flex-row md:items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-700 dark:text-blue-400 md:text-left text-center hover:underline"
                    >
                      {exp.role}{" "}
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 block md:inline">
                        @ {exp.company}
                      </span>
                    </a>
                    <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right text-center mt-2 md:mt-0">
                      {exp.date}
                    </div>
                  </div>
                  <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-left text-center">
                    {exp.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* GitHub Contribution Section */}
      <section
        id="github-contributions"
        className="py-16 w-full px-6 sm:px-8 lg:px-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            GitHub Contributions
          </h2>
          <div className="flex flex-col items-center">
            {/* Replace 'your-github-username' with your actual GitHub username */}
            <img
              src={`https://ghchart.rshah.org/pranj4`}
              alt="GitHub Contributions"
              className="w-full max-w-4xl h-auto grayscale contrast-125"
              style={{
                minHeight: "180px",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-center text-sm">
              Total contributions this year: <span className="font-semibold text-orange-600 dark:text-orange-400">1,200+</span> commits across various projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
