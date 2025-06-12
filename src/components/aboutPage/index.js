import headshot from "../assets/headshot.jpg";

const About = () => {
    return (
        <div className="flex flex-col bg-inherit pb-12 pt-24" id="About">
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
                    <p className="dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p className="dark:text-white">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                    </p>
                    <p className="dark:text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;