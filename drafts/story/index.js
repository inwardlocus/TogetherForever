import React from 'react';
import Chapter from '../../components/Chapter';
import { graphql } from 'gatsby';

export default props => (
  <Chapter title="Wish">
    <Chapter.Image
      fluid={props.data.image.childImageSharp.fluid}
    ></Chapter.Image>
    <p>
      <Chapter.Next to="/story/0">Oh wait! There is more.</Chapter.Next>
    </p>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "lp.jpg" }) {
      ...fluidImage
    }
  }
`;
