import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import IconPlusCircle from './icons/plusCircle';
import IconMinusCircle from './icons/minusCircle';

const Accordion = ({ titleHeadingLevel: Heading, items }) => {
  const accordionRef = useRef(null);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isClosingClass, setIsClosingClass] = useState('');

  const handleAccordionClick = (index) => {
    if (openAccordions[0] !== index) {
      setIsClosingClass('');
      setOpenAccordions([index, ...openAccordions]);
    }

    if (openAccordions[0] === index) {
      setIsClosingClass('is-closing');

      setTimeout(() => {
        setOpenAccordions([]);
        setIsClosingClass('');
      }, 1000);
    }
  };

  useEffect(() => {
    if (openAccordions.length > 1 && openAccordions[0] !== openAccordions[1]) {
      setTimeout(() => {
        setOpenAccordions(openAccordions.slice(0, -1));
      }, 1000);
    }
  }, [openAccordions]);

  return (
    <section className="accordion">
      {items.map((item, index) => (
        <article className="accordion__item" key={item.title}>
          <Heading>
            <button
              type="button"
              className="accordion__button"
              onClick={() => handleAccordionClick(index)}
              aria-expanded={openAccordions[0] === index ? 'true' : 'false'}
            >
              <div>
                <span className="accordion__number">{`0${index + 1}`}</span>
                <span className="accordion__title">{item.title}</span>
              </div>
              <span className="accordion__icon">
                {openAccordions[0] === index ? (
                  <IconMinusCircle />
                ) : (
                  <IconPlusCircle />
                )}
              </span>
            </button>
          </Heading>
          <div className="accordion__content-wrapper">
            <p
              className="accordion__subtitle"
              dangerouslySetInnerHTML={{ __html: item.copyHeading }}
            />
            <div
              className={`accordion__content ${
                openAccordions[0] === index &&
                openAccordions[0] !== openAccordions[1]
                  ? 'is-open'
                  : ''
              } ${
                openAccordions[1] === index ? 'is-closing' : ''
              } ${isClosingClass}`}
              hidden={
                openAccordions[0] !== index && openAccordions[1] !== index
              }
              dangerouslySetInnerHTML={{ __html: item.copy }}
              ref={accordionRef}
            />
          </div>
        </article>
      ))}
    </section>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      copyHeading: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
    })
  ).isRequired,
  titleHeadingLevel: PropTypes.string,
};

Accordion.defaultProps = {
  titleHeadingLevel: 'h2',
};

export default Accordion;
