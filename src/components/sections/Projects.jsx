import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import mentalai from "../../assets/images/mentalai.jpg"; // Adjust the path as necessary
import HMS from "../../assets/images/HMS.jpg"; // Adjust the path as necessary
import WHC from "../../assets/images/WHC.jpg"; // Adjust the path as necessary
import IS from "../../assets/images/IS.jpg"; // Adjust the path as necessary

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <img src={mentalai} alt="AI Powered Mental Health Assistance" className="mb-4 rounded-lg" height={600} width={400} />
            <h3 className="text-xl font-bold mb-2">  AI-powered Mental Health Assistance</h3>
              <p className="text-gray-400 mb-4">
              The AI-Powered Mental Health Assistant is a chatbot that uses AI and NLP to provide mental health support through mood tracking, sentiment analysis, and personalized responses. 
              It integrates TensorFlow, OpenAI GPT API, and React for an intelligent and interactive user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Tensorflow", "OpenAI GPT API", "React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            <div className="flex justify-between items-center">
                <a
                  href="https://dashing-sprinkles-9ae9ae.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src={HMS} alt="Hospital Management System" className="mb-4 rounded-lg" height={600} width={400}  />
              <h3 className="text-xl font-bold mb-2">Hospital Management System</h3>
              <p className="text-gray-400 mb-4">
              Used Python Dijango and MySQL, which helps hospitals manage patient records, doctor appointments and prescriptions efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python Django", "My SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src={WHC} alt="Women's Health Clustering App" className="mb-4 rounded-lg" height={600} width={400}  />
              <h3 className="text-xl font-bold mb-2">Women's Health Clustering App</h3>
              <p className="text-gray-400 mb-4">
              Used Hierarchical Clustering & GMM to segment women's health needs for personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Hierarical Clustering", "GMM"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://stellular-lamington-c98a5e.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img src={IS} alt="Image Steganography" className="mb-4 rounded-lg" height={600} width={400}  />
              <h3 className="text-xl font-bold mb-2">Secure Data Hiding in Image Using Steganography</h3>
              <p className="text-gray-400 mb-4">
              A project focused on encrypting hidden messages inside images for secure communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["python Django"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/SathwikaAkkala/Image-Steganography"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};