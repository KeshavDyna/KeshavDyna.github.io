import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Command,
  Github,
  Mail,
  Menu,
  Palette,
  Terminal,
  X,
} from 'lucide-react';

const GITHUB = 'https://github.com/KeshavDyna';
const EMAIL = 'purikeshav2@gmail.com';

const projects = [
  {
    number: '01',
    name: 'Hyprland Dotfiles',
    category: 'SYSTEMS / LINUX',
    description:
      'A personal Arch Linux environment built around Hyprland, Lua, and a keyboard-first workflow. Fine-tuned for focus, speed, and a little visual character.',
    stack: ['Arch Linux', 'Hyprland', 'Lua', 'Waybar'],
    href: 'https://github.com/KeshavDyna/HyprlandDotfiles',
    kind: 'terminal',
  },
  {
    number: '02',
    name: 'NVIDIA Color Fix',
    category: 'GUIDE / DISPLAY',
    description:
      'A practical troubleshooting guide for washed-out display colors, covering RGB output format, full dynamic range, and desktop color settings.',
    stack: ['NVIDIA', 'Windows', 'Display', 'Documentation'],
    href: 'https://github.com/KeshavDyna/nvidia-color-saturation-fix',
    kind: 'display',
  },
];

const interests = [
  {
    icon: Code2,
    title: 'Software & interfaces',
    copy: 'Exploring how thoughtful code can turn an idea into a useful, intuitive experience.',
    index: '01',
  },
  {
    icon: Terminal,
    title: 'Linux & systems',
    copy: 'Custom environments, keyboard-driven workflows, open source tools, and the details under the hood.',
    index: '02',
  },
  {
    icon: Palette,
    title: 'Creative work',
    copy: 'Graphic design, video editing, and the visual decisions that give digital work its personality.',
    index: '03',
  },
];

const toolkit = [
  'JavaScript', 'React', 'Three.js', 'Python', 'Rust', 'Go',
  'Docker', 'Git', 'Arch Linux', 'Hyprland', 'Neovim', 'Figma',
];

function SectionLabel({ children, number }) {
  return (
    <div className="section-label">
      <span className="section-label__number">{number}</span>
      <span>{children}</span>
      <span className="section-label__line" />
    </div>
  );
}

