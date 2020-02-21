import React from 'react';
import Page from '../../components/Page';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default props => (
  <Page title="The One With The Vows">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <AniLink paintDrip to="/story/summary" hex="#1ca086">
        Summary
      </AniLink>
    </div>
  </Page>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "5.jpg" }) {
      ...fluidImage
    }
  }
`;
