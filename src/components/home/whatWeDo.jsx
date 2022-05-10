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
      <div className="what-we-do__container">
        <h2 className="what-we-do__heading">
          <AnimationOnScroll
            className="what-we-do__heading-word"
            animateIn="animate__fadeInUp"
            animateOnce
          >
            <span className="what">What</span>
          </AnimationOnScroll>{' '}
          <AnimationOnScroll
            className="what-we-do__heading-word"
            animateIn="animate__fadeInUp"
            animateOnce
            delay={300}
          >
            <span className="we">We</span>
          </AnimationOnScroll>{' '}
          <AnimationOnScroll
            className="what-we-do__heading-word"
            animateIn="animate__fadeInUp"
            animateOnce
            delay={600}
          >
            <span className="do">Do:</span>
          </AnimationOnScroll>
        </h2>
        <div className="what-we-do__list">
          <AnimationOnScroll
            className="what-we-do__item"
            animateIn="animate__fadeInDown"
            animateOnce
          >
            <span className="what-we-do__item-number">01</span>
            <div className="what-we-do__item-container">
              <p className="what-we-do__item-name">Source</p>
              <p className="what-we-do__item-detail">Curated search</p>
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
              <p className="what-we-do__item-detail">Special projects</p>
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
              <p className="what-we-do__item-detail">Culture consulting</p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>

      <AnimationOnScroll animateIn="animate__fadeInUp" delay={900} animateOnce>
        <Button
          ariaLabel="Learn more about our services"
          ctaText="Learn more"
          ctaUrl="/services"
          classes="home__what-we-do-cta"
          isReversed
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
