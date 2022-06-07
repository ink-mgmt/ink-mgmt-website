import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ServicesIntro = () => (
  <section className="services__intro">
    <h1 className="services__intro-heading">
      <AnimationOnScroll animateIn="animate__fadeInUp" offset={0} animateOnce>
        <span>We exist to help</span>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        offset={0}
        delay={300}
        animateOnce
      >
        <span>black creators</span>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        offset={0}
        delay={600}
        animateOnce
      >
        <span>reach their fullest</span>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        offset={0}
        delay={900}
        animateOnce
      >
        <span>creative potential.</span>
      </AnimationOnScroll>
    </h1>
  </section>
);

export default ServicesIntro;
