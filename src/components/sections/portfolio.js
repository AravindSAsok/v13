import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { email } from '@config';
import './portfolio.css';

const featuredProjects = [
  {
    title: 'AravindSAsok',
    lead: 'Showcases a full-stack engineer’s portfolio built with Gatsby, React and styled-components.',
    stack: 'Gatsby · React · TypeScript',
    stars: 1,
    updated: 'Aug 2026',
    repoName: 'AravindSAsok/AravindSAsok',
    repo: 'https://github.com/AravindSAsok/AravindSAsok',
    live: 'https://aravindsasok.netlify.app/',
  },
  {
    title: 'EvidencePilot',
    lead: 'Python/Streamlit research assistant that extracts PDFs, retrieves evidence, and audits claims with Gemini.',
    summary: 'EvidencePilot analyzes PDFs, retrieves relevant passages, generates source-grounded answers with page citations, and audits claims for factual support. It includes semantic and keyword search, a Research Agent, human review workflows, and retrieval evaluation tools.',
    language: 'Python',
    updated: 'Nov 2026',
    topics: ['genai'],
    repoName: 'AravindSAsok/EvidencePilot',
    repo: 'https://github.com/AravindSAsok/EvidencePilot',
    live: 'https://evidencepilot.streamlit.app/',
  },
  {
    title: 'ProfBot',
    lead: 'Python CLI and Streamlit tool for document QA, extracting PDF text and retrieving passages.',
    summary: 'A document question-answering application with a Python CLI and Streamlit interface. It extracts PDF and text content, retrieves relevant passages, and generates answers grounded in selected documents with validated citations.',
    language: 'Python',
    updated: 'Nov 2026',
    repoName: 'AravindSAsok/ProfBot',
    repo: 'https://github.com/AravindSAsok/ProfBot',
  },
  {
    title: 'Profdoc AI V2',
    lead: 'Python/Streamlit chatbot that uses Gemini AI and Supabase to answer questions from user documents.',
    summary: 'An AI-powered document research assistant that helps users interact with their documents and retrieve relevant information.',
    language: 'Python',
    updated: 'Nov 2026',
    topics: ['artificial-intelligence', 'rag-chatbot'],
    repoName: 'AravindSAsok/profdoc_ai_v2',
    repo: 'https://github.com/AravindSAsok/profdoc_ai_v2',
    live: 'https://profdocai.streamlit.app/',
  },
  {
    title: 'PhD Research Chat',
    lead: 'Streamlit app that answers questions from uploaded PDFs, DOCX and TXT using the Gemini API.',
    summary: 'A research chat application that retrieves relevant excerpts from uploaded documents, keeps PDF page references, supports follow-up questions, and says when the provided sources do not contain enough evidence.',
    language: 'Python',
    updated: 'Nov 2026',
    topics: ['ai', 'llm', 'rag', 'rag-pipeline'],
    repoName: 'AravindSAsok/phd-research-chat-mvp',
    repo: 'https://github.com/AravindSAsok/phd-research-chat-mvp',
    live: 'https://phd-research-chat-mvp-puchki.streamlit.app/',
  },
  {
    title: 'Mini RAG',
    lead: 'A RAG application with LLM-based analysis.',
    summary: 'A retrieval-focused demo that chunks a local knowledge base, embeds the passages, and returns the most relevant results with source names and similarity scores. The current web app demonstrates retrieval rather than LLM answer generation.',
    language: 'Python',
    updated: 'Nov 2026',
    repoName: 'AravindSAsok/mini-rag',
    repo: 'https://github.com/AravindSAsok/mini-rag',
    live: 'https://exo-rag.streamlit.app/',
  },
];

