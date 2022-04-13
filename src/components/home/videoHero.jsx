import React from 'react';

import Logo from '../patterns/logo';

import blobVideo from '../../images/blob-video.webm';

const VideoHero = () => (
  <section className="home__video-hero">
    <div className="home__video-hero-content">
      <h1 className="visuallyhidden">Ink Mgmt</h1>
      <video className="home__video-hero-video" autoPlay muted loop>
        <source src={blobVideo} type="video/webm" />
      </video>
      <Logo />
    </div>
  </section>
);

export default VideoHero;
