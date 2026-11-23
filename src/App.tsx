import { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  Code2,
  Linkedin,
  Phone,
  Layers,
  Smartphone,
  ShieldCheck,
  Gauge,
  Cloud,
  Database,
  Search,
  Server,
  Menu,
  X,
  CheckCircle2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiGithub,
  SiGit,
  SiBootstrap,
  SiTailwindcss,
  SiCloudflare,
  SiGooglemaps,
  SiPwa,
} from "react-icons/si";
import portraitImg from "@assets/mayuresh_portrait.jpg";
import {
  navLinks,
  heroMetrics,
  serviceOfferings,
  caseStudies,
  skillCategories,
  trackRecord,
  engagementModels,
  contactInfo,
  type ServiceOffering,
  type CaseStudy,
  type SkillItem,
  type TrackRecordEntry,
} from "@/data/portfolio";

const queryClient = new QueryClient();

function ServiceIcon({ icon }: { icon: ServiceOffering["icon"] }) {
  switch (icon) {
    case "layers":
      return <Layers className="w-5 h-5" />;
    case "smartphone":
      return <Smartphone className="w-5 h-5" />;
    case "shield":
      return <ShieldCheck className="w-5 h-5" />;
    case "gauge":
      return <Gauge className="w-5 h-5" />;
  }
}

function SkillIcon({ iconKey }: { iconKey: SkillItem["iconKey"] }) {
  switch (iconKey) {
    case "typescript":
      return <SiTypescript className="w-4 h-4" />;
    case "react":
    case "react-native":
      return <SiReact className="w-4 h-4" />;
    case "tailwind":
      return <SiTailwindcss className="w-4 h-4" />;
    case "pwa":
      return <SiPwa className="w-4 h-4" />;
    case "indexeddb":
      return <Database className="w-4 h-4" />;
    case "redux":
      return <SiRedux className="w-4 h-4" />;
    case "bootstrap":
      return <SiBootstrap className="w-4 h-4" />;
    case "node":
      return <SiNodedotjs className="w-4 h-4" />;
    case "express":
      return <SiExpress className="w-4 h-4" />;
    case "mongodb":
      return <SiMongodb className="w-4 h-4" />;
    case "api":
      return <Server className="w-4 h-4" />;
    case "aws":
      return <Cloud className="w-4 h-4" />;
    case "cloudflare":
      return <SiCloudflare className="w-4 h-4" />;
    case "firebase":
      return <SiFirebase className="w-4 h-4" />;
    case "maps":
      return <SiGooglemaps className="w-4 h-4" />;
    case "git":
      return <SiGit className="w-4 h-4" />;
    case "seo":
      return <Search className="w-4 h-4" />;
  }
}

