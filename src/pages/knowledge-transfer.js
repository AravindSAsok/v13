import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const Page = styled.main\`
  width: min(1100px, calc(100% - 48px));
  margin: 0 auto;
  padding: 150px 0 100px;
  color: var(--light-slate);

  @media (max-width: 600px) {
    width: min(100% - 36px, 1100px);
    padding-top: 120px;
  }

  a { color: var(--green); }
  .eyebrow, .mono { font-family: var(--font-mono); }
  .eyebrow {
    color: var(--green);
    font-size: 12px;
    letter-spacing: .13em;
    text-transform: uppercase;
  }
  h1, h2, h3 { color: var(--lightest-slate); }
  h1 {
    max-width: 850px;
    margin: 18px 0;
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.02;
    letter-spacing: -.055em;
  }
  h2 {
    margin: 0 0 18px;
    font-size: clamp(25px, 4vw, 34px);
    letter-spacing: -.035em;
  }
  h3 { margin: 0 0 10px; font-size: 18px; }
  p { line-height: 1.8; }
  .lead { max-width: 760px; font-size: 18px; color: var(--slate); }
  .hero-meta { display: flex; flex-wrap: wrap; gap: 10px; margin: 28px 0 58px; }
  .pill {
    padding: 8px 11px;
    border: 1px solid rgba(136,146,176,.2);
    border-radius: 6px;
    color: var(--light-slate);
    font: 11px var(--font-mono);
  }
  section { margin: 0 0 76px; scroll-margin-top: 110px; }
  .section-no { display: block; margin-bottom: 12px; color: var(--green); font: 12px var(--font-mono); }
  .grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; }
  .card {
    padding: 22px;
    border: 1px solid rgba(136,146,176,.17);
    border-radius: 13px;
    background: linear-gradient(145deg, rgba(17,34,64,.78), rgba(8,20,39,.88));
  }
  .card p { margin: 8px 0 0; color: var(--slate); font-size: 14px; }
  .tree {
    overflow-x: auto;
    padding: 24px;
    border: 1px solid rgba(136,146,176,.17);
    border-radius: 12px;
    background: #050b16;
    color: #cbd5e1;
    font: 13px/1.85 var(--font-mono);
    white-space: pre;
  }
  .tree .folder { color: var(--green); }
  .tree .note { color: #71809e; }
  .flow {
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 10px;
    align-items: stretch;
    margin: 24px 0;
  }
  .flow-item {
    position: relative;
    display: grid;
    align-content: center;
    min-height: 100px;
    padding: 16px;
    border: 1px solid rgba(168,255,96,.22);
    border-radius: 10px;
    background: rgba(168,255,96,.045);
    text-align: center;
  }
  .flow-item b { color: var(--green); font: 12px var(--font-mono); }
  .flow-item small { margin-top: 7px; color: var(--slate); line-height: 1.5; }
  .swatches { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 10px; margin-top: 20px; }
  .swatch { overflow: hidden; border: 1px solid rgba(136,146,176,.18); border-radius: 9px; background: #0b1424; }
  .swatch-color { height: 58px; }
  .swatch span { display: block; padding: 10px; font: 11px var(--font-mono); color: var(--light-slate); }
  .table-wrap { overflow-x: auto; border: 1px solid rgba(136,146,176,.17); border-radius: 10px; }
  table { width: 100%; border-collapse: collapse; min-width: 560px; }
  th, td { padding: 14px 16px; border-bottom: 1px solid rgba(136,146,176,.13); text-align: left; vertical-align: top; font-size: 14px; }
  th { color: var(--green); font: 11px var(--font-mono); letter-spacing: .08em; text-transform: uppercase; }
  td { color: var(--slate); line-height: 1.6; }
  tr:last-child td { border-bottom: 0; }
  code { color: var(--green); font: .92em var(--font-mono); }
  pre.command {
    overflow-x: auto;
    padding: 16px 18px;
    border: 1px solid rgba(136,146,176,.16);
    border-radius: 9px;
    background: #050b16;
    color: #dce6f8;
    font: 13px/1.8 var(--font-mono);
  }
  .callout { padding: 18px 20px; border-left: 2px solid var(--green); background: rgba(168,255,96,.045); border-radius: 0 8px 8px 0; color: var(--slate); }
  .back { display: inline-flex; margin-top: 8px; padding: 13px 17px; border: 1px solid rgba(168,255,96,.4); border-radius: 7px; font: 12px var(--font-mono); text-decoration: none; }
  @media (max-width: 760px) {
    .grid { grid-template-columns: 1fr; }
    .flow { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .swatches { grid-template-columns: repeat(2,minmax(0,1fr)); }
  }
  @media (max-width: 420px) {
    .flow { grid-template-columns: 1fr; }
  }
\`;

const KnowledgeTransfer = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Portfolio Knowledge Transfer | Aravind S Asok</title>
      <meta name="description" content="A technical and visual guide to the Gatsby portfolio: architecture, source structure, design system, motion, content and deployment." />
    </Helmet>
    <Page>
      <span className="eyebrow">Engineering notes / Portfolio v13</span>
      <h1>Portfolio, from pixels to source code.</h1>
      <p className="lead">
        A practical knowledge-transfer guide to how this portfolio is assembled, where its
        content lives, how the visual system works, and how a change travels from source code
        to the live GitHub Pages site.
      </p>
      <div className="hero-meta">
        <span className="pill">Gatsby 3</span><span className="pill">React 17</span>
        <span className="pill">Styled Components</span><span className="pill">GitHub Pages</span>
        <span className="pill">Repository: AravindSAsok/v13</span>
      </div>

      <section id="overview">
        <span className="section-no">01 / SYSTEM OVERVIEW</span>
        <h2>What this application is</h2>
        <p>
          This is a statically generated, single-page personal portfolio built with Gatsby and
          React. Gatsby assembles the page at build time; React components define each section;
          Styled Components owns component-level styling; Markdown files provide selected work
          and career content.
        </p>
        <div className="flow">
          <div className="flow-item"><b>CONTENT</b><small>Markdown, config, images</small></div>
          <div className="flow-item"><b>GATSBY</b><small>GraphQL data + static build</small></div>
          <div className="flow-item"><b>REACT UI</b><small>Layout and section components</small></div>
          <div className="flow-item"><b>GITHUB PAGES</b><small>Static production website</small></div>
        </div>
        <div className="grid">
          <article className="card"><h3>Rendering model</h3><p>No application server or database is required to render the portfolio. Gatsby generates static assets that GitHub Pages serves.</p></article>
          <article className="card"><h3>Primary entry</h3><p><code>src/pages/index.js</code> composes the homepage sections in their display order and wraps them in the shared Layout.</p></article>
          <article className="card"><h3>Content model</h3><p>Structured Markdown lives under <code>content/</code>; global navigation, social links, email and reveal defaults live in <code>src/config.js</code>.</p></article>
          <article className="card"><h3>Deployment model</h3><p>A push to <code>main</code> triggers GitHub Actions, runs the Gatsby production build and deploys the generated <code>public/</code> directory.</p></article>
        </div>
      </section>

      <section id="structure">
        <span className="section-no">02 / CODE STRUCTURE</span>
        <h2>Where things live</h2>
        <p>Use this as the first map when opening the repository. These are the main application areas rather than every dependency or generated file.</p>
        <pre className="tree"><span className="folder">v13/</span>
├── <span className="folder">content/</span>
│   ├── <span className="folder">featured/</span>       <span className="note"># Featured project Markdown</span>
│   ├── <span className="folder">jobs/</span>           <span className="note"># Career / experience content</span>
│   └── <span className="folder">projects/</span>       <span className="note"># Other project entries</span>
├── <span className="folder">static/</span>                <span className="note"># Public assets copied as-is</span>
├── <span className="folder">src/</span>
│   ├── <span className="folder">components/</span>
│   │   ├── <span className="folder">sections/</span>   <span className="note"># Hero, About, Jobs, Featured, Projects, Contact</span>
│   │   ├── <span className="folder">icons/</span>      <span className="note"># Reusable SVG icon components</span>
│   │   ├── layout.js      <span className="note"># Shared shell, SEO, loader, nav, footer</span>
│   │   ├── nav.js         <span className="note"># Desktop navigation + active section</span>
│   │   ├── loader.js      <span className="note"># Intro loading experience</span>
│   │   ├── menu.js        <span className="note"># Mobile navigation menu</span>
│   │   ├── head.js        <span className="note"># SEO and social metadata</span>
│   │   └── index.js       <span className="note"># Component barrel exports</span>
│   ├── <span className="folder">hooks/</span>         <span className="note"># Reduced-motion, scroll direction, click outside</span>
│   ├── <span className="folder">images/</span>        <span className="note"># Imported images and logo</span>
│   ├── <span className="folder">pages/</span>
│   │   ├── index.js       <span className="note"># Homepage composition</span>
│   │   ├── archive.js     <span className="note"># Project archive page</span>
│   │   └── 404.js         <span className="note"># Not-found page</span>
│   ├── <span className="folder">styles/</span>        <span className="note"># Global styles, theme, variables, mixins</span>
│   ├── <span className="folder">utils/</span>         <span className="note"># ScrollReveal setup and utilities</span>
│   └── config.js          <span className="note"># Site navigation, social, email, colors</span>
├── gatsby-config.js       <span className="note"># Plugins, metadata, pathPrefix, Markdown sources</span>
├── gatsby-browser.js      <span className="note"># Browser lifecycle and route transitions</span>
├── gatsby-node.js         <span className="note"># Build-time page creation</span>
├── gatsby-ssr.js          <span className="note"># Gatsby server-render hooks</span>
├── package.json           <span className="note"># Scripts and dependencies</span>
└── .github/workflows/     <span className="note"># GitHub Pages build + deploy pipeline</span></pre>
        <div className="callout">Tip: start at <code>src/pages/index.js</code> to understand page composition, then open the matching section component. For shared behavior, inspect <code>layout.js</code>, <code>nav.js</code>, <code>src/hooks/</code> and <code>src/styles/</code>.</div>
      </section>

      <section id="rendering">
        <span className="section-no">03 / COMPONENT FLOW</span>
        <h2>How the homepage is assembled</h2>
        <div className="card">
          <p className="mono" style={{color:'var(--green)',marginTop:0}}>src/pages/index.js</p>
          <p style={{marginBottom:0}}>IndexPage → Layout → Head + Loader (first visit) → Nav / Social / Email → Main content → Footer</p>
          <div style={{height:1,background:'rgba(136,146,176,.18)',margin:'18px 0'}} />
          <p className="mono" style={{color:'var(--green)',marginTop:0}}>Main content order</p>
          <p style={{marginBottom:0}}>Hero → About → Jobs (Experience) → Featured → Projects → Contact</p>
        </div>
        <p>
          <code>src/components/index.js</code> re-exports components through the <code>@components</code>
          alias. The homepage imports those exports rather than reaching into each component file directly.
          The shared Layout receives Gatsby's <code>location</code> prop, identifies the home route, and
          coordinates the intro loader and common page chrome.
        </p>
      </section>

      <section id="appearance">
        <span className="section-no">04 / VISUAL DESIGN</span>
        <h2>The visual language</h2>
        <p>
          The portfolio uses a dark, technical editorial style: deep navy surfaces, muted blue-grey
          text, a bright lime accent, monospaced labels, generous spacing and restrained borders.
          Project cards use layered dark gradients and wide preview areas.
        </p>
        <div className="swatches">
          <div className="swatch"><div className="swatch-color" style={{background:'#050812'}} /><span>Dark canvas<br/>#050812</span></div>
          <div className="swatch"><div className="swatch-color" style={{background:'#080f1e'}} /><span>Navy surface<br/>#080F1E</span></div>
          <div className="swatch"><div className="swatch-color" style={{background:'#a8ff60'}} /><span>Accent green<br/>#A8FF60</span></div>
          <div className="swatch"><div className="swatch-color" style={{background:'#8892b0'}} /><span>Muted text<br/>#8892B0</span></div>
        </div>
        <div className="grid" style={{marginTop:18}}>
          <article className="card"><h3>Navigation</h3><p>Fixed top bar with logo, numbered links, mobile menu, active-section highlight and a thin reading-progress line. It responds to scroll direction.</p></article>
          <article className="card"><h3>Hero and sections</h3><p>Large typography and clear hierarchy establish the introduction; numbered section headings keep the long page easy to scan.</p></article>
          <article className="card"><h3>Project cards</h3><p>Responsive grid, wide image stage, technology chips and source/live links. Image loading has a local path and remote fallback.</p></article>
          <article className="card"><h3>Responsive layout</h3><p>Navigation collapses to a menu on smaller screens; project grids and content columns collapse into a single column.</p></article>
        </div>
      </section>

      <section id="motion">
        <span className="section-no">05 / MOTION & ACCESSIBILITY</span>
        <h2>What moves, and why</h2>
        <div className="table-wrap"><table>
          <thead><tr><th>Behavior</th><th>Implementation</th><th>Purpose</th></tr></thead>
          <tbody>
            <tr><td>Intro loader</td><td><code>loader.js</code> + <code>layout.js</code></td><td>Short branded entry on the home page; session storage remembers completion for the browser tab session.</td></tr>
            <tr><td>Section reveals</td><td>ScrollReveal + section effects</td><td>Content enters subtly as it reaches the viewport.</td></tr>
            <tr><td>Navigation motion</td><td>CSS transitions + scroll hooks</td><td>Header reacts to scroll direction; active section and page progress remain visible.</td></tr>
            <tr><td>Route transitions</td><td><code>gatsby-browser.js</code> + global styles</td><td>Short fade/shift when changing Gatsby routes.</td></tr>
            <tr><td>Reduced motion</td><td><code>usePrefersReducedMotion</code> + CSS media queries</td><td>Non-essential animation is skipped or disabled when the system preference requests reduced motion.</td></tr>
          </tbody>
        </table></div>
        <p className="callout">When adding an animation, check both the JavaScript reduced-motion hook and the CSS <code>prefers-reduced-motion</code> rule. Motion should never be required to understand or use the page.</p>
      </section>

      <section id="content-editing">
        <span className="section-no">06 / CONTENT MANAGEMENT</span>
        <h2>Where to edit portfolio content</h2>
        <div className="table-wrap"><table>
          <thead><tr><th>Change needed</th><th>Start here</th></tr></thead>
          <tbody>
            <tr><td>Intro / hero copy</td><td><code>src/components/sections/hero.js</code></td></tr>
            <tr><td>About text and profile details</td><td><code>src/components/sections/about.js</code></td></tr>
            <tr><td>Experience entries</td><td><code>content/jobs/</code> and <code>src/components/sections/jobs.js</code></td></tr>
            <tr><td>Featured work</td><td><code>content/featured/</code> and <code>src/components/sections/featured.js</code></td></tr>
            <tr><td>Additional projects</td><td><code>content/projects/</code> and <code>src/components/sections/projects.js</code></td></tr>
            <tr><td>Contact copy and email</td><td><code>src/components/sections/contact.js</code> and <code>src/config.js</code></td></tr>
            <tr><td>Navigation and social links</td><td><code>src/config.js</code></td></tr>
            <tr><td>Colors, typography and global spacing</td><td><code>src/styles/variables.js</code>, <code>GlobalStyle.js</code>, <code>theme.js</code></td></tr>
            <tr><td>SEO title, description and social preview</td><td><code>gatsby-config.js</code> and <code>src/components/head.js</code></td></tr>
          </tbody>
        </table></div>
        <p>Project and experience content is queried by Gatsby from Markdown. Keep frontmatter fields aligned with the GraphQL query in the component that renders that content.</p>
      </section>

      <section id="run-deploy">
        <span className="section-no">07 / LOCAL DEVELOPMENT & DEPLOYMENT</span>
        <h2>From a code change to production</h2>
        <h3>Run locally</h3>
        <pre className="command">yarn install
yarn develop</pre>
        <p>Gatsby's development server prints the local URL in the terminal. A production build can be tested with:</p>
        <pre className="command">yarn build --prefix-paths</pre>
        <h3>Production pipeline</h3>
        <ol>
          <li>Commit and push changes to the <code>main</code> branch.</li>
          <li>GitHub Actions runs the workflow in <code>.github/workflows/deploy.yml</code>.</li>
          <li>The workflow installs dependencies with the lockfile, configures Pages and runs <code>yarn build --prefix-paths</code>.</li>
          <li>The generated <code>public/</code> directory is uploaded as a Pages artifact.</li>
          <li>The deploy job publishes that artifact to GitHub Pages.</li>
        </ol>
        <p>The Gatsby config uses <code>pathPrefix: '/v13'</code>, so internal assets and links must remain prefix-aware. The live site is served from the repository subpath.</p>
        <a className="back" href="https://github.com/AravindSAsok/v13/actions">OPEN DEPLOYMENT HISTORY ↗</a>
      </section>

      <section id="maintenance">
        <span className="section-no">08 / SAFE CHANGE CHECKLIST</span>
        <h2>Before merging or publishing</h2>
        <div className="grid">
          <article className="card"><h3>Keep the architecture simple</h3><p>Prefer editing the existing section or shared component over adding another abstraction for a one-off behavior.</p></article>
          <article className="card"><h3>Protect content and assets</h3><p>Preserve existing Markdown frontmatter, image paths, alt text, external links and the Gatsby path prefix.</p></article>
          <article className="card"><h3>Check all screen sizes</h3><p>Verify desktop navigation, mobile menu, project-card stacking, image fit and heading wrapping.</p></article>
          <article className="card"><h3>Check accessibility</h3><p>Keep semantic headings, keyboard focus, skip-to-content, meaningful image descriptions and reduced-motion support.</p></article>
        </div>
      </section>

      <a className="back" href="/v13/">← BACK TO PORTFOLIO</a>
    </Page>
  </Layout>
);

export default KnowledgeTransfer;
