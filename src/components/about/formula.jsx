import React from 'react';
import PropTypes from 'prop-types';

const AboutFormula = ({ formulaCopy }) => (
  <section className="about__formula">
    <div className="formula__heading-wrapper">
      <h2 className="formula__heading">The Formula</h2>
      <p className="formula__sub-heading">
        <span className="formula__sub-heading formula__sub-heading--top">
          Creative<span>+</span>
        </span>{' '}
        <span className="formula__sub-heading formula__sub-heading--bottom">
          Recruiting
        </span>
      </p>
    </div>
    <p className="formula__copy">
      <span dangerouslySetInnerHTML={{ __html: formulaCopy }} />
    </p>
  </section>
);

AboutFormula.propTypes = {
  formulaCopy: PropTypes.string.isRequired,
};

export default AboutFormula;
