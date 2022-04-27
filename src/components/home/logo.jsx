import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ fillColor }) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 108.63"
    className="logo"
  >
    <path
      className="fade-in-down"
      style={{ animationDelay: '3s' }}
      fill={fillColor}
      d="M0,1.51H20.37V107.12H0Z"
    />
    <path
      className="fade-in-down"
      style={{ animationDelay: '3.125s' }}
      fill={fillColor}
      d="M61.25,107.12H40.88V1.51H76l43.91,91.58V1.51h20.37V107.12H105.15L61.25,15.54Z"
    />
    <path
      className="fade-in-down"
      style={{ animationDelay: '3.25s' }}
      fill={fillColor}
      d="M253.29,107.12H229.16L198.53,59,181.18,77.7v29.42H160.81V1.51h20.37V49L224.93,1.51H251L212.26,43.6Z"
    />
    <path
      className="fade-in-down"
      style={{ animationDelay: '3.375s' }}
      fill={fillColor}
      d="M386.8,48V65.35H263.09V48Z"
    />
    <path
      className="fade-in-down"
      style={{ animationDelay: '3.5s' }}
      fill={fillColor}
      d="M510.5,107.12V12.37L483,107.12H452.11L424.5,12.37v94.75H404.13V1.51h37.42L467.5,92,493.6,1.51h37.27V107.12Z"
    />
    <path
      className="fade-in-down"
      style={{ animationDelay: '3.625s' }}
      fill={fillColor}
      d="M544.12,54.32A53.36,53.36,0,0,1,598.44,0C626.35,0,644,14.64,649.59,36.81l-19.92,6.34c-3.17-15.69-14.79-24.29-30.93-24.29C579.88,18.86,565,33.49,565,54.32s13.73,35.45,33.49,35.45c16.9,0,25.8-12.07,27.61-20.82h-42.7V51.3h68.5v55.82H634.2V85.24c-6.49,14.64-19,23.39-37.57,23.39C567.21,109.08,543.67,85.85,544.12,54.32Z"
    />
    <path
      className="fade-in-down"
      style={{ animationDelay: '3.75s' }}
      fill={fillColor}
      d="M776.6,107.12V12.37l-27.46,94.75H718.21L690.6,12.37v94.75H670.24V1.51h37.41L733.6,92,759.7,1.51H797V107.12Z"
    />
    <path
      className="fade-in-down"
      style={{ animationDelay: '3.875s' }}
      fill={fillColor}
      d="M900,20.37H862.74v86.75H842.36V20.37H805V1.51h95Z"
    />
  </svg>
);

Logo.propTypes = {
  fillColor: PropTypes.string,
};

Logo.defaultProps = {
  fillColor: '#000',
};

export default Logo;
