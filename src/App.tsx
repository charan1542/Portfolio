/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, Code, Briefcase, X, Download, MapPin, Phone, ExternalLink } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export default function App() {
  const [activeSegment, setActiveSegment] = useState("hero");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSegment(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleResume = useCallback(() => {
    setIsResumeOpen(prev => !prev);
    if (!isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isResumeOpen]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Case Study — SAP S/4HANA Logistics Implementation",
      category: "Enterprise Solutions",
      description: "Configured and executed end-to-end P2P and O2C cycles for electric component manufacturing. Implemented specialized workflows (Consignment, Consumables) resulting in an 18% increase in operational efficiency through automated release strategies.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARbQ8xx51egxCyZ3xSjebCpq8PR6Kehp3CVEZ87RpfpxCrFgyhBTH_0rydLVnHtqbt87AJGWAmBAXlsj2FKcnMi7cFnUW4ZjK80zcuGN98xi0UpZd8xAo0ZF-ZA1nM_HlXSR0eNBuii8DGLDZqSV6pG8SISCkaGy5WqJL6iR_T2qsM5wS7G7GibqCsFBtkP3xdHriZcg4NNp_sv8MCkVW8gRyb38q2M0QNoAtmtEihT5aFve1W_xey37_lLK6yr66eFQi2iwibjYM"
    },
    {
      title: "ClearVision: Eye Disease Detection Website",
      category: "Data Engineering",
      description: "Built a website using YOLOv8 and CNN models for eye disease detection from fundus and naked eye images. Features a symptoms-based rule model with a high-performance UI inspired by Koenigsegg.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPL1U5WiugSRcBkL7Oac11ak7hpVililADM1akJJcGCV7DfhQJghywGQhyt8QTqHLuChR49cB9Bx6dQI3uGSZyI6N-16bcai-dRXVIeMaU7WnNR0DTp1mU1bMcTdUPF1s0b4941CGnJm3uGpF-0dHZl1DKHT0wmZctSkgz0nhv7S_GwUi7FWQULI5nQ7bW2iqN1hIrNLW5kHmVh72cK5QqgBUuy2ukUOO9akIxwB3a3I4e6MlJoCmKX92FzhLqEUI6OvCD27uIFR4"
    }
  ];

  const skillSets = [
    "SAP S/4 HANA", "SAP Material Management", "SAP Sales and Distribution", 
    "SAP FIORI", "MySQL", "MongoDB", "Java", "Javascript", "HTML & CSS"
  ];

  const experiences = [
    {
      period: "AUGUST 2025 — PRESENT",
      role: "System Engineer",
      company: "Infosys Limited",
      tag: "SAP SOLUTIONS"
    },
    {
      period: "2021 — 2025",
      role: "B.Tech Graduation",
      company: "Andhra University",
      tag: "COMPUTER SCIENCE ENGINEERING"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="flex justify-between items-center px-8 md:px-16 py-6 max-w-[1200px] mx-auto">
          <div className="text-xl font-extrabold tracking-tighter text-zinc-100 font-display uppercase">
            CHARAN
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                className="font-display uppercase tracking-tight text-xs font-bold text-zinc-400 hover:text-accent-blue transition-all duration-300"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button 
            onClick={toggleResume}
            className="font-display uppercase tracking-tight text-xs font-bold border border-zinc-100 px-6 py-2 hover:bg-zinc-100 hover:text-zinc-950 transition-all duration-300"
          >
            Resume
          </button>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-8 md:px-16 pt-32">
        {/* Hero Section */}
        <section 
          id="hero" 
          className="min-h-[70vh] flex flex-col justify-center border-b border-zinc-900 pb-20 mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-display text-5xl md:text-8xl text-white leading-none max-w-4xl tracking-tighter uppercase font-extrabold">
              KANDULA CHARAN CHOUDARY
            </h1>
            <div className="flex items-center space-x-4">
              <p className="font-mono text-sm text-accent-blue uppercase tracking-widest blinking-cursor">
                System Engineer · SAP S/4 HANA · Infosys
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-8">
              <a 
                href="#projects"
                className="px-8 py-3 border border-white text-white font-display uppercase hover:bg-white hover:text-zinc-950 transition-all duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border border-zinc-800 text-zinc-400 font-display uppercase hover:border-accent-blue hover:text-white transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section 
          {...fadeIn}
          id="about" 
          className="mb-32 max-w-3xl section-anchor"
        >
          <div className="mb-6">
            <span className="font-display text-xs tracking-widest text-accent-blue font-bold uppercase">About</span>
          </div>
          <p className="font-sans text-zinc-400 leading-relaxed text-lg md:text-xl opacity-90">
            I'm Kandula Charan Choudary, a B.Tech graduate from Andhra University College of Engineering (2025). I currently work as a System Engineer at Infosys, where I have been trained in SAP S/4 HANA with a focus on the MM and SD modules. I am calm under pressure, professional in my approach, and reliable in everything I take on. I am deeply committed to delivering quality work and continuously growing within the SAP ecosystem.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          {...fadeIn}
          id="skills" 
          className="mb-32 section-anchor"
        >
          <div className="mb-8">
            <h2 className="font-display text-4xl text-white uppercase tracking-tight font-extrabold">Skills</h2>
            <div className="w-16 h-0.5 bg-accent-blue mt-4"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {skillSets.map((skill) => (
              <div 
                key={skill}
                className="px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-accent-blue hover:text-accent-blue transition-all duration-300 font-display uppercase text-[10px] tracking-widest text-zinc-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section 
          {...fadeIn}
          id="projects" 
          className="mb-32 section-anchor"
        >
          <div className="mb-8">
            <h2 className="font-display text-4xl text-white uppercase tracking-tight font-extrabold">Projects</h2>
            <div className="w-16 h-0.5 bg-accent-blue mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#141414] border border-[#222222] hover:border-accent-blue transition-all duration-500 overflow-hidden"
              >
                <div className="h-64 bg-zinc-900 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="font-mono text-[10px] text-accent-blue mb-2 uppercase tracking-[0.2em]">{project.category}</div>
                  <h3 className="font-display text-xl text-white mb-4 font-bold">{project.title}</h3>
                  <p className="text-zinc-500 font-sans mb-6 leading-relaxed opacity-70">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          {...fadeIn}
          id="experience" 
          className="mb-32 section-anchor"
        >
          <div className="mb-8">
            <h2 className="font-display text-4xl text-white uppercase tracking-tight font-extrabold">Experience</h2>
            <div className="w-16 h-0.5 bg-accent-blue mt-4"></div>
          </div>
          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="border-t border-[#222222] py-8 flex flex-col md:flex-row md:items-center justify-between group hover:bg-zinc-950 transition-colors duration-300 px-4"
              >
                <div className="mb-2 md:mb-0">
                  <span className="font-mono text-xs text-zinc-500 block mb-1">{exp.period}</span>
                  <h4 className="font-display text-xl text-white font-bold">{exp.role}</h4>
                </div>
                <div className="text-zinc-400 font-sans uppercase tracking-widest text-sm">{exp.company}</div>
                <div className="text-accent-blue font-display text-[10px] font-bold">{exp.tag}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          {...fadeIn}
          id="contact" 
          className="mb-32 text-center py-24 border border-zinc-900 bg-zinc-950/30 section-anchor"
        >
          <h2 className="font-display text-4xl text-white uppercase mb-4 font-extrabold">Open to opportunities.</h2>
          <p className="text-zinc-500 font-sans mb-12 max-w-lg mx-auto">
            Currently looking for new roles and growth opportunities. Let's build something efficient.
          </p>
          <div className="flex justify-center items-center gap-12">
            {[
              { icon: Mail, label: "EMAIL", href: "mailto:charanchoudary59@gmail.com" },
              { icon: Briefcase, label: "LINKEDIN", href: "https://linkedin.com/in/charanchoudary" },
              { icon: Code, label: "GITHUB", href: "https://github.com/charan1542" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2"
              >
                <social.icon className="w-8 h-8 text-zinc-600 group-hover:text-accent-blue transition-colors duration-300" />
                <span className="font-display text-[10px] text-zinc-500 group-hover:text-white transition-colors duration-300 font-bold tracking-widest">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 w-full py-24 border-t border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 md:px-16 max-w-[1200px] mx-auto text-center md:text-left">
          <div className="font-display text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold">
            © 2024 CHARAN. ENGINEERED BEAUTY.
          </div>
          <div className="flex gap-8">
            {[
              { name: "GitHub", href: "https://github.com/charan1542" },
              { name: "LinkedIn", href: "https://linkedin.com/in/charanchoudary" },
              { name: "Email", href: "mailto:charanchoudary59@gmail.com" }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="font-display text-[10px] tracking-[0.2em] uppercase text-zinc-600 hover:text-accent-blue transition-colors duration-300 cursor-pointer font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl h-full max-h-[90vh] bg-zinc-950 border border-zinc-800 overflow-y-auto scrollbar-hide"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-zinc-950 border-b border-zinc-800">
                <span className="font-display text-xs tracking-widest text-accent-blue font-bold uppercase">Digital Resume</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => {
                      setTimeout(() => {
                        window.print();
                      }, 100);
                    }}
                    className="flex items-center gap-2 text-xs font-bold uppercase font-display text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Print PDF</span>
                  </button>
                  <button 
                    onClick={toggleResume}
                    className="p-2 hover:bg-zinc-800 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Resume Body */}
              <div id="resume-content-print" className="p-8 md:p-12 space-y-12">
                {/* Header Information */}
                <div className="border-b border-zinc-900 pb-12">
                  <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white mb-6">
                    Kandula Charan Choudary
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400 font-sans text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Visakhapatnam, Andhra Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent-blue" />
                      <span>+91 7386173696</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent-blue" />
                      <a href="mailto:charanchoudary59@gmail.com" className="hover:text-white transition-colors">charanchoudary59@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-accent-blue" />
                      <a href="https://linkedin.com/in/charanchoudary" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/charanchoudary</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-accent-blue" />
                      <a href="https://github.com/charan1542" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/charan1542</a>
                    </div>
                  </div>
                </div>

                {/* Sections */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                  {/* Education */}
                  <section>
                    <h3 className="font-display text-xs tracking-widest text-accent-blue font-bold uppercase mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-accent-blue"></span> Education
                    </h3>
                    <div className="space-y-6">
                      <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-zinc-800">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-white font-bold text-lg uppercase font-display">Andhra University</h4>
                            <p className="text-zinc-500 text-sm">Bachelor of Technology in Computer Science</p>
                          </div>
                          <span className="text-xs font-mono text-zinc-600">SEP. 2021 — MAY 2025</span>
                        </div>
                        <p className="text-sm text-zinc-400 mt-4 italic">
                          Relevant Coursework: React, MongoDB, SAP MM, HSQL, Deep Learning, SAP S/4 HANA, SAP SD, MySQL
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Experience */}
                  <section>
                    <h3 className="font-display text-xs tracking-widest text-accent-blue font-bold uppercase mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-accent-blue"></span> Experience
                    </h3>
                    <div className="space-y-8">
                      {/* Infosys */}
                      <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-zinc-800">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-white font-bold text-lg uppercase font-display">Infosys</h4>
                            <p className="text-zinc-500 text-sm">System Engineer, SAP Functional Consultant</p>
                          </div>
                          <span className="text-xs font-mono text-zinc-600">AUG 2025 — PRESENT</span>
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
                          <li>Trained on SAP S/4 HANA Logistics (Material Management and Sales and Distribution modules).</li>
                          <li>Mastered Java, OOPS concepts, Collections, and Data Structures.</li>
                          <li>Completed training with an overall percentage of 91%.</li>
                        </ul>
                      </div>

                      {/* I and T Hub */}
                      <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-zinc-800">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-white font-bold text-lg uppercase font-display">I and T Hub</h4>
                            <p className="text-zinc-500 text-sm">Frontend Developer Intern and Team Lead</p>
                          </div>
                          <span className="text-xs font-mono text-zinc-600">SEPT 2023 — NOV 2023</span>
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
                          <li>Led a team of 5 to develop a website for Simhadri College using HTML, CSS, JS, and React.</li>
                          <li>Redesigned outdated web pages to be more interactive and dynamic.</li>
                          <li>Managed team deadlines and resolved technical bottlenecks.</li>
                          <li>Designed MySQL databases ensuring normalization and BCNF standards.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Skills Grid */}
                  <section>
                    <h3 className="font-display text-xs tracking-widest text-accent-blue font-bold uppercase mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-accent-blue"></span> Technical Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h5 className="text-[10px] uppercase font-bold text-zinc-600 mb-3 tracking-widest font-display">Languages</h5>
                        <p className="text-zinc-300 text-sm leading-relaxed">Python, Java, C++, C, HTML/CSS, Tailwind CSS, JavaScript, SQL, R Programming</p>
                      </div>
                      <div>
                        <h5 className="text-[10px] uppercase font-bold text-zinc-600 mb-3 tracking-widest font-display">Tools & Tech</h5>
                        <p className="text-zinc-300 text-sm leading-relaxed">SAP, Github, VS Code, Eclipse, Figma, Canva, ReactJS</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              {/* Resume Footer */}
              <div className="px-8 py-12 bg-zinc-900/10 border-t border-zinc-900 text-center">
                <p className="text-zinc-500 text-xs font-display uppercase tracking-[0.2em]">Generated via Digital Portfolio Terminal</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>    </div>
  );
}
