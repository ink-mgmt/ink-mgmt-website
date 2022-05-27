import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';

import blobImage from '../../images/ink-mgmt-blob-black-large.png';

const Hero = forwardRef(({ isInView, setHeroIsScrolled }, ref) => {
  useEffect(() => {
    setHeroIsScrolled(!isInView);
  }, [isInView, setHeroIsScrolled]);

  return (
    <section className="home__hero" ref={ref}>
      <div className="home__hero-content">
        <h1 className="visuallyhidden">Ink Mgmt</h1>
        <div className="home__hero-blob fadeInAndGrow">
          <img src={blobImage} alt="Ink Mgmt blob logo" />
        </div>
        <Logo />
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

Hero.propTypes = {
  isInView: PropTypes.bool,
  setHeroIsScrolled: PropTypes.func.isRequired,
};

Hero.defaultProps = {
  isInView: true,
};

export default Hero;
