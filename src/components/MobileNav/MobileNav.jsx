import React from "react"
import "./MobileNav.css"
import { Link } from 'react-scroll'; // Asegúrate de importar Link
import { Link as RouterLink } from 'react-router-dom'; // Para navegación

const MobileNav = ({ isOpen, toggleMenu }) => {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <h1 className="text-white ml-0">  <a href="https://github.com/arianna9912" target="_blank" rel="noopener noreferrer">
                        Arianna<strong className="text-purple-600">9912</strong> </a></h1>
                    <ul>
                        <li>
                            <RouterLink to="/" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('home').offsetTop); }, 0)}>Home</RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/about" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('about').offsetTop); }, 0)}>About Me</RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/skills" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('skills').offsetTop); }, 0)}>Skills</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/projects" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('projects').offsetTop); }, 0)}>Projects</RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/contact" className="menu-item" onClick={() => setTimeout(() => { window.scrollTo(0, document.getElementById('contact').offsetTop); }, 0)}>Contact Me</RouterLink>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default MobileNav