import React, { useState } from 'react';
import { email } from '@config';
import './portfolio.css';

const featuredProjects = [
  {
    title: 'AravindSAsok',
    lead: 'Showcases a full-stack engineer’s portfolio built with Gatsby, React and styled-components.',
    summary: '',
    language: '',
    updated: 'Aug 2026',
    stars: '1',
    topics: [],
    repoName: 'AravindSAsok/AravindSAsok',
    repo: 'https://github.com/AravindSAsok/AravindSAsok',
    live: 'https://aravindsasok.netlify.app/',
  },
  {
    title: 'EvidencePilot',
    lead: 'Python/Streamlit research assistant that extracts PDFs, retrieves evidence, and audits claims with Gemini.',
    summary: 'EvidencePilot is an AI-powered research assistant that analyzes PDFs, retrieves relevant evidence, generates source-grounded answers with page citations, and audits claims for factual support. Includes semantic and keyword search, a Research Agent, human review workflows, and retrieval evaluation tools.',
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
    summary: 'A lightweight document intelligence tool for exploring PDF content, finding relevant passages, and asking focused questions about research material.',
    language: 'Python',
    updated: 'Nov 2026',
    topics: [],
    repoName: 'AravindSAsok/ProfBot',
    repo: 'https://github.com/AravindSAsok/ProfBot',
  },
  {
    title: 'Profdoc AI V2',
    lead: 'Python/Streamlit chatbot that uses Gemini AI and Supabase to answer questions from user documents.',
    summary: 'An AI-powered document research assistant that helps users interact with their documents and retrieve relevant information.',
    language: 'Python',
    updated: 'Nov 2026',
    topics: [],
    repoName: 'AravindSAsok/profdoc_ai_v2',
    repo: 'https://github.com/AravindSAsok/profdoc_ai_v2',
    live: 'https://profdocai.streamlit.app/',
  },
  {
    title: 'PhD Research Chat MVP',
    lead: 'Streamlit app that answers questions from uploaded PDFs, DOCX and TXT using Gemini API.',
    summary: 'A research chat application for asking questions across uploaded PDF, DOCX, and TXT documents with the Gemini API.',
    language: 'Python',
    updated: 'Nov 2026',
    topics: [],
    repoName: 'AravindSAsok/phd-research-chat-mvp',
    repo: 'https://github.com/AravindSAsok/phd-research-chat-mvp',
    live: 'https://phd-research-chat-mvp-puchki.streamlit.app/',
  },
  {
    title: 'Mini RAG',
    lead: 'A RAG application with LLM based analysis.',
    summary: 'A compact retrieval-augmented generation application that retrieves relevant context and uses an LLM to produce focused, source-grounded answers.',
    language: 'Python',
    updated: 'Nov 2026',
    topics: [],
    repoName: 'AravindSAsok/mini-rag',
    repo: 'https://github.com/AravindSAsok/mini-rag',
    live: 'https://exo-rag.streamlit.app/',
  },
];

const archiveProjects = [
  { title: 'DevFlow API', language: 'Python', year: '2026', description: 'Python API backend for a developer workflow tool.', repo: 'devflow-api' },
  { title: 'Maplewood AI Front Desk', language: 'Python', year: '2026', description: 'An AI-powered front-desk application.', repo: 'maplewood-ai-front-desk' },
  { title: 'ACME Salary Management', language: 'JavaScript', year: '2026', description: 'Salary management system for ACME’s HR team, built with React.', repo: 'acme-salary-management' },
  { title: 'YTClone', language: 'JavaScript', year: '2023', description: 'A YouTube-inspired web application.', repo: 'ytclone' },
  { title: 'Todoappwithnode', language: 'JavaScript', year: '2022', description: 'A task management app built with Node.js.', repo: 'todoappwithnode', live: 'https://todoappwithnode.vercel.app' },
  { title: 'ATextFile', language: 'JavaScript', year: '2022', description: 'A small text-file utility project.', repo: 'atextfile' },
  { title: 'Sequelize Association Migration and Seed', language: 'JavaScript', year: '2022', description: 'A practical Sequelize association, migration, and seed example.', repo: 'sequelize--association-migraton-and-seed' },
  { title: 'GitHub Slideshow', language: 'Ruby', year: '2020', description: 'A robot powered training repository.', repo: 'github-slideshow' },
  { title: 'LineSplit', language: 'JavaScript', year: '2026', description: 'JavaScript Chrome extension and web app that splits long clipboard text into chunks.', repo: 'LineSplit' },
  { title: 'Openfolio', language: 'TypeScript', year: '2026', description: 'A platform that builds self-hostable developer portfolios from public GitHub repositories.', repo: 'openfolio' },
  { title: 'V13', language: 'JavaScript', year: '2026', description: 'Gatsby/React site that presents a personal portfolio focused on backend engineering.', repo: 'v13' },
  { title: 'ClashCommand', language: 'TypeScript', year: '2026', description: 'A Next.js companion for Clash of Clans clans, wars, player performance, and CWL history.', repo: 'ClashCommand' },
];

