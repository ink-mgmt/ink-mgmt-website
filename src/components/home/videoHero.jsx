import React from 'react';

import Logo from './logo';

import blobVideo from '../../images/blob-video.webm';

const VideoHero = () => (
  <section className="home__video-hero">
    <div className="home__video-hero-content">
      <h1 className="visuallyhidden">Ink Mgmt</h1>
      <div className="home__video-hero-video zoom">
        <video autoPlay muted loop>
          <source src={blobVideo} type="video/webm" />
        </video>
      </div>
      <Logo />
    </div>
  </section>
);

export default VideoHero;
