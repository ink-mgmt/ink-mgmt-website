/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { useWindowSize } from '../../hooks/useWindowSize';

const AboutPrinciples = forwardRef(
  ({ principles, isInView, setMenuTextIsLight }, ref) => {
    const size = useWindowSize();
    const isMedBreakpoint = size.width >= 767;

    useEffect(() => {
      setMenuTextIsLight(isInView);
    }, [isInView, setMenuTextIsLight]);

    return (
      <section className="about__principles" ref={ref}>
        <h2 className="principles__heading">
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <span>We have</span>
          </AnimationOnScroll>{' '}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <span>principles</span>
          </AnimationOnScroll>
        </h2>
        <div className="principles__list">
          {principles.map((principle, index) => (
            <div
              className="principles__item"
              tabIndex={isMedBreakpoint ? 0 : null}
              key={principle.title}
            >
              <span className="principles__item-number">{`0${index + 1}`}</span>
              <h3 className="principles__item-heading">{principle.title}</h3>
              <p className="principles__item-copy">{principle.copy}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
);

AboutPrinciples.displayName = 'AboutPrinciples';

AboutPrinciples.propTypes = {
  principles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isInView: PropTypes.bool,
  setMenuTextIsLight: PropTypes.func.isRequired,
};

AboutPrinciples.defaultProps = {
  isInView: true,
};

export default AboutPrinciples;
