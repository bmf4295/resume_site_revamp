import SkillBar from '../skillBar';

const Skills = () => {
    const skillCategories = {
        "Programming Languages": [
            { name: "HTML/CSS", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 90 },
            { name: "Java", level:85 },
            { name: "SQL", level:85 },
            { name: "C++", level: 85 },
            { name: "Python", level: 80 },
            { name: "C#", level: 75 },
        ],
        "Frameworks & Libraries": [
            { name: "React", level: 95 },
            { name: "Node.js", level: 95 },
            { name: "Express.js", level: 85 },
            { name: "TailwindCSS", level: 80 },
            { name: "Robot Framework", level: 75 },
            { name: "Spring Framework", level: 70 },
        ],
        "Tools & Platforms": [
            { name: "MongoDB", level: 95 },
            { name: "PostgresSQL", level: 90 },
            { name: "Oracle Database", level: 85 },
            { name: "Google Firebase", level: 70 },
        ],
    };

    return (
        <div className="flex flex-col bg-inherit min-h-screen pt-16" id="Skills">
            <div className="max-w-4xl mx-auto w-full flex flex-col gap-6">
                <h2 className="text-4xl font-bold mb-6 dark:text-white text-center">Skills</h2>
                
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 dark:text-white">{category}</h3>
                        {skills.map((skill) => (
                            <SkillBar 
                                key={skill.name} 
                                name={skill.name} 
                                level={skill.level} 
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;