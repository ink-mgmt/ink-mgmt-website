import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ServicesIntro from '../components/services/intro';
import ServicesWhatWeDo from '../components/services/whatWeDo';
import ServicesSubmitWork from '../components/services/submitWork';

const Services = () => (
  <Layout
    headerLogoColor="#fff"
    headerTextColor="#fff"
    footerBgColor="#0000f5"
    footerTextColor="#fff"
  >
    <SEO title="Services" />
    <ServicesIntro />
    <ServicesWhatWeDo />
    <ServicesSubmitWork />
  </Layout>
);

export default Services;
