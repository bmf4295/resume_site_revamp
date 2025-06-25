import React from 'react';

const ProjectCard = ({ project, onSelect }) => {
    return (
        <div 
            data-testid="ProjectCard"
            className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden cursor-pointer group transform-gpu backface-hidden"
            style={{ backgroundImage: `url(${project.images[0]})` }}
            onClick={() => onSelect(project)}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-2xl font-bold text-center">{project.title}</h3>
            </div>
        </div>
    );
};

export default ProjectCard;
