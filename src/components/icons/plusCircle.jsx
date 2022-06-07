import React from 'react';
import PropTypes from 'prop-types';

const IconPlusCircle = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="7" stroke="#ceccc7" />
    <line x1="7.8584" y1="3.42767" x2="7.8584" y2="11.5705" stroke="#ceccc7" />
    <line
      x1="11.5703"
      y1="7.85876"
      x2="3.42746"
      y2="7.85876"
      stroke="#ceccc7"
    />
  </svg>
);

IconPlusCircle.propTypes = {
  className: PropTypes.string,
};

IconPlusCircle.defaultProps = {
  className: '',
};

export default IconPlusCircle;
