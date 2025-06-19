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
            { threshold: 0.35 }
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
            <h2 data-testid="aboutMe" className="text-4xl font-bold mb-6 dark:text-white text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8 px-6 max-w-6xl mx-auto items-center"> {/* Added items-center */}
                {/* Left column - Image */}
                <div className="w-1/3 flex items-center"> {/* Added flex and items-center */}
                    <img
                        src={headshot}
                        alt="Brady Friese"
                        className="rounded-3xl border-4 border-gray-300 dark:border-gray-600 w-full h-1/2 md:h-1/3"
                    />
                </div>

                {/* Right column - Text content */}
                <div className=" md:w-2/3 space-y-4 self-center"> {/* Added self-center */}
                    <p className="text-left text-base md:text-lg lg:text-xl dark:text-white">
                       I'm a full-stack software developer with 3 years of experience building enterprise applications using Java, JavaScript/TypeScript, React.js, Node.js, and SQL.
                    </p>
                    <p className="text-left text-base md:text-lg lg:text-xl dark:text-white">
                       I've led frontend efforts on large-scale platforms and enjoy working across the stack to deliver intuitive, scalable solutions.
                    </p>
                    <p className="text-left text-base md:text-lg lg:text-xl dark:text-white">
                       After gaining valuable professional experience in Japan, I'm now seeking new opportunities on a mission-driven team where I can help solve real-world problems with clean, reliable code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;