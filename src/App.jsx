import { useState } from 'react'
import Featured from './components/featured/Featured'
import Section from './components/firstSection/Section'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Ready from './components/ready/Ready'
import Section2 from './components/secondSection/Section2'
import Testimonials from './components/Testimonials/Testimonials'


function App() {
  

  return (
    <div className="App">
      <Header/>
      <main>
        <Section/>
        <Featured/>
        <Section2/>
        <Testimonials/>
        <Ready/>
      </main>
      <Footer/>
     
    </div>
  )
}

export default App
