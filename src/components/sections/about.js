import React from 'react';
import styled from 'styled-components';
import backendAiIllustration from '../../images/backend-ai-illustration.svg';

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
      transform: translateY(-2px);
      border-color: rgba(100, 255, 218, 0.5);
      color: var(--green);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    li { transition: none; }
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
    border: 1px solid rgba(100, 255, 218, 0.18);
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
      border: 1px solid rgba(100, 255, 218, 0.45);
      border-radius: 14px;
      transition: transform 220ms ease;
    }

    &:hover:after {
      transform: translate(5px, 5px);
    }
  }

  .profile-illustration {
    display: block;
    width: 100%;
    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    .wrapper:after { transition: none; }
  }
`;

const About = () => {
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
    <AboutSection id="about">
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

          <SkillsGrid>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </SkillsGrid>
        </div>

        <StyledPic>
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
