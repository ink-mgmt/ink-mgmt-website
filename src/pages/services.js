import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Accordion from '../components/accordion';
import GiantLink from '../components/giantLink';

const accordionItems = [
  {
    title: 'Source',
    content:
      '<p><b>TALENT FINDS TALENT</b><br /><br /><b>We provide a curated approach to sourcing the best talent of all levels for organizations looking for fulltime and freelance staffing.</b><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit quam enim, fringilla risus, a. Id convallis eget mattis ac elit bibendum commodo. Eu in hac nisi, libero aliquet ullamcorper vitae.<br /><br />[insert contact info]</p>',
  },
  {
    title: 'Create',
    content:
      '<p>PROVIDING NEW PERSPECTIVES<br /><br /><b>We provide a curated approach to sourcing the best talent of all levels for organizations looking for fulltime and freelance staffing.</b><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit quam enim, fringilla risus, a. Id convallis eget mattis ac elit bibendum commodo. Eu in hac nisi, libero aliquet ullamcorper vitae.',
  },
  {
    title: 'Consult',
    content:
      '<p>FINDING PLACES WHERE AUTHENTICITY CAN FLOURISH<br /><br /><b>We provide a curated approach to sourcing the best talent of all levels for organizations looking for fulltime and freelance staffing.</b><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit quam enim, fringilla risus, a. Id convallis eget mattis ac elit bibendum commodo. Eu in hac nisi, libero aliquet ullamcorper vitae.',
  },
];

const Services = () => (
  <Layout
    headerLogoColor="#fff"
    headerTextColor="#fff"
    footerBgColor="#0000f5"
    footerTextColor="#fff"
  >
    <SEO title="Services" />
    <section className="services__intro">
      <div className="services__intro-content">
        <h1 className="services__intro-heading">
          A better place for place-
          <br />
          ment fees.
        </h1>
        <p className="services__intro-copy">
          In an industry-wide study of 165 agencies representing 40,000+
          employees, Blacks make up roughly 6% of the industry. The vast
          majority of those roles are admin or entry-level, and not leadership
          positions. Through a series of initiatives we will give young Black
          creatives opportunities to succeed in meaningful ways. To start we’ll
          take 6% of our placement fees and put it towards a scholarship program
          for Black creatives.
        </p>
      </div>
    </section>
    <section className="services__what-we-do">
      <h1 className="services__what-we-do-heading">
        <span>What</span> <span>we</span> <span>do</span>
      </h1>
      <div className="services__what-we-do-accordions">
        <Accordion items={accordionItems} />
      </div>
    </section>
    <section className="services__submit-work">
      <div className="services__submit-work-container">
        <GiantLink
          linkText="Submit Work"
          linkURL="mailto:tbd@inkmgmt.com"
          color="#fff"
        />
      </div>
    </section>
  </Layout>
);

export default Services;
