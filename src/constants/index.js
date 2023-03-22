import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    webapps,
    urlshotner,
    carrent,
    jobit,
    tripguide,
    threejs,
    mysql,
    express,
    pratik,
    mahesh,
    Functionup
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    /* {
        title: "React Native Developer",
        icon: mobile,
    }, */
    {
        title: "Backend Developer",
        icon: backend,
    },
    /*     {
            title: "Content Creator",
            icon: creator,
        }, */
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Fullstack Developer Trainee",
        company_name: "FunctionUP",
        icon: Functionup,
        iconBg: "#383E56",
        date: "May 2022 - Present",
        points: [
            "Developed and maintained MERN web apps with SQL.",
            "Designed scalable solutions with AWS S3 and Redis and Implemented caching strategies with Redis.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },


];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Lalit proved me wrong.",
        name: "Pratik Pidkalwar",
        designation: "Trainee",
        company: "FunctionUP",
        image: pratik,
    },
    {
        testimonial:
            "The way he understand and explain the dsa and programming is very good and attractive.",
        name: "Mahesh Dhage ",
        designation: "Trainee ",
        company: "LenDenClub",
        image: mahesh,
    },

];

const projects = [
    {
        name: "E-commerce Shoping cart",
        description:
            "e-commerce shopping cart website is a back-end platform for selling products and services online. It typically consists of a frontend interface for customers to browse and purchase products, and a backend system to manage the data and handle the transactions.",
        tags: [
            {
                name: "Node js",
                color: "blue-text-gradient",
            },
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
            {
                name: "AWS S3",
                color: "white-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/lalitkishork73/Project-5-Product-Management",
        visit_site:""
    },
    {
        name: "Book-Management",
        description:
            "A book management website is a platform that helps individuals organize and keep track of their book collection. It provides tools to catalog books, search through the collection, and manage information such as author, title, ISBN, and publication date.",
        tags: [
            {
                name: "Nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "AWS S3",
                color: "black-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/lalitkishork73/Project-3-Book-Managment",
        visit_site: "https://booksboys.onrender.com/",
    },
    {
        name: "Url Shortener",
        description:
            "A URL shortener is a web-based tool that takes long and complex URLs and transforms them into shorter, more manageable links.",
        tags: [
            {
                name: "Node js",
                color: "blue-text-gradient",
            },
            {
                name: "Express",
                color: "green-text-gradient",
            },
            {
                name: "Redis",
                color: "pink-text-gradient",
            },
        ],
        image: urlshotner,
        source_code_link: "https://github.com/lalitkishork73/Project-4-URL_Shortner",
        visit_site:"",
    },
    {
        name: "Web Application",
        description:
        "A multiple HTML, CSS, JavaScript web application is a platform built using a combination of HTML, CSS, and JavaScript technologies. It is a type of static web application that provides interactive and engaging user experiences.    ",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Vanilla JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: webapps,
        source_code_link: "https://github.com/lalitkishork73/Web_Assignments",
        visit_site: "https://lalitkisho.000webhostapp.com/",
        
    },
];

export { services, technologies, experiences, testimonials, projects };