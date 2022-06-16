import React from 'react';
import PropTypes from 'prop-types';

const LogoBlob = ({ className, color }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 360 360"
  >
    <path
      fill={color}
      d="M315,161.77c-3.2,31.9-1.51,59.13,8.13,85.59,2.26,6.18,3.27,12.88,4.33,19.43,3.56,22-2.75,34.45-22.75,43.32a87.88,87.88,0,0,1-21.61,6c-18.84,3-37.62,1.49-56.08-2.92-44.22-10.56-84.5-31.44-125.46-50.24-19.83-9.09-35.71-24.63-50.2-41C15.39,181.29,19.09,123,59.53,87.16c12.89-11.44,27.29-20.93,43.6-25.7,42.53-12.45,85.57-22.6,130.44-20,47,2.68,74.54,28.82,79.23,76.13C314.39,133.58,314.4,149.77,315,161.77Z"
    />
  </svg>
);

LogoBlob.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

LogoBlob.defaultProps = {
  className: '',
  color: '#fff',
};

export default LogoBlob;
