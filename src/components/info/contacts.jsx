import React from 'react';

const InfoContacts = () => (
  <section className="info__contacts">
    <ul className="contacts__list">
      <li className="contacts__item">
        <h2 className="contacts__item-heading">General Inquiries</h2>
        <p className="contacts__item-name">Jason Pierce</p>
        <a className="contacts__item-link link" href="mailto:jason@inkmgmt.com">
          jason@inkmgmt.com
        </a>
        <a className="contacts__item-link link" href="tel:+1-222-333-4444">
          +1 222 333 4444
        </a>
        <a className="contacts__big-link link" href="mailto:jason@inkmgmt.com">
          &rarr; General
        </a>
      </li>
      <li className="contacts__item">
        <h2 className="contacts__item-heading">Recruitment + Staffing</h2>
        <p className="contacts__item-name">Jane Doe</p>
        <a className="contacts__item-link link" href="mailto:jane@inkmgmt.com">
          jane@inkmgmt.com
        </a>
        <a className="contacts__item-link link" href="tel:+1-222-333-4444">
          +1 222 333 4444
        </a>
        <a className="contacts__big-link link" href="mailto:jane@inkmgmt.com">
          &rarr; Staffing
        </a>
      </li>
      <li className="contacts__item">
        <h2 className="contacts__item-heading">General Inquires</h2>
        <p className="contacts__item-name">Jason Pierce</p>
        <a className="contacts__item-link link" href="mailto:jason@inkmgmt.com">
          jason@inkmgmt.com
        </a>
        <a className="contacts__item-link link" href="tel:+1-222-333-4444">
          +1 222 333 4444
        </a>
        <a className="contacts__big-link link" href="mailto:jason@inkmgmt.com">
          &rarr; Talent
        </a>
      </li>
      <li className="contacts__item">
        <h2 className="contacts__item-heading">Job Opportunities</h2>
        <p className="contacts__item-name">Jason Pierce</p>
        <a className="contacts__item-link link" href="mailto:jason@inkmgmt.com">
          jason@inkmgmt.com
        </a>
        <a className="contacts__item-link link" href="tel:+1-222-333-4444">
          +1 222 333 4444
        </a>
        <a className="contacts__big-link link" href="mailto:jason@inkmgmt.com">
          &rarr; Career
        </a>
      </li>
    </ul>
  </section>
);

export default InfoContacts;
