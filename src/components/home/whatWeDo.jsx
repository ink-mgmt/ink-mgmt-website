import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Button from '../patterns/button';

const WhatWeDo = forwardRef(({ isInView, setMenuTextIsLight }, ref) => {
  useEffect(() => {
    setMenuTextIsLight(isInView);
  }, [isInView, setMenuTextIsLight]);

  return (
    <section className="home__what-we-do" ref={ref}>
      <h2 className="home__what-we-do-heading">Services</h2>
      <div className="what-we-do__list">
        <AnimationOnScroll
          className="what-we-do__item"
          animateIn="animate__fadeInDown"
          animateOnce
        >
          <span className="what-we-do__item-number">01</span>
          <div className="what-we-do__item-container">
            <p className="what-we-do__item-name">Source</p>
            <p className="what-we-do__item-detail what-we-do__item-small">
              Curated search
            </p>
            <p className="what-we-do__item-detail what-we-do__item-large">
              Curated search for full time placements.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          className="what-we-do__item"
          animateIn="animate__fadeInDown"
          delay={300}
          animateOnce
        >
          <span className="what-we-do__item-number">02</span>
          <div className="what-we-do__item-container">
            <p className="what-we-do__item-name">Create</p>
            <p className="what-we-do__item-detail what-we-do__item-small">
              Special projects
            </p>
            <p className="what-we-do__item-detail what-we-do__item-large">
              Design teams to take on special projects.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          className="what-we-do__item"
          animateIn="animate__fadeInDown"
          delay={600}
          animateOnce
        >
          <span className="what-we-do__item-number">03</span>
          <div className="what-we-do__item-container">
            <p className="what-we-do__item-name">Consult</p>
            <p className="what-we-do__item-detail what-we-do__item-small">
              Culture consulting
            </p>
            <p className="what-we-do__item-detail what-we-do__item-large">
              Creating an inclusive creative culture.
            </p>
          </div>
        </AnimationOnScroll>
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
});

WhatWeDo.displayName = 'VideoHero';

WhatWeDo.propTypes = {
  isInView: PropTypes.bool,
  setMenuTextIsLight: PropTypes.func.isRequired,
};

WhatWeDo.defaultProps = {
  isInView: true,
};

export default WhatWeDo;
