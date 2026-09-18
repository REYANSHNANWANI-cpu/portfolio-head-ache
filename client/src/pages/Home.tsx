import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  category: string;
  accent: string;
  url: string;
};

const projects: Project[] = [
  { title: "SwapToys India", description: "A toy exchange marketplace with listings, profiles, and community messaging.", category: "Marketplace", accent: "#f7cfd3", url: "https://swaptoys-india-a794.arcada.app" },
  { title: "CalcCheck — Clear, Verified Math", description: "A focused learning tool that makes arithmetic verification simple and understandable.", category: "Education", accent: "#d7e8ff", url: "https://calc-check-dq24.arcada.app" },
  { title: "Web Scraper Agent — AI-Powered URL Summarizer", description: "A fast AI utility with freemium access, usage limits, and scrape history.", category: "AI / SaaS", accent: "#ddd7ff", url: "https://webscrapingbygroq.netlify.app" },
  { title: "Aakar Hardware Store", description: "A warm local-commerce experience with a product catalog, maps, and WhatsApp integration.", category: "Local Business", accent: "#f1dec3", url: "https://aakarhardware.vercel.app" },
  { title: "IronPulse Athletics — Engineered for Strength", description: "A high-energy digital home for a performance-led fitness brand.", category: "Fitness", accent: "#e8c9b9", url: "https://uw1nxp-ogfn2vr55-arcadawebapps9.vercel.app" },
  { title: "VOID ARCHIVE — Drop 004", description: "A cyberpunk streetwear drop experience built around scarcity and attitude.", category: "Fashion", accent: "#c8c4ff", url: "https://mluxml-5obafhse5-arcadawebapps2.vercel.app" },
  { title: "Aura Occasions — Bespoke Weddings & Corporate Events Atelier", description: "A premium atelier presence for extraordinary celebrations and gatherings.", category: "Events", accent: "#f0d7de", url: "https://rgnfxg-dfkth3zrn-arcedawebapps1.vercel.app" },
  { title: "The Rustic Table — Farm-to-Table Bistro & Coffee House", description: "A sensory hospitality site that brings the warmth of a neighborhood table online.", category: "Hospitality", accent: "#e0d1b9", url: "https://sni4kc-okafs4gqv-arcadawebapps8.vercel.app" },
  { title: "Meridian Realty Partners — Architectural Real Estate", description: "A considered property experience shaped around architectural distinction.", category: "Real Estate", accent: "#d2dde0", url: "https://3dsigx-2swjga82a-arcadawebapps5.vercel.app" },
  { title: "Nordic Living — Timeless Woodcraft for Modern Living", description: "A quiet commerce experience rooted in craft, material quality, and restraint.", category: "Furniture", accent: "#e5dccd", url: "https://7zwq5e-5180u70u0-arcadawebapps2.vercel.app" },
  { title: "Frame & Shutter — Visual Storyteller & Commercial Cinematographer", description: "A cinematic portfolio that gives every frame room to make an impression.", category: "Photography", accent: "#cfd6e9", url: "https://a4lcka-9xpfs2pgi-arcadawebapps9.vercel.app" },
  { title: "ExcelPoint Academic Academy & Private Tutoring", description: "A clear, credible learning platform for ambitious students and families.", category: "Education", accent: "#d3e6d5", url: "https://2knzzc-iyv41yh76-arcadawebapps9.vercel.app" },
];

const services = [
  ["01", "Strategy & direction", "Clarify the story, audience, and opportunities before a single screen is designed."],
  ["02", "Interface design", "Build a distinctive visual system that makes the right impression at every touchpoint."],
  ["03", "Full-stack development", "Turn the design into a fast, responsive, and dependable digital product."],
];

function ShaderField() {
  return (
    <div className="shader-field" aria-hidden="true">
      <div className="shader-core" />
      <div className="shader-glow shader-glow-one" />
      <div className="shader-glow shader-glow-two" />
    </div>
  );
}

function BrowserPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.45, 1], [16, 0, -10]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -1]);
  const y = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const smoothX = useSpring(rotateX, { stiffness: 80, damping: 18 });
  return (
    <div ref={ref} className="browser-stage">
      <motion.div className="browser-wrap" style={{ rotateX: smoothX, rotateZ, y }}>
        <div className="browser-card">
          <div className="browser-topbar"><span /><span /><span /><small>reyanshnanwani.in</small><b>↗</b></div>
          <div className="browser-body">
            <div className="browser-copy"><i>Digital products · built precisely</i><h3>Design that earns<br /><em>attention.</em></h3><button>Start your project <ArrowUpRight size={13} /></button></div>
            <div className="browser-orb" /><div className="browser-grid"><span /><span /><span /></div>
          </div>
        </div>
        <div className="float-tag tag-design"><span>◈</span> Purposeful<br /><b>UI/UX Design</b></div>
        <div className="float-tag tag-stack"><span>{"{}"}</span> Full-stack<br /><b>Engineering</b></div>
      </motion.div>
    </div>
  );
}

function InversionCircle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const circleScale = useTransform(scrollYProgress, [0.1, 0.48, 0.78], [0.1, 1, 5.4]);
  const textY = useTransform(scrollYProgress, [0.15, 0.55], [35, 0]);
  return (
    <section ref={ref} className="inversion-section" id="studio">
      <motion.div className="inversion-circle" style={{ scale: circleScale }} />
      <div className="inversion-content">
        <span className="eyebrow">A connected system</span>
        <motion.h2 style={{ y: textY }}>Design that moves.<br /><span>Business forward.</span></motion.h2>
        <p>One partner for the thinking, craft, and engineering behind a digital presence that holds up.</p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: Math.min(index % 3, 2) * 0.08 }}
    >
      <div className="project-art" style={{ backgroundColor: project.accent }}>
        <div className={`art-window art-window-${index % 4}`}><div className="art-toolbar"><span /><span /><span /></div><div className="art-layout"><b>{project.category}</b><strong>{String(index + 1).padStart(2, "0")}</strong><i /></div></div>
        <span className="art-corner">↗</span>
      </div>
      <div className="project-meta"><span>{project.category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="project-link">View live site <ArrowUpRight size={15} /></span>
    </motion.a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Reyansh Nanwani home"><span className="brand-mark">RN</span><span><b>Reyansh Nanwani</b><small>Web Designer & Developer</small></span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a><a className="nav-cta" href="mailto:reyanshnanwani1@gmail.com" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight size={14} /></a></nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(value => !value)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <main id="top">
        <section ref={heroRef} className="hero-section">
          <ShaderField />
          <motion.div className="hero-inner" style={{ y: heroY, opacity: heroOpacity }}>
            <div className="availability"><span /> Available for select projects</div>
            <div className="hero-grid">
              <div className="hero-copy">
                <h1><span>Web experiences</span><span>built to <em>move</em></span><span>business forward.</span></h1>
                <p>Strategy, design, and full-stack development for businesses that want a clear, credible, and high-performing digital presence.</p>
                <div className="hero-actions"><a className="button-dark" href="mailto:reyanshnanwani1@gmail.com">Tell me about your project <ArrowUpRight size={16} /></a><a className="text-link" href="#work">Explore selected work <ArrowDownRight size={16} /></a></div>
              </div>
              <BrowserPreview />
            </div>
            <div className="hero-stats"><div><b>12+</b><span>Projects delivered</span></div><div><b>08</b><span>Industries served</span></div><div><b>01</b><span>Focused partner</span></div></div>
          </motion.div>
        </section>

        <InversionCircle />

        <section id="work" className="work-section section-pad">
          <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2>A range of work.<br /><span>One clear standard.</span></h2></div><p>From local businesses to ambitious digital products, every project is designed around the people it needs to reach and the action it needs to earn.</p></div>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="section-heading services-heading"><div><span className="eyebrow">How I work</span><h2>Built as one<br /><span>connected system.</span></h2></div><p>Every engagement combines considered design, robust development, and a delivery process built around your business goals.</p></div>
          <div className="service-list">{services.map(([number, title, description]) => <div className="service-row" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight size={20} /></div>)}</div>
        </section>

      </main>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">RN</span><span><b>Reyansh Nanwani</b><small>Web Designer & Developer</small></span></a><div className="footer-actions"><a className="footer-contact footer-whatsapp" href="https://wa.me/919423028865" target="_blank" rel="noreferrer">Contact on WhatsApp <ArrowUpRight size={14} /></a><a className="footer-contact footer-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=reyanshnanwani1@gmail.com" target="_blank" rel="noreferrer">Contact on Gmail <ArrowUpRight size={14} /></a></div><div><span>© 2026 Reyansh Nanwani</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></footer>
    </div>
  );
}
