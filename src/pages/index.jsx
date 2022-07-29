import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/home/hero';
import IntroText from '../components/home/introText';
import WhatWeDo from '../components/home/whatWeDo';
import GetInTouch from '../components/home/getInTouch';

import mobileBgImg from '../images/blue-paper-bg-vert.jpg';

const IndexPage = () => {
  const [heroIsScrolled, setHeroIsScrolled] = useState(false);

  return (
    <Layout
      headerLogoColor="#000"
      footerBgColor="transparent"
      footerTextColor="#000"
      heroIsScrolled={heroIsScrolled}
    >
      <SEO title="Home" meta={[{ name: 'theme-color', content: '#1601f8' }]} />
      <img src={mobileBgImg} alt="" className="home__mobile-bg" />
      <InView rootMargin="0px 0px -100% 0px">
        {({ inView, ref }) => (
          <Hero
            isInView={inView}
            setHeroIsScrolled={setHeroIsScrolled}
            ref={ref}
          />
        )}
      </InView>
      <div className="home__top-content">
        <IntroText />
        <WhatWeDo />
        <GetInTouch />
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default IndexPage;
