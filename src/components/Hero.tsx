import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dipendrakushwaha',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/feed/?trk=404_page',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/u/2/#inbox',
      label: 'Email'
    }
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 float-animation">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-glow ring-4 ring-primary/20">
              <img
                src={profileImage}
                alt="Dipendra Kushwaha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="gradient-text">
              Dipendra Kushwaha
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4 animate-fade-in-up">
            Frontend Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Aspiring AI & Full Stack Developer passionate about creating beautiful, 
            functional web experiences that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
            <Button
              size="lg"
              className="bg-gradient-hero text-white font-semibold px-8 py-4 btn-glow"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-in-right">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;