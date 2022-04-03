import React from 'react'
import {About, Footer, Header, Skills, Work} from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header id='Accueil'/>
      <About id='Présentation'/>
      <br /><br /> <br /> <br />
      <Work id='Projets'/>
      <br />
      <hr />
      <br /> <br /> 
      <Footer id='Contact' />
    
    
    </div>
  )
}

export default App