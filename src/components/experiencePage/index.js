import JobCard from '../jobCard';
import { useEffect, useRef } from 'react';

const Experience = () => {
    const jobs = [
        {
            title: "Software Engineer",
            period: "June 2021 - August 2023",
            company: "Mindex",
            responsibilities: [
                "Orchestrated maintenance and enhancement of 10+ mission-critical legacy applications and microservices for Paychex Inc., utilizing Java, JavaScript, and Python to ensure optimal performance.",
                "Architected and implemented new Java microservices and RESTful APIs within a 5-person development team, achieving a 50% reduction in latency for database procedures and front-end systems.",
                "Spearheaded development of 4 complex React.JS web interfaces for Paychex Flex platform, successfully integrating Oracle database connectivity and optimizing data visualization.",
                "Established department-wide automated testing protocols using Python and Robot Framework, training team members and implementing best practices that improved testing efficiency and code quality by 30%.",
                "Collaborated cross-functionally with stakeholders using Jira and Confluence to refine the product backlog, define clear acceptance criteria, gather technical requirements, and document features in order to support efficient and predictable biweekly sprint execution."
            ]
        },
        {
            title: "Software Development Intern",
            period: "January 2020 - August 2020",
            company: "Fujifilm North America Corporation",
            responsibilities: [
                "Contributed to development of enterprise-scale cloud photo printing kiosk system using JavaScript, TypeScript, and Vue.JS, designed for deployment across 1000+ North American retail locations.",
                "Enhanced system stability and performance through optimization initiatives, resulting in 50% reduction in crash frequency and 20% improvement in menu navigation speed.",
                "Engineered MongoDB-based order management system, implementing efficient data handling and automated cleanup processes to optimize system resources.",
                "Identified and resolved bugs across the full kiosk stack, including UI, backend, and database, improving system stability and user experience ahead of the beta launch."
            ]
        },
        {
            title: "Assistant Language Teacher",
            period: "August 2023 - October 2024",
            company: "Hamada Commercial Business High School",
            responsibilities: [
                "Developed and delivered engaging English language curriculum to 400+ students across 3 schools, resulting in improved student participation and language retention rates.",
                "Led cross-cultural initiatives and collaborated with Japanese teaching staff to create innovative lesson plans that integrated cultural exchange with core curriculum requirements.",
                "Served as an Cultural Ambassador for the region, helping organize and facilitate community events that strengthened international relations and cultural understanding."
            ]
        }
    ];

    const sectionRef = useRef(null);

     useEffect(() => {
        const section = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.remove('invisible');
                        section.classList.add('slide-in-left');
                        observer.unobserve(section);
                    }
                });
            },
            { threshold: 0.01 }
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
        <div data-testid="workExperience" className="flex flex-col bg-inherit min-h-screen pt-12 px-6" id="Experience">
            <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Work Experience</h2>
            
            {/* Timeline container */}
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div ref={sectionRef} className=" invisible absolute left-8 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>

                {/* Job cards */}
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    );
};

export default Experience;