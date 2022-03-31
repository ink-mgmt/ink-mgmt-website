import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/main.scss';

import Header from './header';
import Footer from './footer';

const Layout = ({
  children,
  headerLogoColor,
  headerTextColor,
  footerBgColor,
  footerTextColor,
}) => (
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
      <Fragment>
        <a className="skip-link" href="#main">
          skip to main content
        </a>
        <Header
          headerLogoColor={headerLogoColor}
          headerTextColor={headerTextColor}
          siteTitle={data.site.siteMetadata.title}
        />
        <main className="main" id="main" role="main">
          {children}
        </main>
        <Footer
          footerBgColor={footerBgColor}
          footerTextColor={footerTextColor}
        />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerLogoColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  footerBgColor: PropTypes.string,
  footerTextColor: PropTypes.string,
};

Layout.defaultProps = {
  headerLogoColor: '#000',
  headerTextColor: '#000',
  footerBgColor: 'transparent',
  footerTextColor: '#000',
};

export default Layout;
