
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4 text-card-foreground">WordPress Plugin Development</h3>
            <p className="text-muted-foreground mb-4">
              Custom WordPress plugins for various business needs including e-commerce solutions and content management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">PHP</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">WordPress</span>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4 text-card-foreground">WooCommerce Customization</h3>
            <p className="text-muted-foreground mb-4">
              Extensive customizations for WooCommerce stores including payment gateways and inventory management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">WooCommerce</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">PHP</span>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4 text-card-foreground">Responsive Web Development</h3>
            <p className="text-muted-foreground mb-4">
              Mobile-first responsive websites with modern design and optimal performance across all devices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">HTML5</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">CSS3</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
