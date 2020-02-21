import React from 'react';
import Page from '../../components/Page';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

export default props => (
  <Page title="The One With The Vows">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <Link to="/story/summary">The End</Link>
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
