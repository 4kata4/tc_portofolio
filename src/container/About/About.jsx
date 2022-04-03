import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import Skillslist from './Skillslist';
import { images } from '../../constants';
import './Skills.scss';

const About = () => {
  return (
    <> 
    <br /> <br /> <br />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <h2 className="head-text"> 
    <span> Présentation </span>
    <br />
    <span> </span> </h2>
    
      <motion.div 
      whileInView={{ x: [-100, 0], opacity: [0,1]}}
      transition={{ duration: 0.5}} className=" app__profiles app__profile-item app__flex">
    <i class="fa fa-user-o"> </i>
          <p className="bold-text" style={{ marginTop: 10}}>  Je suis un developpeur web débutant autoformé passionné par le Javascript, React et tout ce qui concerne le developpement web. La combinaison de créativité, de capacités logiques et le fait d'avoir constament de nouvelles choses a decouvrir est, chez moi ce qui alimente cette passion pour le developpement web. Quand je ne code pas, je compose de la musique electronique.  </p>
         
              
          </motion.div> 
         
          <div className="app__skills-container app__flex"> 
<motion.div className="app__skills-list">
    {Skillslist.map((skill) => (
      <motion.div
      whileInView={{opacity: [0, 1]}}
      transition={{duration: 0.5}}
      className="app__skills-item app__flex"
      key={skill.title}>
        <div
        className="app__flex">
          <img src={skill.img} alt={skill.name} />
          
        </div> 
        <p className="p-text"> {skill.title} </p>
        </motion.div>
    ))}
       </motion.div>
       
       
       </div>

       
       
             
    </>
       
    
  )
}

export default About