import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Info = () => (
  <Layout
    headerLogoColor="#fff"
    headerTextColor="#fff"
    footerBgColor="#000"
    footerTextColor="#fff"
  >
    <SEO title="Press" />
    <section className="info__intro">
      <h1 className="info__intro-heading">
        Let&rsquo;s get
        <br />
        to work.
      </h1>
      <p className="info__intro-copy">
        We are always on the lookout for great collaborators—clients who are
        passionate about their products and customers, and talent looking to do
        the best work of their lives. Get in touch here regarding new business,
        press inquiries, and media buying and planning. For jobs inquiries,
        please see the Jobs Opportunities section below.
      </p>
    </section>
    <section className="info__contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <h2 className="contacts__item-heading">General Inquiries</h2>
          <p className="contacts__item-name">Jason Pierce</p>
          <a className="contacts__item-link" href="mailto:jason@inkmgmt.com">
            jason@inkmgmt.com
          </a>
          <a className="contacts__item-link" href="tel:+1-222-333-4444">
            +1 222 333 4444
          </a>
          <a className="contacts__big-link" href="mailto:jason@inkmgmt.com">
            &rarr; General
          </a>
        </li>
        <li className="contacts__item">
          <h2 className="contacts__item-heading">Recruitment + Staffing</h2>
          <p className="contacts__item-name">Jane Doe</p>
          <a className="contacts__item-link" href="mailto:jane@inkmgmt.com">
            jane@inkmgmt.com
          </a>
          <a className="contacts__item-link" href="tel:+1-222-333-4444">
            +1 222 333 4444
          </a>
          <a className="contacts__big-link" href="mailto:jane@inkmgmt.com">
            &rarr; Staffing
          </a>
        </li>
        <li className="contacts__item">
          <h2 className="contacts__item-heading">General Inquires</h2>
          <p className="contacts__item-name">Jason Pierce</p>
          <a className="contacts__item-link" href="mailto:jason@inkmgmt.com">
            jason@inkmgmt.com
          </a>
          <a className="contacts__item-link" href="tel:+1-222-333-4444">
            +1 222 333 4444
          </a>
          <a className="contacts__big-link" href="mailto:jason@inkmgmt.com">
            &rarr; Talent
          </a>
        </li>
        <li className="contacts__item">
          <h2 className="contacts__item-heading">Job Opportunities</h2>
          <p className="contacts__item-name">Jason Pierce</p>
          <a className="contacts__item-link" href="mailto:jason@inkmgmt.com">
            jason@inkmgmt.com
          </a>
          <a className="contacts__item-link" href="tel:+1-222-333-4444">
            +1 222 333 4444
          </a>
          <a className="contacts__big-link" href="mailto:jason@inkmgmt.com">
            &rarr; Career
          </a>
        </li>
      </ul>
    </section>
  </Layout>
);

export default Info;
