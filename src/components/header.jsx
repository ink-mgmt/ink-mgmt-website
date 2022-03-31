import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from './patterns/logo';

const Header = ({ headerLogoColor, headerTextColor, siteTitle }) => (
  <header className="header" role="banner">
    <div className="header__container">
      <Link to="/">
        <p className="visuallyhidden">{siteTitle}</p>
        <Logo fillColor={headerLogoColor} />
      </Link>

      <button
        className="header__menu-button"
        type="button"
        onClick={() => alert('open menu')}
        style={{ color: headerTextColor }}
      >
        menu
      </button>
    </div>
  </header>
);

Header.propTypes = {
  headerLogoColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  headerLogoColor: '#000',
  headerTextColor: '#000',
  siteTitle: ``,
};

export default Header;
