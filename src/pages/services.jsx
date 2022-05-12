import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ServicesIntro from '../components/services/intro';
import ServicesWhatWeDo from '../components/services/whatWeDo';
import ServicesSubmitWork from '../components/services/submitWork';

const Services = ({ data }) => {
  const servicesData = data.allWpPage.edges[0].node.services_page;
  const { introCopy, accordionItems } = servicesData;

  return (
    <Layout
      headerLogoColor="#fff"
      headerTextColor="#fff"
      footerBgColor="#0000f5"
      footerTextColor="#fff"
    >
      <SEO
        title="Services"
        meta={[{ name: 'theme-color', content: '#1601f8' }]}
      />
      <ServicesIntro introCopy={introCopy} />
      <ServicesWhatWeDo accordionItems={accordionItems} />
      <ServicesSubmitWork />
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 27 } }) {
      edges {
        node {
          services_page {
            introCopy
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
