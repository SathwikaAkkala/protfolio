import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const certifications = [
  {
    name: "Programming in Java",
    organization: "NPTEL",
    date: "January 2024",
    link: "https://drive.google.com/file/d/1Fzybg6OaErTQhaNwCpnmbGlVP1ZTkelV/view?usp=drive_link"
  }, 
  {
    name: "Ethical Hacking",
    organization: "Internshala",
    date: "September 2023",
    link: "https://drive.google.com/file/d/1r7NvS3LOrwDLIkZvz--ICLmS6OCk1L3e/view?usp=drive_link"
  },
  {
    name: "Data Science Foundation Certification",
    organization: "Infosys Spring Board",
    date: "January 2024",
    link: "https://drive.google.com/drive/u/0/folders/1qOTWoI4EOKgZKL9ncjfp_zdgECk7ZI64"
  },
  {
    name: "Cyber Security",
    organization: "edunet Foundation",
    date: "January 2025",
    link: "https://drive.google.com/file/d/1ysNilutdmH-MP0K_LwKGQHUIXkEXc8Hh/view?usp=sharing"
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <ul className="list-disc pl-5">
            {certifications.map((cert, index) => (
              <li key={index} className="mb-4">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {cert.name}
                </a>
                <p className="text-gray-400">{cert.organization} - {cert.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Certifications;