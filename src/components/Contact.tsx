
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8 text-muted-foreground">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your.email@example.com" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="mt-8 text-muted-foreground">
            <p>📍 Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
