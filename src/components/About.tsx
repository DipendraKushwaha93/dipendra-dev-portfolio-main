import { GraduationCap, Code, Brain, Laptop } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.E. in Computer Science & Engineering'
    },
    {
      icon: Code,
      title: 'Programming',
      description: 'Proficient in C, C++, JavaScript, and modern web technologies'
    },
    {
      icon: Brain,
      title: 'AI Enthusiast',
      description: 'Passionate about artificial intelligence and machine learning'
    },
    {
      icon: Laptop,
      title: 'Development',
      description: 'Full-stack development with focus on user experience'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate developer on a journey to create meaningful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Computer Science & Engineering 
                at Chameli Devi Group of Institutions (2023–2027). My journey in technology 
                began with a fascination for how things work behind the scenes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a frontend developer with a strong foundation in programming languages 
                like C and C++, I've evolved to master modern web technologies including 
                HTML, CSS, JavaScript, and React. My toolkit extends to essential 
                development tools like Git and VS Code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What drives me most is the intersection of artificial intelligence and 
                full-stack development. I believe in the power of technology to solve 
                real-world problems and create intuitive user experiences that make a difference.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="card-hover bg-gradient-card border-0">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;