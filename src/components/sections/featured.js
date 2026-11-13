import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }

      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }

      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }

    .project-placeholder {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    position: relative;
    z-index: 2;
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    text-align: left;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  /*
   * Instead of a GatsbyImage, we use a styled project panel.
   * This keeps featured projects working even when no cover image exists.
   */
  .project-placeholder {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    min-height: 300px;
    border-radius: var(--border-radius);
    background: linear-gradient(135deg, var(--light-navy), var(--navy));
    ${({ theme }) => theme.mixins.boxShadow};

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    img {
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.has-image {
      background: var(--light-navy);

      &::before,
      &::after,
      .project-placeholder-inner {
        display: none;
      }
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      min-height: 100%;
      opacity: 0.25;

      &.has-image {
        opacity: 0.45;
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 220px;
      height: 220px;
      border: 1px solid var(--green);
      border-radius: 50%;
      opacity: 0.15;
    }

    &::after {
      content: '';
      position: absolute;
      width: 140px;
      height: 140px;
      border: 1px solid var(--green);
      border-radius: 50%;
      opacity: 0.1;
    }
  }

  .project-placeholder-inner {
    position: relative;
    z-index: 2;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    text-align: center;
    padding: 30px;
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

  const featuredProjects = data.featured.edges.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());

    revealProjects.current.forEach((ref, i) => {
      if (ref) {
        sr.reveal(ref, srConfig(i * 100));
      }
    });
  }, [prefersReducedMotion]);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>

      <StyledProjectsGrid>
        {featuredProjects.map(({ node }, i) => {
          const { frontmatter, html } = node;

          const { external, title, tech = [], github, cta, image } = frontmatter;

          const projectLink = external || github;

          return (
            <StyledProject
              key={i}
              ref={el => {
                revealProjects.current[i] = el;
              }}>
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>

                  <h3 className="project-title">
                    {projectLink ? <a href={projectLink}>{title}</a> : title}
                  </h3>

                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />

                  {tech.length > 0 && (
                    <ul className="project-tech-list">
                      {tech.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {cta && (
                      <a href={cta} aria-label="Course Link" className="cta">
                        Learn More
                      </a>
                    )}

                    {github && (
                      <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                        <Icon name="GitHub" />
                      </a>
                    )}

                    {external && !cta && (
                      <a
                        href={external}
                        aria-label="External Link"
                        className="external"
                        target="_blank"
                        rel="noreferrer">
                        <Icon name="External" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {projectLink ? (
                <a
                  href={projectLink}
                  className={image ? 'project-placeholder has-image' : 'project-placeholder'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} project`}>
                  {image && (
                    <img
                      src={withPrefix(image)}
                      alt={`${title} application screenshot`}
                      loading="lazy"
                    />
                  )}
                  <span className="project-placeholder-inner">{title}</span>
                </a>
              ) : image ? (
                <div className="project-placeholder has-image">
                  <img
                    src={withPrefix(image)}
                    alt={`${title} application screenshot`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="project-placeholder" aria-hidden="true">
                  <span className="project-placeholder-inner">{title}</span>
                </div>
              )}
            </StyledProject>
          );
        })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
