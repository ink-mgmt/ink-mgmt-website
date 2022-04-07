import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

import VideoHero from '../components/home/videoHero';
import IntroText from '../components/home/introText';
import WhatWeDo from '../components/home/whatWeDo';
import GetInTouch from '../components/home/getInTouch';

const IndexPage = ({ location }) => (
  <Layout
    headerLogoColor="transparent"
    footerBgColor="#b8b8b8"
    footerTextColor="#000"
    location={location}
  >
    <SEO title="Home" />
    <VideoHero />
    <div className="home__top-content">
      <IntroText />
      <WhatWeDo />
      <GetInTouch />
    </div>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default IndexPage;
