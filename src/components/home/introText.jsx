import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const IntroText = () => (
  <section className="home__intro-text">
    <div className="container">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <p>
          Meet the first Black owned creative talent agency founded by Black
          (award winning) creatives.
        </p>
      </AnimationOnScroll>
    </div>
  </section>
);

export default IntroText;
