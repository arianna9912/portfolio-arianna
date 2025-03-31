import React, { useEffect, useState } from "react"
import "./Hero.css"
import meImage from '../../assets/ari-img.jpg';
import reactIcon from '../assets/react.svg';
import vueIcon from '../assets/logo.png'
import javaIcon from '../assets/javascript-logo.png'
import tailIcon from '../assets/tailwind.png'


const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const handleClick = () => {
        // Cambia el número por el que desees
        window.location.href = 'whatsapp://send?phone=+52740178';
    };

    useEffect(() => {
        const targetText = "Hello I’m Arianna Perez "; // Texto fijo

        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prevText) => {
                if (currentIndex === targetText.length) {
                    clearInterval(typingInterval);
                    return prevText; // Retorna el texto completo al finalizar
                }
                currentIndex++;
                return targetText.slice(0, currentIndex);
            });
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, []); // Eliminar `language` de las dependencias
    const helloPart = "Hello ";
    const namePart = "I’m Arianna Perez";

    // Determinar el texto que se está mostrando
    const textToShow = typedText;
    return (
        <>
            <section className="hero-container">
                <div className="hero-content">

                    <h2 className="text-white font-semibold">{textToShow.startsWith(helloPart) ? helloPart : ''}<span className="text-purple-600 font-semibold">{textToShow.replace(helloPart, '')}</span></h2>
                    <p className="text-white text-xl">Passionate Frontend Developer. I excel at creating elegant digital experiences and I am focused on developing user-friendly and intuitive interfaces with a strong background in responsive design.</p>
                    <div className="flex flex-wrap items-center  mt-4">

                        <a href="/portfolio-arianna/CV.pdf"
                            download="Arianna-CV.pdf" className="border border-purple-600 text-purple-600 bg-transparent hover:bg-purple-700 hover:text-white py-2 px-4 rounded-full flex items-center">
                            <span className="text-lg">Download CV</span> <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24"><path className="fill-current" fill="#8a27ce" d="M18.22 20.75H5.78A2.64 2.64 0 0 1 3.25 18v-3a.75.75 0 0 1 1.5 0v3a1.16 1.16 0 0 0 1 1.25h12.47a1.16 1.16 0 0 0 1-1.25v-3a.75.75 0 0 1 1.5 0v3a2.64 2.64 0 0 1-2.5 2.75" /><path className="fill-current" fill="#8a27ce" d="M12 15.75a.74.74 0 0 1-.53-.22l-4-4a.75.75 0 0 1 1.06-1.06L12 13.94l3.47-3.47a.75.75 0 0 1 1.06 1.06l-4 4a.74.74 0 0 1-.53.22" /><path className="fill-current" fill="#8a27ce" d="M12 15.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v11a.76.76 0 0 1-.75.75" /></svg>  </a>



                        <div className="flex items-center  space-x-4 ml-4">
                            <a href="https://github.com/arianna9912" className="icon-link border  border-purple-600 px-2 py-2   rounded-full" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24"><path class="svg-fill" fill="#8a27ce" d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12s.18.05.18.12m-1-.15c0 .07 0 .15.14.17a.15.15 0 0 0 .2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07m1.42-.05c-.09 0-.15.08-.14.16s.09.11.19.09s.15-.09.14-.16s-.09-.1-.19-.09M11.9 4A7.83 7.83 0 0 0 4 12.07A8.29 8.29 0 0 0 9.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21c0 0-.74-.52.05-.51a1.67 1.67 0 0 1 1.24.85a1.69 1.69 0 0 0 2.36.69a1.83 1.83 0 0 1 .51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 0 1 7.7 9.7a3.2 3.2 0 0 1 .08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 0 1 4.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 0 1 .08 2.24a2.6 2.6 0 0 1 .83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 0 1 .5 1.5v2.77a.42.42 0 0 0 .56.4A8.22 8.22 0 0 0 20 12.07A8 8 0 0 0 11.9 4M7.14 15.41v.17a.12.12 0 0 0 .17 0s0-.11 0-.18s-.13-.03-.17.01m-.35-.27s0 .1.07.13a.09.09 0 0 0 .14 0s0-.1-.07-.13s-.12-.03-.14 0m1 1.18v.21c0 .07.17.08.21 0s0-.14 0-.21s-.13-.05-.17 0Zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 0 0 0-.21c-.05-.08-.13-.11-.19-.07" /></svg>

                            </a>
                            <a href="http://www.linkedin.com/in/arianna-pérez-54125525b" target="_blank" className="icon-link  border  border-purple-600 px-2 py-2 rounded-full" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24"><path class="svg-fill" fill="#8a27ce" d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.4 1.4 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z" /></svg>
                            </a>
                            <a href="https://whatsapp.com" onClick={handleClick} className="icon-link  border  border-purple-600 px-2 py-2 rounded-full" target="_blank" rel="noopener noreferrer" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24"><path class="svg-fill" fill="#8a27ce" d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1a8 8 0 0 0 8-7.93a8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15l-2.49.66l.66-2.43l-.16-.25a6.6 6.6 0 0 1 10.25-8.17a6.65 6.65 0 0 1 2 4.66a6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05a8.9 8.9 0 0 0 3.39 3a3.85 3.85 0 0 0 2.38.5a2 2 0 0 0 1.33-.94a1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-img ">
                    <div>
                        <div className="tech-icon">
                            <img src={reactIcon} alt="Frontend Developer" />
                        </div>

                        <img src={meImage} alt="Frontend Developer" className="overflow-hidden rounded-3xl   transition duration-300 hover:filter hover:grayscale" />




                    </div>
                    <div>
                        <div className="tech-icon mt-1">
                            <img src={vueIcon} alt="Frontend Developer" />
                        </div>

                        <div className="tech-icon mt-1">
                            <img src={javaIcon} alt="Frontend Developer" />
                        </div>
                        <div className="tech-icon mt-1">
                            <img src={tailIcon} alt="Frontend Developer" />
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}
export default Hero;