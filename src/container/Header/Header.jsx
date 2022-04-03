import React from 'react'
import { motion } from 'framer-motion';

import { images} from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1,],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}
// icone dans span et img a mettre
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0,1]}}
      transition={{ duration: 0.5}}
      className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span> </span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text"> Bonjour, Je suis  </p>
              <h1 className="head-text"> Thomas Crosnier </h1> </div>
          </div>
        
        <div className="tag-cmp app__flex"> 
        <p className="p-text"> Developpeur Web  </p>
        <p className="p-text">  Autoformé </p>

        </div>
        </div>
      
      </motion.div>
      <motion.div
      whileInView={{ opacity: [0,1]}}
      transition={{ duration: 0.5, delayChildren: 0.5}}
      className="app__header-img">
         </motion.div>
         {/* img */}


         <motion.div
         variant={scaleVariants}
         whileInView={scaleVariants.whileInView}
         className="app__header-circles">
           {[images.css, images.react, images.html, images.sass].map((circle, index) =>
           (
             <div className="circle-cmp app__flex" 
             key={`circle-${index}`}>
               <img src={circle} alt="circle" />
             </div>
           )
           )}

        

        
         </motion.div>

    </div>
  )
}

export default Header