import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  position: relative;
  max-width: 780px;
  margin: 20px auto 110px;
  padding: clamp(34px, 6vw, 68px) clamp(22px, 5vw, 54px);
  border: 1px solid rgba(136, 146, 176, 0.17);
  border-radius: 20px;
  background: radial-gradient(ellipse at 50% 0%, rgba(168, 255, 96, 0.09), transparent 55%), linear-gradient(145deg, rgba(17, 34, 64, 0.72), rgba(8, 20, 39, 0.94));
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .numbered-heading { justify-content: center; }

  .title {
    margin-bottom: 18px;
    font-size: clamp(42px, 6vw, 68px);
    letter-spacing: -0.05em;
  }

  p:not(.numbered-heading) {
    max-width: 560px;
    margin: 0 auto;
    color: var(--slate);
    font-size: 17px;
    line-height: 1.75;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 34px;
    padding: 17px 28px;
    border-radius: 8px;
    background: rgba(168, 255, 96, 0.045);
    transition: transform 180ms ease, background 180ms ease;

    &:hover { transform: translateY(-3px); background: rgba(168, 255, 96, 0.1); }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Let's Work Together</h2>

      <p>
        I'm always interested in building useful software, scalable backend systems, and AI-powered
        applications. If you have a project, technical idea, or opportunity you'd like to discuss,
        feel free to reach out.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
