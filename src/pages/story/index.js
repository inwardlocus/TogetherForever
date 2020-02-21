import React from 'react';
import Page from '../../components/Page';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default props => (
  <Page title="Wish">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <AniLink paintDrip to="/story/1">
        Wouldn't you?
      </AniLink>
    </div>
  </Page>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "lp.jpg" }) {
      ...fluidImage
    }
  }
`;