function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "services",
        "work",
        "capabilities",
        "track-record",
        "about",
        "contact",
      ];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredStudy = caseStudies.find((c) => c.featured);
  const standardStudies = caseStudies.filter((c) => !c.featured);

  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary/30 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-primary font-mono"
            data-testid="link-home"
          >
            MK<span className="text-foreground">.dev</span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              data-testid="btn-nav-start-project"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            data-testid="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs md:text-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Full-Stack Engineering &amp; Consulting</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12] mb-6">
                  Architecting scalable web, mobile, and{" "}
                  <span className="text-primary relative inline-block">
                    offline-first products
                    <span className="absolute bottom-0 left-0 w-full h-[0.18em] bg-primary/20 -z-10" />
                  </span>{" "}
                  built for production
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  I'm <span className="text-foreground font-medium">Mayuresh Khole</span>, an
                  independent full-stack consultant helping founders and organizations design,
                  ship, and scale reliable software—from multi-tenant FinTech platforms and
                  resilient PWAs to 100+ API backends and AI data workflows.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/15"
                    data-testid="btn-start-project"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium bg-transparent text-foreground border border-border rounded-md hover:bg-secondary hover:border-primary/40 transition-colors"
                    data-testid="btn-explore-work"
                  >
                    Explore Case Studies
                  </a>
                </div>

                {/* Proof Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl md:text-2xl font-bold font-mono text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Portrait */}
            <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative group w-full max-w-[300px] md:max-w-[360px] aspect-[4/5]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-violet-500/20 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-500 opacity-75" />

                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-primary/20 bg-card shadow-2xl shadow-primary/10 group-hover:border-primary/40 transition-colors duration-500">
                  <img
                    src={portraitImg}
                    alt="Mayuresh Khole - Independent Full-Stack Consultant"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border/70 rounded-xl px-4 py-3">
                    <div className="text-sm font-semibold text-foreground">
                      Mayuresh Khole
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground font-mono mt-0.5">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary shrink-0" />
                      <span>Pune, India • Remote Consulting</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 01. Services */}
      <section id="services" className="py-20 px-6 bg-secondary/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-3 flex items-center">
                <span className="text-primary mr-2">01.</span> Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Practical, production-focused engineering engagements designed to help teams
                launch new products, modernize legacy systems, and ship faster without
                compromising architecture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {serviceOfferings.map((service) => (
                <div
                  key={service.id}
                  className="bg-card border border-border rounded-xl p-6 md:p-7 flex flex-col hover:border-primary/50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.summary}
                  </p>
                  <ul className="space-y-2.5 mt-auto pt-4 border-t border-border/50">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground/90 flex items-start"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2.5 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. Selected Client Work */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-3 flex items-center">
                <span className="text-primary mr-2">02.</span> Selected Client Work
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Real-world platforms, API ecosystems, and performance refactors delivered for
                FinTech, EdTech, NGO, and enterprise teams.
              </p>
            </div>

            {featuredStudy && <FeaturedCaseStudyCard study={featuredStudy} />}

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {standardStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. Capabilities & Tech Stack */}
      <section id="capabilities" className="py-20 px-6 bg-secondary/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-3 flex items-center">
                <span className="text-primary mr-2">03.</span> Technical Capabilities
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Battle-tested tools across web, mobile, offline synchronization, APIs, and
                cloud storage.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-foreground font-mono mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    {category.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <SkillBadge
                        key={item.name}
                        icon={<SkillIcon iconKey={item.iconKey} />}
                        name={item.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. Track Record */}
      <section id="track-record" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-3 flex items-center">
                <span className="text-primary mr-2">04.</span> Client Engagements &amp; Track Record
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Hands-on delivery across client consulting engagements and product engineering
                teams.
              </p>
            </div>

            <div className="space-y-10">
              {trackRecord.map((entry) => (
                <TrackRecordItem key={`${entry.organization}-${entry.duration}`} entry={entry} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 05. About & Approach */}
      <section id="about" className="py-20 px-6 bg-secondary/30 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-10 flex items-center">
              <span className="text-primary mr-2">05.</span> About &amp; Approach
            </h2>

            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I partner directly with founders, product leaders, and engineering teams to
                  turn ambiguous requirements into dependable software. Rather than handing off
                  brittle prototypes, I focus on resilient architecture—clean TypeScript
                  codebases, thoughtful data modeling, offline-ready UX, and measurable
                  performance gains.
                </p>
                <p>
                  Before specializing in full-stack software engineering, I spent nearly three
                  years designing and fabricating physical industrial systems—a foundation that
                  still shapes how I approach reliability, edge cases, and real-world
                  execution.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-3">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-primary mb-1.5">
                      Communication
                    </h3>
                    <p className="text-sm text-foreground">English, Hindi, Marathi</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-primary mb-1.5">
                      Beyond Code
                    </h3>
                    <p className="text-sm text-foreground">Coding &amp; Singing</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 space-y-5">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">
                      Engineering Foundation
                    </h3>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="text-primary font-medium text-sm">
                      Mechanical Design Engineer
                    </h4>
                    <p className="text-foreground text-sm mt-0.5">
                      Vardhishnu Tech Private Ltd
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      May 2019 – Feb 2022
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Led 3D prototyping, CAD design, fabrication, and on-site industrial
                      supervision.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 rounded-xl">
                  <div className="flex items-center gap-2.5 mb-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Education</h3>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="text-primary font-medium text-sm">
                      Bachelor of Engineering (Mechanical)
                    </h4>
                    <p className="text-foreground text-sm mt-0.5">
                      G. H. Raisoni College of Engineering, Pune
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      October 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 06. Start a Project */}
      <section id="contact" className="py-24 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-3 text-sm tracking-widest uppercase">
              06. Start a Project
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
              Have a product to build or scale?
            </h3>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Share your goals, architecture challenges, or product roadmap. I work with
              startups and businesses on scoped builds, consulting engagements, and technical
              overhauls.
            </p>

            {/* Engagement Models */}
            <div className="grid md:grid-cols-3 gap-4 text-left mb-12">
              {engagementModels.map((model) => (
                <div
                  key={model.title}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
                >
                  <h4 className="text-foreground font-semibold mb-2 text-sm">
                    {model.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Inquiry CTA */}
            <div className="mb-10">
              <a
                href={contactInfo.mailtoHref}
                className="inline-flex items-center justify-center h-13 px-8 font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/15"
                data-testid="btn-email-brief"
              >
                <Mail className="w-4 h-4 mr-2.5" />
                Send a Project Inquiry
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Direct Channels */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors border border-border/70 bg-card px-4 py-2.5 rounded-md hover:border-primary/50"
                data-testid="link-contact-email"
              >
                <Mail className="w-4 h-4 mr-2.5 text-primary/80" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.phoneHref}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors border border-border/70 bg-card px-4 py-2.5 rounded-md hover:border-primary/50"
                data-testid="link-contact-phone"
              >
                <Phone className="w-4 h-4 mr-2.5 text-primary/80" />
                <span>{contactInfo.phoneDisplay}</span>
              </a>
              <a
                href={contactInfo.linkedinHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors border border-border/70 bg-card px-4 py-2.5 rounded-md hover:border-primary/50"
                data-testid="link-contact-linkedin"
              >
                <Linkedin className="w-4 h-4 mr-2.5 text-primary/80" />
                <span>LinkedIn</span>
              </a>
              <a
                href={contactInfo.githubHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors border border-border/70 bg-card px-4 py-2.5 rounded-md hover:border-primary/50"
                data-testid="link-contact-github"
              >
                <SiGithub className="w-4 h-4 mr-2.5 text-primary/80" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="mt-8 inline-flex items-center text-xs font-mono text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" />
              <span>{contactInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-sm font-mono text-muted-foreground border-t border-border bg-secondary/20">
        <p>
          MK.dev — Full-Stack Engineering &amp; Consulting by Mayuresh Khole.
        </p>
      </footer>
    </div>
  );
}

function SkillBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center bg-background border border-border/60 rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all cursor-default shadow-sm group">
      <span className="mr-2 text-primary/75 group-hover:text-primary">{icon}</span>
      {name}
    </div>
  );
}

function TrackRecordItem({ entry }: { entry: TrackRecordEntry }) {
  return (
    <div className="relative pl-6 md:pl-0">
      <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
        <div className="hidden md:block col-span-1 text-sm font-mono text-muted-foreground">
          {entry.duration}
        </div>
        <div className="col-span-3 border-l-2 border-border pl-6 md:pl-8 pb-6 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2 border-4 border-background" />

          <div className="md:hidden text-xs font-mono text-muted-foreground mb-1.5">
            {entry.duration}
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-1">
            <h3 className="text-xl font-bold text-foreground">{entry.role}</h3>
            {entry.badge && (
              <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/25 px-2.5 py-0.5 rounded-full">
                {entry.badge}
              </span>
            )}
          </div>
          <h4 className="text-primary font-medium mb-4">{entry.organization}</h4>

          <ul className="space-y-3">
            {entry.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="text-muted-foreground text-sm flex items-start"
              >
                <span className="text-primary mr-2.5 mt-0.5">▹</span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FeaturedCaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-card border border-primary/35 rounded-2xl p-7 md:p-8 hover:border-primary/60 transition-all duration-300 shadow-lg shadow-primary/5">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 px-3 py-1 rounded-full">
            Featured Client Platform
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {study.client}
          </span>
        </div>

        {study.href && (
          <a
            href={study.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            data-testid={`link-case-study-${study.id}`}
          >
            <span>{study.linkLabel ?? "Visit Live"}</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </a>
        )}
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {study.title}
          </h3>
          <p className="text-sm font-mono text-primary mb-4">{study.impact}</p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {study.description}
          </p>
        </div>

        <div className="md:col-span-5 bg-background/60 border border-border/60 rounded-xl p-5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
            Architecture &amp; Outcomes
          </h4>
          <ul className="space-y-2.5">
            {study.highlights.map((item) => (
              <li key={item} className="text-sm text-foreground/90 flex items-start">
                <CheckCircle2 className="w-4 h-4 text-primary mr-2.5 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border/50">
        {study.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-primary/5">
      <div className="flex justify-between items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Code2 className="w-5 h-5" />
        </div>
        <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
          {study.impact}
        </span>
      </div>

      <div className="text-xs font-mono text-muted-foreground mb-1">
        {study.client}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {study.description}
      </p>

      <ul className="space-y-2 mb-6 flex-grow">
        {study.highlights.map((item) => (
          <li key={item} className="text-xs text-foreground/85 flex items-start">
            <span className="text-primary mr-2">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          {study.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-primary bg-primary/5 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        {study.href && (
          <a
            href={study.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-xs font-medium text-primary hover:underline"
          >
            {study.linkLabel ?? "Visit"}
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        )}
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
