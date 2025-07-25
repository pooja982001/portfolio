import React from 'react'

const EnhancedAbout = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              I'm a passionate PHP and WordPress Developer with over 3 years of hands-on experience in plugin development, 
              WooCommerce customization, and responsive website creation. I enjoy building practical, user-friendly solutions — 
              especially custom plugins that solve real problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise lies in creating clean, maintainable code and delivering solutions that not only meet technical 
              requirements but also provide excellent user experiences. I have a deep understanding of WordPress architecture 
              and love tackling complex challenges in web development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Education</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <div className="font-medium">M.Sc. Computer Science</div>
                    <div>2022 – 2024</div>
                  </div>
                  <div>
                    <div className="font-medium">B.Sc. Computer Science</div>
                    <div>2019 – 2022</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">3+ Years Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Specializing in PHP and WordPress development
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Based in Pune</h3>
                <p className="text-sm text-muted-foreground">
                  Maharashtra, India - Available for remote work
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Plugin Development</h3>
                <p className="text-sm text-muted-foreground">
                  Custom WordPress plugins and WooCommerce solutions
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Core Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Problem-solving',
                'Custom Plugin Development',
                'WooCommerce Expert',
                'API Integration',
                'Responsive Design',
                'Clean Code'
              ].map((strength, index) => (
                <span 
                  key={index} 
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnhancedAbout