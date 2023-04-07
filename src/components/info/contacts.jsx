import React from 'react';
import PropTypes from 'prop-types';

const InfoContacts = ({ contactItems }) => (
  <section className="info__contacts">
    <ul className="contacts__list">
      {contactItems.map((contact) => (
        <li className="contacts__item" key={contact.heading}>
          <h2 className="contacts__item-heading">{contact.heading}</h2>
          {contact.name && (
            <p className="contacts__item-name">{contact.name}</p>
          )}
          {contact.email && (
            <a
              className="contacts__item-link link"
              href="mailto:jason@inkmgmt.com"
            >
              {contact.email}
            </a>
          )}
          {contact.textLinkText && contact.textLinkUrl && (
            <a className="contacts__item-link link" href={contact.textLinkUrl}>
              {contact.textLinkText}
            </a>
          )}
          {contact.phone && (
            <a
              className="contacts__item-link link"
              href={`tel:${contact.phone}`}
            >
              {contact.phone}
            </a>
          )}
          <a className="contacts__big-link" href={`mailto:${contact.email}`}>
            &rarr; {contact.bigLinkText}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

InfoContacts.propTypes = {
  contactItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default InfoContacts;
