import React from 'react'

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-card-foreground font-medium">{skill}</span>
      <span className="text-primary font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-muted rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
)

const EnhancedSkills = () => {
  const skillCategories = [
    {
      title: 'Languages & Web Tech',
      skills: [
        { name: 'PHP', percentage: 95 },
        { name: 'HTML/CSS', percentage: 92 },
        { name: 'JavaScript', percentage: 88 },
        { name: 'jQuery', percentage: 90 },
        { name: 'SQL', percentage: 85 }
      ]
    },
    {
      title: 'CMS & Platforms',
      skills: [
        { name: 'WordPress', percentage: 95 },
        { name: 'WooCommerce', percentage: 93 },
        { name: 'Elementor', percentage: 88 },
        { name: 'Bootstrap', percentage: 87 },
        { name: 'Plugin Development', percentage: 95 }
      ]
    },
    {
      title: 'Tools & Integration',
      skills: [
        { name: 'Git', percentage: 82 },
        { name: 'cPanel', percentage: 85 },
        { name: 'XAMPP', percentage: 90 },
        { name: 'API Integration', percentage: 88 },
        { name: 'Zoho CRM', percentage: 80 }
      ]
    },
    {
      title: 'Development Skills',
      skills: [
        { name: 'Problem Solving', percentage: 95 },
        { name: 'Debugging', percentage: 92 },
        { name: 'Time Management', percentage: 88 },
        { name: 'Site Migration', percentage: 85 },
        { name: 'Performance Optimization', percentage: 82 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit built through 3+ years of hands-on WordPress and PHP development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-6 text-card-foreground">{category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnhancedSkills