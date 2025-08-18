import { ExternalLink, Github, Code, Smartphone, ShoppingCart, Car, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: 'Flipkart-Inspired E-commerce',
      description: 'A comprehensive e-commerce platform with modern UI/UX, featuring product catalogs, shopping cart functionality, and responsive design.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design'],
      github: 'https://github.com/dipendrakushwaha/flipkart-clone',
      demo: 'https://dipendra-flipkart-clone.netlify.app',
      featured: true
    },
    {
      icon: Car,
      title: 'Car Showroom Management System',
      description: 'A full-featured car showroom management system with inventory tracking, customer management, and sales analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'DOM Manipulation'],
      github: 'https://github.com/dipendrakushwaha/car-showroom',
      demo: 'https://dipendra-car-showroom.netlify.app',
      featured: true
    },

    {
      icon: Smartphone,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website showcasing projects, skills, and professional experience with modern animations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: 'https://github.com/dipendrakushwaha/portfolio',
      demo: 'https://dipendrakushwaha.dev',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects that demonstrate my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`card-hover border-0 overflow-hidden ${
                project.featured ? 'lg:col-span-1 bg-gradient-card' : 'bg-card'
              }`}>
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-primary" />
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-white">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-hero text-white"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <a
                href="https://github.com/dipendrakushwaha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;