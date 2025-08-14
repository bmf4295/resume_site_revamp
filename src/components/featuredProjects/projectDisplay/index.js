import React from "react";
import ImageCarousel from "../../imageCarousel";

const ProjectDisplay = ({ project }) => {

    return (
        <div
            className="bg-gray-800 rounded-lg shadow-xl w-full flex flex-col md:flex-row"
        >
            {/* Left Side: Carousel */}
            <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
                <div className="w-full max-w-lg">
                    {project.images.length > 0 ? (
                        <ImageCarousel images={project.images} />
                    ) : null}
                </div>
            </div>

            {/* Right Side: Info */}
            <div className="w-full md:w-1/2 p-6 text-white flex flex-col text-left justify-center">
                <div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    {project.keypoints.length > 0 ? (
                        <div>
                        <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            {project.keypoints.map((point, index) => <li key={index}>{point}</li>)}
                        </ul>
                    </div>
                    ) : null}

                    <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub <i className="fas fa-external-link-alt text-xs"></i></a>}
                        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Site <i className="fas fa-external-link-alt text-xs"></i></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;