import React, {useState, useEffect} from 'react'
import { motion} from 'framer-motion'
import { images} from '../../constants'
import ProjectsList from './ProjectsList'
import { AiFillEye, AiFillGithub } from "react-icons/ai";


import './Work.scss'
const Work = () => {
  const [animateCard, setanimateCard] = useState({y:0, opacity:1})
  return (
    <> 
    <h2 className="head-text"> <span> Mes Projets </span> </h2>
<br /> <br /> <br /><br />
    <div className="app__work-filter"> 
    </div>
    {ProjectsList.map((project, index) => (

 
    <motion.div
    animate={animateCard}
    transition={{duration: 0.5, delayChildren: 0.5}}
    className="app__work-portofolio"
    key={project.title + index}>
      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex"> 
        <img src={project.img} />        <div
        className="app__flex"> 
            <a href={project.link}> <AiFillEye/> </a>
              <div 
        className="app__flex"> 
        <a href={project.repolink}> <AiFillGithub/> </a>

              </div>
        </div>
        <div className="app__work-content app__flex">
        <h4> {project.title} </h4>
              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>

             </div>
        </div>
      </div>
    </motion.div>

)
)}
    </>
  )
}

export default Work