import React from "react";
import ProjectCard from "./ProjectCard";
import food from '../../assets/food.png'
import finamer from '../../assets/finamer.png'
import astro from '../../assets/astro.png'
import astroform from '../../assets/astro-form.png'

const Projects = () => {
    const projectImages = [
        {
            title: "Food Control System",
            img: food,
            description: "Management system for controlling food and services offered to diners, developed with VueJS (3), TypeScript, Prime Vue.",
            enterprise: "KYSNOFT"
        },
        {
            title: "Finamer",
            img:finamer,
            description: "ERP system that automates the generation and sending of invoices, reducing manual time and effort while minimizing errors.",
            enterprise:"KYSNOFT"
        },
        {
            title: "Astro",
            img: astro,
            description: "System that allows the publication of catalogs on Facebook. Place orders and monitor customer interactions with Qbot (bot)",
            enterprise: "KYSNOFT"
        },
       
    ];

    return (
        <div>
            <h5 className="text-white  text-xl">Recents Projects</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {projectImages.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
          
        </div>
    );
};

export default Projects;