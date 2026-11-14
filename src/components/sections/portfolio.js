import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import ScrollReveal from 'scrollreveal';
import Lenis from 'lenis';
import { email } from '@config';
import './portfolio.css';

const featuredProjects = [
  {
    title: 'EvidencePilot',
    lead: 'Research grounded in evidence.',
    summary: 'Explore PDFs, retrieve relevant passages, ask source-grounded questions, inspect citations, and audit claims against the evidence.',
    language: 'Python · Streamlit',
    repoName: 'AravindSAsok/EvidencePilot',
    repo: 'https://github.com/AravindSAsok/EvidencePilot',
    live: 'https://evidencepilot.streamlit.app/',
  },
  {
    title: 'Openfolio',
    lead: 'Your work, in focus.',
    summary: 'An open-source developer portfolio platform that imports public GitHub work, lets people choose what to publish, and creates shareable portfolio pages.',
    language: 'TypeScript · React',
    repoName: 'AravindSAsok/openfolio',
    repo: 'https://github.com/AravindSAsok/openfolio',
  },
  {
    title: 'ProfBot',
    lead: 'A focused assistant for your documents.',
    summary: 'A Python CLI and Streamlit document Q&A app with PDF and text extraction, passage retrieval, and Gemini answers grounded in selected documents.',
    language: 'Python · Streamlit',
    repoName: 'AravindSAsok/ProfBot',
    repo: 'https://github.com/AravindSAsok/ProfBot',
  },
  {
    title: 'PhD Research Chat',
    lead: 'Research conversations, backed by your sources.',
    summary: 'A Streamlit application for asking questions across uploaded PDF, DOCX, and TXT research documents, with retrieved excerpts and source references.',
    language: 'Python · Streamlit',
    repoName: 'AravindSAsok/phd-research-chat-mvp',
    repo: 'https://github.com/AravindSAsok/phd-research-chat-mvp',
    live: 'https://phd-research-chat-mvp-puchki.streamlit.app/',
  },
  {
    title: 'Mini RAG',
    lead: 'A practical look at retrieval-augmented generation.',
    summary: 'A beginner-friendly retrieval demo that chunks a knowledge base, creates embeddings, and returns semantically similar passages. The current app demonstrates retrieval rather than LLM answer generation.',
    language: 'Python · Streamlit',
    repoName: 'AravindSAsok/mini-rag',
    repo: 'https://github.com/AravindSAsok/mini-rag',
    live: 'https://exo-rag.streamlit.app/',
  },
  {
    title: 'LineSplit',
    lead: 'Long text, split into manageable pieces.',
    summary: 'A lightweight browser tool and Chrome extension for splitting clipboard text into copy-ready chunks while preserving line order and blank lines. Processing stays in the browser.',
    language: 'JavaScript',
    repoName: 'AravindSAsok/LineSplit',
    repo: 'https://github.com/AravindSAsok/LineSplit',
    live: 'https://aravindsasok.github.io/LineSplit/',
  },
];

const archiveProjects = [
  { title: 'ProfDoc AI V2', language: 'Python', year: '2026', description: 'Document question-answering app with a Python CLI and Streamlit interface.', repo: 'profdoc_ai_v2', live: 'https://profdocai.streamlit.app/' },
  { title: 'DevFlow API', language: 'Python', year: '2026', description: 'A Python API backend project.', repo: 'devflow-api' },
  { title: 'Maplewood AI Front Desk', language: 'Python', year: '2026', description: 'An AI-powered front-desk application.', repo: 'maplewood-ai-front-desk' },
  { title: 'ACME Salary Management', language: 'JavaScript', year: '2026', description: 'A salary-management application built with React.', repo: 'acme-salary-management' },
  { title: 'YTClone', language: 'JavaScript', year: '2023', description: 'A YouTube-inspired web application.', repo: 'ytclone' },
  { title: 'Todoappwithnode', language: 'JavaScript', year: '2022', description: 'A task-management app built with Node.js.', repo: 'todoappwithnode', live: 'https://todoappwithnode.vercel.app' },
  { title: 'ATextFile', language: 'JavaScript', year: '2022', description: 'A small text-file utility project.', repo: 'atextfile' },
  { title: 'Sequelize Association Migration and Seed', language: 'JavaScript', year: '2022', description: 'A Sequelize association, migration, and seed example.', repo: 'sequelize--association-migraton-and-seed' },
  { title: 'V13', language: 'JavaScript', year: '2026', description: 'Personal portfolio built with Gatsby and React.', repo: 'v13', live: 'https://aravindsasok.github.io/v13/' },
  { title: 'ClashCommand', language: 'TypeScript', year: '2026', description: 'A Next.js companion for clan management, wars, player performance, and CWL history.', repo: 'ClashCommand' },
];

