import React from 'react';
import Page from '../../components/Page';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

export default props => (
  <Page title="The One With The Tea Leaves" {...props}>
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <Link to="/story/3">Is it late already?</Link>
    </div>
  </Page>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "2.jpg" }) {
      ...fluidImage
    }
  }
`;
