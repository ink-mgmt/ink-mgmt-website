import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const IntroText = () => (
  <section className="home__intro-text">
    <div className="container">
      <div className="home__intro-text-wrapper">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <span className="home__intro-text-group">
            Meet the first Black owned
          </span>
        </AnimationOnScroll>{' '}
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={300}
          animateOnce
        >
          <span className="home__intro-text-group">
            creative talent agency founded by
          </span>
        </AnimationOnScroll>{' '}
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={600}
          animateOnce
        >
          <span className="home__intro-text-group">
            Black (award winning) creatives.
          </span>
        </AnimationOnScroll>
      </div>
    </div>
  </section>
);

export default IntroText;
