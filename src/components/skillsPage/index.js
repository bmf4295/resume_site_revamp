import SkillDisplay from '../skillDisplay';
import Section from '../section';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Skills = () => {
    // Skill categories and their respective years of professional+personal experience
    const skillCategories = {
        "Programming Languages": [
            { name: "HTML/CSS", years: 5 },
            { name: "JavaScript", years: 4 },
             { name: "TypeScript", years: 4 },
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
            { name: "Vite", years: 1 },
            { name: "Github Copilot", years: 1 },
            { name: "Large Language Models", years: 1 },
        ],
    };


    const sectionRef = useFadeInOnScroll();

    return (
        <Section ref={sectionRef} className="invisible" data-testid="Skills" id="Skills" title="Technical Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="p-4 bg-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-white">{category}</h3>
                        <div className="space-y-2">
                            {skills.map((skill) => (
                                <SkillDisplay
                                    key={skill.name}
                                    name={skill.name}
                                    years={skill.years}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;