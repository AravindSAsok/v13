# Aravind S Asok - Portfolio

Personal portfolio for Aravind S Asok, focused on backend engineering and AI applications. Built with Gatsby, React, and styled-components.

## Run locally

Use Node.js 16.20.2, install the dependencies, and start Gatsby:

```sh
nvm install 16.20.2
nvm use 16.20.2
yarn install
yarn develop
```

Create and preview a production build with:

```sh
yarn build
yarn serve
```

## Portfolio content

- `content/jobs/` contains the experience entries shown on the homepage.
- `content/featured/` contains the featured project descriptions.
- `content/projects/` contains the other project cards and archive entries.
- Project Markdown uses an `order` field to control homepage display order and an `image` path for screenshots stored in `static/projects/`.
- `src/config.js` contains contact details, social links, navigation, and site colors.
- `src/images/logo.png` is the site icon; `static/og.png` is the social preview image.

The original MIT license notice is preserved in [LICENSE](LICENSE).
