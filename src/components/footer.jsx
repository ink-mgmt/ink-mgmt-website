import React from 'react';
import PropTypes from 'prop-types';

import LogoBlob from './logoBlob';

const date = new Date();
const currentYear = date.getFullYear();

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
              href="/"
              className="footer__nav-link link"
              style={{ color: footerTextColor }}
            >
              Home
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="/about"
              className="footer__nav-link link"
              style={{ color: footerTextColor }}
            >
              About
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="/services"
              className="footer__nav-link link"
              style={{ color: footerTextColor }}
            >
              Services
            </a>
          </li>
          {/* <li className="footer__nav-item">
            <a
              href="/press"
              className="footer__nav-link link"
              style={{ color: footerTextColor }}
            >
              Press
            </a>
          </li> */}
          <li className="footer__nav-item">
            <a
              href="/info"
              className="footer__nav-link link"
              style={{ color: footerTextColor }}
            >
              Info
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
            <a
              className="link"
              href="mailto:weare@inkmgmt.com"
              style={{ color: footerTextColor }}
            >
              weare@inkmgmt.com
            </a>
            <br />
            —<br />
            <a
              className="link"
              href="https://www.instagram.com/inkmgmt/"
              style={{ color: footerTextColor }}
            >
              Instagram
            </a>
            {/* ,{' '}
            <a className="link" href="/" style={{ color: footerTextColor }}>
              LinkedIn
            </a> */}
          </address>

          <ul className="footer__contacts">
            <li className="footer__contact-item">
              <span className="footer__contact-heading">General Inquiries</span>
              <a
                className="footer__contact-link link"
                style={{ color: footerTextColor }}
                href="mailto:weare@inkmgmt.com"
              >
                weare@inkmgmt.com
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-heading">Staffing Inquires</span>
              <a
                className="footer__contact-link link"
                style={{ color: footerTextColor }}
                href="mailto:source@inkmgmt.com"
              >
                source@inkmgmt.com
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-heading">Special Projects</span>
              <a
                className="footer__contact-link link"
                style={{ color: footerTextColor }}
                href="mailto:create@inkmgmt.com"
              >
                create@inkmgmt.com
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-heading">Submit Work</span>
              <a
                className="footer__contact-link link"
                style={{ color: footerTextColor }}
                href="mailto:talent@inkmgmt.com"
              >
                talent@inkmgmt.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer__copyright">
        <span className="footer__copyright-symbol">&copy;</span> {currentYear}{' '}
        Ink-Mgmt LLC
      </p>
    </div>

    <LogoBlob className="footer__blob" color={footerTextColor} />
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
