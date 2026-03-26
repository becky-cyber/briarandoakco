import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"
      } px-6`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#top" 
          onClick={scrollTo("top")}
          className="text-primary font-serif text-2xl font-semibold tracking-wide flex flex-col group"
        >
          BRIAR & OAK
          <span className="text-sm block leading-none text-secondary tracking-widest group-hover:text-accent transition-colors duration-300">CO.</span>
        </a>
        
        <div className="hidden md:flex space-x-10 text-secondary font-medium tracking-wide">
          <a href="#about" onClick={scrollTo("about")} className="hover:text-accent transition-colors duration-200 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" onClick={scrollTo("services")} className="hover:text-accent transition-colors duration-200 relative group">
            Packages
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" onClick={scrollTo("contact")} className="hover:text-accent transition-colors duration-200 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <a
          href="https://briarandoakco.hbportal.co/public/69c4489698c3e1003040eea1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground px-6 py-2.5 rounded-sm hover:bg-primary hover:-translate-y-0.5 transition-all duration-300 text-sm font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}
