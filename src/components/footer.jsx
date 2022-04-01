import React from 'react';
import PropTypes from 'prop-types';

import blobBlack from '../images/ink-mgmt-blob-black.png';
import blobWhite from '../images/ink-mgmt-blob-white.png';

const Footer = ({ footerBgColor, footerTextColor }) => (
  <footer
    className="footer"
    role="contentinfo"
    style={{ backgroundColor: footerBgColor, color: footerTextColor }}
  >
    <div className="footer__container">
      <div className="footer__content-wrapper">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a
              href="/about"
              className="footer__nav-link"
              style={{ color: footerTextColor }}
            >
              A New Way
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="/services"
              className="footer__nav-link"
              style={{ color: footerTextColor }}
            >
              How We Do It
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="/press"
              className="footer__nav-link"
              style={{ color: footerTextColor }}
            >
              Word of Mouth
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="/info"
              className="footer__nav-link"
              style={{ color: footerTextColor }}
            >
              Info
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="/"
              className="footer__nav-link"
              style={{ color: footerTextColor }}
            >
              Privacy Policy
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="/"
              className="footer__nav-link"
              style={{ color: footerTextColor }}
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>

        <div className="footer__contact-info">
          <address className="footer__address">
            1615 Platte Street
            <br />
            Floor 2<br />
            Denver, CO 80202
            <br />
            <br />
            <a href="tel:+1-720-574-2667" style={{ color: footerTextColor }}>
              +1 720 574 2667
            </a>
            <br />
            <a
              href="mailto:weare@inkmgmt.com"
              style={{ color: footerTextColor }}
            >
              weare@inkmgmt.com
            </a>
            <br />
            —<br />
            <a href="/" style={{ color: footerTextColor }}>
              Instagram
            </a>
            ,{' '}
            <a href="/" style={{ color: footerTextColor }}>
              LinkedIn
            </a>
          </address>

          <ul className="footer__contacts">
            <li className="footer__contact-item">
              <span className="footer__contact-heading">
                New Business Inquiries
              </span>
              <a
                className="footer__contact-link"
                style={{ color: footerTextColor }}
                href="mailto:tbd@inkmgmt.com"
              >
                tbd@inkmgmt.com
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-heading">
                Staffing & Representation Inquires
              </span>
              <a
                className="footer__contact-link"
                style={{ color: footerTextColor }}
                href="mailto:tbd@inkmgmt.com"
              >
                tbd@inkmgmt.com
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-heading">Press Inquires</span>
              <a
                className="footer__contact-link"
                style={{ color: footerTextColor }}
                href="mailto:tbd@inkmgmt.com"
              >
                tbd@inkmgmt.com
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-heading">Jobs Inquires</span>
              <a
                className="footer__contact-link"
                style={{ color: footerTextColor }}
                href="mailto:tbd@inkmgmt.com"
              >
                tbd@inkmgmt.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer__copyright">&copy;2022 Ink-Mgmt LLC</p>
    </div>

    <img
      className="footer__blob"
      src={footerTextColor === '#fff' ? blobWhite : blobBlack}
      alt=""
    />
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
