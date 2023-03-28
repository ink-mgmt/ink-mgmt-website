import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Press = ({ data }) => {
  const pressData = data.allWpPage.edges[0].node.pressPage;

  return (
    <Layout
      backgroundColor="#b8b8b8"
      headerLogoColor="#000"
      headerTextColor="#000"
      footerBgColor="#b8b8b8"
      footerTextColor="#000"
    >
      <SEO title="Press" meta={[{ name: 'theme-color', content: '#ffffff' }]} />
      <div className="press__wrapper">
        <h1 className="press__heading visuallyhidden">Press</h1>
        {pressData.articles.map((article) => (
          <article className="press__article" key={article.link}>
            <div className="press__article-content">
              <h2 className="press__publication">{article.publication}</h2>
              <p className="press__date">{article.date}</p>
              <div className="press__content-wrapper">
                <p className="press__title">{article.title}</p>
                <div
                  className="press__copy"
                  dangerouslySetInnerHTML={{ __html: article.blurb }}
                />
                <div className="press__link-wrapper">
                  <a
                    className="press__link link"
                    href={article.link}
                    aria-label={`Read more from ${article.title}`}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
};

Press.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            pressPage: PropTypes.shape({
              articles: PropTypes.arrayOf(
                PropTypes.shape({
                  publication: PropTypes.string,
                  date: PropTypes.string,
                  title: PropTypes.string,
                  blurb: PropTypes.string,
                  link: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 30 } }) {
      edges {
        node {
          pressPage {
            articles {
              publication
              date
              title
              blurb
              link
            }
          }
        }
      }
    }
  }
`;

export default Press;
