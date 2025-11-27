import type { Project } from "../project/project";
import { SkillType } from "../skill/Skill";

export const PROJECTS: Project[] = [
    {
        title: "SkinClock",
        description: "A dynamic React.JS and Express.JS platform for trading in-game items, featuring secure MB WAY payments, MySQL database, and user-friendly interface.",
        skills: [
            {name: "React.js", type: SkillType.FrontEnd},
            {name: "Express.js", type: SkillType.BackEnd},
            {name: "MySQL", type: SkillType.DB},
        ],
        links: [{
            title: "View Project →",
            link: "/tmas282/projects/" + "SkinClock.zip"
        }]
    },
    {
        title: "Cátia Marina Website",
        description: "Full-featured web app with calendar, Firebase backend, markdown editing, and responsive UI—built using Next.js, React, and Tailwind.",
        skills: [
            {name: "React.js", type: SkillType.FrontEnd},
            {name: "Tailwind.css", type: SkillType.FrontEnd},
            {name: "Next.js", type: SkillType.BackEnd},
            {name: "Firestore", type: SkillType.DB},
        ],
        links: [{
            title: "View Project →",
            link: "/tmas282/projects/" + "Catia_Marina_Website.zip"
        }]
    },
    {
        title: "Stock Price Predictor",
        description: "Built a financial data visualization tool using Python and mplfinance that overlays predictive trends on candlestick charts.",
        skills: [
            {name: "Python", type: SkillType.SciFi},
            {name: "NumPy", type: SkillType.SciFi},
            {name: "Pandas", type: SkillType.SciFi},
            {name: "matplotlib", type: SkillType.SciFi},
            {name: "PyTorch", type: SkillType.SciFi},
        ],
        links: [{
            title: "View Project →",
            link: "https://github.com/tmas282/stock-price-predictor"
        }]
    },
    {
        title: "Cancer Identifier",
        description: "A Convolutional Neural Network that identifies lung tumors based on computed tomography scans. Built with TensorFlow + Keras and trained on anomalies + healthy lungs public dataset.",
        skills: [
            {name: "Python", type: SkillType.SciFi},
            {name: "TensorFlow", type: SkillType.SciFi},
            {name: "Keras", type: SkillType.SciFi},
        ],
        links: [{
            title: "View Project →",
            link: "https://github.com/tmas282/cancer-identifier"
        }]
    },
    {
        title: "Jogo Plataforma",
        description: "Engaging Unity-built 2D platformer with vibrant visuals and smooth gameplay, showcased at ExpoCIC 2023, highlighting creative design and technical prowess.",
        skills: [
            {name: "C#", type: SkillType.Lang},
            {name: "Unity", type: SkillType.Others},
        ],
        links: [{
            title: "View Project →",
            link: "https://github.com/tmas282/Jogo-Plataforma"
        }]
    },
    {
        title: "Integrative Project 2nd Semester",
        description: "Java-based urban green space management system with task allocation, team collaboration, and vehicle maintenance tracking, featuring robust testing and dynamic visualizations.",
        skills: [
            {name: "Java", type: SkillType.Lang},
        ],
        links: [{
            title: "View Project →",
            link: "/tmas282/projects/" + "Integrative_Project_2nd_Semester.zip"
        }]
    },
    {
        title: "Industrial Production Management System",
        description: "Java-based industrial production management system integrating product engineering, production planning, and control with IoT sensor data, task scheduling, machine monitoring, TDD, and dynamic BOM/BOO visualizations.",
        skills: [
            {name: "Java", type: SkillType.Lang},
            {name: "C/C++", type: SkillType.Lang},
            {name: "Oracle Express", type: SkillType.DB},
            {name: "Arduino", type: SkillType.Others},
        ],
        links: [{
            title: "View Project →",
            link: "/tmas282/projects/" + "Integrative_Project_3rd_Semester.zip"
        }]
    },
    {
        title: "Showdrone",
        description: "Developed a full-stack, scalable drone show management system using Java, C, DSL, and simulation orchestration with CI/CD, DSL parsing, and real-time collision detection.",
        skills: [
            {name: "Java", type: SkillType.Lang},
            {name: "C/C++", type: SkillType.Lang},
            {name: "Spring", type: SkillType.BackEnd},
            {name: "H2", type: SkillType.DB},
            {name: "ANTLR", type: SkillType.Others},
        ],
        links: [{
            title: "View Project →",
            link: "/tmas282/projects/" + "Integrative_Project_4th_Semester.zip"
        }]
    },
    {
        title: "MDISC Minimum Spanning Tree",
        description: "Innovative Java-based graph analysis tool leveraging Kruskal's algorithm for minimum spanning tree computation, featuring dynamic visualization and performance benchmarking for complex network datasets.",
        skills: [
            {name: "Java", type: SkillType.Lang},
        ],
        links: [{
            title: "View Project →",
            link: "/tmas282/projects/" + "MDISC_Minimum_Spanning_Tree.zip"
        }]
    },
    {
        title: "Portfolio website",
        description: "Dynamic portfolio website built with React, TypeScript, and Tailwind CSS, showcasing projects, skills, and experience with a modern, responsive UI and GitHub Pages deployment.",
        skills: [
            {name: "React.js", type: SkillType.FrontEnd},
            {name: "Tailwind.css", type: SkillType.FrontEnd},
            {name: "Framer", type: SkillType.FrontEnd},
        ]
    },
];