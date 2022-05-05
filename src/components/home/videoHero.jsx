import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';

import blobVideo from '../../images/blob-video.webm';

const VideoHero = forwardRef(({ isInView, setVideoHeroIsScrolled }, ref) => {
  useEffect(() => {
    setVideoHeroIsScrolled(!isInView);
  }, [isInView, setVideoHeroIsScrolled]);

  return (
    <section className="home__video-hero" ref={ref}>
      <div className="home__video-hero-content">
        <h1 className="visuallyhidden">Ink Mgmt</h1>
        <div className="home__video-hero-video zoom">
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ backgroundColor: 'transparent' }}
          >
            <source src={blobVideo} type="video/webm" />
          </video>
        </div>
        <Logo />
      </div>
    </section>
  );
});

VideoHero.displayName = 'VideoHero';

VideoHero.propTypes = {
  isInView: PropTypes.bool,
  setVideoHeroIsScrolled: PropTypes.func.isRequired,
};

VideoHero.defaultProps = {
  isInView: true,
};
export default VideoHero;
