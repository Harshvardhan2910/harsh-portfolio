import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "Redux.js"
];


const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "REST APIs",
  "Python"
];


const technologySkills = [
  "Python",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Viz."
];


const academicSubjects = [
  "DBMS",
  "Operating Systems",
  "Object-Oriented Programming",
  "Computer Networking"
];

const softSkills = [
  "Teamwork",
  "Leadership",
  "Public Speaking",
  "Problem Solving",
  "Problem Analysis",
  "Adaptability"
];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 ">
            Full-stack developer skilled in building scalable web apps, integrating AI solutions, and optimizing performance. Passionate about innovation and problem-solving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/50 shadow-md shadow-blue-500/20">

                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/50 shadow-md shadow-blue-500/20">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/50 shadow-md shadow-blue-500/20">
                <h3 className="text-xl font-bold mb-4"> Academic Subjects</h3>
                <div className="flex flex-wrap gap-2">
                  {academicSubjects.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/50 shadow-md shadow-blue-500/20">
                <h3 className="text-xl font-bold mb-4"> Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technology Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technologySkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
          {/* Education Section */}
          <div className="p-6 rounded-xl border-white/10 border ">
        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
        <div className="space-y-6 text-gray-300">
          
          {/* B.Tech */}
          <div className="p-4 border border-blue-500/50 rounded-lg shadow-md shadow-blue-500/20 hover:-translate-y-1 transition-all">
            <h4 className="font-semibold text-lg text-blue-400">
              B.Tech in Artificial Intelligence and Data Science — VIIT, Pune (2021 - 2025)
            </h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>CGPA:</strong> 9.04</li>
              <li><strong>Relevant Coursework:</strong> Data Structures, Object-Oriented Programming, DBMS, Operating Systems, Web Development, Artificial Intelligence, Machine Learning.</li>
            </ul>
          </div>

          {/* Senior Secondary (HSC) */}
          <div className="p-4 border border-blue-500/50 rounded-lg shadow-md shadow-blue-500/20 hover:-translate-y-1 transition-all">
            <h4 className="font-semibold text-lg text-blue-400">
              Senior Secondary (HSC) — Rajiv Gandhi Academy of E-learning (2021)
            </h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Percentage:</strong> 88%</li>
            </ul>
          </div>

          {/* Secondary (CBSE) */}
          <div className="p-4 border border-blue-500/50 rounded-lg shadow-md shadow-blue-500/20 hover:-translate-y-1 transition-all">
            <h4 className="font-semibold text-lg text-blue-400">
              Secondary (CBSE) — St. Joseph English Medium School & Jr. College (2019)
            </h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Percentage:</strong> 95%</li>
            </ul>
          </div>

        </div>
      </div>

            <div className="p-6 rounded-xl border-white/10 border ">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-6 text-gray-300">
  {/* Dellos - Product Development Intern */}
  <div className="p-4 border border-blue-500/50 rounded-lg shadow-md shadow-blue-500/20 hover:-translate-y-1 transition-all">
    <h4 className="font-semibold text-lg text-blue-400">
      Product Development Intern — Dellos (Dec 2024 - Present)
    </h4>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Developed a React-based chatbot integrated with OpenAI API, improving response efficiency by 30%.</li>
      <li>Integrated Shopify backend, reducing manual intervention by 50% and optimizing real-time inventory management.</li>
      <li>Engineered an infrastructure combining React, OpenAI, and Shopify, cutting inventory lookup time from 3 minutes to 15 seconds.</li>
    </ul>
  </div>

  {/* iNeuron - Web Development Intern */}
  <div className="p-4 border border-blue-500/50 rounded-lg shadow-md shadow-blue-500/20 hover:-translate-y-1 transition-all">
    <h4 className="font-semibold text-lg text-blue-400">
      Web Development Intern — iNeuron (Oct 2024 - Dec 2024)
    </h4>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Developed a Doctor Appointment Booking System using the MERN stack, enhancing scheduling speed by 60%.</li>
      <li>Implemented role-based authentication for patients, doctors, and administrators, improving security and usability.</li>
      <li>Integrated hospital location services, boosting user satisfaction by 95%.</li>
    </ul>
  </div>
</div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
