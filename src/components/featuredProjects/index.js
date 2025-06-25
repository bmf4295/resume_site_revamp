import Anirec1 from "../assets/Anirec/Anirec_Screenshot_1.png";
import Anirec2 from "../assets/Anirec/Anirec_Screenshot_2.png";
import Anirec3 from "../assets/Anirec/Anirec_Screenshot_3.png";

import { useState, useRef, useEffect } from "react";
import ProjectModal from "./projectModal";
import ProjectCard from "./projectCard";

const featuredProjectsData = [
    {
        title: "Anirec.io",
        description: "Anirec.io is a web app that recommends new anime based on a user’s favorite title. Built with React and Vite, powered by GPT-4o via Langchain and the Anichart GraphQL API, it features a responsive UI and natural language input. As the sole developer, I implemented the recommendation logic, API integrations, and front-end design.",
        keypoints: ["Developed full-stack anime recommendation web app using React, Vite, Express,js, and GraphQL.", 
            "Integrated GPT-4o with Langchain for natural language-powered recommendations.",
            "Created a responsive UI with Tailwind CSS",
            "Built custom logic to match user favorites with similar anime via Anichart API.",
            "Sole developer responsible for architecture, implementation, and deployment.",
        ],
        images: [Anirec1,Anirec2,Anirec3],
        technologies: ["JavaScript","React.js", "Vite",  "TailwindCSS", "GraphQL", "GPT-4o", "Langchain", "Express.js","Node.js"  ],
        github: "https://github.com/bmf4295/anime-ai-rec",
        link: "https://anirec-io.onrender.com"
    }
];

//running into a crazy bug on mobile where the modal content is a little blurry. Unfixable for now, but it works fine on desktop. Will revisit later.
const FeaturedProjects = ()=>{
  const [selectedProject, setSelectedProject] = useState(null);
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
        <>
            <div data-testid="Projects" ref={sectionRef} className="invisible w-full py-12 [transform:translateZ(0)]">
                <h2 className="text-4xl font-bold mb-12 text-white text-center">Featured Projects</h2>
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 gap-8">
                    {featuredProjectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} onSelect={setSelectedProject} />
                    ))}
                </div>
            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );

}

export default FeaturedProjects;