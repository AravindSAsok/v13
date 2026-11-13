import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledSection = styled.section`
  max-width: 1180px;

  .section-kicker {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 14px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;

    &:before {
      content: '';
      width: 26px;
      height: 1px;
      background: var(--green);
    }
  }

  .section-intro {
    max-width: 650px;
    margin: -18px 0 42px;
    color: var(--slate);
    font-size: clamp(17px, 2vw, 20px);
    line-height: 1.65;
  }

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      gap: 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .project-card, .project-image img { transition: none !important; }
  }
`;

const ProjectCard = styled.li`
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(136, 146, 176, 0.16);
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(17, 34, 64, 0.88), rgba(8, 20, 39, 0.96));
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.16);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(168, 255, 96, 0.38);
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
  }

  &:last-child:nth-child(odd) {
    grid-column: 1 / -1;

    .project-body {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
      align-items: end;
      gap: 35px;
    }

    @media (max-width: 760px) {
      grid-column: auto;
      .project-body { display: block; }
    }
  }

  .project-image {
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-bottom: 1px solid rgba(136, 146, 176, 0.12);
    background:
      radial-gradient(ellipse at 50% 0%, rgba(168, 255, 96, 0.13), transparent 58%),
      linear-gradient(135deg, #0b1a30, #07101f);

    img {
      display: block;
      width: 100%;
      height: 100%;
      padding: 10px;
      object-fit: contain;
      transition: transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1);
    }

    &:hover img { transform: scale(1.035); }

    .image-label {
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 2;
      padding: 7px 10px;
      border: 1px solid rgba(136, 146, 176, 0.2);
      border-radius: 5px;
      background: rgba(5, 12, 24, 0.78);
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      backdrop-filter: blur(12px);
    }

    .image-index {
      position: absolute;
      right: 18px;
      bottom: 14px;
      color: rgba(204, 214, 246, 0.52);
      font-family: var(--font-mono);
      font-size: 11px;
    }
  }

  .architecture-art {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    width: min(78%, 430px);
    padding: 22px;
    border: 1px solid rgba(168, 255, 96, 0.22);
    border-radius: 12px;
    background: rgba(6, 16, 31, 0.7);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);

    span {
      display: grid;
      place-items: center;
      min-height: 52px;
      border: 1px solid rgba(168, 255, 96, 0.18);
      border-radius: 7px;
      background: rgba(168, 255, 96, 0.055);
      color: var(--green);
      font-family: var(--font-mono);
      font-size: 10px;
      letter-spacing: 0.04em;
    }

    span:nth-child(2), span:nth-child(5) {
      border-color: rgba(87, 203, 255, 0.22);
      color: var(--blue);
      background: rgba(87, 203, 255, 0.06);
    }

    span:nth-child(3), span:nth-child(6) {
      border-color: rgba(245, 125, 255, 0.2);
      color: var(--pink);
      background: rgba(245, 125, 255, 0.05);
    }
  }

  .project-body { padding: clamp(20px, 3vw, 30px); }

  .project-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 13px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .project-title {
    margin: 0 0 12px;
    color: var(--lightest-slate);
    font-size: clamp(23px, 3vw, 29px);
    font-weight: 600;
    letter-spacing: -0.035em;
    line-height: 1.12;
  }

  .project-description {
    color: var(--slate);
    font-size: 16px;
    line-height: 1.7;

    p { margin: 0; }
    strong { color: var(--lightest-slate); font-weight: 600; }
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 20px 0 0;
    list-style: none;

    li {
      padding: 6px 9px;
      border: 1px solid rgba(136, 146, 176, 0.16);
      border-radius: 5px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: 10px;
    }
  }

  .project-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 23px;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--lightest-slate);
      font-family: var(--font-mono);
      font-size: 11px;
      transition: color 180ms ease, transform 180ms ease;

      svg { width: 16px; height: 16px; }

      &:hover {
        color: var(--green);
        transform: translateX(2px);
      }
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/featured/" }
          frontmatter: { showInFeatured: { eq: true } }
        }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
              cta
              image
              order
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((card, index) => {
      if (card) sr.reveal(card, srConfig(index * 90));
    });
  }, [prefersReducedMotion]);

  const getImagePaths = image => {
    const normalized = image.startsWith('/') ? image : `/${image}`;
    return {
      local: withPrefix(normalized),
      fallback: `https://raw.githubusercontent.com/AravindSAsok/v13/main/static${normalized}`,
    };
  };

  const handleImageError = fallback => event => {
    if (event.currentTarget.dataset.fallbackApplied === 'true') {
      event.currentTarget.style.display = 'none';
      return;
    }
    event.currentTarget.dataset.fallbackApplied = 'true';
    event.currentTarget.src = fallback;
  };

  return (
    <StyledSection id="projects">
      <p className="section-kicker">Selected work · 2024—2026</p>
      <h2 className="numbered-heading" ref={revealTitle}>Products built to solve real problems</h2>
      <p className="section-intro">
        A selection of products and engineering systems spanning grounded AI, workflow automation,
        and dependable backend platforms.
      </p>

      <ul className="featured-grid">
        {projects.map(({ node }, index) => {
          const { frontmatter, html } = node;
          const { title, tech = [], github, external, image } = frontmatter;
          const imagePaths = image ? getImagePaths(image) : null;
          const projectNumber = String(index + 1).padStart(2, '0');

          return (
            <ProjectCard
              key={title}
              ref={element => { revealCards.current[index] = element; }}>
              <div className="project-image">
                <span className="image-label">{image ? 'Product preview' : 'System design'}</span>
                {image ? (
                  <img
                    src={imagePaths.local}
                    alt={`${title} product interface screenshot`}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    onError={handleImageError(imagePaths.fallback)}
                  />
                ) : (
                  <div className="architecture-art" aria-label="System architecture illustration">
                    <span>API</span>
                    <span>DATA</span>
                    <span>LLM</span>
                    <span>AUTH</span>
                    <span>TOOLS</span>
                    <span>JOBS</span>
                  </div>
                )}
                <span className="image-index">WORK / {projectNumber}</span>
              </div>

              <div className="project-body">
                <div>
                  <div className="project-meta">
                    <span>Featured project</span>
                    <span>{projectNumber} — 05</span>
                  </div>
                  <h3 className="project-title">{title}</h3>
                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
                  {tech.length > 0 && (
                    <ul className="project-tech">
                      {tech.map((item, techIndex) => <li key={techIndex}>{item}</li>)}
                    </ul>
                  )}
                </div>

                {(external || github) && <div className="project-actions">
                  {external && (
                    <a href={external} target="_blank" rel="noopener noreferrer">
                      Live product <Icon name="External" />
                    </a>
                  )}
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      Source code <Icon name="GitHub" />
                    </a>
                  )}
                </div>}
              </div>
            </ProjectCard>
          );
        })}
      </ul>
    </StyledSection>
  );
};

export default Featured;
