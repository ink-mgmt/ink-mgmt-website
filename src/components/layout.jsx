import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/main.scss';
import 'animate.css/animate.min.css';

import Header from './header';
import Footer from './footer';

const Layout = ({
  children,
  backgroundColor,
  headerLogoColor,
  headerTextColor,
  heroIsScrolled,
  footerBgColor,
  footerTextColor,
  location,
  menuTextIsLight,
}) => {
  useLayoutEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', appHeight);
    appHeight();
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <div
          className={`site-wrapper ${location.pathname === '/' ? 'home' : ''}`}
        >
          <a className="skip-link" href="#main">
            skip to main content
          </a>
          <Header
            headerLogoColor={headerLogoColor}
            headerTextColor={headerTextColor}
            menuTextIsLight={menuTextIsLight}
            siteTitle={data.site.siteMetadata.title}
            heroIsScrolled={heroIsScrolled}
          />
          <main
            className="main"
            id="main"
            role="main"
            style={{ backgroundColor }}
          >
            {children}
          </main>
          <Footer
            footerBgColor={footerBgColor}
            footerTextColor={footerTextColor}
          />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  headerLogoColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  footerBgColor: PropTypes.string,
  footerTextColor: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  menuTextIsLight: PropTypes.bool,
  heroIsScrolled: PropTypes.bool,
};

Layout.defaultProps = {
  backgroundColor: 'transparent',
  headerLogoColor: '#000',
  headerTextColor: '#000',
  footerBgColor: 'transparent',
  footerTextColor: '#000',
  location: {},
  menuTextIsLight: false,
  heroIsScrolled: true,
};

export default Layout;
