import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import image1 from "../../assets/projects/project4.png"
import image4 from "../../assets/projects/project.png"
import image2 from "../../assets/projects/project2.png"
import image3 from "../../assets/projects/project1.png"
import image6 from "../../assets/projects/project5.png"
import image5 from "../../assets/projects/project6.png"
import image7 from "../../assets/projects/project7.png"
import image8 from "../../assets/projects/project8.png"


export const Project = () => {
    const projects =  [
    {title: "School website", link: "https://ece-production.up.railway.app", github: "https://github.com/tezon22/ECE", imageSmall:image5, imageBig: image6},
    {title: "E-commerce webiste", link: "https://social-fullstack.vercel.app", github: "https://github.com/eradz/social-fullstack", imageSmall:image7, imageBig: image8 },
    {title: "Portfolio website", link: "https://chi-iota.vercel.app/2/home.html", github: "https://github.com/Eradz/chi/tree/main/2", imageSmall:image1, imageBig:image2 },
    {title: "My first website", link: "https://chi-iota.vercel.app/2/home.html", github: "https://github.com/eradz/", imageSmall:image4, imageBig: image3},
]
  return (

    <div id= 'projects'>
        <motion.div
        whileInView={{ y: [200, 0], opacity: [0,1]}}
        transition= {{ duration: 1.5}}
        >
        <h1>My <j>Projects</j></h1>
        <div className='project-row'>
            {projects.map((item)=>{
                return (
                <div className='project-box'>
                    <div className='image1'>
                        {/* Large screen */}
                    <img src={item.imageBig} alt='project' className='image3'/>
                        {/* Small screen */}
                    <img src={item.imageSmall} alt='project' className='image2'/>
                    </div>
                    <p>{item.title}</p>
                    <div className='buttonsP'>
                    <a href={item.link} className='buttonsP1'> Live</a>
                    <a href={item.github} className='buttonsP2'> Code</a>
                    </div>
                </div>
                )
            })}
        </div>
        </motion.div>
    </div>
  )
}
