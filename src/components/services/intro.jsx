import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ServicesIntro = () => (
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
      <p className="services__intro-copy">
        In an industry-wide study of 165 agencies representing 40,000+
        employees, Blacks make up roughly 6% of the industry. The vast majority
        of those roles are admin or entry-level, and not leadership positions.
        Through a series of initiatives we will give young Black creatives
        opportunities to succeed in meaningful ways. To start we’ll take 6% of
        our placement fees and put it towards a scholarship program for Black
        creatives.
      </p>
    </div>
  </section>
);

export default ServicesIntro;
