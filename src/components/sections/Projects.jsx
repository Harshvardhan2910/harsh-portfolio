import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Wealthify - Financial Education Platform",
    description: "A platform that provides personalized financial education courses and real-time query resolution via OpenAI API.",
    technologies: ["MERN Stack", "OpenAI API", "WhatsApp API"],
    liveDemo: "https://wealthify01.vercel.app/",
    sourceCode: "https://github.com/Harshvardhan2910/Wealthify"
  },

{
    title: "AgriVision - Crop and Yield Prediction ",
    description: "A machine learning-powered platform for crop and yield prediction, helping farmers make decisions based on soil and weather data.",
    technologies: ["React", "Machine Learning","Flask"],
    liveDemo: "https://github.com/Harshvardhan2910/Agri-Vision",
    sourceCode: "https://github.com/Harshvardhan2910/Agri-Vision"
},
{
    title: "RGBD Images for Saliency Detection Using Attention Model",
    description: "A research project that explores RGBD images for saliency detection using attention models, achieving a 92% accuracy.",
    technologies: ["OpenGL", "OpenCV", "Deep Learning"],
    liveDemo: "https://drive.google.com/file/d/1YvHVHmQ3wRbpJr4gYtaLqA_6ec_wlDBF/view?usp=sharing",
    sourceCode: "https://drive.google.com/file/d/1YvHVHmQ3wRbpJr4gYtaLqA_6ec_wlDBF/view?usp=sharing"
},

  // {
  //   title: "Prescripto - Doctor Appointment System",
  //   description: "A full-stack doctor appointment booking system with role-based authentication for patients, doctors, and admins.",
  //   technologies: ["React", "MongoDB", "Node.js", "Express.js"],
  //   liveDemo: "#",
  //   sourceCode: "#"
  // },
  // {
  //   title: "Inventory Management Chatbot",
  //   description: "AI-powered chatbot that extracts inventory data and provides real-time updates on stock availability.",
  //   technologies: ["React", "OpenAI API", "MongoDB", "Express.js"],
  //   liveDemo: "#",
  //   sourceCode: "#"
  // }
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
         <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {projects.map((project, index) => (
              <div key={index} className="p-6 rounded-xl border border-blue-500/50  shadow-md shadow-blue-500/20 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a href={project.liveDemo} target="_blank" className="button">Live Demo</a>
                  <a href={project.sourceCode} target="_blank" className="button">Source Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
