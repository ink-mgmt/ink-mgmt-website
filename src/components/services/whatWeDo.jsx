import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '../accordion';

const ServicesWhatWeDo = ({ accordionItems }) => (
  <section className="services__what-we-do">
    <h1 className="services__what-we-do-heading">
      <span>What</span> <span>we</span> <span>do</span>
    </h1>
    <div className="services__what-we-do-accordions">
      <Accordion items={accordionItems} />
    </div>
  </section>
);

ServicesWhatWeDo.propTypes = {
  accordionItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ServicesWhatWeDo;