function ProjectVisual({ kind }) {
  if (kind === 'terminal') {
    return (
      <div className="terminal-visual" aria-hidden="true">
        <div className="terminal-visual__top">
          <span className="terminal-dots"><i /><i /><i /></span>
          <span>keshav@arch — hyprland.lua</span>
          <span className="terminal-visual__lock">⌘</span>
        </div>
        <div className="terminal-visual__body">
          <p><span className="terminal-muted">01</span> <span className="terminal-green">local</span> desktop = {'{'}</p>
          <p><span className="terminal-muted">02</span> &nbsp; compositor = <span className="terminal-blue">"Hyprland"</span>,</p>
          <p><span className="terminal-muted">03</span> &nbsp; config = <span className="terminal-blue">"Lua"</span>,</p>
          <p><span className="terminal-muted">04</span> &nbsp; workflow = <span className="terminal-blue">"keyboard-first"</span>,</p>
          <p><span className="terminal-muted">05</span> {'}'}</p>
          <div className="terminal-prompt"><span>➜</span> <b>~/dotfiles</b><i className="terminal-caret" /></div>
        </div>
        <div className="terminal-visual__footer"><span>WAYLAND SESSION</span><span className="live-dot" /> <span>RUNNING LOCALLY</span></div>
      </div>
    );
  }

  return (
    <div className="display-visual" aria-hidden="true">
      <div className="display-visual__frame">
        <div className="display-visual__top"><span>DISPLAY / OUTPUT</span><span>01 — 03</span></div>
        <div className="display-visual__screen">
          <div className="color-orbit color-orbit--one" />
          <div className="color-orbit color-orbit--two" />
          <div className="color-orbit color-orbit--three" />
          <div className="display-visual__cross">+</div>
        </div>
        <div className="display-visual__settings">
          <span><i /> RGB OUTPUT</span>
          <span className="setting-value">FULL RANGE <b>✓</b></span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient--top" />
      <div className="ambient ambient--bottom" />

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Keshav Puri home">
          <span className="brand__mark">K<span>.</span></span>
          <span className="brand__name">KESHAV PURI</span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero__copy">
            <div className="eyebrow"><span className="eyebrow__pulse" /> DEVELOPER <span className="eyebrow__slash">/</span> CREATIVE <span className="eyebrow__slash">/</span> LINUX ENTHUSIAST</div>
            <h1>Making ideas<br />feel <span className="text-gradient">alive<span className="hero-period">.</span></span></h1>
            <p className="hero__description">
              Hey, I'm <strong>Keshav</strong> — a programmer and creative at heart.
              I enjoy building useful things, shaping digital experiences, and making my workspace feel like my own.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button--quiet" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a>
            </div>
            <div className="hero__meta">
              <span><span className="meta-dot" /> BASED IN INDIA</span>
              <span className="meta-divider" />
              <span>ALWAYS LEARNING, ALWAYS BUILDING</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract orbital illustration">
            <div className="hero-art__grid" />
            <div className="hero-art__halo hero-art__halo--outer" />
            <div className="hero-art__halo hero-art__halo--middle" />
            <div className="hero-art__halo hero-art__halo--inner" />
            <div className="hero-art__core"><span>K</span><i /></div>
            <div className="hero-art__orbit-dot hero-art__orbit-dot--one" />
            <div className="hero-art__orbit-dot hero-art__orbit-dot--two" />
            <div className="hero-art__orbit-dot hero-art__orbit-dot--three" />
            <div className="hero-art__caption hero-art__caption--top"><span>FIG. 001</span><span>CREATIVE SYSTEM</span></div>
            <div className="hero-art__caption hero-art__caption--bottom"><span>CODE</span><span className="caption-cross">✳</span><span>CREATE</span><span className="caption-cross">✳</span><span>REPEAT</span></div>
            <div className="hero-art__coordinate">30°41' N&nbsp; 76°51' E</div>
          </div>

          <a href="#work" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionLabel number="01">SELECTED WORK</SectionLabel>
          <div className="section-heading-row">
            <h2>A few things<br className="mobile-break" /> I've put into the world<span className="accent-dot">.</span></h2>
            <p>Small projects, practical fixes, and experiments driven by curiosity.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card project-card--${project.kind}`} key={project.number}>
                <div className="project-card__visual"><ProjectVisual kind={project.kind} /></div>
                <div className="project-card__content">
                  <div className="project-card__topline"><span>{project.number} / FEATURED PROJECT</span><span>{project.category}</span></div>
                  <div className="project-card__title-row">
                    <h3>{project.name}</h3>
                    <a className="round-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={19} /></a>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <a className="all-projects-link" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">Browse all repositories <ArrowRight size={16} /></a>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-layout">
            <div className="about-intro">
              <h2>Curiosity is<br />my <span className="text-gradient">operating system.</span></h2>
              <p>
                I'm interested in the space where technology and creativity meet. One day that might mean writing code; the next, refining a Linux setup, editing a video, or exploring a new design idea.
              </p>
              <p className="about-note">I like understanding how things work — then finding a better, more personal way to make them work.</p>
              <a href={GITHUB} className="text-link" target="_blank" rel="noreferrer">A little more about what I build <ArrowUpRight size={16} /></a>
            </div>
            <div className="interest-list">
              {interests.map(({ icon: Icon, title, copy, index }) => (
                <div className="interest-item" key={index}>
                  <div className="interest-item__icon"><Icon size={20} strokeWidth={1.7} /></div>
                  <div className="interest-item__body"><span className="interest-item__index">{index}</span><h3>{title}</h3><p>{copy}</p></div>
                  <ArrowUpRight className="interest-item__arrow" size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="toolkit-section section-wrap" id="toolkit">
          <SectionLabel number="03">TOOLS & INTERESTS</SectionLabel>
          <div className="toolkit-layout">
            <div>
              <h2>Things I like<br />to <span className="text-gradient">work with.</span></h2>
              <p className="toolkit-intro">A rotating set of tools and technologies I'm learning, using, or experimenting with.</p>
            </div>
            <div className="toolkit-panel">
              <div className="toolkit-panel__top"><span><Command size={14} /> PERSONAL TOOLKIT</span><span>12 ITEMS</span></div>
              <div className="toolkit-chips">{toolkit.map((item, index) => <span className="tool-chip" key={item}><i>{String(index + 1).padStart(2, '0')}</i>{item}</span>)}</div>
              <div className="toolkit-panel__bottom"><span>ALWAYS IN PROGRESS</span><span className="toolkit-status"><i /> LEARNING MODE</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-card__orb" />
            <div className="contact-card__content">
              <SectionLabel number="04">GET IN TOUCH</SectionLabel>
              <p className="contact-kicker">HAVE AN IDEA? A PROJECT? JUST SAY HI.</p>
              <h2>Let's make<br />something <span className="text-gradient">meaningful.</span></h2>
              <a className="button button--primary" href={`mailto:${EMAIL}`}>Start a conversation <Mail size={17} /></a>
            </div>
            <div className="contact-card__side"><span>NO BIG INTRO NEEDED.</span><span className="contact-card__asterisk">✳</span><span>JUST GOOD IDEAS<br />AND GOOD PEOPLE.</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand brand--footer" href="#home"><span className="brand__mark">K<span>.</span></span><span className="brand__name">KESHAV PURI</span></a>
        <span className="footer-copy">DESIGNED WITH INTENTION. BUILT WITH CURIOSITY. © {new Date().getFullYear()}</span>
        <div className="footer-links"><a href={GITHUB} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a><a href={`mailto:${EMAIL}`}>EMAIL <ArrowUpRight size={13} /></a></div>
      </footer>
    </div>
  );
}

export default App;
