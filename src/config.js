module.exports = {
  email: 'aravindsasok@outlook.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AravindSAsok',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aravind-asok/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#a8ff60',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: {
      top: 75,
      right: 0,
      bottom: 0,
      left: 0,
    },
  }),
};
