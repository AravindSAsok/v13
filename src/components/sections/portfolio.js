import React, { useEffect, useState } from 'react';
import { withPrefix } from 'gatsby';
import { email } from '@config';
import './portfolio.css';

const featuredProjects = [
  {
    title: 'EvidencePilot',
    category: 'AI research assistant',
    description: 'A research workspace that reads PDFs, retrieves supporting passages, and produces source-grounded answers with page citations. Includes claim review and retrieval evaluation workflows.',
    image: '/projects/evidence-pilot.png',
    year: '2026',
    tech: ['Python', 'Streamlit', 'Gemini', 'RAG'],
    repo: 'https://github.com/AravindSAsok/EvidencePilot',
    live: 'https://evidencepilot.streamlit.app/',
  },
  {
    title: 'ProfBot',
    category: 'Document intelligence',
    description: 'A document question-answering tool for extracting PDF text, finding relevant passages, and making research material easier to explore.',
    image: '/projects/profbot-ai.png',
    year: '2026',
    tech: ['Python', 'Streamlit', 'PDF', 'LLMs'],
    repo: 'https://github.com/AravindSAsok/ProfBot',
  },
  {
    title: 'Profdoc AI V2',
    category: 'Personal document assistant',
    description: 'A document chatbot that connects uploaded knowledge with Gemini-powered question answering and a Supabase-backed application workflow.',
    image: '/projects/pinkydocs-ai.png',
    year: '2026',
    tech: ['Python', 'Streamlit', 'Gemini', 'Supabase'],
    repo: 'https://github.com/AravindSAsok/profdoc_ai_v2',
    live: 'https://profdocai.streamlit.app/',
  },
  {
    title: 'PhD Research Chat',
    category: 'Research companion',
    description: 'A research chat application for asking questions across PDF, DOCX, and TXT documents, using Gemini to help surface relevant information.',
    image: '/projects/pnk-research-chat.png',
    year: '2026',
    tech: ['Python', 'Streamlit', 'Gemini', 'Document QA'],
    repo: 'https://github.com/AravindSAsok/phd-research-chat-mvp',
    live: 'https://phd-research-chat-mvp-puchki.streamlit.app/',
  },
  {
    title: 'Mini RAG',
    category: 'Retrieval-augmented generation',
    description: 'A compact RAG application that retrieves relevant context and uses an LLM to produce focused answers grounded in the source material.',
    image: '/projects/cookie-rag.png',
    year: '2026',
    tech: ['Python', 'RAG', 'Embeddings', 'LLMs'],
    repo: 'https://github.com/AravindSAsok/mini-rag',
    live: 'https://exo-rag.streamlit.app/',
  },
  {
    title: 'Hourly',
    category: 'Work-time tracker',
    description: 'A work-time tracker with punch and break records, daily and weekly totals, history, reports, and CSV exports. Breaks under 15 minutes remain paid; breaks of 15 minutes or longer are deducted in full.',
    image: '/projects/hourly.png',
    year: '2026',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    repo: 'https://github.com/AravindSAsok/hourly',
    live: 'https://hourly-psi.vercel.app/dashboard',
  },
];

const archiveProjects = [
  { title: 'DevFlow API', language: 'Python', year: '2026', description: 'Backend API project.', repo: 'devflow-api' },
  { title: 'Maplewood AI Front Desk', language: 'Python', year: '2026', description: 'An AI-powered front-desk application.', repo: 'maplewood-ai-front-desk' },
  { title: 'ACME Salary Management', language: 'JavaScript', year: '2026', description: 'Salary management with employee search, salary insights, and updates.', repo: 'acme-salary-management' },
  { title: 'YT Clone', language: 'JavaScript', year: '2023', description: 'A YouTube-inspired web application.', repo: 'ytclone' },
  { title: 'Todo App with Node', language: 'JavaScript', year: '2022', description: 'A task management app built with Node.js.', repo: 'todoappwithnode', live: 'https://todoappwithnode.vercel.app' },
  { title: 'ATextFile', language: 'JavaScript', year: '2022', description: 'A small text-file utility project.', repo: 'atextfile' },
  { title: 'Sequelize Association Migration and Seed', language: 'JavaScript', year: '2022', description: 'A practical Sequelize association, migration, and seed example.', repo: 'sequelize--association-migraton-and-seed' },
  { title: 'GitHub Slideshow', language: 'Ruby', year: '2020', description: 'A slideshow project built with Ruby.', repo: 'github-slideshow' },
  { title: 'LineSplit', language: 'JavaScript', year: '2026', description: 'A clipboard text splitter that turns long text into copy-ready chunks.', repo: 'LineSplit' },
  { title: 'Openfolio', language: 'TypeScript', year: '2026', description: 'A portfolio platform that builds a personal showcase from public GitHub repositories.', repo: 'openfolio' },
  { title: 'V13', language: 'JavaScript', year: '2026', description: 'This portfolio: Gatsby, React, and styled-components, deployed on GitHub Pages.', repo: 'v13' },
  { title: 'ClashCommand', language: 'TypeScript', year: '2026', description: 'A Clash of Clans companion for clans, wars, player performance, and CWL history.', repo: 'ClashCommand' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/AravindSAsok' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aravind-asok/' },
  { label: 'Email', href: 'mailto:aravindsasok@outlook.com' },
];

