import React from 'react';

const IconLoader = () => (
  <svg id="loader-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Aravind Logo</title>

    <g>
      {/* Hexagon */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="
          M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28
          z
        "
      />

      {/* A */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="
          M50 27
          L34 68
          H40
          L43.5 58
          H56.5
          L60 68
          H66
          L50 27
          Z

          M50 36
          L54.5 53
          H45.5
          Z
        "
      />
    </g>
  </svg>
);

export default IconLoader;
