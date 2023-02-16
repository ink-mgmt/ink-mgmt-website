import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Button from '../patterns/button';

const WhatWeDo = ({ data }) => (
  <section className="home__what-we-do">
    <h2 className="home__what-we-do-heading">Services</h2>
    <div className="what-we-do__list">
      {data.map((service, index) => (
        <AnimationOnScroll
          className="what-we-do__item"
          animateIn="animate__fadeInDown"
          delay={index * 300}
          animateOnce
          key={service.subject}
        >
          <span className="what-we-do__item-number">{`0${index + 1}`}</span>
          <div className="what-we-do__item-container">
            <p className="what-we-do__item-name">{service.subject}</p>
            <p className="what-we-do__item-detail what-we-do__item-small">
              {service.shortDescription}
            </p>
            <p className="what-we-do__item-detail what-we-do__item-large">
              {service.longDescription}
            </p>
          </div>
        </AnimationOnScroll>
      ))}
    </div>

    <AnimationOnScroll animateIn="animate__fadeInUp" delay={900} animateOnce>
      <Button
        ariaLabel="Learn more about our services"
        ctaText="Learn more about what we do"
        ctaUrl="/services"
        classes="home__what-we-do-cta"
      />
    </AnimationOnScroll>
  </section>
);

WhatWeDo.displayName = 'WhatWeDo';

WhatWeDo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string,
      shortDescription: PropTypes.string,
      longDescription: PropTypes.string,
    })
  ).isRequired,
};

export default WhatWeDo;
