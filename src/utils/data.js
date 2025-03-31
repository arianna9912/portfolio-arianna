import javascriptLogo from '../assets/javascript-logo.png'
import softskills from '../assets/soft-skills.png'
import frontend from '../assets/frontend.png'
import backend from '../assets/backend.png'
import tools from '../assets/tools.png'
export const SKILLS = [
    {
        title: 'Frontend',
        icon: frontend,
        skills: [
            { skill: "HTML5", percentage: "85%" },
            { skill: "CSS3", percentage: "80%" },
            { skill: "Tailwind CSS, Prime Vue, MUI", percentage: "85%" },
            { skill: "Javascript, TypeScript", percentage: "75%" },
            { skill: "React", percentage: "85%" },
            { skill: "Vue.js 3", percentage: "85%" },
        ],
    },
    {
        title: 'Backend',
        icon: backend,
        skills: [
            { skill: "SQL", percentage: "75%" },
            { skill: "MySQL, SQLServer", percentage: "75%" },
            { skill: "Python", percentage: "80%" },
            { skill: "Django, Django Rest Framework", percentage: "75%" },
            { skill: "C#", percentage: "60%" },
        ],
    },
    {
        title: 'Tools',
        icon: tools,
        skills: [
            { skill: "Git & Github", percentage: "85%" },
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "Postman", percentage: "80%" },
            { skill: "NPM", percentage: "80%" },
            { skill: "Firebase", percentage: "80%" },
           
        ],
    },
    {
        title: 'Soft Skills',
        icon: softskills,
        skills: [
            { skill: "Problem-Solving", percentage: "80%" },
            { skill: "Teamwork", percentage: "85%" },
            { skill: "Adaptability", percentage: "80%" },
            { skill: "Investigation and Development ", percentage: "80%" },
        ],
    },
]