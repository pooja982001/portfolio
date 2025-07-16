
import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Pooja Shankar Thube
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          PHP & WordPress Developer
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
          Professional PHP & WordPress Developer with 3+ years experience in plugin development and WooCommerce customization
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
