import React from 'react';
import Chapter from '../../components/Chapter';
import { graphql } from 'gatsby';

export default props => (
  <Chapter title="The One After 'I Do'">
    <div style={{ textAlign: `center` }}>
      <Chapter.Image
        fluid={props.data.image.childImageSharp.fluid}
      ></Chapter.Image>
      <p>
        In the beginning I did not do much thinking and simply be happy,
        realizing, gradually, that you were always with me. But later we wanted
        to be conscious of creating a shared life, mindful that honesty is
        paramount, that life’s essence should always be clearly noticeable
        behind the love, or the music, or the work.
      </p>
      <p>
        You were like the Great Spirit, who befriended me not only to share my
        life, but to add to it. My knowing you is the greatest thing in my days
        and nights, a miracle quite outside the natural order of things.
      </p>
      <p>
        I kept thinking why is love rich beyond all other possible human
        experiences? Sometimes it felt like a sweet burden when we were seized
        in its grasp. It was amazing how we tried to become what we had loved
        and yet remained ourselves.
      </p>
      <Chapter.Quote>
        "All of god’s creations are offended <br />
        As you walk slowly down the aisle <br />
        Like sweet disorder in a dress <br />
        Messing with her smile <br />
        <br />
        To enter in this bond, is to be free <br />
        How blessed I am in this discovering thee"
      </Chapter.Quote>
      <p>
        I won't hide it, I'm so unused to being understood, perhaps, so unused
        to it that sometime when you get my point without explanation or you
        take care of my things without a word, I think this is a joke. How can I
        explain to you, my happiness, my golden wonderful happiness, how much I
        am all yours — with all my memories, poems, outbursts, inner whirlwinds?
      </p>
      <p>
        I simply want to tell you that somehow I can’t imagine life without you.
        I love you, I want you, and I need you unbearably.{' '}
        <Chapter.Next to="/story/5">
          And I will achieve whatever spiritual precision it takes to resonate
          with you.
        </Chapter.Next>
      </p>
    </div>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "4.jpg" }) {
      ...fluidImage
    }
  }
`;