const particleDots = Array.from({ length: 22 }, (_, index) => ({
  x: (index * 37 + 9) % 100,
  y: (index * 53 + 13) % 100,
  delay: -((index % 9) * 0.8),
  duration: 7 + (index % 7),
}));

const formatProjectNumber = index => String(index + 1).padStart(2, '0');

const Portfolio = () => {
  const [indexOpen, setIndexOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
    });
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return () => lenis.destroy();
    }

    const intro = anime.timeline({ easing: 'easeOutCubic' });
    intro
      .add({
        targets: '.mni-header',
        opacity: [0, 1],
        translateY: [-14, 0],
        duration: 650,
      })
      .add({
        targets: '.mni-hero h1',
        opacity: [0, 1],
        translateY: [42, '-50%'],
        duration: 1050,
        easing: 'easeOutExpo',
      }, '-=420')
      .add({
        targets: ['.mni-hero-statement', '.mni-profile-figure', '.mni-hero-scroll', '.mni-github-mark', '.mni-index-rail'],
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 720,
        delay: anime.stagger(90),
      }, '-=680');

    const reveal = ScrollReveal({
      distance: '42px',
      duration: 900,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      opacity: 0,
      scale: 0.985,
      viewFactor: 0.12,
      reset: false,
      cleanup: true,
    });

    reveal.reveal('.mni-project-meta', { origin: 'top', distance: '18px', duration: 650 });
    reveal.reveal('.mni-project-number', { origin: 'left', distance: '68px', duration: 1000, interval: 110 });
    reveal.reveal('.mni-project-content', { origin: 'right', distance: '52px', duration: 950, interval: 120, delay: 80 });
    reveal.reveal('.mni-archive .mni-section-kicker, .mni-archive h2', { origin: 'bottom', distance: '28px', duration: 800 });
    reveal.reveal('.mni-archive-list li', { origin: 'right', distance: '22px', duration: 650, interval: 55 });
    reveal.reveal('.mni-activity-panel, .mni-contact > h2, .mni-contact-grid', { origin: 'bottom', distance: '36px', duration: 850 });

    return () => {
      lenis.destroy();
      intro.pause();
      reveal.destroy();
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

      <header className="mni-header" aria-label="Portfolio navigation">
        <div className="mni-header-stack">
          <span className="mni-header-label">Stack</span>
          <span>Node.js, NestJS, Python, TypeScript</span>
        </div>
        <div className="mni-header-profile">
          <span className="mni-header-label">Profile</span>
          <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">github.com/aravindsasok</a>
        </div>
        <a className="mni-header-contact" href="#contact">Contact</a>
      </header>

      <main className="mni-main" id="main-content">
        <section className="mni-hero" aria-labelledby="hero-title">
          <div className="mni-hero-grid" aria-hidden="true" />
          <div className="mni-particle-field" aria-hidden="true">
            {particleDots.map((dot, index) => (
              <span
                key={index}
                style={{
                  left: dot.x + '%',
                  top: dot.y + '%',
                  '--dot-delay': dot.delay + 's',
                  '--dot-duration': dot.duration + 's',
                }}
              />
            ))}
          </div>
          <h1 id="hero-title">Aravind S Asok</h1>

          <div className="mni-hero-scroll" aria-hidden="true">
            <span />
            <small>Scroll</small>
          </div>

          <p className="mni-hero-statement">
            Backend systems, developer tools and AI-powered applications.
          </p>

          <figure className="mni-profile-figure">
            <img
              src="https://avatars.githubusercontent.com/u/69244672?v=4"
              alt="Aravind S Asok"
              width="88"
              height="88"
            />
            <figcaption>Fig. 1</figcaption>
          </figure>

          <a className="mni-github-mark" href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.09 5.49.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <div className="mni-index-rail">
            <button type="button" onClick={() => setIndexOpen(!indexOpen)} aria-expanded={indexOpen} aria-controls="mni-project-index">
              <span aria-hidden="true">⊕</span>
              <span>01 Index</span>
            </button>
          </div>

          {indexOpen ? (
            <nav className="mni-index-panel" id="mni-project-index" aria-label="Selected projects">
              {featuredProjects.map((project, index) => (
                <a key={project.title} href={'#project-' + (index + 1)} onClick={() => setIndexOpen(false)}>
                  <span>{formatProjectNumber(index)}</span>{project.title}
                </a>
              ))}
            </nav>
          ) : null}
        </section>

        <section className="mni-projects" id="projects" aria-label="Selected projects">
          <ol className="mni-project-list">
            {featuredProjects.map((project, index) => (
              <li className="mni-project-card" id={'project-' + (index + 1)} key={project.title} aria-labelledby={'project-title-' + (index + 1)}>
                <div className="mni-project-meta">
                  <span>(01) <strong>Projects</strong></span>
                  <span>{formatProjectNumber(index)} / 06</span>
                  <span>{project.language}</span>
                </div>

                <div className="mni-project-number" aria-hidden="true">{formatProjectNumber(index)}</div>

                <div className="mni-project-content">
                  <h2 className="mni-project-title" id={'project-title-' + (index + 1)}>{project.title}</h2>
                  <p className="mni-project-lead">{project.lead}</p>
                  {project.summary ? <p className="mni-project-summary">{project.summary}</p> : null}

                  <div className="mni-project-details">
                    <dl className="mni-project-facts">
                      <div><dt>Stack</dt><dd>{project.language}</dd></div>
                    </dl>

                    <ul className="mni-project-links">
                      {project.live ? (
                        <li>
                          <span>Live site</span>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">{project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>
                        </li>
                      ) : null}
                      <li>
                        <span>Source</span>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">{project.repoName}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mni-tech-marquee" aria-label="Technologies and focus areas">
          <div className="mni-tech-marquee-track">
            {['Node.js', 'NestJS', 'Python', 'TypeScript', 'React', 'PostgreSQL', 'AWS', 'RAG', 'LLM integrations'].map(skill => (
              <span key={'a-' + skill}>{skill} <i aria-hidden="true">✳</i></span>
            ))}
            {['Node.js', 'NestJS', 'Python', 'TypeScript', 'React', 'PostgreSQL', 'AWS', 'RAG', 'LLM integrations'].map(skill => (
              <span key={'b-' + skill} aria-hidden="true">{skill} <i>✳</i></span>
            ))}
          </div>
        </section>

        <section className="mni-section mni-archive" id="archive" aria-labelledby="archive-title">
          <div className="mni-section-kicker"><span>(02)</span><span>Archive, 10</span></div>
          <h2 id="archive-title">More projects</h2>
          <ol className="mni-archive-list" start="7">
            {archiveProjects.map((project, index) => {
              const repositoryUrl = 'https://github.com/AravindSAsok/' + project.repo;
              return (
                <li key={project.repo}>
                  <span className="mni-archive-number">{String(index + 7).padStart(2, '0')}</span>
                  <div className="mni-archive-name">
                    <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">{project.title}<span aria-hidden="true"> ↗</span></a>
                    <p>{project.description}</p>
                  </div>
                  <span className="mni-archive-language">{project.language}</span>
                  <span className="mni-archive-year">{project.year}</span>
                  <a className="mni-archive-open" href={project.live || repositoryUrl} target="_blank" rel="noopener noreferrer">
                    {project.live ? 'Live site' : 'Source'} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mni-section mni-activity" id="activity" aria-labelledby="activity-title">
          <div className="mni-section-kicker"><span>(03)</span><span>GitHub / Public work</span></div>
          <div className="mni-activity-panel">
            <div>
              <h2 id="activity-title">Work in<br />the open.</h2>
              <p>Explore the repositories, projects and public contribution history on GitHub.</p>
            </div>
            <div className="mni-activity-links">
              <a href="https://github.com/AravindSAsok?tab=repositories" target="_blank" rel="noopener noreferrer">Browse repositories <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">View GitHub activity <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="mni-section mni-contact" id="contact" aria-labelledby="contact-title">
          <div className="mni-section-kicker"><span>(04)</span></div>
          <h2 id="contact-title">Contact</h2>

          <div className="mni-contact-grid">
            <div className="mni-contact-social">
              <p>Write to Aravind directly, or find them here</p>
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">
                <strong>GitHub</strong>
                <span>github.com/aravindsasok</span>
              </a>
              <a className="mni-contact-email" href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a className="mni-contact-email" href={'mailto:' + email}>{email}</a>
            </div>

            <form className="mni-contact-form" onSubmit={handleContactSubmit}>
              <p>Write a message</p>
              <div className="mni-contact-fields">
                <label>
                  <span>Name</span>
                  <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                </label>
              </div>
              <label className="mni-message-field">
                <span>Message</span>
                <textarea name="message" rows="3" placeholder="Tell me about the opportunity or project..." required />
              </label>
              <button type="submit">Send message</button>
              <small>This opens a prefilled email in your email application. No message is stored on this site.</small>
            </form>
          </div>
        </section>

        <footer className="mni-footer">
          <span>© 2026 Aravind S Asok</span>
          <a href="#top">Back to top ↑</a>
          <span>Backend Engineering · Applied AI</span>
        </footer>
      </main>

      <a className="mni-open-chat" href="#contact" aria-label="Open chat — go to contact form">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.4-3.1A7.5 7.5 0 1 1 20 11.5Z" />
        </svg>
      </a>
    </div>
  );
};

export default Portfolio;
