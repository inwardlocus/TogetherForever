import React from 'react';
import Page from '../../components/Page';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default props => (
  <Page title="The One With The Blind Dates" {...props}>
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <p>
        When the mist overwhelmed the "I" in me, I found you in the searching.
        Since then that magazine had been my go to place. They remind me of my
        true self. We all have a testing place somewhere. The resting place of
        my soul was your name beautiful printed in that magazine. That was the
        place where my knowledge of you lived. Remember the days when we solved
        some puzzles and read some articles. Those were the days the bond
        between us began to unfold. You wrote. I read. Those words could connect
        us with a mysterious thread of what has now become the tale of us. I
        thought of you as I thought of no other living person. And as I thought
        of you, life became better. And higher and much more beautiful.
      </p>
      <AniLink paintDrip to="/story/2" hex="#1ca086">
        Story 2
      </AniLink>
    </div>
  </Page>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "1.jpg" }) {
      ...fluidImage
    }
  }
`;
