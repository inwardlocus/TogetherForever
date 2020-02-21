import React from 'react';
import Page from '../../components/Page';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

export default props => (
  <Page title="The One Where Everybody Finds Out">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <Link to="/story/4">Mustn't we?</Link>
    </div>
  </Page>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
  }
`;
