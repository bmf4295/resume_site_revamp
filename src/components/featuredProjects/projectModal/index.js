import { useEffect } from 'react';
import ImageCarousel from "../../imageCarousel";

const ProjectModal = ({ project, onClose }) => {
    // This effect handles closing the modal with the Escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!project) {
        return null;
    }

    return (
        <div 
            data-testid="ProjectModal"
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" 
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative" 
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10">&times;</button>
                
                {/* Left Side: Carousel */}
                <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
                    <div className="w-full max-w-lg">
                        <ImageCarousel images={project.images} />
                    </div>
                </div>

                {/* Right Side: Info */}
                <div className="w-full md:w-1/2 p-6 text-white flex flex-col text-left justify-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            {project.keypoints.map((point, index) => <li key={index}>{point}</li>)}
                        </ul>
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
        </div>
    );
};

export default ProjectModal;