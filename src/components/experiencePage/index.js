import JobCard from '../jobCard';

const Experience = () => {
    const jobs = [
        {
            title: "Assistant Language Teacher",
            period: "2023 - Present",
            company: "JET Programme",
            responsibilities: [
                "Developed and implemented engaging English curriculum for over 300 high school students in Hamada City",
                "Coordinated cultural exchange activities and events to promote international understanding",
                "Collaborated with Japanese teachers to create effective teaching materials and lesson plans",
                "Provided individualized support for students preparing for English proficiency exams"
            ]
        },
        {
            title: "Software Developer",
            period: "2021 - 2023",
            company: "Tech Company Name",
            responsibilities: [
                "Led development of three major features for the company's flagship web application using React and Node.js",
                "Optimized database queries resulting in 40% improvement in application response time",
                "Implemented automated testing procedures reducing bug detection time by 60%",
                "Mentored two junior developers and conducted code reviews for team projects"
            ]
        },
        {
            title: "Web Developer Intern",
            period: "2020 - 2021",
            company: "Startup Name",
            responsibilities: [
                "Developed and maintained responsive websites for five different client projects",
                "Created reusable component library reducing development time by 25%",
                "Collaborated with design team to implement pixel-perfect UI/UX solutions",
                "Participated in daily stand-ups and sprint planning meetings with senior developers"
            ]
        }
    ];

    return (
        <div className="flex flex-col bg-inherit min-h-screen pt-24 px-6" id="Experience">
            <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Work Experience</h2>
            
            {/* Timeline container */}
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-8 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>

                {/* Job cards */}
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    );
};

export default Experience;