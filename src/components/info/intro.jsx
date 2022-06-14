import React from 'react';
import PropTypes from 'prop-types';

const InfoIntro = ({ introCopy }) => (
  <section className="info__intro">
    <h1 className="info__intro-heading">
      Be a part of
      <br />
      changing
      <br />
      the future.
    </h1>
    <p className="info__intro-copy">{introCopy}</p>
  </section>
);

InfoIntro.propTypes = {
  introCopy: PropTypes.string.isRequired,
};

export default InfoIntro;
