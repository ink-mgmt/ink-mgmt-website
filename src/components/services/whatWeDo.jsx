import React from 'react';

import Accordion from '../accordion';

const accordionItems = [
  {
    title: 'Source',
    subtitle: 'Talent finds talent',
    content:
      '<p><b>We provide a curated approach to sourcing the best talent of all levels for organizations looking for fulltime and freelance staffing.</b><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit quam enim, fringilla risus, a. Id convallis eget mattis ac elit bibendum commodo. Eu in hac nisi, libero aliquet ullamcorper vitae.<br /><br />[insert contact info]</p>',
  },
  {
    title: 'Create',
    subtitle: 'Providing new perspectives',
    content:
      '<p><b>We provide a curated approach to sourcing the best talent of all levels for organizations looking for fulltime and freelance staffing.</b><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit quam enim, fringilla risus, a. Id convallis eget mattis ac elit bibendum commodo. Eu in hac nisi, libero aliquet ullamcorper vitae.',
  },
  {
    title: 'Consult',
    subtitle: 'Finding places where authenticity can&nbsp;flourish',
    content:
      '<p><b>We provide a curated approach to sourcing the best talent of all levels for organizations looking for fulltime and freelance staffing.</b><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit quam enim, fringilla risus, a. Id convallis eget mattis ac elit bibendum commodo. Eu in hac nisi, libero aliquet ullamcorper vitae.',
  },
];

const ServicesWhatWeDo = () => (
  <section className="services__what-we-do">
    <h1 className="services__what-we-do-heading">
      <span>What</span> <span>we</span> <span>do</span>
    </h1>
    <div className="services__what-we-do-accordions">
      <Accordion items={accordionItems} />
    </div>
  </section>
);

export default ServicesWhatWeDo;
