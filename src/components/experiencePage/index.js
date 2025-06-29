import JobCard from '../jobCard';
import Section from '../section';
import { useEffect, useRef } from 'react';

const Experience = () => {
    const jobs = [
        {
            title: "Software Engineer",
            period: "June 2021 - August 2023",
            company: "Mindex",
            responsibilities: [
                "Orchestrated maintenance and enhancement of 10+ mission-critical applications and microservices for Paychex Inc., utilizing <b>Java</b>, <b>JavaScript</b>, and <b>Python</b> to ensure optimal performance.",
                "Architected and implemented new <b>Java microservices</b> and <b>RESTful APIs </b> within a 5-person development team, achieving a 50% reduction in latency.",
                "Championed development of <b>4 complex React web interfaces</b> for Paychex Flex platform, successfully integrating Oracle database connectivity and optimizing data visualizations.",
                "Established department-wide automated testing protocols using <b>Python</b> and <b>Robot Framework</b>, training team members and implementing best practices.",
                "Collaborated cross-functionally with stakeholders using <b>Jira</b> and <b>Confluence</b> to refine the product backlog, define clear acceptance criteria, gather technical requirements, and document features."
            ],
            technicalStack: ["Java", "JavaScript", "TypeScript", "Node.js", "React", "Python", "Oracle Database", "PL/SQL", "MongoDB", "Spring Boot", "Robot Framework"]
        },
        {
            title: "Software Development Intern",
            period: "January 2020 - August 2020",
            company: "Fujifilm North America Corporation",
            responsibilities: [
                "Contributed to development of enterprise-scale cloud photo printing kiosk system using <b>JavaScript</b>, <b>TypeScript</b>, and <b>Vue.JS</b>, designed for deployment across 1000+ North American retail locations.",
                "Enhanced system stability and performance through optimization initiatives, resulting in 50% reduction in crash frequency and 20% improvement in menu navigation speed.",
                "Engineered <b>MongoDB</b>-based order management system, implementing efficient data handling and automated cleanup processes to optimize system resources.",
                "Identified and resolved bugs across the full kiosk stack, improving system stability and user experience ahead of successful beta launch."
            ],
            technicalStack: ["JavaScript", "TypeScript", "Node.js", "Vue.js", "Express.js", "MongoDB"]
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
        <Section ref={sectionRef} className="invisible" data-testid="workExperience" id="Experience" title="Work Experience">
            {/* Timeline container */}
            <div className="relative"> {/* Removed max-w-4xl and mx-auto */}
                {/* Vertical line */}
                <div className="absolute left-8 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div> {/* Removed ref and invisible */}

                {/* Job cards */}
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </Section>
    );
};

export default Experience;