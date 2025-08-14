import Section from "../section";
import Anirec1 from "../assets/Anirec/Anirec_Screenshot_1.png";
import Anirec2 from "../assets/Anirec/Anirec_Screenshot_2.png";
import Anirec3 from "../assets/Anirec/Anirec_Screenshot_3.png";
import DrawPhase from "../assets/DrawPhase/DrawPhase.png"

import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import ProjectDisplay from "./projectDisplay";

const featuredProjectsData = [
    {
        title: "Anirec.io",
        description: "Anirec.io is a web app that recommends new anime based on a user's favorite title. Built with React and Vite, powered by GPT-4o via Langchain and the Anichart GraphQL API, it features a responsive UI and natural language input. As the sole developer, I implemented the recommendation logic, API integrations, and front-end design.",
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
    },
    {
        title:"DrawPhase: CURRENTLY IN DEVELOPMENT",
        description: "DrawPhase is an online matchmaking platform for card game players to find and connect with opponents to play their favorite card game with. Players can create their account and add friends, as well as connect and play with anyone via video and text chat. Please note this is currently in early development, and will be updated frequently.",
        keypoints: ["Building Google OAuth system for quick account creation and login.",
            "Implementing matchmaking queue for players to find games.",
            "Integrating WebRTC for video and text chat.",
            "Developing friend system for easy player connections.",
        ],
        images: [DrawPhase],
        technologies: ["TypeScript","React.js", "Vite",  "TailwindCSS", "PostgreSQL", "Redis", "WebRTC", "Docker", "Express.js", "Node.js"],
        github: "",
        link: ""
    }
];

//running into a crazy bug on mobile where the modal content is a little blurry. Unfixable for now, but it works fine on desktop. Will revisit later.
const FeaturedProjects = ()=>{
  
    const sectionRef = useFadeInOnScroll();

    return (
        <Section ref={sectionRef} className= "invisible" data-testid="Projects" id="Projects" title="Featured Projects">
            <div className="grid grid-cols-1 gap-8">
                    {featuredProjectsData.map((project, index) => (
                         <ProjectDisplay key={index} project={project} />
                    ))}
            </div>
        </Section>
    );

}

export default FeaturedProjects;