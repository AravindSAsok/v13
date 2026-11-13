import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import { KEY_CODES } from '@utils';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 980px;

  .inner {
    display: grid;
    grid-template-columns: 210px minmax(0, 1fr);
    align-items: start;
    gap: 28px;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    margin: 0 0 18px;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 54px;
  padding: 0 16px;
  border: 1px solid rgba(136, 146, 176, 0.12);
  border-left: 2px solid ${({ isActive }) => (isActive ? 'var(--green)' : 'rgba(136, 146, 176, 0.18)')};
  border-radius: 0 8px 8px 0;
  background: ${({ isActive }) => (isActive ? 'rgba(100, 255, 218, 0.075)' : 'rgba(17, 34, 64, 0.36)')};
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;
  transition: background 180ms ease, border-color 180ms ease, color 180ms ease;

  &:hover, &:focus {
    background: rgba(100, 255, 218, 0.08);
    color: var(--lightest-slate);
  }

  @media (max-width: 600px) {
    flex: 0 0 auto;
    width: max-content;
    min-width: max-content;
    min-height: 46px;
    border: 1px solid rgba(136, 146, 176, 0.14);
    border-bottom: 2px solid ${({ isActive }) => (isActive ? 'var(--green)' : 'rgba(136, 146, 176, 0.18)')};
    border-radius: 8px 8px 0 0;
    text-align: center;
  }
`;

const StyledHighlight = styled.div`
  display: none;
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  min-height: 340px;
  margin-left: 0;
  padding: clamp(22px, 3vw, 34px);
  border: 1px solid rgba(136, 146, 176, 0.16);
  border-radius: 14px;
  background:
    radial-gradient(ellipse at 100% 0%, rgba(100, 255, 218, 0.07), transparent 42%),
    linear-gradient(145deg, rgba(17, 34, 64, 0.78), rgba(8, 20, 39, 0.88));
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.14);

  @media (max-width: 600px) {
    min-height: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 8px 4px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: clamp(22px, 3vw, 28px);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    display: inline-flex;
    margin: 10px 0 24px;
    padding: 6px 9px;
    border: 1px solid rgba(136, 146, 176, 0.16);
    border-radius: 5px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  ul { line-height: 1.7; }
  li { margin-bottom: 12px; color: var(--light-slate); }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/jobs/" }
          frontmatter: { showInJobs: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  onMouseEnter={() => setActiveTabId(i)}
                  onFocus={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, url, company, range } = frontmatter;

              return (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        {url ? (
                          <a href={url} className="inline-link">
                            {company}
                          </a>
                        ) : (
                          company
                        )}
                      </span>
                    </h3>

                    <p className="range">{range}</p>

                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
