import React, { useState, useEffect } from 'react';
import './ProjectCard.css'


const ProjectCard = ({ project }) => {
    return (
        <div className="bg-cards border-2 border-purple-500 p-3 rounded-lg">
      
       
            <div className="relative overflow-hidden">
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-40" // Asegúrate de que la imagen tenga un tamaño adecuado
                />
            </div>
            <h2 className="text-white">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
            <p className="text-gray-300">Company: {project.enterprise}</p>
          
        </div>
    );
};

export default ProjectCard;