import React from 'react';
import Chapter from '../../components/Chapter';
import { graphql } from 'gatsby';

export default props => (
  <Chapter title="The One Where Everybody Finds Out">
    <Chapter.Image
      fluid={props.data.image.childImageSharp.fluid}
    ></Chapter.Image>
    <p>
      And one fine day, assuming everyone's approval, we became engaged. The
      friendship with you arose out of an, at first, seemingly casual
      conversation at a tea post, road side walks, in which a close affinity of
      opinions on matters of central importance emerged between the two of us.
      This mutual understanding, in which one, as it were, only needed to
      continue a conversation begun a long time ago, soon went so deep that it
      seemed natural to me to ask you whether you would like to be with me
      forever.
    </p>
    <p>
      Love, I often think how strange it is that suddenly everything is on solid
      ground, all dreams have become reality. How few people have such good
      fortune!
    </p>
    <Chapter.Quote>
      "Many more years to come <br />
      We both are blessed <br />
      We found joy and peace and pleasure <br />
      In this blissful road of eternal quest."
    </Chapter.Quote>
    <p>
      I felt, we were rare, chosen, by god.{' '}
      <Chapter.Next to="/story/4">
        Two extraordinary souls soon to be bonded forever.
      </Chapter.Next>
    </p>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
  }
`;
