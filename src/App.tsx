import { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, ExternalLink, Code2, Linkedin } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiNextdotjs, SiRedux, SiFirebase, SiGithub, SiBootstrap, SiTailwindcss, SiJavascript, SiHtml5 } from "react-icons/si";

const queryClient = new QueryClient();

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "contact"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary/30 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-primary font-mono" data-testid="link-home">
            MK<span className="text-foreground">.dev</span>
          </a>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5 ${
                  activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 text-primary font-mono text-sm mb-6">
              <Code2 className="w-4 h-4" />
              <span>Full-Stack MERN Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
              Building robust, scalable full-stack applications that <span className="text-primary relative inline-block">
                drive business logic
                <span className="absolute bottom-0 left-0 w-full h-[0.2em] bg-primary/20 -z-10"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              I'm Mayuresh Khole, a Full-Stack MERN Developer with 3+ years of experience architecting scalable web applications, enterprise portals, and AI-driven data pipelines. I specialize in React, Node.js, TypeScript, and MongoDB.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                data-testid="btn-view-work"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center h-12 px-6 font-medium bg-transparent text-foreground border border-border rounded-md hover:bg-secondary transition-colors"
                data-testid="btn-contact"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground font-mono">
              <MapPin className="w-4 h-4 mr-2" />
              Maan, Pune, India
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-mono text-foreground mb-8 flex items-center">
              <span className="text-primary mr-2">01.</span> About & Education
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated engineer who bridges the gap between intricate backend architectures and intuitive frontend experiences. I thrive on solving complex business problems through clean, intentional code.
                </p>
                <div>
                  <h3 className="text-foreground font-medium mb-2">Interests</h3>
                  <p>Full-Stack Architecture, Open Source, Coding Challenges, Singing</p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">Languages</h3>
                  <p>English, Hindi, Marathi</p>
                </div>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
                <div className="border-l-2 border-primary/30 pl-4 py-1">
                  <h4 className="text-primary font-medium">B.E. Mechanical Engineering</h4>
                  <p className="text-foreground mt-1">G.H. Raisoni College of Engineering, Pune</p>
                  <p className="text-sm text-muted-foreground mt-1 font-mono">2020 • 62.06%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-mono text-foreground mb-12 flex items-center">
              <span className="text-primary mr-2">02.</span> Core Technical Stack
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {/* Frontend */}
              <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-6 font-mono">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge icon={<SiReact />} name="ReactJS" />
                  <SkillBadge icon={<SiReact />} name="React Native" />
                  <SkillBadge icon={<SiTypescript />} name="TypeScript" />
                  <SkillBadge icon={<SiJavascript />} name="JavaScript" />
                  <SkillBadge icon={<SiRedux />} name="Redux" />
                  <SkillBadge icon={<Code2 />} name="Context API" />
                  <SkillBadge icon={<SiHtml5 />} name="HTML5" />
                  <SkillBadge icon={<Code2 className="w-4 h-4" />} name="CSS3" />
                  <SkillBadge icon={<SiBootstrap />} name="Bootstrap" />
                  <SkillBadge icon={<SiTailwindcss />} name="Tailwind CSS" />
                </div>
              </div>

              {/* Backend & Cloud */}
              <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-6 font-mono">Backend & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge icon={<SiNodedotjs />} name="NodeJS" />
                  <SkillBadge icon={<SiNodedotjs />} name="ExpressJS" />
                  <SkillBadge icon={<SiMongodb />} name="MongoDB" />
                  <SkillBadge icon={<SiFirebase />} name="Firebase" />
                  <SkillBadge icon={<Code2 />} name="RESTful APIs" />
                </div>
              </div>

              {/* Tools & Optimization */}
              <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-6 font-mono">Tools & Optimization</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge icon={<SiNextdotjs />} name="Next.js" />
                  <SkillBadge icon={<SiGithub />} name="Git/GitHub" />
                  <SkillBadge icon={<Code2 />} name="SEO (Helmet)" />
                  <SkillBadge icon={<Code2 />} name="XML Sitemaps" />
                  <SkillBadge icon={<Code2 />} name="Code Splitting" />
                  <SkillBadge icon={<Code2 />} name="Performance Tuning" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-mono text-foreground mb-12 flex items-center">
              <span className="text-primary mr-2">03.</span> Professional Experience
            </h2>
            
            <div className="space-y-12">
              <ExperienceItem 
                company="VOPA Technology"
                role="Junior Software Developer"
                duration="May 2025 – Present"
                bullets={[
                  "Engineered core frontend for an AI-driven Foundational Literacy & Numeracy (FLN) platform used by educators and government officials for state-level data verification.",
                  "Built interactive AI-driven data annotation pipeline in React, accelerating ML training data cycles.",
                  "Spearheaded full-stack migration of NGO platform: architected 100+ RESTful APIs in Node.js/MongoDB, redesigned UX into a high-converting \"Hero-to-CTA\" framework."
                ]}
              />
              <ExperienceItem 
                company="Stemmone Cloudworks Pvt Ltd"
                role="Software Developer"
                duration="Jan 2024 – Feb 2025"
                bullets={[
                  "Architected responsive web/mobile apps using React.js, TypeScript, and Firebase.",
                  "Delivered enterprise features: HR & Payroll automation, subscription/payment gateways, role-managed admin portals.",
                  "Boosted organic traffic 25% via React Helmet + structured XML sitemaps and SEO optimization."
                ]}
              />
              <ExperienceItem 
                company="Human Cloud Private Ltd"
                role="Software Developer Intern"
                duration="Mar 2023 – Sep 2023"
                bullets={[
                  "Collaborated on cross-platform web/mobile apps using React.js, React Native, Redux, Bootstrap.",
                  "Refactored \"Property Nexus\" codebase with code-splitting to improve app speed 40%.",
                  "Engineered UI features for \"Fluent Pet\" platform, enhancing user engagement."
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-mono text-foreground mb-12 flex items-center">
              <span className="text-primary mr-2">04.</span> Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard 
                title="Nipun — AI-Powered FLN Assessment"
                description="A state-level foundational literacy & numeracy testing platform for educators and government officials. Built multi-role user workflows and AI-driven data annotation pipelines."
                tech={["React", "Node.js", "MongoDB", "AI/ML"]}
              />
              <ProjectCard 
                title="NGO Full-Stack Platform"
                description="Ground-up full-stack platform migration with 100+ custom RESTful APIs, UX redesign into a Hero-to-CTA flow, and heavy-media optimization for 400+ assets without compromising web vitals."
                tech={["React", "Node.js", "MongoDB", "REST APIs"]}
              />
              <ProjectCard 
                title="Property Nexus"
                description="Cross-platform property management app — refactored codebase with code-splitting, improving performance by 40% and significantly improving responsiveness."
                tech={["React.js", "React Native", "Redux", "Bootstrap"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-secondary/30 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-4 text-sm tracking-widest uppercase">05. What's Next?</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Available for Contract Roles & Remote MERN Gigs
            </h3>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
              Bug fixes, API integrations, full-stack builds — let's talk. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:mbkhole@gmail.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors border border-border/50 bg-background px-4 py-3 rounded-md hover:border-primary/50"
                data-testid="link-contact-email"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span>mbkhole@gmail.com</span>
              </a>
              <a 
                href="https://github.com/Mayureshkhole" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors border border-border/50 bg-background px-4 py-3 rounded-md hover:border-primary/50"
                data-testid="link-contact-github"
              >
                <SiGithub className="w-5 h-5 mr-3" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/mayuresh-khole" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors border border-border/50 bg-background px-4 py-3 rounded-md hover:border-primary/50"
                data-testid="link-contact-linkedin"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm font-mono text-muted-foreground border-t border-border bg-background">
        <p>Built with React & Tailwind CSS. Designed by Mayuresh Khole.</p>
      </footer>
    </div>
  );
}

function SkillBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center bg-background border border-border/50 rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default shadow-sm group">
      <span className="mr-2 text-primary/70 group-hover:text-primary">{icon}</span>
      {name}
    </div>
  );
}

function ExperienceItem({ company, role, duration, bullets }: { company: string, role: string, duration: string, bullets: string[] }) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
        <div className="hidden md:block col-span-1 text-sm font-mono text-muted-foreground">
          {duration}
        </div>
        <div className="col-span-3 border-l-2 border-border md:pl-8 pb-8 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2 border-4 border-background"></div>
          
          <div className="md:hidden text-sm font-mono text-muted-foreground mb-2">
            {duration}
          </div>
          
          <h3 className="text-xl font-bold text-foreground">{role}</h3>
          <h4 className="text-primary font-medium mb-4">{company}</h4>
          
          <ul className="space-y-3">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="text-muted-foreground text-sm flex items-start">
                <span className="text-primary mr-2 mt-1">▹</span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech }: { title: string, description: string, tech: string[] }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-primary/5">
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center">
          <Code2 className="w-5 h-5" />
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
        {tech.map((t, idx) => (
          <span key={idx} className="text-xs font-mono text-primary bg-primary/5 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
