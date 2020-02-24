import React from 'react';
import Chapter from '../../components/Chapter';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default props => (
  <Chapter title="The One With The Blind Dates">
    <div style={{ textAlign: `center` }}>
      <Img fluid={props.data.image.childImageSharp.fluid} />
      <p>
        When the mist overwhelmed the "I" in me, I found you in the searching.
        Since then that magazine had been my go to place. It reminded me of my
        true self. We all have a resting place somewhere. The resting place of
        my soul was your name beautiful printed in that magazine. That was the
        place where my knowledge of you lived.
      </p>
      <p>
        Remember the days when we solved some puzzles and read some articles.
        You wrote. I read. Those blind dates were symphony of buoyant instants.
      </p>
      <p>
        I thought of you as I thought of no other living person. And as I
        thought of you, life became better and higher and much more beautiful.
      </p>
      <Chapter.Quote>
        "Depth of my dreams <br />
        Stirred up my mind <br />
        Is it mere curiosity or the passion inclined?"
      </Chapter.Quote>
      <p>
        I waited for your emergence unpredictably until one fine day I received
        a ping from you.
        <Chapter.Next to="/story/2">
          {' '}
          And thus unfolded a tale of us.
        </Chapter.Next>
      </p>
    </div>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "1.jpg" }) {
      ...fluidImage
    }
  }
`;
