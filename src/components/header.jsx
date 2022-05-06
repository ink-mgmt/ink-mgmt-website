import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from './patterns/logo';
import Nav from './nav';

const Header = ({
  headerLogoColor,
  headerTextColor,
  location,
  menuTextIsLight,
  siteTitle,
  videoHeroIsScrolled,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <Fragment>
      <header className="header" role="banner">
        <div className="header__container">
          <Link className="link" to="/">
            <p className="visuallyhidden">{siteTitle}</p>
            {videoHeroIsScrolled && (
              <Logo
                fillColor={menuTextIsLight ? '#fff' : headerLogoColor}
                location={location}
              />
            )}
          </Link>

          <button
            className="header__menu-button link"
            type="button"
            onClick={() => setNavIsOpen(true)}
            style={{ color: menuTextIsLight ? '#fff' : headerTextColor }}
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
  menuTextIsLight: PropTypes.bool,
  siteTitle: PropTypes.string,
  videoHeroIsScrolled: PropTypes.bool,
};

Header.defaultProps = {
  headerLogoColor: '#000',
  headerTextColor: '#000',
  location: {},
  menuTextIsLight: false,
  siteTitle: ``,
  videoHeroIsScrolled: true,
};

export default Header;
