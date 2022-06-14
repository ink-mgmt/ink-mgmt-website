/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import AboutIntro from '../components/about/intro';
import AboutBios from '../components/about/bios';
import AboutFormula from '../components/about/formula';
import AboutPrinciples from '../components/about/principles';

const About = ({ data }) => {
  const aboutData = data.allWpPage.edges[0].node.about_page;
  const { bios, introCopy, introHeading, principles, theFormulaCopy } =
    aboutData;

  return (
    <Layout
      backgroundColor="#fff"
      headerLogoColor="#000"
      footerBgColor="#fff"
      footerTextColor="#000"
    >
      <SEO title="About" meta={[{ name: 'theme-color', content: '#ffffff' }]} />
      <AboutIntro introHeading={introHeading} introCopy={introCopy} />

      <AboutBios bios={bios} />

      <AboutFormula formulaCopy={theFormulaCopy} />

      <AboutPrinciples principles={principles} />
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