const SectionHeading = ({ number, title, note }) => (
  <div className="section-heading" data-reveal>
    <div className="section-heading-main">
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
    </div>
    {note ? <p>{note}</p> : null}
  </div>
);

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.add('portfolio-body');
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return () => body.classList.remove('portfolio-body');
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
    );

    nodes.forEach(node => observer.observe(node));
    return () => {
      observer.disconnect();
      body.classList.remove('portfolio-body');
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = event => {
    event.preventDefault();
    const formData = new window.FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const sender = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = 'Portfolio enquiry from ' + name;
    const body = 'Name: ' + name + '\nEmail: ' + sender + '\n\n' + message;
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  };

  return (
    <div className="portfolio" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Aravind S Asok, back to top">
          <span className="brand-symbol">A<span>.</span></span>
          <span className="brand-name">ARAVIND S ASOK</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} id="primary-navigation" aria-label="Primary navigation">
          <a href="#projects" onClick={closeMenu}><span>01</span> Projects</a>
          <a href="#archive" onClick={closeMenu}><span>02</span> Archive</a>
          <a href="#activity" onClick={closeMenu}><span>03</span> Activity</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-overline">
            <span className="status-dot" />
            <span>SOFTWARE ENGINEER / BACKEND + APPLIED AI</span>
            <span className="hero-location">PORTFOLIO · 2026</span>
          </div>

          <div className="hero-title-wrap">
            <h1 id="hero-title">
              <span>Aravind</span>
              <span className="hero-second-line">S Asok<span className="hero-period">.</span></span>
            </h1>
            <div className="hero-side-note">
              <span className="side-note-rule" />
              <p>Building reliable systems<br />and useful AI products.</p>
              <a href="#projects" aria-label="Scroll to selected projects">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-bottom">
            <p className="hero-intro">
              I’m a software engineer focused on the foundations of useful software — scalable APIs,
              dependable backend systems, and practical AI applications.
            </p>
            <div className="hero-facts">
              <div><strong>18</strong><span>PROJECTS</span></div>
              <div><strong>03</strong><span>CORE LANGUAGES</span></div>
              <div><strong>∞</strong><span>IDEAS TO BUILD</span></div>
            </div>
          </div>

          <div className="hero-stack" aria-label="Technology stack">
            <span>NODE.JS</span><span>NESTJS</span><span>TYPESCRIPT</span><span>PYTHON</span><span>POSTGRESQL</span><span>LLM / RAG</span>
          </div>
        </section>

        <section className="featured-section section-shell" id="projects">
          <SectionHeading number="01" title="Selected projects" note="A few things I’ve been building across backend engineering, document intelligence, and applied AI." />
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <article className="featured-card" data-reveal key={project.title} style={{ '--reveal-delay': String(index * 70) + 'ms' }}>
                <div className="card-visual">
                  <img
                    src={withPrefix(project.image)}
                    alt={project.title + ' project preview'}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    onError={event => { event.currentTarget.style.display = 'none'; }}
                  />
                  <span className="visual-index">0{index + 1} / 06</span>
                  <span className="visual-year">{project.year}</span>
                </div>
                <div className="card-content">
                  <div className="card-category">{project.category}</div>
                  <div className="card-title-row">
                    <h3>{project.title}</h3>
                    <span className="card-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p>{project.description}</p>
                  <ul className="tech-list">
                    {project.tech.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="card-links">
                    {project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer">SOURCE <span aria-hidden="true">↗</span></a> : null}
                    {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">LIVE PROJECT <span aria-hidden="true">↗</span></a> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="archive-section section-shell" id="archive">
          <SectionHeading number="02" title="More projects" note="Experiments, utilities, and products from across the years." />
          <div className="archive-topline">
            <span>PROJECT INDEX</span>
            <span>12 ENTRIES</span>
          </div>
          <ol className="archive-grid">
            {archiveProjects.map((project, index) => (
              <li data-reveal key={project.title} style={{ '--reveal-delay': String(index * 35) + 'ms' }}>
                <span className="archive-number">{String(index + 7).padStart(2, '0')}</span>
                <div className="archive-copy">
                  <a href={'https://github.com/AravindSAsok/' + project.repo} target="_blank" rel="noopener noreferrer">
                    <h3>{project.title}<span aria-hidden="true"> ↗</span></h3>
                  </a>
                  <p>{project.description}</p>
                  <div className="archive-meta"><span>{project.language}</span><span>{project.year}</span></div>
                </div>
                {project.live ? <a className="archive-live" href={project.live} target="_blank" rel="noopener noreferrer">LIVE ↗</a> : <span className="archive-github">GITHUB ↗</span>}
              </li>
            ))}
          </ol>
          <a className="all-projects-link" href="https://github.com/AravindSAsok?tab=repositories" target="_blank" rel="noopener noreferrer">
            Explore all repositories <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="activity-section section-shell" id="activity">
          <SectionHeading number="03" title="GitHub activity" note="A live view of my public contribution history." />
          <div className="activity-panel" data-reveal>
            <div className="activity-panel-head">
              <div><span className="activity-label">OPEN SOURCE / IN THE MAKING</span><h3>Small commits.<br />Steady progress.</h3></div>
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">VIEW GITHUB <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contribution-wrap">
              <img
                src="https://ghchart.rshah.org/AravindSAsok"
                alt="GitHub contribution graph for AravindSAsok"
                loading="lazy"
                onError={event => { event.currentTarget.style.display = 'none'; }}
              />
              <p>Contribution chart is provided from the public GitHub profile. Select “View GitHub” for the latest activity and repositories.</p>
            </div>
            <div className="activity-footer"><span>BUILDING IN PUBLIC</span><span>GITHUB.COM / ARAVINDSASOK</span></div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-copy" data-reveal>
            <span className="contact-kicker">HAVE A PROJECT IN MIND?</span>
            <h2>Let’s make<br /><em>something useful.</em></h2>
            <p>I’m open to conversations about backend engineering, AI-powered products, and interesting problems worth solving.</p>
            <a className="direct-email" href={'mailto:' + email}>{email} <span aria-hidden="true">↗</span></a>
            <div className="contact-socials">
              {socialLinks.map(link => <a href={link.href} key={link.label} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}>{link.label} <span aria-hidden="true">↗</span></a>)}
            </div>
          </div>
          <form className="contact-form" data-reveal onSubmit={handleContactSubmit}>
            <div className="form-heading"><span>01 — SAY HELLO</span><p>Tell me a little about what you’re working on.</p></div>
            <label htmlFor="contact-name">YOUR NAME</label>
            <input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" required />
            <label htmlFor="contact-email">EMAIL ADDRESS</label>
            <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label htmlFor="contact-message">MESSAGE</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="A little context about your idea..." required />
            <button type="submit">OPEN EMAIL DRAFT <span aria-hidden="true">↗</span></button>
            <p className="form-note">This static site opens your email app with the message ready to send. Nothing is stored here.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a href="#top" className="footer-wordmark">ARAVIND<br />S ASOK<span>.</span></a>
          <div className="footer-links">
            <a href="#projects">PROJECTS</a>
            <a href="#activity">ACTIVITY</a>
            <a href="#contact">CONTACT</a>
            <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 ARAVIND S ASOK</span><span>BUILT WITH CARE · GATSBY + REACT</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  );
};

export default Portfolio;
