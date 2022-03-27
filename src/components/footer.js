import React from 'react';
import PropTypes from 'prop-types';

import blobBlack from '../images/ink-mgmt-blob-black.png';
// import blobWhite from '../images/ink-mgmt-blob-white.png';

const Footer = ({ footerBgColor, footerTextColor }) => (
  <footer
    className="footer"
    role="contentinfo"
    style={{ backgroundColor: footerBgColor, color: footerTextColor }}
  >
    <div className="container">
      <address className="footer__address">
        1615 Platte Street
        <br />
        Floor 2<br />
        Denver, CO 80202
        <br />
        <br />
        <a href="tel:+1-720-574-2667">+1 720 574 2667</a>
        <br />
        <a href="mailto:weare@inkmgmt.com">weare@inkmgmt.com</a>
        <br />
        —<br />
        <a href="/">Instagram</a>, <a href="/">LinkedIn</a>
      </address>

      <ul className="footer__contacts">
        <li className="footer__contact-item">
          <span className="footer__contact-heading">
            New Business Inquiries
          </span>
          <a className="footer__contact-link" href="mailto:tbd@inkmgmt.com">
            tbd@inkmgmt.com
          </a>
        </li>
        <li className="footer__contact-item">
          <span className="footer__contact-heading">
            Staffing & Representation Inquires
          </span>
          <a className="footer__contact-link" href="mailto:tbd@inkmgmt.com">
            tbd@inkmgmt.com
          </a>
        </li>
        <li className="footer__contact-item">
          <span className="footer__contact-heading">Press Inquires</span>
          <a className="footer__contact-link" href="mailto:tbd@inkmgmt.com">
            tbd@inkmgmt.com
          </a>
        </li>
        <li className="footer__contact-item">
          <span className="footer__contact-heading">Jobs Inquires</span>
          <a className="footer__contact-link" href="mailto:tbd@inkmgmt.com">
            tbd@inkmgmt.com
          </a>
        </li>
      </ul>

      <p className="footer__copyright">&copy;2022 Ink-Mgmt LLC</p>
    </div>

    <img className="footer__blob" src={blobBlack} alt="" />
  </footer>
);

Footer.propTypes = {
  footerBgColor: PropTypes.string,
  footerTextColor: PropTypes.string,
};

Footer.defaultProps = {
  footerBgColor: 'transparent',
  footerTextColor: '#000',
};

export default Footer;
