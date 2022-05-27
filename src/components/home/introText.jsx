import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Button from '../patterns/button';

const IntroText = () => (
  <section className="home__intro-text">
    <h2 className="home__intro-text-heading">About</h2>
    <div className="container">
      <div className="home__intro-text-wrapper">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <span className="home__intro-text-group">Meet the first black</span>
        </AnimationOnScroll>{' '}
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={300}
          animateOnce
        >
          <span className="home__intro-text-group">owned creative talent</span>
        </AnimationOnScroll>{' '}
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={600}
          animateOnce
        >
          <span className="home__intro-text-group">
            agency founded by Black
          </span>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={900}
          animateOnce
        >
          <span className="home__intro-text-group">
            (award winning) creatives.
          </span>
        </AnimationOnScroll>
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

export default IntroText;
