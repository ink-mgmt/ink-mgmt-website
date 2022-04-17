import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import InfoIntro from '../components/info/intro';
import InfoContacts from '../components/info/contacts';

const Info = () => (
  <Layout
    headerLogoColor="#fff"
    headerTextColor="#fff"
    footerBgColor="#000"
    footerTextColor="#fff"
  >
    <SEO title="Info" />
    <div className="info__content">
      <InfoIntro />
      <InfoContacts />
    </div>
  </Layout>
);

export default Info;
