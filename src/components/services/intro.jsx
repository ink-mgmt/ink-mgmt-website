import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ServicesIntro = ({ introCopy }) => (
  <section className="services__intro">
    <div className="services__intro-content">
      <h1 className="services__intro-heading">
        <AnimationOnScroll animateIn="animate__fadeInUp" offset={0} animateOnce>
          <span>A better</span>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          offset={0}
          delay={300}
          animateOnce
        >
          <span>place for</span>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          offset={0}
          delay={600}
          animateOnce
        >
          <span>place-</span>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          offset={0}
          delay={900}
          animateOnce
        >
          <span>ment fees.</span>
        </AnimationOnScroll>
      </h1>
      <p className="services__intro-copy">{introCopy}</p>
    </div>
  </section>
);

ServicesIntro.propTypes = {
  introCopy: PropTypes.string.isRequired,
};

export default ServicesIntro;
