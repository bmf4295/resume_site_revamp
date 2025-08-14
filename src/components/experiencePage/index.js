import JobCard from '../jobCard';
import Section from '../section';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Experience = () => {
    const jobs = [
        {
            title: "Software Engineer",
            period: "June 2021 - August 2023",
            company: "Mindex",
            responsibilities: [
                "Maintained and enhanced 10+ legacy retirement applications and microservices for Paychex Inc., fixing bugs, refactoring <b>Java</b>, <b>JavaScript</b>, and <b>Python</b> code, and delivering compliance-driven features to meet evolving legal standards.",
                "Built and released new <b>Java microservices</b> and <b>RESTful APIs </b> as part of 5-person development team, cutting latency for Oracle database procedures and front-end systems by 50%.",
                "Led the development of <b>4 React.JS web interfaces</b> for Paychex Flex, enabling hundreds of thousands of users to better visualize their 401(k) distribution history through interactive tables and graphs.",
                "Drove the rollout of <b>automated testing</b> using <b>Python</b> and <b>Robot Framework</b> across the department, boosting testing efficiency and code quality by 30% while mentoring teams on best practices.",
                "Partnered with stakeholders to define requirements, clarify backlog items, and document features in <b>Jira</b> and <b>Confluence</b>, simplifying planning and keeping delivery on track."
            ],
            technicalStack: ["Java", "JavaScript", "TypeScript", "Node.js", "React", "Python", "Oracle Database", "PL/SQL", "MongoDB", "Spring Boot", "Robot Framework"]
        },
        {
            title: "Software Development Intern",
            period: "January 2020 - August 2020",
            company: "Fujifilm North America Corporation",
            responsibilities: [
                "Contributed to a cloud photo kiosk platform built with <b>Vue.JS</b>, <b>JavaScript</b>, and <b>TypeScript</b>, allowing customers to print photos and order custom products at 1,000+ retail locations across North America.",
                "Improved menu performance and overall system stability across the kiosk stack, reducing crash frequency by 50% and speeding up menu navigation by 20%.",
                "Fixed bugs across the full kiosk stack, including UI, backend, and MongoDB, and helped develop a new order management system with automated cleanup logic and efficient data handling ahead of the beta launch."
            ],
            technicalStack: ["JavaScript", "TypeScript", "Node.js", "Vue.js", "Express.js", "MongoDB"]
        },
        {
            title: "Assistant Language Teacher",
            period: "August 2023 - October 2024",
            company: "Hamada Commercial Business High School",
            responsibilities: [
                "Developed and taught English language lessons to 400+ students across 3 schools, improving participation and retention through interactive and engaging instruction."
            ]
        }
    ];

    const sectionRef = useFadeInOnScroll({ threshold: 0.01 }, 'slide-in-left');

    return (
        <Section ref={sectionRef} className="invisible" data-testid="workExperience" id="Experience" title="Work Experience">
            {/* Timeline container */}
            <div className="relative"> 
                {/* Vertical line */}
                <div className="absolute left-8 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div> 
                {/* Job cards */}
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </Section>
    );
};

export default Experience;