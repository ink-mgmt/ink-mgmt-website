/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';

const AboutPrinciples = () => {
  const size = useWindowSize();
  const isMedBreakpoint = size.width >= 767;

  return (
    <section className="about__principles">
      <h2 className="principles__heading">We have principles</h2>
      <div className="principles__list">
        <div className="principles__item" tabIndex={isMedBreakpoint ? 0 : null}>
          <span className="principles__item-number">01</span>
          <h3 className="principles__item-heading">
            People matter.
            <br /> Relationships
            <br /> matter more.
          </h3>
          <p className="principles__item-copy">
            Hear from us more than just when you update your LinkedIn Profile.
            Inserting your name and new job into a generic email isn&rsquo;t our
            style. We don&rsquo;t treat our candidates like some recruiters
            have. Our members will be joining a family and will be treated as
            such. With a care and concern that should stretch throughout their
            careers in whatever field they choose. And whatever plans they have
            beyond.
          </p>
        </div>

        <div className="principles__item" tabIndex={isMedBreakpoint ? 0 : null}>
          <span className="principles__item-number">02</span>
          <h3 className="principles__item-heading">
            Integrity.
            <br />
            Always.
          </h3>
          <p className="principles__item-copy">
            We have strong morals and principles. And that&rsquo;s not
            negotiable. We know that in creative fields many people take
            liberties with your ideas, your voice, and anything else to get
            ahead. We push to foster environments that provide creative growth
            without trampling on those around it.
          </p>
        </div>

        <div className="principles__item" tabIndex={isMedBreakpoint ? 0 : null}>
          <span className="principles__item-number">03</span>
          <h3 className="principles__item-heading">
            Keep it
            <br /> creative
          </h3>
          <p className="principles__item-copy">
            We push creative thought in everything we do. From the candidates we
            source to the chances we take in creating opportunities for them.
            What&rsquo;s the point of being founded by creatives if you
            don&rsquo;t take creative liberties with the traditional structure
            of staffing?
          </p>
        </div>

        <div className="principles__item" tabIndex={isMedBreakpoint ? 0 : null}>
          <span className="principles__item-number">04</span>
          <h3 className="principles__item-heading">
            Embrace
            <br /> and evolve
          </h3>
          <p className="principles__item-copy">
            The enemy of progress is the phrase &ldquo;that&rsquo;s how
            it&rsquo;s always been done.&rdquo;. There will always be better
            ways to source talent and to get talent the best opportunities
            possible. And we&rsquo;ll be open to whatever will give them the
            best shot at success. You can either provoke change or succumb to
            it. We prefer the former.
          </p>
        </div>

        <div className="principles__item" tabIndex={isMedBreakpoint ? 0 : null}>
          <span className="principles__item-number">05</span>
          <h3 className="principles__item-heading">
            Talent
            <br /> finds talent
          </h3>
          <p className="principles__item-copy">
            We have a different point of view on creatives. Where to find the
            most creative people. Not just from ad school. Not just poaching
            from another agency. Because there will always be better ways to
            source talent and to get talent the best opportunities possible. And
            we&rsquo;ll be open to whatever will give them the best shot at
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

AboutPrinciples.propTypes = {};

AboutPrinciples.defaultProps = {};

export default AboutPrinciples;
