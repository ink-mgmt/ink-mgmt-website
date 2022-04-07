import React from 'react';

import Accordion from '../accordion';

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
