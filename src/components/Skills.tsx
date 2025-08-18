import { useState, useEffect } from 'react';
import { Code, Database, Globe, GitBranch, Smartphone, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 90 },
        { name: 'C', level: 88 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 88 }
      ]
    },
    {
      icon: GitBranch,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Node.js', level: 70 },
        { name: 'npm/yarn', level: 80 }
      ]
    },

    {
      icon: Smartphone,
      title: 'Design & UI/UX',
      skills: [
        { name: 'Responsive Design', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'UI/UX Principles', level: 80 },
        { name: 'Accessibility', level: 75 }
      ]
    },
    {
      icon: Cpu,
      title: 'Emerging Technologies',
      skills: [
        { name: 'Machine Learning', level: 65 },
        { name: 'AI Concepts', level: 70 },
        { name: 'Data Structures', level: 85 },
        { name: 'Algorithms', level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="card-hover bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;