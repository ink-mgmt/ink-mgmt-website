/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { InView } from 'react-intersection-observer';

import Layout from '../components/layout';
import SEO from '../components/seo';

import AboutIntro from '../components/about/intro';
import AboutBios from '../components/about/bios';
import AboutFormula from '../components/about/formula';
import AboutPrinciples from '../components/about/principles';

const About = ({ data }) => {
  const [menuTextIsLight, setMenuTextIsLight] = useState(false);

  const aboutData = data.allWpPage.edges[0].node.about_page;
  const { bios, introCopy, introHeading, principles, theFormulaCopy } =
    aboutData;

  return (
    <Layout
      headerLogoColor="#000"
      footerBgColor="#000"
      footerTextColor="#fff"
      menuTextIsLight={menuTextIsLight}
    >
      <SEO title="About" meta={[{ name: 'theme-color', content: '#ffffff' }]} />
      <AboutIntro introHeading={introHeading} introCopy={introCopy} />
      <InView rootMargin="0px 0px -97% 0px">
        {({ inView, ref }) => (
          <AboutBios
            bios={bios}
            isInView={inView}
            setMenuTextIsLight={setMenuTextIsLight}
            ref={ref}
          />
        )}
      </InView>
      <AboutFormula formulaCopy={theFormulaCopy} />
      <InView rootMargin="0px 0px -97% 0px">
        {({ inView, ref }) => (
          <AboutPrinciples
            principles={principles}
            isInView={inView}
            setMenuTextIsLight={setMenuTextIsLight}
            ref={ref}
          />
        )}
      </InView>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 23 } }) {
      edges {
        node {
          about_page {
            introHeading
            introCopy
            bios {
              firstName
              lastName
              titles {
                title
              }
              copy
            }
            theFormulaCopy
            principles {
              title
              copy
            }
          }
        }
      }
    }
  }
`;

About.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            about_page: PropTypes.shape({
              bios: PropTypes.arrayOf(PropTypes.shape({})),
              introCopy: PropTypes.string,
              introHeading: PropTypes.string,
              principles: PropTypes.arrayOf(PropTypes.shape({})),
              theFormulaCopy: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export default About;
