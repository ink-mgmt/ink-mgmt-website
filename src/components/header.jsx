import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from './patterns/logo';
import Nav from './nav';

const Header = ({ headerLogoColor, headerTextColor, location, siteTitle }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <Fragment>
      <header className="header" role="banner">
        <div className="header__container">
          <Link
            className={`link ${location.pathname === '/' ? 'invisible' : ''}`}
            to="/"
          >
            <p className="visuallyhidden">{siteTitle}</p>
            <Logo fillColor={headerLogoColor} />
          </Link>

          <button
            className="header__menu-button link"
            type="button"
            onClick={() => setNavIsOpen(true)}
            style={{ color: headerTextColor }}
          >
            menu
          </button>
        </div>
      </header>
      <Nav
        navIsOpen={navIsOpen}
        setNavIsOpen={setNavIsOpen}
        siteTitle={siteTitle}
      />
    </Fragment>
  );
};

Header.propTypes = {
  headerLogoColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  headerLogoColor: '#000',
  headerTextColor: '#000',
  location: {},
  siteTitle: ``,
};

export default Header;
