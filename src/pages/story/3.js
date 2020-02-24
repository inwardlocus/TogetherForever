import React from 'react';
import Chapter from '../../components/Chapter';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default props => (
  <Chapter title="The One Where Everybody Finds Out">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <AniLink cover direction="left" to="/story/4" hex="#1ca086">
        Story 4
      </AniLink>
    </div>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
  }
`;