const monthLabels = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
const contributionCells = Array.from({ length: 364 }, (_, index) => {
  const week = Math.floor(index / 7);
  const day = index % 7;
  const active = {
    '46-1': 1, '47-4': 2, '48-0': 1, '48-5': 2,
    '49-2': 1, '50-1': 3, '50-4': 2, '51-0': 4,
    '51-2': 3, '51-3': 2, '51-5': 4, '51-6': 4,
    '49-6': 1, '50-6': 2,
  };
  return active[week + '-' + day] || 0;
});

const formatProjectNumber = index => String(index + 1).padStart(2, '0');

const Portfolio = () => {
  const [indexOpen, setIndexOpen] = useState(false);

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
          <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">github.com/aravindsasok</a>
        </div>
        <a className="mni-header-contact" href="#contact">Contact</a>
      </header>

      <main className="mni-main" id="main-content">
        <section className="mni-hero" aria-labelledby="hero-title">
          <div className="mni-hero-grid" aria-hidden="true" />
          <h1 id="hero-title">Aravind S Asok</h1>

          <div className="mni-hero-scroll" aria-hidden="true">
            <span />
            <small>Scroll</small>
          </div>

          <p className="mni-hero-statement">
            18 projects in Python, JavaScript and TypeScript.
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

          <a className="mni-forkfolio-badge" href="https://forkfolio.dev/" target="_blank" rel="noopener noreferrer" aria-label="Made with Forkfolio">
            <span className="mni-fork-mark" aria-hidden="true">ψ</span>
            <small>made with forkfolio</small>
          </a>

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
                  <span>{index === 0 ? '' : project.language}</span>
                  <span>Updated {project.updated}</span>
                </div>

                <h2 className="mni-project-title" id={'project-title-' + (index + 1)}>{project.title}</h2>

                <div className="mni-project-number" aria-hidden="true">{formatProjectNumber(index)}</div>

                <div className="mni-project-content">
                  <p className="mni-project-lead">{project.lead}</p>
                  {project.summary ? <p className="mni-project-summary">{project.summary}</p> : null}

                  <div className="mni-project-details">
                    <dl className="mni-project-facts">
                      {project.stars ? (
                        <div><dt>Stars</dt><dd>{project.stars}</dd></div>
                      ) : null}
                      {project.language ? <div><dt>Language</dt><dd>{project.language}</dd></div> : null}
                      <div><dt>Updated</dt><dd>{project.updated}</dd></div>
                      {project.topics.length ? <div><dt>Topics</dt><dd>{project.topics.join(', ')}</dd></div> : null}
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

        <section className="mni-section mni-archive" id="archive" aria-labelledby="archive-title">
          <div className="mni-section-kicker"><span>(02)</span><span>Archive, 12</span></div>
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
          <div className="mni-section-kicker"><span>(03)</span><span>Nov 2025 to Nov 2026</span></div>
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
          <h2 id="activity-title" className="mni-visually-hidden">GitHub activity</h2>
          <figure className="mni-contribution-figure" aria-label="Contribution activity from November 2025 to November 2026">
            <div className="mni-months" aria-hidden="true">
              {monthLabels.map((month, index) => <span key={month + index}>{month}</span>)}
            </div>
            <div className="mni-contribution-grid" role="img" aria-label="Contribution graph showing activity during the last year">
              {contributionCells.map((level, index) => (
                <span className={'mni-contribution-cell level-' + level} key={index} />
              ))}
            </div>
            <figcaption>
              <span>Nov 2025</span>
              <span className="mni-contribution-legend">Less <i className="level-0" /><i className="level-1" /><i className="level-2" /><i className="level-3" /><i className="level-4" /> More</span>
              <span>Nov 2026</span>
            </figcaption>
          </figure>
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
                  <input name="name" type="text" placeholder="Jane Recruiter" autoComplete="name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
                </label>
              </div>
              <label className="mni-message-field">
                <span>Message</span>
                <textarea name="message" rows="3" placeholder="Tell me about the role / project..." required />
              </label>
              <button type="submit">Send message</button>
              <small>This opens a prefilled email in your email application. No message is stored on this site.</small>
            </form>
          </div>
        </section>

        <footer className="mni-footer">
          <span>© 2026 Aravind S Asok</span>
          <a href="#top">Back to top ↑</a>
          <span>Built with <a href="https://forkfolio.dev/" target="_blank" rel="noopener noreferrer">Forkfolio</a></span>
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
