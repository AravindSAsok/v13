import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import backendAiIllustration from '../../images/backend-ai-illustration.svg';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const AboutSection = styled.section`
  max-width: 1040px;

  .inner {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
    align-items: start;
    gap: clamp(40px, 7vw, 90px);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 42px;
    }
  }

  .copy p {
    max-width: 690px;
    margin: 0 0 18px;
    color: var(--light-slate);
    font-size: clamp(16px, 1.5vw, 18px);
    line-height: 1.75;
  }

  .skills-label {
    margin: 28px 0 14px !important;
    color: var(--green) !important;
    font-family: var(--font-mono);
    font-size: var(--fz-xs) !important;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

const SkillsGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    opacity: ${props => (props.$reduceMotion ? 1 : 0)};
    animation: ${props => (props.$reduceMotion ? 'none' : 'skill-enter 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards')};
    padding: 8px 11px;
    border: 1px solid rgba(136, 146, 176, 0.2);
    border-radius: 7px;
    background: rgba(17, 34, 64, 0.55);
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.01em;
    transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;

    &:hover {
      transform: ${props => (props.$reduceMotion ? 'none' : 'translateY(-3px)')};
      border-color: rgba(168, 255, 96, 0.5);
      color: var(--green);
    }
  }

  li:nth-child(1) { animation-delay: 40ms; }
  li:nth-child(2) { animation-delay: 80ms; }
  li:nth-child(3) { animation-delay: 120ms; }
  li:nth-child(4) { animation-delay: 160ms; }
  li:nth-child(5) { animation-delay: 200ms; }
  li:nth-child(6) { animation-delay: 240ms; }
  li:nth-child(7) { animation-delay: 280ms; }
  li:nth-child(8) { animation-delay: 320ms; }
  li:nth-child(9) { animation-delay: 360ms; }
  li:nth-child(10) { animation-delay: 400ms; }
  li:nth-child(11) { animation-delay: 440ms; }
  li:nth-child(12) { animation-delay: 480ms; }
  li:nth-child(13) { animation-delay: 520ms; }
  li:nth-child(14) { animation-delay: 560ms; }

  @keyframes skill-enter {
    from { opacity: 0; transform: translateY(9px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    li { animation: none !important; opacity: 1; transition: none; }
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  justify-self: end;
  margin-top: 12px;

  @media (max-width: 768px) {
    justify-self: center;
    max-width: 320px;
    width: 78%;
    margin: 8px auto 0;
  }

  .wrapper {
    position: relative;
    display: block;
    width: 100%;
    overflow: visible;
    border: 1px solid rgba(168, 255, 96, 0.18);
    border-radius: 14px;
    background: linear-gradient(145deg, rgba(17, 34, 64, 0.92), rgba(7, 18, 36, 0.92));
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.22);

    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 16px;
      left: 16px;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(168, 255, 96, 0.45);
      border-radius: 14px;
      transition: ${props => (props.$reduceMotion ? 'none' : 'transform 220ms ease')};
    }

    &:hover:after {
      transform: ${props => (props.$reduceMotion ? 'none' : 'translate(5px, 5px)')};
    }

    .profile-illustration {
      transition: ${props => (props.$reduceMotion ? 'none' : 'transform 280ms ease')};
    }

    &:hover .profile-illustration {
      transform: ${props => (props.$reduceMotion ? 'none' : 'scale(1.025)')};
    }
  }

  .profile-illustration {
    display: block;
    width: 100%;
    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    .wrapper:after, .profile-illustration { transition: none; }
    .wrapper:hover .profile-illustration { transform: none; }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = [
    'Node.js',
    'TypeScript',
    'NestJS',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'MySQL',
    'REST APIs',
    'Docker',
    'AWS',
    'LLM APIs',
    'RAG',
    'LangChain',
    'MCP',
  ];

  return (
    <AboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <div className="copy">
          <p>
            I’m a software engineer focused on the systems behind useful products — reliable APIs,
            clear data models, secure access, and integrations that hold up as products grow.
          </p>

          <p>
            My core work is in Node.js, TypeScript, NestJS, and Python. I build REST APIs, design
            PostgreSQL and MySQL schemas, implement authentication and authorization, and connect
            services such as Stripe.
          </p>

          <p>
            More recently, I’ve been building applied AI workflows with LLM APIs, RAG, LangChain,
            MCP, and multi-agent systems. My focus is practical: connect models to real data and
            tools, keep answers grounded, and make the whole system dependable.
          </p>

          <p className="skills-label">Core toolkit</p>

          <SkillsGrid $reduceMotion={prefersReducedMotion}>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </SkillsGrid>
        </div>

        <StyledPic $reduceMotion={prefersReducedMotion}>
          <div className="wrapper">
            <img
              className="profile-illustration"
              src={backendAiIllustration}
              alt="Illustration of backend APIs, databases, and AI services connected in a workflow"
              loading="lazy"
            />
          </div>
        </StyledPic>
      </div>
    </AboutSection>
  );
};

export default About;
