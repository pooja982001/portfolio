
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-muted-foreground">
            I'm a passionate PHP & WordPress Developer based in Pune, Maharashtra, India with over 3 years of experience 
            in creating dynamic web solutions. I specialize in WordPress plugin development, WooCommerce customization, 
            and building responsive websites.
          </p>
          <p className="text-lg text-muted-foreground">
            My expertise includes custom theme development, API integrations, database optimization, 
            and creating scalable web applications that deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
