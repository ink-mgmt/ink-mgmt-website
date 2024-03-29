import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from './patterns/logo';

const Nav = ({ navIsOpen, setNavIsOpen, siteTitle }) => {
  const menuRef = useRef();
  const menuNavIconRef = useRef();

  useEffect(() => {
    if (navIsOpen) {
      // fix body so it doesn't scroll when menu is open
      document.body.style.top = `${-window.scrollY}px`;
      document.body.style.position = 'fixed';

      // trap focus in menu while it is open
      menuNavIconRef.current.focus();
      const focusableEls = menuRef.current.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled])'
      );
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const KEYCODE_TAB = 9;

      menuRef.current.addEventListener('keydown', (e) => {
        const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          /* shift + tab */ if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } /* tab */ else if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      });
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [navIsOpen]);

  const toggleNav = () => setNavIsOpen(!navIsOpen);

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <nav
      className={`nav ${navIsOpen ? 'open' : ''}`}
      role="navigation"
      ref={menuRef}
    >
      <div className="nav__header">
        <div className="nav__header-container">
          <Link
            className="link"
            to="/"
            tabIndex={navIsOpen ? 0 : -1}
            onClick={toggleNav}
          >
            <p className="visuallyhidden">{siteTitle}</p>
            <Logo fillColor="#000" />
          </Link>

          <button
            type="button"
            className="nav__toggle"
            aria-label="toggle navigation"
            onClick={toggleNav}
            ref={menuNavIconRef}
            tabIndex={navIsOpen ? 0 : -1}
          >
            close
          </button>
        </div>
      </div>

      <div className="nav__content-wrapper">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/"
              tabIndex={navIsOpen ? 0 : -1}
              onClick={toggleNav}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/about"
              tabIndex={navIsOpen ? 0 : -1}
              onClick={toggleNav}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/services"
              tabIndex={navIsOpen ? 0 : -1}
              onClick={toggleNav}
            >
              Services
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/press"
              tabIndex={navIsOpen ? 0 : -1}
              onClick={toggleNav}
            >
              Press
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/info"
              tabIndex={navIsOpen ? 0 : -1}
              onClick={toggleNav}
            >
              Info
            </Link>
          </li>
        </ul>

        <div className="nav__footer">
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
              tabIndex={navIsOpen ? 0 : -1}
            >
              weare@inkmgmt.com
            </a>
            <br />
            —<br />
            <a
              className="link"
              href="https://www.instagram.com/inkmgmt/"
              tabIndex={navIsOpen ? 0 : -1}
            >
              Instagram
            </a>
            {/* ,{' '}
            <a className="link" href="/" tabIndex={navIsOpen ? 0 : -1}>
              LinkedIn
            </a> */}
          </address>
          <p className="footer__copyright">
            <span className="footer__copyright-symbol">&copy;</span>{' '}
            {currentYear} Ink-Mgmt LLC
          </p>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  navIsOpen: PropTypes.bool.isRequired,
  setNavIsOpen: PropTypes.func.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default Nav;
