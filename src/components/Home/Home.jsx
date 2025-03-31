import React from 'react';
import Hero from '../Hero/Hero.jsx';
import About from '../about/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Projects from '../Project/Projects.jsx';
import Contact from '../contact/Contact.jsx';

const Home = () => {
    return (
        <>
            <div id="home">
                <Hero />

            </div>
            <div id="about">
                <About />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>

        </>
    )
}
export default Home;