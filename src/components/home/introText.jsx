import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Button from '../patterns/button';

const IntroText = ({ data }) => (
  <section className="home__intro-text">
    <h2 className="home__intro-text-heading">About</h2>
    <div className="container">
      <div className="home__intro-text-wrapper">
        {data.map((line, index) => (
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay={index * 300}
            animateOnce
            key={line.introLine}
          >
            <span className="home__intro-text-group">{line.introLine}</span>
          </AnimationOnScroll>
        ))}

        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={1200}
          animateOnce
        >
          <Button
            ctaText="Get to know us"
            ctaUrl="/about"
            classes="home__intro-text-cta"
          />
        </AnimationOnScroll>
      </div>
    </div>
  </section>
);

IntroText.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      introLine: PropTypes.string,
    })
  ).isRequired,
};

export default IntroText;
