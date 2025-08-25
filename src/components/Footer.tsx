import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/DipendraKushwaha93', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dipendrakushwaha', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dipendra.kushwaha@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Dipendra <span className="text-primary-light">Kushwaha</span>
              </h3>
              <p className="text-background/80 leading-relaxed">
                Frontend Developer passionate about creating beautiful, 
                functional web experiences. Always learning, always building.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-background/80 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-background/80">
                  <span className="font-medium">Email:</span><br />
                  dipendra.kushwaha@cdgi.edu.in
                </p>
                <p className="text-background/80">
                  <span className="font-medium">Location:</span><br />
                  Indore, Madhya Pradesh, India
                </p>
                <p className="text-background/80">
                  <span className="font-medium">Status:</span><br />
                  Available for opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-background/80">
              <span>© {currentYear} Dipendra Kushwaha. Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>and React</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-background/60 text-sm">
                Built with React, TypeScript & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute bottom-6 right-6 bg-primary hover:bg-primary-dark text-white rounded-full shadow-glow"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};

export default Footer;
