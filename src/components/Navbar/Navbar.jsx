import React, {useState} from 'react'
import { Work } from '../../container'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from 'framer-motion'
import App from '../../App'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)


  return (
       // Logo // 
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <h1> Thomas Crosnier </h1>

            </div> 

                

                </nav>
  )
}

export default Navbar