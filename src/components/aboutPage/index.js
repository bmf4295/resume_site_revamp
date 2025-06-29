import headshot from "../assets/headshot.jpg";
import Section from "../section";
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const About = () => {

    const sectionRef = useFadeInOnScroll();
    return (
        <Section ref={sectionRef} className="invisible mt-16" data-testid="About" id="About" title="About Me">
              <div className="flex flex-col md:flex-row gap-8 px-6 max-w-6xl mx-auto items-center"> 
                {/* Left column - Image */}
                <div className="w-1/3 flex items-center"> 
                    <img
                        src={headshot}
                        alt="Brady Friese"
                        className="rounded-3xl border-4 border-gray-600 w-full h-1/2 md:h-1/3"
                    />
                </div>

                {/* Right column - Text content */}
                <div className=" md:w-2/3 space-y-4 self-center"> 
                    <p className="text-left text-base md:text-lg lg:text-xl text-white">
                    Hi, I'm Brady Friese, a U.S.-based full-stack developer with 3 years of professional experience working across cultures and teams. After spending the past year in Japan, I'm looking for a collaborative, mission-driven, and fast-paced environment where I can help build intuitive, scalable software that makes a difference in the lives of everyone.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;