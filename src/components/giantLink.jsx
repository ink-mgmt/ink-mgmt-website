import React from 'react';
import PropTypes from 'prop-types';

const GiantLink = ({ color, linkURL, linkText }) => (
  <a className="giant-link" href={linkURL} style={{ color }}>
    <span className="giant-link__arrow">&rarr;</span> {linkText}
  </a>
);

GiantLink.propTypes = {
  color: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
};

GiantLink.defaultProps = {
  color: '#000',
};

export default GiantLink;
