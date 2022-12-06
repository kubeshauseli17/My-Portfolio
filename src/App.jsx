import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App