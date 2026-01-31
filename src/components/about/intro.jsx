/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const AboutIntro = ({ introHeading, introCopy }) => (
  <section className="about__intro container">
    <div className="about__intro-content">
      <div className="about__intro-wrapper">
        <h1 className="about__intro-heading">{introHeading}</h1>
        <div
          className="about__intro-copy"
          dangerouslySetInnerHTML={{ __html: introCopy }}
        />
      </div>
    </div>
  </section>
);

AboutIntro.propTypes = {
  introHeading: PropTypes.string.isRequired,
  introCopy: PropTypes.string.isRequired,
};

export default AboutIntro;
