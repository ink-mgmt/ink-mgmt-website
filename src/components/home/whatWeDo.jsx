import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const WhatWeDo = () => (
  <section className="home__what-we-do">
    <div className="what-we-do__container">
      <h2 className="what-we-do__heading">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <span className="what">What</span>
        </AnimationOnScroll>{' '}
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          delay="300"
        >
          <span className="we">We</span>
        </AnimationOnScroll>{' '}
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          delay="600"
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
          delay="300"
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
          delay="600"
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
  </section>
);

export default WhatWeDo;
