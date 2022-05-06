/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Layout from '../components/layout';
import SEO from '../components/seo';

import AboutIntro from '../components/about/intro';
import AboutBios from '../components/about/bios';
import AboutFormula from '../components/about/formula';
import AboutPrinciples from '../components/about/principles';

const About = () => {
  const [menuTextIsLight, setMenuTextIsLight] = useState(false);

  return (
    <Layout
      headerLogoColor="#000"
      footerBgColor="#000"
      footerTextColor="#fff"
      menuTextIsLight={menuTextIsLight}
    >
      <SEO title="About" meta={[{ name: 'theme-color', content: '#ffffff' }]} />
      <AboutIntro />
      <InView rootMargin="0px 0px -97% 0px">
        {({ inView, ref }) => (
          <AboutBios
            isInView={inView}
            setMenuTextIsLight={setMenuTextIsLight}
            ref={ref}
          />
        )}
      </InView>
      <AboutFormula />
      <InView rootMargin="0px 0px -97% 0px">
        {({ inView, ref }) => (
          <AboutPrinciples
            isInView={inView}
            setMenuTextIsLight={setMenuTextIsLight}
            ref={ref}
          />
        )}
      </InView>
    </Layout>
  );
};

export default About;
