import React from 'react';
import Chapter from '../../components/Chapter';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default props => (
  <Chapter title="The One With The Tea Leaves">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <AniLink paintDrip to="/story/3" hex="#1ca086">
        Story 3
      </AniLink>
    </div>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "2.jpg" }) {
      ...fluidImage
    }
  }
`;
