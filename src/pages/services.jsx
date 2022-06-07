import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ServicesIntro from '../components/services/intro';
import ServicesWhatWeDo from '../components/services/whatWeDo';
import ABetterPlace from '../components/services/aBetterPlace';

const Services = ({ data }) => {
  const servicesData = data.allWpPage.edges[0].node.services_page;
  const { accordionItems } = servicesData;

  return (
    <Layout
      backgroundColor="#222021"
      headerLogoColor="#ceccc7"
      headerTextColor="#ceccc7"
      footerBgColor="#222021"
      footerTextColor="#ceccc7"
    >
      <SEO
        title="Services"
        meta={[{ name: 'theme-color', content: '#1601f8' }]}
      />
      <ServicesIntro />
      <ServicesWhatWeDo accordionItems={accordionItems} />
      <ABetterPlace />
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 27 } }) {
      edges {
        node {
          services_page {
            accordionItems {
              title
              copyHeading
              copy
            }
          }
        }
      }
    }
  }
`;

Services.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            services_page: PropTypes.shape({
              introCopy: PropTypes.string,
              accordionItems: PropTypes.arrayOf(PropTypes.shape({})),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export default Services;
