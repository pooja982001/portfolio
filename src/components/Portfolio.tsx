
import React from 'react'
import Navigation from './Navigation'
import EnhancedHero from './EnhancedHero'
import EnhancedAbout from './EnhancedAbout'
import EnhancedSkills from './EnhancedSkills'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <EnhancedHero />
      <EnhancedAbout />
      <EnhancedSkills />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default Portfolio
