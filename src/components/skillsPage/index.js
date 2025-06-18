import SkillBar from '../skillBar';

const Skills = () => {
    const skillCategories = {
        "Programming Languages": [
            { name: "HTML/CSS", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "Java", level:85 },
            { name: "SQL", level:85 },
            { name: "Python", level: 80 },
            { name: "C++", level: 80 },
            { name: "C#", level: 75 },
        ],
        "Databases": [
            { name: "MongoDB", level: 90 },
            { name: "PostgresSQL", level: 85 },
            { name: "Oracle Database", level: 80 },
            { name: "Google Firebase", level: 75 },
        ],
        "Frameworks & Libraries": [
            { name: "React", level: 90 },
            { name: "Node.js", level: 90 },
            { name: "TailwindCSS", level: 85 },
            { name: "Express", level: 80 },

        ]
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