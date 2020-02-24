import React from 'react';
import Chapter from '../../components/Chapter';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default props => (
  <Chapter title="The One After 'I Do'">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <AniLink paintDrip to="/story/5" hex="#1ca086">
        Story 5
      </AniLink>
    </div>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "4.jpg" }) {
      ...fluidImage
    }
  }
`;
