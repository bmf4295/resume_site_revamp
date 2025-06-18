import headshot from "../assets/headshot.jpg";
import { useEffect, useRef } from 'react';

const About = () => {

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
            { threshold: 0.3 }
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
        <div ref={sectionRef} className="invisible flex flex-col bg-inherit pb-12 pt-24" id="About">
            <h2 className="text-4xl font-bold mb-6 dark:text-white text-center">About Me</h2>
            <div className="flex flex-row gap-8 px-6 max-w-6xl mx-auto items-center"> {/* Added items-center */}
                {/* Left column - Image */}
                <div className="w-1/3 flex items-center"> {/* Added flex and items-center */}
                    <img
                        src={headshot}
                        alt="Brady Friese"
                        className="rounded-full border-4 border-gray-300 dark:border-gray-600 w-full h-auto"
                    />
                </div>

                {/* Right column - Text content */}
                <div className="w-2/3 space-y-4 self-center"> {/* Added self-center */}
                    <p className="dark:text-white text-left">
                        I'm a full-stack software developer with over 3 years of experience building enterprise web applications with React, Node.js, and SQL.
                    </p>
                    <p className="dark:text-white text-left">
                        I have led frontend development for high-traffic features on the Paychex Flex platform and enjoy working across the stack to ship intuitive, scalable products.
                    </p>
                    <p className="dark:text-white text-left">
                        I'm currently looking to for new opportunities. I am interested in joining a mission-driven team where I can help solve real-world problems with clean, reliable code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;