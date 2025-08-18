import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const timeline = [
    {
      icon: GraduationCap,
      type: 'education',
      title: 'Bachelor of Engineering - Computer Science & Engineering',
      organization: 'Chameli Devi Group of Institutions',
      period: '2023 - 2027',
      description: 'Currently pursuing B.E. in CSE with focus on software development, data structures, algorithms, and emerging technologies.',
      status: 'current'
    },
    {
      icon: BookOpen,
      type: 'project',
      title: 'Frontend Development Specialization',
      organization: 'Self-Directed Learning',
      period: '2023 - Present',
      description: 'Intensive study of modern frontend technologies including React, TypeScript, and advanced CSS frameworks.',
      status: 'ongoing'
    },
    {
      icon: Award,
      type: 'achievement',
      title: 'Web Development Portfolio',
      organization: 'Personal Projects',
      period: '2023 - Present',
      description: 'Built 5+ responsive web applications demonstrating proficiency in full-stack development.',
      status: 'completed'
    },
    {
      icon: BookOpen,
      type: 'learning',
      title: 'AI & Machine Learning Exploration',
      organization: 'Online Platforms & Courses',
      period: '2024 - Present',
      description: 'Exploring artificial intelligence concepts, machine learning algorithms, and their practical applications.',
      status: 'ongoing'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-primary';
      case 'ongoing':
        return 'bg-secondary';
      case 'completed':
        return 'bg-muted-foreground';
      default:
        return 'bg-muted-foreground';
    }
  };

  const getCardBackground = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-gradient-card border-primary/20';
      case 'project':
        return 'bg-gradient-card border-secondary/20';
      default:
        return 'bg-card border-border';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and professional development in the field of technology
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Timeline marker */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}>
                  <Card className={`card-hover ${getCardBackground(item.type)} max-w-lg ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className={`flex items-start space-x-4 mb-4 ${
                        index % 2 === 0 ? '' : 'md:flex-row-reverse md:space-x-reverse md:space-x-4'
                      }`}>
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className={`flex items-center space-x-2 mb-2 ${
                            index % 2 === 0 ? '' : 'md:justify-end'
                          }`}>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">
                              {item.period}
                            </span>
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`} />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-3">{item.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Current Status */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-card border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Currently Looking For
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm actively seeking internship opportunities and entry-level positions 
                  in frontend development, full-stack development, or AI-related roles where 
                  I can contribute to meaningful projects and continue learning.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Frontend Development', 'Full Stack', 'AI/ML', 'Internships'].map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;