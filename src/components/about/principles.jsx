/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { useWindowSize } from '../../hooks/useWindowSize';

const AboutPrinciples = ({ principles }) => {
  const size = useWindowSize();
  const isMedBreakpoint = size.width >= 767;

  return (
    <section className="about__principles">
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
            <h3
              className="principles__item-heading"
              dangerouslySetInnerHTML={{ __html: principle.title }}
            />
            <p className="principles__item-copy">{principle.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

AboutPrinciples.displayName = 'AboutPrinciples';

AboutPrinciples.propTypes = {
  principles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AboutPrinciples;
