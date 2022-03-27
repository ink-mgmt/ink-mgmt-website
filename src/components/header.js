import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from './patterns/logo';

const Header = ({ headerLogoColor, siteTitle }) => (
  <header className="header" role="banner">
    <div className="container">
      <Link to="/">
        <p className="visuallyhidden">{siteTitle}</p>
        <Logo fillColor={headerLogoColor} />
      </Link>

      <button
        className="header__menu-button"
        type="button"
        onClick={() => alert('open menu')}
      >
        menu
      </button>
    </div>
  </header>
);

Header.propTypes = {
  headerLogoColor: PropTypes.string,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  headerLogoColor: '#000',
  siteTitle: ``,
};

export default Header;