const archiveProjects = [
  {
    title: 'DevFlow API',
    language: 'Python',
    year: '2026',
    description: 'Python API backend for a developer workflow tool.',
    repo: 'https://github.com/AravindSAsok/devflow-api',
  },
  {
    title: 'Maplewood AI Front Desk',
    language: 'Python',
    year: '2026',
    repo: 'https://github.com/AravindSAsok/maplewood-ai-front-desk',
  },
  {
    title: 'ACME Salary Management',
    language: 'JavaScript',
    year: '2026',
    description: 'Salary management system for ACME’s HR team, built with React.',
    repo: 'https://github.com/AravindSAsok/acme-salary-management',
  },
  {
    title: 'YT Clone',
    language: 'JavaScript',
    year: '2023',
    repo: 'https://github.com/AravindSAsok/ytclone',
  },
  {
    title: 'Todo App with Node',
    language: 'JavaScript',
    year: '2022',
    repo: 'https://github.com/AravindSAsok/todoappwithnode',
  },
  {
    title: 'ATextFile',
    language: 'JavaScript',
    year: '2022',
    repo: 'https://github.com/AravindSAsok/atextfile',
  },
  {
    title: 'Sequelize Association Migration',
    language: 'JavaScript',
    year: '2022',
    description: 'A practical Sequelize association, migration, and seed example.',
    repo: 'https://github.com/AravindSAsok/sequelize--association-migraton-and-seed',
  },
  {
    title: 'GitHub Slideshow',
    language: 'Ruby',
    year: '2020',
    description: 'A robot-powered GitHub training repository.',
    repo: 'https://github.com/AravindSAsok/github-slideshow',
    reference: 'https://lab.github.com/githubtraining/introduction-to-github',
  },
  {
    title: 'LineSplit',
    language: 'JavaScript',
    year: '2026',
    description: 'A Chrome extension and web app that splits long clipboard text into copy-ready chunks.',
    repo: 'https://github.com/AravindSAsok/LineSplit',
    live: 'https://aravindsasok.github.io/LineSplit/',
  },
  {
    title: 'Openfolio',
    language: 'TypeScript',
    year: '2026',
    description: 'A platform that builds self-hostable developer portfolios from public GitHub repositories.',
    repo: 'https://github.com/AravindSAsok/openfolio',
  },
  {
    title: 'V13',
    language: 'JavaScript',
    year: '2026',
    description: 'A Gatsby and React portfolio focused on backend engineering and applied AI.',
    repo: 'https://github.com/AravindSAsok/v13',
    live: 'https://aravindsasok.github.io/v13/',
  },
  {
    title: 'ClashCommand',
    language: 'TypeScript',
    year: '2026',
    repo: 'https://github.com/AravindSAsok/ClashCommand',
  },
];

const projectNumber = index => String(index + 1).padStart(2, '0');
const archiveNumber = index => String(index + 7).padStart(2, '0');

