import SkillDisplay from '../skillDisplay';
import {  useRef, useEffect } from "react";

const Skills = () => {
    // Skill categories and their respective years of professional experience
    const skillCategories = {
        "Programming Languages": [
            { name: "HTML/CSS", years: 5 },
            { name: "JavaScript/TypeScript", years: 4 },
            { name: "Java", years: 2 },
            { name: "SQL", years: 2 },
            { name: "Python", years: 2 },
            { name: "PL/SQL", years: 2 },
            { name: "C#", years: 2 },
            { name: "C++", years: 2 },
        ],
        "Frameworks & Libraries": [
            { name: "React", years: 4 },
            { name: "Node.js", years: 4 },
            { name: "Express.js", years: 3 },
            { name: "Robot Framework", years: 2 },
            { name: "Spring Framework", years: 2 },
            { name: "TailwindCSS", years: 1 },
            { name: "Langchain", years: 1 },
        ],
        "Tools & Platforms": [
            { name: "MongoDB", years: 4 },
            { name: "PostgresSQL", years: 2 },
            { name: "Oracle Database", years: 2 },
            { name: "Spring Boot", years: 2 },
            { name: "Docker/Podman", years: 2 },
            { name: "Google Firebase", years: 1 },
            { name: "Github Copilot", years: 1 },
            { name: "Large Language Models", years: 1 },
        ],
    };


    const sectionRef = useRef(null);
    
      useEffect(() => {
              const section = sectionRef.current;
              const observer = new IntersectionObserver(
                  (entries) => {
                      entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                              section.classList.remove('invisible');
                              section.classList.add('fade-in');
                              observer.unobserve(section);
                          }
                      });
                  },
                  { threshold: 0.35 }
              );
      
              if (section) {
                  observer.observe(section);
              }
      
              return () => {
                  if (section) {
                      observer.unobserve(section);
                  }
              };
          }, []);

    return (
        <div ref={sectionRef} data-testid="skills" className="flex flex-col bg-inherit min-h-screen pt-16" id="Skills">
            <div className="max-w-4xl mx-auto w-full flex flex-col gap-6">
                <h2 className="text-4xl font-bold mb-6 text-white text-center">Technical Skills</h2>

                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="p-4 bg-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-white">{category}</h3>
                        {skills.map((skill) => (
                            <SkillDisplay
                                key={skill.name}
                                name={skill.name}
                                years={skill.years}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;