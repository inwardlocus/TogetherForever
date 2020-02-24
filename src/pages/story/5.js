import React from 'react';
import Chapter from '../../components/Chapter';
import { graphql } from 'gatsby';

export default props => (
  <Chapter title="The One With The Vows">
    <div style={{ textAlign: `center` }}>
      <Chapter.Image
        fluid={props.data.image.childImageSharp.fluid}
      ></Chapter.Image>
      <p>Shiya,</p>
      <p>
        I am so incredibly happy about our every time together. I am so aware
        how we always move forward in our relationship, how it moves us along,
        and one great step each time. And now one can see ever more clearly and
        with certainty how likely it is that we will reach all that one possibly
        can reach.
      </p>
      <p>
        When I am doubtful, it is never about you but stems from the fact that I
        do not have very much self- regard. But if you love me properly, then I
        will get it too. I think I am only able to help by loving you so much
        that you soon believe it in the deepest reaches of your own heart.
      </p>
      <p>
        We must always support each other a lot, so that we do not let the lived
        life and reality slip through our hands.
      </p>
      <p>
        I have the firm conviction that we are a good match for each other and
        that we are better able to do justice to our place in the world by being
        together.
      </p>
      <Chapter.Quote>
        You and Me. <br />
        Created through destiny <br />
        This love & that magic <br />
        Beyond any logic <br />
        This sparkle & that smile <br />
        Everything felt alive <br />
        This feeling & that wish <br />
        Everything we will cherish <br />
        Through you I see me <br />
        Through you I feel we <br />
        For we are one <br />
        Eternally <br />
        Infinitely <br />
        We are a galaxy in ourselves. <br />
        We are endless! <br />
        Together. <br />
        We are better. <br />
        Forever. <br />
        We are here.
      </Chapter.Quote>
      <p>
        <Chapter.Next to="/story/summary">Summary</Chapter.Next>
      </p>
    </div>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "5.jpg" }) {
      ...fluidImage
    }
  }
`;
