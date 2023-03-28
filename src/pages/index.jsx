import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/home/hero';
import IntroText from '../components/home/introText';
import WhatWeDo from '../components/home/whatWeDo';
import GetInTouch from '../components/home/getInTouch';

const IndexPage = ({ data, location }) => {
  const [heroIsScrolled, setHeroIsScrolled] = useState(false);
  const homeData = data.allWpPage.edges[0].node.home_page;
  const { intro, services } = homeData;

  return (
    <Layout
      headerLogoColor="#000"
      footerBgColor="transparent"
      footerTextColor="#000"
      heroIsScrolled={heroIsScrolled}
      location={location}
    >
      <SEO
        title="A Source For Black Perspectives In Creativity
"
        meta={[{ name: 'theme-color', content: '#1601f8' }]}
      />
      <InView rootMargin="0px 0px -100% 0px">
        {({ inView, ref }) => (
          <Hero
            isInView={inView}
            setHeroIsScrolled={setHeroIsScrolled}
            ref={ref}
          />
        )}
      </InView>
      <div className="home__top-content fadeIn">
        <IntroText data={intro} />
        <WhatWeDo data={services} />
        <GetInTouch />
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            home_page: PropTypes.shape({
              intro: PropTypes.arrayOf(
                PropTypes.shape({
                  introLine: PropTypes.string,
                })
              ),
              services: PropTypes.arrayOf(
                PropTypes.shape({
                  subject: PropTypes.string,
                  copy: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 120 } }) {
      edges {
        node {
          home_page {
            intro {
              introLine
            }
            services {
              subject
              shortDescription
              longDescription
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
