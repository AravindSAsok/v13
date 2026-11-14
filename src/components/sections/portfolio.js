import React, { useEffect } from 'react';
import { withPrefix } from 'gatsby';
import { email } from '@config';
import './portfolio.css';

const featuredProjects = [
  {
    title: 'AravindSAsok',
    category: 'Personal portfolio',
    description: 'A Gatsby and React portfolio built with styled-components, bringing together selected engineering work, projects, and ways to connect.',
    image: '/og.png',
    year: '2026',
    tech: ['Gatsby', 'React', 'styled-components'],
    repo: 'https://github.com/AravindSAsok/AravindSAsok',
    live: 'https://aravindsasok.netlify.app/',
  },
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
  <div className="mni-sec-heading" data-reveal>
    <div className="mni-sec-title">
      <span className="mni-sec-number">{number}</span>
      <h2>{title}</h2>
    </div>
    {note ? <p>{note}</p> : null}
  </div>
);

const Portfolio = () => {
  useEffect(() => {
    const body = document.body;
    body.classList.add('portfolio-body');
    const nodes = document.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
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
      { threshold: 0.12, rootMargin: '0px 0px -28px 0px' },
    );

    nodes.forEach(node => observer.observe(node));
    return () => {
      observer.disconnect();
      body.classList.remove('portfolio-body');
    };
  }, []);

  const handleContactSubmit = event => {
    event.preventDefault();
    const formData = new window.FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const sender = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = 'Portfolio enquiry from ' + name;
    const body = 'Name: ' + name + '\nEmail: ' + sender + '\n\n' + message;
    window.location.href =
      'mailto:' +
      email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
  };

  return (
    <div className="portfolio mni-site" id="top">
      <a className="mni-skip-link" href="#main-content">Skip to content</a>

      <div className="mni-shell">
        <aside className="mni-sidebar" aria-label="Profile and page navigation">
          <div className="mni-plate">
            <a className="mni-identity" href="#top" aria-label="Aravind S Asok, back to top">
              <img
                className="mni-avatar"
                src="https://avatars.githubusercontent.com/u/69244672?v=4"
                alt=""
                width="44"
                height="44"
              />
              <span>
                <strong>Aravind S Asok</strong>
                <small>SOFTWARE ENGINEER</small>
              </span>
            </a>

            <p className="mni-bio">
              Building dependable backend systems and practical AI products. Interested in the
              engineering behind software that is genuinely useful.
            </p>

            <div className="mni-presence">
              <span className="mni-online-dot" />
              <span>OPEN TO INTERESTING WORK</span>
            </div>

            <div className="mni-sidebar-block">
              <span className="mni-label">CURRENT TOOLKIT</span>
              <div className="mni-stack">
                {['Node.js', 'NestJS', 'TypeScript', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'LLM / RAG'].map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="mni-sidebar-block mni-profile-links">
              <span className="mni-label">ELSEWHERE</span>
              {socialLinks.map(link => (
                <a href={link.href} key={link.label} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}>
                  {link.label}<span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <nav className="mni-index" aria-label="Page index">
              <span className="mni-label">ON THIS PAGE</span>
              <a href="#projects"><span>01</span> Selected work</a>
              <a href="#archive"><span>02</span> Project archive</a>
              <a href="#activity"><span>03</span> Activity</a>
              <a href="#contact"><span>04</span> Contact</a>
            </nav>
          </div>

          <div className="mni-sidebar-foot">
            <span>THIRUVANANTHAPURAM, INDIA</span>
            <span>© 2026</span>
          </div>
        </aside>

        <main className="mni-main" id="main-content">
          <div className="mni-topbar">
            <span><i className="mni-live-indicator" /> INDEPENDENTLY BUILDING</span>
            <span>PERSONAL PORTFOLIO <b> / </b> 2026</span>
          </div>

          <section className="mni-hero" aria-labelledby="hero-title">
            <div className="mni-hero-kicker"><span>HELLO, I’M</span><span>01 / 04 — INTRODUCTION</span></div>
            <h1 id="hero-title">
              <span>Aravind</span>
              <span>S Asok<span className="mni-orange">.</span></span>
            </h1>
            <p className="mni-hero-copy">
              Software engineer focused on <strong>backend engineering</strong>, scalable APIs,
              and <strong>applied AI</strong>. I turn ideas into reliable products — from the
              database layer to the interface people use.
            </p>
            <div className="mni-hero-bottom">
              <a className="mni-primary-link" href="#projects">EXPLORE SELECTED WORK <span aria-hidden="true">↓</span></a>
              <div className="mni-hero-meta"><span>BACKEND / AI / BUILDING</span><span>KERALA, INDIA</span></div>
            </div>
          </section>

          <section className="mni-section" id="projects">
            <SectionHeading
              number="01"
              title="Selected work"
              note="A selection of products, experiments, and engineering work across backend systems and applied AI."
            />
            <div className="mni-grid">
              {featuredProjects.map((project, index) => (
                <article className="mni-project" data-reveal key={project.title} style={{ '--reveal-delay': String(index * 55) + 'ms' }}>
                  <a
                    className="mni-project-image"
                    href={project.live || project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={'Open ' + project.title}>
                    <img
                      src={withPrefix(project.image)}
                      alt={project.title + ' project preview'}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      onError={event => { event.currentTarget.style.display = 'none'; }}
                    />
                    <span className="mni-image-index">0{index + 1} / 06</span>
                    <span className="mni-image-arrow" aria-hidden="true">↗</span>
                  </a>

                  <div className="mni-project-content">
                    <div className="mni-project-meta"><span>{project.category}</span><span>{project.year}</span></div>
                    <h3><a href={project.live || project.repo} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                    <p>{project.description}</p>
                    <ul className="mni-tech-list">
                      {project.tech.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="mni-project-links">
                      {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">LIVE <span aria-hidden="true">↗</span></a> : null}
                      {project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer">SOURCE <span aria-hidden="true">↗</span></a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mni-section mni-archive-section" id="archive">
            <SectionHeading
              number="02"
              title="Project archive"
              note="A longer index of experiments, utilities, client-style builds, and products from across the years."
            />
            <div className="mni-archive-head"><span>INDEX / 07—18</span><span>12 PROJECTS</span></div>
            <ol className="mni-archive">
              {archiveProjects.map((project, index) => (
                <li data-reveal key={project.title} style={{ '--reveal-delay': String(index * 24) + 'ms' }}>
                  <span className="mni-archive-no">{String(index + 7).padStart(2, '0')}</span>
                  <div className="mni-archive-copy">
                    <a href={'https://github.com/AravindSAsok/' + project.repo} target="_blank" rel="noopener noreferrer">
                      <h3>{project.title}<span aria-hidden="true"> ↗</span></h3>
                    </a>
                    <p>{project.description}</p>
                  </div>
                  <span className="mni-archive-language">{project.language}</span>
                  <span className="mni-archive-year">{project.year}</span>
                  {project.live ? (
                    <a className="mni-archive-live" href={project.live} target="_blank" rel="noopener noreferrer">LIVE ↗</a>
                  ) : (
                    <a className="mni-archive-live" href={'https://github.com/AravindSAsok/' + project.repo} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
                  )}
                </li>
              ))}
            </ol>
            <a className="mni-all-repos" href="https://github.com/AravindSAsok?tab=repositories" target="_blank" rel="noopener noreferrer">
              EXPLORE ALL REPOSITORIES <span aria-hidden="true">↗</span>
            </a>
          </section>

          <section className="mni-section mni-activity-section" id="activity">
            <SectionHeading
              number="03"
              title="Building in public"
              note="A live view of my public GitHub contribution history."
            />
            <div className="mni-activity" data-reveal>
              <div className="mni-activity-top">
                <div>
                  <span className="mni-label">OPEN SOURCE / IN THE MAKING</span>
                  <h3>Small commits.<br />Steady progress.</h3>
                </div>
                <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">VIEW GITHUB <span aria-hidden="true">↗</span></a>
              </div>
              <div className="mni-contribution">
                <img
                  src="https://ghchart.rshah.org/AravindSAsok"
                  alt="GitHub contribution graph for AravindSAsok"
                  loading="lazy"
                  onError={event => { event.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="mni-activity-foot"><span>PUBLIC CONTRIBUTIONS</span><span>GITHUB.COM / ARAVINDSASOK</span></div>
            </div>
          </section>

          <section className="mni-section mni-contact-section" id="contact">
            <SectionHeading
              number="04"
              title="Write a message"
              note="Have a project, technical idea, or opportunity to discuss? Send a note."
            />
            <div className="mni-contact-grid">
              <div className="mni-contact-copy" data-reveal>
                <h3>Let’s build<br /><span>something useful.</span></h3>
                <p>I’m always glad to connect with people solving interesting problems in software, backend engineering, and applied AI.</p>
                <a href={'mailto:' + email}>{email}<span aria-hidden="true"> ↗</span></a>
              </div>
              <form className="mni-contact-form" data-reveal onSubmit={handleContactSubmit}>
                <label htmlFor="contact-name">YOUR NAME</label>
                <input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" required />
                <label htmlFor="contact-email">EMAIL ADDRESS</label>
                <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                <label htmlFor="contact-message">MESSAGE</label>
                <textarea id="contact-message" name="message" rows="4" placeholder="What would you like to talk about?" required />
                <button type="submit">OPEN EMAIL DRAFT <span aria-hidden="true">↗</span></button>
                <p className="mni-form-note">This site opens your email app with the message ready to send. Nothing is stored here.</p>
              </form>
            </div>
          </section>

          <footer className="mni-footer">
            <div><strong>ARAVIND S ASOK<span>.</span></strong><span>SOFTWARE ENGINEER / BACKEND + APPLIED AI</span></div>
            <div className="mni-footer-links">
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
              <a href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
              <a href="#top">BACK TO TOP ↑</a>
            </div>
            <small>© 2026 ARAVIND S ASOK · BUILT WITH GATSBY + REACT</small>
          </footer>
        </main>
      </div>

      <a className="mni-float-contact" href={'mailto:' + email} aria-label="Email Aravind">↗</a>
    </div>
  );
};

export default Portfolio;
