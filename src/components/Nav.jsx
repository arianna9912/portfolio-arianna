import React, { useState } from "react";
import "./Navbar.css"
import MobileNav from "./MobileNav/MobileNav";

import { Link as ScrollLink } from 'react-scroll'; // Para desplazamiento
import { Link as RouterLink } from 'react-router-dom'; // Para navegación

const Nav = () => {


    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h1 className="text-white text-lg">  <a href="https://github.com/arianna9912" target="_blank" rel="noopener noreferrer">
                        Arianna<strong className="text-purple-600">9912</strong> </a></h1>
                    <ul>
                        <li >
                            <RouterLink to="/" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('home').offsetTop); }, 0)}>Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('about').offsetTop); }, 0)}>
                                About Me
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/skills" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('skills').offsetTop); }, 0)}>
                                Skills
                            </RouterLink>
                        </li>
                        <RouterLink to="/projects" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('projects').offsetTop); }, 0)}>
                            Projects
                        </RouterLink>

                        <li>
                            <RouterLink to="/contact" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('contact').offsetTop); }, 0)}>
                                Contact Me
                            </RouterLink>
                        </li>
                 
                    </ul>

                    <button className="menu-btn flex items-center justify-center p-2" onClick={toggleMenu}>
                        <span class=" text-center" >
                            {openMenu ? (
                                // Icono de cierre (X)
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#fff" d="m13.06 12l4.42-4.42a.75.75 0 1 0-1.06-1.06L12 10.94L7.58 6.52a.75.75 0 0 0-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0L12 13.06l4.42 4.42a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0-4.5H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0 9H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5" /></svg>
                            )}
                        </span>

                    </button>
                </div>
            </nav>
        </>
    );
};
export default Nav;