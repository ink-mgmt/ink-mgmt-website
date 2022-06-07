import React from 'react';
// import PropTypes from 'prop-types';

import sixPercent from '../../images/six-percent.svg';

const ABetterPlace = () => (
  <section className="services__a-better-place">
    <div className="a-better-place__content-wrapper">
      <div className="a-better-place__figure">
        <img src={sixPercent} alt="6%" />
      </div>
      <div>
        <div className="a-better-place__copy">
          <p>
            In an industry-wide study of 165 agencies representing 40,000+
            employees, Blacks make up roughly 6% of the industry. The vast
            majority of those roles are admin or entry-level, and not leadership
            positions.
          </p>
          <p>
            Through a series of initiatives we will give young Black creatives
            opportunities to succeed in meaningful ways.
          </p>
          <p>
            <strong>
              To start we&rsquo;ll take 6% of our placement fees and put it
              towards a scholarship program for Black creatives.
            </strong>
          </p>
        </div>
        <div className="a-better-place__tag">
          <p>A better place for placement&nbsp;fees.</p>
        </div>
      </div>
    </div>
  </section>
);

ABetterPlace.propTypes = {};

ABetterPlace.defaultProps = {};

export default ABetterPlace;
