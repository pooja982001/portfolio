
import React from 'react'

const Skills = () => {
  const skills = [
    'PHP', 'WordPress', 'WooCommerce', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 
    'jQuery', 'REST API', 'Plugin Development', 'Theme Development', 'Git'
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-card p-4 rounded-lg text-center border border-border">
              <span className="text-card-foreground font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
