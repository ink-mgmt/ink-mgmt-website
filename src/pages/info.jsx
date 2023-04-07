import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import InfoIntro from '../components/info/intro';
import InfoContacts from '../components/info/contacts';

const Info = ({ data }) => {
  const infoData = data.allWpPage.edges[0].node.info_page;
  const { contactItems } = infoData;

  return (
    <Layout
      headerLogoColor="#fff"
      headerTextColor="#fff"
      footerBgColor="#000"
      footerTextColor="#fff"
    >
      <SEO title="Info" />
      <div className="info__content">
        <InfoIntro />
        <InfoContacts contactItems={contactItems} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 33 } }) {
      edges {
        node {
          info_page {
            contactItems {
              heading
              name
              email
              textLinkText
              textLinkUrl
              phone
              bigLinkText
            }
          }
        }
      }
    }
  }
`;

Info.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            info_page: PropTypes.shape({
              contactItems: PropTypes.arrayOf(PropTypes.shape({})),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export default Info;
