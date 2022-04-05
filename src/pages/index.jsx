import React from 'react';
import PropTypes from 'prop-types';

import GiantLink from '../components/giantLink';
import Layout from '../components/layout';
import Logo from '../components/patterns/logo';
import SEO from '../components/seo';

const IndexPage = ({ location }) =>
  console.log('location:', location) || (
    <Layout
      headerLogoColor="transparent"
      footerBgColor="#b8b8b8"
      footerTextColor="#000"
      location={location}
    >
      <SEO title="Home" />
      <section className="home__video">
        <div className="home__video-content container">
          <h1 className="visuallyhidden">Ink Mgmt</h1>
          <Logo />
        </div>
      </section>
      <section className="home__intro-text container">
        <p>
          Meet the first Black owned creative talent agency founded by Black
          (award winning) creatives.
        </p>
      </section>
      <section className="home__what-we-do">
        <div className="what-we-do__container">
          <h2 className="what-we-do__heading">
            <span className="what">What</span> <span className="we">We</span>{' '}
            <span className="do">Do:</span>
          </h2>
          <div className="what-we-do__list">
            <div className="what-we-do__item">
              <span className="what-we-do__item-number">01</span>
              <div className="what-we-do__item-container">
                <p className="what-we-do__item-name">Source</p>
                <p className="what-we-do__item-detail">Curated search</p>
              </div>
            </div>
            <div className="what-we-do__item">
              <span className="what-we-do__item-number">02</span>
              <div className="what-we-do__item-container">
                <p className="what-we-do__item-name">Create</p>
                <p className="what-we-do__item-detail">Special projects</p>
              </div>
            </div>
            <div className="what-we-do__item">
              <span className="what-we-do__item-number">03</span>
              <div className="what-we-do__item-container">
                <p className="what-we-do__item-name">Consult</p>
                <p className="what-we-do__item-detail">Culture consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__get-in-touch">
        <div className="home__get-in-touch-container">
          <GiantLink linkText="Get in touch" linkURL="mailto:tbd@inkmgmt.com" />
        </div>
      </section>
    </Layout>
  );

IndexPage.propTypes = {
  location: PropTypes.shape({}).isRequired,
};
export default IndexPage;
