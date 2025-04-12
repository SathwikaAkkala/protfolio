import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "../../assets/images/profile.jpg"; // Adjust the path as necessary

export const About = () => {
  const Languages = [
    "Python",
    "C",
    "C++",
    "Java",
    "MySQL",
    "JavaScript"
  ];
  
  const WebDevelopment = ["HTML", "CSS", "PHP", "Django"];
  const Frameworks = ["React", "MongoDB", "Node"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-58 h-58 object-cover border-4 border-blue-500" // Increased size
            />
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-left"> {/* Added text alignment */}
            I am a passionate and driven technology enthusiast pursuing a B.E. at Chaitanya Bharathi Institute of Technology, Hyderabad. 
            My interests lie in full-stack development, cybersecurity, blockchain, and ethical hacking. 
            With a strong problem-solving mindset, I have worked on projects involving data security, steganography, process scheduling, and clustering algorithms. Proficient in React, VS Code, and command-line development, I am always eager to learn, collaborate, and explore new opportunities in technology and innovation. 
            Let’s connect and create something impactful together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {Languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {WebDevelopment.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {Frameworks.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-left"> {/* Added text alignment */}
                <li>
                  <strong>B.E. in Computer Science</strong> - Chaitanya Bharathi Institute of Technology (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cybersecurity, Blockchain, Internet of Things...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300 text-left"> {/* Added text alignment */}
                <div>
                  <h4 className="font-semibold">
                    Student Convener for Cybernexa 2025 (2025)
                  </h4>
                  <p>
                  Led the organizing committee for Cybernexa 2025, CBIT's premier cybersecurity and tech event.
                  Coordinated with industry experts, sponsors, and faculty to ensure a successful event.
                  Managed event planning, logistics, and promotions, attracting a large audience.
                  Curated engaging workshops, hackathons, and expert talks on cybersecurity.
                  Collaborated with student volunteers and technical teams for smooth execution.

                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};