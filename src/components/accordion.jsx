import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import IconPlusCircle from './icons/plusCircle';
import IconMinusCircle from './icons/minusCircle';

const Accordion = ({ titleHeadingLevel: Heading, items }) => {
  const accordionRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion !== index) {
      setOpenAccordion(index);
    } else {
      setOpenAccordion(null);
    }
  };
  return (
    <section className="accordion">
      {items.map((item, index) => (
        <article className="accordion__item" key={item.title}>
          <Heading>
            <button
              type="button"
              className="accordion__button"
              onClick={() => handleAccordionClick(index)}
              aria-expanded={openAccordion === index ? 'true' : 'false'}
            >
              <div>
                <span className="accordion__number">{`0${index + 1}`}</span>
                <span className="accordion__title">{item.title}</span>
              </div>
              <span className="accordion__icon">
                {openAccordion === index ? (
                  <IconMinusCircle />
                ) : (
                  <IconPlusCircle />
                )}
              </span>
            </button>
          </Heading>
          <div
            className={`accordion__content ${
              openAccordion === index ? 'is-open' : 'is-closed'
            }`}
            hidden={openAccordion !== index}
            dangerouslySetInnerHTML={{ __html: item.content }}
            ref={accordionRef}
          />
        </article>
      ))}
    </section>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  titleHeadingLevel: PropTypes.string,
};

Accordion.defaultProps = {
  titleHeadingLevel: 'h2',
};

export default Accordion;
