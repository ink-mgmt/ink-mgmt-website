/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import AboutIntro from '../components/about/intro';
import AboutBios from '../components/about/bios';
import AboutFormula from '../components/about/formula';
import AboutPrinciples from '../components/about/principles';

const About = () => (
  <Layout headerLogoColor="#000" footerBgColor="#000" footerTextColor="#fff">
    <SEO title="About" />
    <AboutIntro />
    <AboutBios />
    <AboutFormula />
    <AboutPrinciples />
  </Layout>
);

export default About;
