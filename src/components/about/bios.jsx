import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import image01 from '../../images/about-image-grid-01.jpg';
import image02 from '../../images/about-image-grid-02.jpg';
import image03 from '../../images/about-image-grid-03.jpg';
import image04 from '../../images/about-image-grid-04.jpg';
import image05 from '../../images/about-image-grid-05.jpg';
import image06 from '../../images/about-image-grid-06.jpg';
import image07 from '../../images/about-image-grid-07.jpg';
import image08 from '../../images/about-image-grid-08.jpg';
import image09 from '../../images/about-image-grid-09.jpg';
import image10 from '../../images/about-image-grid-10.jpg';
import image11 from '../../images/about-image-grid-11.jpg';
import image12 from '../../images/about-image-grid-12.jpg';
import image13 from '../../images/about-image-grid-13.jpg';
import image14 from '../../images/about-image-grid-14.jpg';
import image15 from '../../images/about-image-grid-15.jpg';
import image16 from '../../images/about-image-grid-16.jpg';

const AboutBios = ({ bios }) => (
  <section className="about__bios">
    <div className="about__bios-content">
      <div className="about__bios-image-grid">
        <div className="image-grid">
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={300}
            animateOnce
          >
            <img src={image01} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={100}
            animateOnce
          >
            <img src={image02} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={700}
            animateOnce
          >
            <img src={image03} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={1200}
            animateOnce
          >
            <img src={image04} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={600}
            animateOnce
          >
            <img src={image05} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={500}
            animateOnce
          >
            <img src={image06} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={200}
            animateOnce
          >
            <img src={image07} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={800}
            animateOnce
          >
            <img src={image08} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={1000}
            animateOnce
          >
            <img src={image09} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={400}
            animateOnce
          >
            <img src={image10} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={1000}
            animateOnce
          >
            <img src={image11} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={900}
            animateOnce
          >
            <img src={image12} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={1300}
            animateOnce
          >
            <img src={image13} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={600}
            animateOnce
          >
            <img src={image14} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={300}
            animateOnce
          >
            <img src={image15} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="image-grid__image"
            animateIn="animate__fadeInUp"
            duration={2}
            delay={1100}
            animateOnce
          >
            <img src={image16} alt="" />
          </AnimationOnScroll>
        </div>
      </div>
      <div className="about__bios-copy-wrapper">
        {bios.map((bio) => (
          <div className="bio" key={bio.lastName}>
            <div className="bio__header">
              <h2 className="bio__name">
                <span>{bio.firstName}</span> <span>{bio.lastName}</span>
              </h2>
              <div className="bio__titles">
                {bio.titles.map((title) => (
                  <span key={title.title}>{title.title}</span>
                ))}
              </div>
            </div>
            <p className="bio__copy">{bio.copy}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

AboutBios.displayName = 'AboutBios';

AboutBios.propTypes = {
  bios: PropTypes.arrayOf(
    PropTypes.shape({
      copy: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      titles: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default AboutBios;
