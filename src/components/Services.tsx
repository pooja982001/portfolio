import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'WordPress Plugin Development',
      description: 'Custom WordPress plugins tailored to your specific business needs and requirements.',
      icon: '🔌'
    },
    {
      title: 'WooCommerce Custom Checkout Fields',
      description: 'Enhanced checkout experiences with custom fields and validation for better conversions.',
      icon: '🛒'
    },
    {
      title: 'API Integration & Development',
      description: 'Seamless integration with third-party APIs and custom API development for your applications.',
      icon: '🔗'
    },
    {
      title: 'WordPress Theme Customization',
      description: 'Professional theme customization and development to match your brand perfectly.',
      icon: '🎨'
    },
    {
      title: 'Database Optimization',
      description: 'Performance optimization and database management for faster, more efficient websites.',
      icon: '⚡'
    },
    {
      title: 'Website Migration & Maintenance',
      description: 'Safe and reliable website migration services with ongoing maintenance and support.',
      icon: '🔧'
    }
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Services
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Professional WordPress and PHP development services to bring your ideas to life
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services