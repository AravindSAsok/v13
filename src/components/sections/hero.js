import React from 'react';
import { usePrefersReducedMotion } from '@hooks';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
  align-items: center;
  gap: clamp(40px, 7vw, 110px);
  min-height: 100vh;
  padding: 130px 0 90px !important;
  isolation: isolate;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 18%;
    right: -18%;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 255, 96, 0.09), transparent 68%);
    filter: blur(12px);
    pointer-events: none;
    animation: ${props => (props.$reduceMotion ? 'none' : 'glow-drift 18s ease-in-out infinite alternate')};
  }

  .hero-copy {
    position: relative;
    z-index: 2;
    max-width: 760px;

    > * {
      opacity: ${props => (props.$reduceMotion ? 1 : 0)};
      animation: ${props => (props.$reduceMotion ? 'none' : 'hero-enter 650ms cubic-bezier(0.22, 1, 0.36, 1) both')};
    }

    > .eyebrow { animation-delay: 100ms; }
    > h1 { animation-delay: 190ms; }
    > .hero-role { animation-delay: 280ms; }
    > .hero-description { animation-delay: 370ms; }
    > .hero-actions { animation-delay: 460ms; }
    > .hero-footnote { animation-delay: 550ms; }
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 28px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;

    &:before {
      content: '';
      width: 28px;
      height: 1px;
      background: var(--green);
    }
  }

  h1 {
    margin: 0 0 18px;
    color: var(--lightest-slate);
    font-size: clamp(48px, 7.2vw, 92px);
    font-weight: 650;
    letter-spacing: -0.065em;
    line-height: 0.98;

    span {
      display: block;
      color: var(--green);
    }
  }

  .hero-role {
    max-width: 680px;
    margin: 0;
    color: var(--slate);
    font-size: clamp(23px, 3vw, 34px);
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 1.25;
  }

  .hero-description {
    max-width: 570px;
    margin: 26px 0 0;
    color: var(--light-slate);
    font-size: clamp(16px, 1.5vw, 18px);
    line-height: 1.8;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    margin-top: 36px;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      padding: 0 22px;
      border: 1px solid var(--green);
      border-radius: 6px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      letter-spacing: 0.02em;
      transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;

      &:hover {
        transform: translateY(-3px);
        background: var(--green-tint);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);

        span {
          display: inline-block;
          transform: translate(3px, -2px);
        }
      }

      span {
        transition: transform 180ms ease;
      }

      &.secondary {
        border-color: rgba(168, 178, 209, 0.25);
        color: var(--lightest-slate);

        &:hover {
          border-color: var(--light-slate);
          background: rgba(168, 178, 209, 0.06);
        }
      }
    }
  }

  .hero-footnote {
    margin-top: 30px;
    color: var(--dark-slate);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .systems-panel {
    position: relative;
    width: 100%;
    max-width: 510px;
    justify-self: end;
    padding: 1px;
    border: 1px solid rgba(136, 146, 176, 0.2);
    border-radius: 18px;
    background: linear-gradient(145deg, rgba(168, 255, 96, 0.16), rgba(87, 203, 255, 0.02) 42%, rgba(245, 125, 255, 0.1));
    box-shadow: 0 35px 100px rgba(0, 0, 0, 0.28);
    animation: ${props => (props.$reduceMotion ? 'none' : 'panel-arrive 850ms 260ms cubic-bezier(0.22, 1, 0.36, 1) both, panel-float 8s 1.2s ease-in-out infinite')};

    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 12% -10%;
      border-radius: 50%;
      background: rgba(87, 203, 255, 0.08);
      filter: blur(55px);
    }
  }

  .panel-inner {
    padding: clamp(22px, 3vw, 34px);
    border-radius: 17px;
    background: linear-gradient(155deg, rgba(17, 34, 64, 0.98), rgba(7, 18, 36, 0.98));
  }

  .panel-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 22px;
    border-bottom: 1px solid rgba(136, 146, 176, 0.16);
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .panel-dots {
    display: flex;
    gap: 6px;

    i {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--dark-slate);

      &:first-child { background: var(--green); }
      &:nth-child(2) { background: var(--blue); }
      &:nth-child(3) { background: var(--pink); }
    }
  }

  .system-flow {
    display: grid;
    gap: 12px;
    padding: 25px 0 20px;
  }

  .system-node {
    display: grid;
    grid-template-columns: 42px 1fr auto;
    align-items: center;
    gap: 13px;
    padding: 15px;
    border: 1px solid rgba(136, 146, 176, 0.14);
    border-radius: 10px;
    background: rgba(10, 25, 47, 0.68);
    transition: border-color 180ms ease, transform 180ms ease;

    &:hover {
      transform: translateX(4px);
      border-color: rgba(168, 255, 96, 0.42);
    }
  }

  .node-icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(168, 255, 96, 0.2);
    border-radius: 9px;
    background: rgba(168, 255, 96, 0.07);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  .node-copy {
    min-width: 0;

    strong {
      display: block;
      color: var(--lightest-slate);
      font-size: 14px;
      font-weight: 600;
    }

    span {
      display: block;
      margin-top: 4px;
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: 10px;
    }
  }

  .node-status {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 0.08em;
  }

  .panel-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 18px;
    border-top: 1px solid rgba(136, 146, 176, 0.16);

    span {
      padding: 7px 9px;
      border: 1px solid rgba(136, 146, 176, 0.16);
      border-radius: 5px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: 10px;
    }
  }

  @keyframes glow-drift {
    from { transform: translate3d(-2%, -1%, 0); }
    to { transform: translate3d(3%, 2%, 0); }
  }

  @keyframes hero-enter {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes panel-arrive {
    from { opacity: 0; transform: translateY(22px) scale(0.985); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes panel-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-9px); }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 55px;
    padding: 150px 0 90px !important;

    .systems-panel {
      justify-self: start;
      max-width: 560px;
    }
  }

  @media (max-width: 480px) {
    min-height: auto;
    gap: 42px;
    padding: 135px 0 70px !important;

    .eyebrow { margin-bottom: 22px; }
    h1 { font-size: clamp(45px, 14vw, 66px); }
    .hero-actions { gap: 10px; }
    .hero-actions a { min-height: 48px; padding: 0 16px; }
    .panel-inner { padding: 18px; }
    .system-node { grid-template-columns: 38px 1fr; padding: 12px; }
    .node-icon { width: 38px; height: 38px; }
    .node-status { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    &:before, .hero-copy > *, .systems-panel { animation: none !important; opacity: 1; transform: none; }
    .system-node, .hero-actions a { transition: none; }
  }
`;

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
  <StyledHeroSection id="home" $reduceMotion={prefersReducedMotion}>
    <div className="hero-copy">
      <p className="eyebrow">Software engineer · Backend & applied AI</p>
      <h1>
        I build
        <span>systems that</span>
        move ideas forward.
      </h1>
      <p className="hero-role">Scalable backends. Thoughtful products. Practical AI.</p>
      <p className="hero-description">
        I’m Aravind S Asok — a software engineer working across Node.js, TypeScript, NestJS and
        Python, with a growing focus on LLM applications, retrieval-augmented generation and
        agentic workflows.
      </p>
      <div className="hero-actions">
        <a href="#projects">Explore my work <span aria-hidden="true">&nbsp;↗</span></a>
        <a className="secondary" href="#contact">Let’s talk</a>
      </div>
      <p className="hero-footnote">Designing the engine behind useful software</p>
    </div>

    <div className="systems-panel" aria-label="Illustration of backend and AI engineering layers">
      <div className="panel-inner">
        <div className="panel-top">
          <span>System architecture</span>
          <span className="panel-dots" aria-hidden="true"><i /><i /><i /></span>
        </div>
        <div className="system-flow">
          <div className="system-node">
            <div className="node-icon">API</div>
            <div className="node-copy">
              <strong>Backend engineering</strong>
              <span>Services · Auth · Integrations</span>
            </div>
            <span className="node-status">01 / CORE</span>
          </div>
          <div className="system-node">
            <div className="node-icon">DB</div>
            <div className="node-copy">
              <strong>Data foundations</strong>
              <span>PostgreSQL · Schema · Search</span>
            </div>
            <span className="node-status">02 / DATA</span>
          </div>
          <div className="system-node">
            <div className="node-icon">AI</div>
            <div className="node-copy">
              <strong>Applied intelligence</strong>
              <span>LLMs · RAG · Agent workflows</span>
            </div>
            <span className="node-status">03 / AI</span>
          </div>
        </div>
        <div className="panel-footer">
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>NestJS</span>
          <span>Python</span>
          <span>LLM systems</span>
        </div>
      </div>
    </div>
  </StyledHeroSection>
  );
};

export default Hero;
