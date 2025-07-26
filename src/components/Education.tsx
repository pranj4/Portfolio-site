import React from "react";

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Jain (Deemed-to-be University), Bangalore",
      period: "2023 - 2025",
      description:
        "Graduated with first class specializing in Information Security .",
      achievements: [
        "Published paper on  Data Security on Cloud Services: Threats and Mitigation (IJSREM ",
        "Comptia Security+ Certification",
        "Completed project on Blockchain based Voting System incoroporating 2FA ",
      ],
      certificate: "", // Add this for certificate link later
    },
  ];

  return (
    <section
      id="education"
      className="py-16 w-full px-6 sm:px-8 lg:px-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100 dark:border-gray-800 p-6 flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <a
                    href={edu.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-700 dark:text-blue-400 md:text-left text-center hover:underline"
                  >
                    {edu.degree}{" "}
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400 block md:inline">
                      @ {edu.school}
                    </span>
                  </a>
                  <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right text-center mt-2 md:mt-0">
                    {edu.period}
                  </div>
                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-left text-center">
                  {edu.description}
                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
