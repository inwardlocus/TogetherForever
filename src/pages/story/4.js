import React from 'react';
import Page from '../../components/Page';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

export default props => (
  <Page title="The One After 'I Do'">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <Link to="/story/5">Hungry?</Link>
    </div>
  </Page>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "4.jpg" }) {
      ...fluidImage
    }
  }
`;
