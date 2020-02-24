import React from 'react';
import Chapter from '../../components/Chapter';
import { graphql } from 'gatsby';

export default props => (
  <Chapter title="The One With The Tea Leaves">
    <Chapter.Image
      fluid={props.data.image.childImageSharp.fluid}
    ></Chapter.Image>
    <p>
      Whenever I tried to get nearer to you in speech, to be personal at all,
      you flew up into remote regions that are inaccessible. But then you took
      me with you. It seemed to me that it was the moment of opening the door
      between my fear and the world that shall love me.
    </p>
    <p>
      Those talks and discussions and meetings were more than their literal
      meaning. I could see my life's meaning taking shape. I could feel my
      future was not far away. And that's when I made up my mind to follow what
      seemed to me universe's sign of the infinite love and care. I put
      definitely to myself the possibility of being your life partner.
    </p>
    <p>
      With all the differences we had, we had flowed in to the same lake and we
      transformed into single love. We drifted together, we dispersed in it
      together. We were immersed in it completely. And like a river with no name
      and reason, our love simply flowed onwards. Our season was sovereign.
    </p>
    <Chapter.Quote>
      "Beyond what’s felt and seen <br />
      Your existence was taking over my void <br />
      And when it dawned <br />
      The dream seemed real and the chase was over <br />
      We’re were there Together Forever!""
    </Chapter.Quote>
    <p>
      <Chapter.Next to="/story/3">
        I’ve always known our relation was permanent.
      </Chapter.Next>
    </p>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "2.jpg" }) {
      ...fluidImage
    }
  }
`;
