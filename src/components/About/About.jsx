import React from 'react';
import "./About.css"

const About = () => {
    return (
        <>

            <div className="mt-5 flex justify-center">

                <div className="bg-card rounded-lg p-6 mb-2 shadow-xl transform transition-transform duration-300 hover:scale-105  w-full">

                    <div className="px-4 sm:px-0 mt-2 text-center divider">
                        <h3 className="text-3xl font-semibold text-white">Who am I?</h3>
                    </div>
                    <div
                        class="items-center max-w-screen-xl px-4 py-4 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-10 lg:px-6">
                        <div class="col-span-2 mb-8">
                            <p class="text-2xl sm:text-xl md:text-xl xs:text-xl font-light text-purple-500">Computer Science Engineer (2017-2022)</p>
                            <p class="mt-2 text-md font-light text-gray-100">💻Computer Engineer specialized in creating management websites and consumption of services rest</p>
                            <p class="font-light  mt-2 text-md text-gray-100">💻I have a solid knowledge of the agile Scrum methodology,which allows me to work collaboratively and adaptively in multidisciplinary teams.</p>
                            <p class="font-light  mt-2 text-md text-gray-100">💻Attention to detail</p>
                            <p class="font-light  mt-2 text-md text-gray-100">💻Willing to learn new technologies</p>

                        </div>
                        <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                            <div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#8218ca" d="M19 6.25h-3.75V5a1.89 1.89 0 0 0-2-1.75h-2.5a1.89 1.89 0 0 0-2 1.75v1.25H5A1.76 1.76 0 0 0 3.25 8v10A1.76 1.76 0 0 0 5 19.75h14A1.76 1.76 0 0 0 20.75 18V8A1.76 1.76 0 0 0 19 6.25M10.25 5c0-.08.19-.25.5-.25h2.5c.31 0 .5.17.5.25v1.25h-3.5ZM5 7.75h14a.25.25 0 0 1 .25.25v3.25H4.75V8A.25.25 0 0 1 5 7.75m3.75 5h6.5v1.5h-6.5ZM19 18.25H5a.25.25 0 0 1-.25-.25v-5.25h2.5V15a.76.76 0 0 0 .75.75h8a.76.76 0 0 0 .75-.75v-2.25h2.5V18a.25.25 0 0 1-.25.25" /></svg>
                                <h3 class="mb-2 text-lg font-bold text-white">2+ Years of experience</h3>
                                <p class="font-light text-gray-500 dark:text-gray-400 ">As website developer</p>

                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#8218ca" d="M4.25 18.5h-1.5v-11a2.71 2.71 0 0 1 2.68-2.75h2.41a.76.76 0 0 1 .58.25l2.67 3.23H16A2.71 2.71 0 0 1 18.72 11v.5h-1.5V11A1.22 1.22 0 0 0 16 9.75h-5.27a.74.74 0 0 1-.57-.27L7.49 6.25H5.43A1.22 1.22 0 0 0 4.25 7.5Z" /><path fill="#8218ca" d="M17.12 19.25H3.5a.76.76 0 0 1-.64-.36a.75.75 0 0 1 0-.74l3.38-6.5a.77.77 0 0 1 .67-.4H20.5a.76.76 0 0 1 .64.36a.75.75 0 0 1 0 .74l-3.38 6.5a.77.77 0 0 1-.64.4m-12.39-1.5h11.94l2.6-5H7.33Z" /></svg>
                                <h3 class="mb-2 text-xl font-bold text-white">5+ Frameworks</h3>
                                <p class="font-light text-gray-500">Based on frontend developer
                                </p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#8218ca" d="M6.12 20.75c-.76 0-1.48-.3-2.03-.84a2.86 2.86 0 0 1 0-4.05l5.51-5.51c-.5-1.94.04-4.03 1.46-5.45a5.67 5.67 0 0 1 5.48-1.46c.26.07.46.27.53.53s0 .53-.19.72l-2.45 2.45l.52 1.91l1.91.52l2.45-2.45c.19-.19.47-.26.72-.19c.26.07.46.27.53.53c.53 1.95-.02 4.05-1.46 5.48c-1.42 1.42-3.51 1.96-5.45 1.46l-5.51 5.51c-.54.54-1.26.84-2.02.84m8.56-15.98c-.96.08-1.87.5-2.57 1.2c-1.14 1.14-1.51 2.81-.96 4.35c.1.27.03.58-.18.78l-5.83 5.83c-.53.53-.53 1.4 0 1.93c.26.26.6.4.97.4c.36 0 .71-.14.96-.4l5.83-5.83c.21-.21.51-.27.78-.18c1.54.54 3.21.18 4.35-.96c.7-.7 1.11-1.61 1.2-2.57l-1.63 1.63c-.19.19-.47.26-.73.19l-2.74-.75a.75.75 0 0 1-.53-.53l-.75-2.74c-.07-.26 0-.54.19-.73l1.63-1.63Z" /></svg>
                                <h3 class="mb-2 text-xl font-bold text-white">4+ Tools</h3>
                                <p class="font-light text-gray-500 ">Version control
                                </p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#8218ca" d="M9.53 6.47a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06L5.06 12l4.47-4.47a.75.75 0 0 0 0-1.06m11 5l-5-5a.75.75 0 0 0-1.06 1.06L18.94 12l-4.47 4.47a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06" /></svg>
                                <h3 class="mb-2 text-xl font-bold text-white">3+ Programming languages</h3>
                                <p class="font-light text-gray-500 dark:text-gray-400">For web development</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default About;