const Portfolio = () => {
  const [indexOpen, setIndexOpen] = useState(false);
  const [graphFailed, setGraphFailed] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
    });

    return () => lenis.destroy();
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
          <span>JavaScript, Python, Ruby, TypeScript</span>
        </div>

        <div className="mni-header-profile">
          <span className="mni-header-label">Profile</span>
          <a href="https://github.com/aravindsasok" target="_blank" rel="noopener noreferrer">
            github.com/aravindsasok
          </a>
        </div>

        <a className="mni-header-contact" href="#contact">Contact</a>
      </header>

      <main className="mni-main" id="main-content">
        <section className="mni-hero" aria-labelledby="hero-title">
          <div className="mni-hero-grid" aria-hidden="true" />

          <h1 id="hero-title">Aravind S Asok</h1>

          <p className="mni-hero-scroll">
            <span aria-hidden="true" />
            <small>Scroll</small>
          </p>

          <p className="mni-hero-statement">
            18 projects in Python, JavaScript and TypeScript.
          </p>

          <figure className="mni-profile-figure">
            <img
              src="https://avatars.githubusercontent.com/u/69244672?v=4"
              alt="Aravind S Asok"
              width="88"
              height="88"
              loading="eager"
              decoding="async"
            />
            <figcaption>Fig. 1</figcaption>
          </figure>

          <a
            className="mni-github-mark"
            href="https://github.com/aravindsasok"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aravind S Asok on GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.09 5.49.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <div className="mni-index-rail">
            <button
              type="button"
              onClick={() => setIndexOpen(open => !open)}
              aria-expanded={indexOpen}
              aria-controls="mni-index-panel">
              <span className="mni-index-crosshair" aria-hidden="true">⊕</span>
              <span>00&nbsp; Index</span>
            </button>
          </div>

          {indexOpen && (
            <nav className="mni-index-panel" id="mni-index-panel" aria-label="Page index">
              <a href="#projects" onClick={() => setIndexOpen(false)}><span>01</span> Projects</a>
              {featuredProjects.map((project, index) => (
                <a
                  key={project.title}
                  href={'#project-' + (index + 1)}
                  onClick={() => setIndexOpen(false)}>
                  <span>{projectNumber(index)}</span>{project.title}
                </a>
              ))}
              <a href="#archive" onClick={() => setIndexOpen(false)}><span>02</span> More projects</a>
              <a href="#activity" onClick={() => setIndexOpen(false)}><span>03</span> Activity</a>
              <a href="#contact" onClick={() => setIndexOpen(false)}><span>04</span> Contact</a>
            </nav>
          )}
        </section>

        <section className="mni-projects" id="projects" aria-labelledby="projects-title">
          <h2 className="mni-visually-hidden" id="projects-title">Selected projects</h2>
          <ol className="mni-project-list">
            {featuredProjects.map((project, index) => {
              const number = projectNumber(index);
              const openUrl = project.live || project.repo;

              return (
                <li
                  className="mni-project-card"
                  id={'project-' + (index + 1)}
                  key={project.title}
                  style={{ zIndex: index + 1 }}
                  aria-labelledby={'project-title-' + (index + 1)}>
                  <div className="mni-project-meta">
                    <span>(01) <strong>Projects</strong></span>
                    <span>{number} / 06</span>
                    <span>Updated {project.updated}</span>
                  </div>

                  <h3 className="mni-project-title" id={'project-title-' + (index + 1)}>
                    <a href={openUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}<span aria-hidden="true"> ↗</span>
                      <span className="mni-visually-hidden"> — open project</span>
                    </a>
                  </h3>

                  <p className="mni-project-number" aria-hidden="true">{number}</p>

                  <div className="mni-project-content">
                    <p className="mni-project-lead">{project.lead}</p>
                    {project.summary && <p className="mni-project-summary">{project.summary}</p>}

                    <dl className="mni-project-facts">
                      {typeof project.stars === 'number' && project.stars > 0 && (
                        <div>
                          <dt>Stars</dt>
                          <dd>{project.stars}</dd>
                        </div>
                      )}
                      <div>
                        <dt>Updated</dt>
                        <dd>{project.updated}</dd>
                      </div>
                      {project.language && (
                        <div>
                          <dt>Language</dt>
                          <dd>{project.language}</dd>
                        </div>
                      )}
                      {project.stack && (
                        <div>
                          <dt>Stack</dt>
                          <dd>{project.stack}</dd>
                        </div>
                      )}
                      {project.topics && project.topics.length > 0 && (
                        <div>
                          <dt>Topics</dt>
                          <dd>{project.topics.join(', ')}</dd>
                        </div>
                      )}
                    </dl>

                    <ul className="mni-project-links">
                      {project.live && (
                        <li>
                          <span>Live site</span>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            {project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </a>
                        </li>
                      )}
                      <li>
                        <span>Source</span>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          {project.repoName}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mni-section mni-archive" id="archive" aria-labelledby="archive-title">
          <div className="mni-section-kicker">
            <span>(02)</span>
            <span>Archive, 12</span>
          </div>
          <h2 id="archive-title">More projects</h2>

          <ol className="mni-archive-list" start="7">
            {archiveProjects.map((project, index) => (
              <li key={project.title}>
                <span className="mni-archive-number">{archiveNumber(index)}</span>
                <div className="mni-archive-name">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    {project.title}<span aria-hidden="true"> ↗</span>
                  </a>
                  {project.description && <p>{project.description}</p>}
                </div>
                <span className="mni-archive-language">{project.language}</span>
                <span className="mni-archive-year">{project.year}</span>
                <div className="mni-archive-links">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">Source</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live site</a>
                  )}
                  {project.reference && (
                    <a href={project.reference} target="_blank" rel="noopener noreferrer">Training</a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mni-section mni-activity" id="activity" aria-labelledby="activity-title">
          <div className="mni-section-kicker">
            <span>(03)</span>
            <span>Activity · Nov 2025 to Nov 2026</span>
          </div>
          <h2 className="mni-visually-hidden" id="activity-title">GitHub activity</h2>

          <div className="mni-activity-summary">
            <div className="mni-activity-total">
              <strong>134</strong>
              <span>contributions in the last year</span>
            </div>

            <dl className="mni-activity-stats">
              <div><dt>Active days</dt><dd>14</dd></div>
              <div><dt>Busiest week</dt><dd>112</dd></div>
              <div><dt>Longest run</dt><dd>3 days</dd></div>
            </dl>
          </div>

          <p className="mni-activity-snapshot">
            Archived reference audit snapshot · November 2025 to November 2026 (captured November 14, 2026). These figures are historical, not live.
          </p>

          {!graphFailed ? (
            <figure className="mni-contribution-figure">
              <img
                src="/v13/projects/github-activity-snapshot.png"
                alt="Archived GitHub contribution calendar for Aravind S Asok, covering November 2025 to November 2026."
                loading="eager"
                decoding="async"
                width="1354"
                height="240"
                onError={() => setGraphFailed(true)}
              />
              <figcaption>
                <span>Public contribution graph</span>
                <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">
                  View current GitHub profile ↗
                </a>
              </figcaption>
            </figure>
          ) : (
            <div className="mni-contribution-fallback">
              <p>The contribution image is unavailable at the moment.</p>
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">
                View current GitHub activity ↗
              </a>
            </div>
          )}
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
              <a className="mni-contact-email" href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a className="mni-contact-email" href={'mailto:' + email}>{email}</a>
            </div>

            <form className="mni-contact-form" onSubmit={handleContactSubmit}>
              <p>Write a message</p>
              <div className="mni-contact-fields">
                <label>
                  <span>Name</span>
                  <input name="name" type="text" placeholder="Jane Recruiter" autoComplete="name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
                </label>
              </div>
              <label className="mni-message-field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell me about the role / project..."
                  required
                />
              </label>
              <button type="submit">Send message</button>
              <small>
                This opens a prefilled email in your email application. The site does not send or store messages.
              </small>
            </form>
          </div>
        </section>

        <footer className="mni-footer">
          <h2>Aravind S Asok</h2>
          <div className="mni-footer-meta">
            <span>© 2026 Aravind S Asok</span>
            <a href="#top">Back to top ↑</a>
            <span>Backend Engineering · Applied AI</span>
          </div>
          <div className="mni-footer-social">
            <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={'mailto:' + email}>Email ↗</a>
            <a href="https://forkfolio.dev" target="_blank" rel="noopener noreferrer">Made with Forkfolio ↗</a>
          </div>
        </footer>
      </main>

      <a
        className="mni-forkfolio-credit"
        href="https://forkfolio.dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Made with Forkfolio">
        <span className="mni-forkfolio-mark" aria-hidden="true">ψ</span>
        <span>made with forkfolio</span>
      </a>

      <a className="mni-open-chat" href="#contact" aria-label="Open contact form">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.4-3.1A7.5 7.5 0 1 1 20 11.5Z" />
        </svg>
      </a>
    </div>
  );
};

export default Portfolio;
