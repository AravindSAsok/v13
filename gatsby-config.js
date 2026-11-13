const config = require('./src/config');

module.exports = {
  pathPrefix: '/v13',

  siteMetadata: {
    title: 'Aravind S Asok',
    description:
      'Aravind S Asok is a Software Engineer focused on building scalable backend systems, reliable APIs, and AI-powered applications.',
    siteUrl: 'https://aravindsasok.github.io/v13',
    image: '/og.png',
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Aravind S Asok',
        short_name: 'Aravind S Asok',
        start_url: '/v13/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },

    // Offline caching is disabled while the portfolio is served from a GitHub Pages subpath.

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },

          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: {
                color: config.colors.green,
              },
            },
          },

          {
            resolve: 'gatsby-remark-code-titles',
          },

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,

              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],

              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },

    // Google Analytics disabled for now.
    // Add your own tracking ID later if needed.
  ],
};
