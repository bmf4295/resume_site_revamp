import SkillBar from '../skillBar';

const Skills = () => {
    const skillCategories = {
        "Languages": [
            { name: "JavaScript", level: 90 },
            { name: "Python", level: 85 },
            { name: "Java", level: 75 },
            { name: "HTML/CSS", level: 95 },
        ],
        "Frameworks & Libraries": [
            { name: "React", level: 90 },
            { name: "Node.js", level: 85 },
            { name: "Express", level: 80 },
            { name: "TailwindCSS", level: 85 },
        ]
    };

    return (
        <div className="flex flex-col bg-inherit min-h-screen pt-24 px-6" id="Skills">
            <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Skills</h2>
            
            <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-6 dark:text-white">{category}</h3>
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