import React, {useState} from 'react'
import {images} from '../../constants'
import './Footer.scss'
const Footer = () => {
  return (
    <>
    <h2 className="head-text"> 
      <span> Contact </span>
    </h2>

    <div className="app__footer-cards">
    <div className="app__footer-card">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <i class="fa fa-envelope"></i>
    <a href="mailto:crosnierthomas37@gmail.com" className="p-text"> crosnierthomas37@gmail.com</a>
    </div>
    <div className="app__footer-card">
    <i class="fa fa-github"></i>
    <a href="https://github.com/4kata4"> Github </a>
    </div>
    <div className="app__footer-card">
    <i class="fa fa-linkedin-square"></i>
    <a href="https://www.linkedin.com/in/thomas-crosnier-07a8b5236/"> Linkedln </a> </div>
    
    </div>
</>
  )}
export default Footer