import React from 'react';

import Layout from '../components/layout';
import Logo from '../components/patterns/logo';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout
    headerLogoColor="transparent"
    footerBgColor="#b8b8b8"
    footerTextColor="#000"
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
    <section className="home__what-we-do container">
      <h2 className="what-we-do__heading">What We Do:</h2>
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
    </section>
    <section className="home__get-in-touch container">
      <a href="/">&rarr; Get in touch</a>
    </section>
  </Layout>
);

export default IndexPage;
