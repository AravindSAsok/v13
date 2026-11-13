
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  inset: 0;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 42%, rgba(168, 255, 96, 0.09), transparent 34%),
    var(--dark-navy);
  z-index: 99;
  animation: loader-exit 420ms 850ms cubic-bezier(0.22, 1, 0.36, 1) both;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border: 1px solid rgba(168, 255, 96, 0.09);
    border-radius: 50%;
    pointer-events: none;
  }

  &:before {
    width: min(74vw, 520px);
    aspect-ratio: 1;
    animation: orbit-in 900ms ease-out both;
  }

  &:after {
    width: min(58vw, 410px);
    aspect-ratio: 1;
    border-color: rgba(168, 178, 209, 0.08);
    animation: orbit-in 1100ms 80ms ease-out both;
  }

  .loader-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(320px, calc(100vw - 48px));
    text-align: center;
    animation: content-in 650ms 80ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .logo-wrapper {
    width: 76px;
    height: 76px;
    margin-bottom: 26px;
    color: var(--green);
    filter: drop-shadow(0 0 22px rgba(168, 255, 96, 0.18));

    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: none;
      user-select: none;
      animation: logo-glow 2s ease-in-out infinite;
    }
  }

  .loader-title {
    margin: 0;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .loader-caption {
    margin: 9px 0 0;
    color: var(--slate);
    font-size: 13px;
    letter-spacing: 0.01em;
  }

  .loader-track {
    width: 170px;
    height: 2px;
    margin-top: 28px;
    overflow: hidden;
    border-radius: 99px;
    background: rgba(168, 178, 209, 0.16);
  }

  .loader-progress {
    display: block;
    width: 42%;
    height: 100%;
    border-radius: inherit;
    background: var(--green);
    box-shadow: 0 0 14px rgba(168, 255, 96, 0.6);
    animation: progress-sweep 900ms cubic-bezier(0.65, 0, 0.35, 1) both;
  }

  .loader-meta {
    margin-top: 12px;
    color: var(--dark-slate);
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  @keyframes content-in {
    from { opacity: 0; transform: translateY(12px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes orbit-in {
    from { opacity: 0; transform: scale(0.88); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes logo-glow {
    0%, 100% { transform: translateY(0); opacity: 0.88; }
    50% { transform: translateY(-3px); opacity: 1; }
  }

  @keyframes progress-sweep {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes loader-exit {
    to { opacity: 0; visibility: hidden; pointer-events: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    &, &:before, &:after, .loader-content, .logo-wrapper svg, .loader-progress {
      animation: none !important;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const reducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeout = window.setTimeout(finishLoading, reducedMotion ? 180 : 1300);
    return () => window.clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <StyledLoader className="loader" role="status" aria-label="Loading portfolio">
      <Helmet bodyAttributes={{ class: 'hidden' }} />
      <div className="loader-content">
        <div className="logo-wrapper">
          <IconLoader />
        </div>
        <p className="loader-title">Aravind S Asok</p>
        <p className="loader-caption">Engineering ideas into useful products</p>
        <div className="loader-track" aria-hidden="true">
          <span className="loader-progress" />
        </div>
        <span className="loader-meta">Initializing experience</span>
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
