import React from 'react';
import Chapter from '../../components/Chapter';
import { graphql } from 'gatsby';

export default props => (
  <Chapter title="When Shiya met Japs">
    <Chapter.Image
      fluid={props.data.image.childImageSharp.fluid}
    ></Chapter.Image>
    <Chapter.Quote>
      So no one told me life is gonna be this way
      <br />
      No one could ever know me
      <br />
      No one could ever see me
      <br />
      Seems you're the only one who knows
      <br />
      What it's like to be me
      <br />
      Someone to face the day with
      <br />
      Make it through all the rest with
      <br />
      Someone I'll always laugh with
      <br />
      Even at my worst, I'm best with you.
      <br />
    </Chapter.Quote>

    <p>So let me say this,</p>

    <Chapter.Quote>
      I'll be there for you
      <br />
      (When the rain starts to pour) <br />
      I'll be there for you
      <br />
      (Like I've been there before) <br />
      I'll be there for you
      <br />
      ('Cause you're there for me too) <br />
      I'll be there for you
      <br />
    </Chapter.Quote>
    <p>
      Okay SHERLOCK. Yeah. That's a F.R.I.E.N.D.S. song. You nailed it. Those
      words specifically describe what I want to tell you.{' '}
    </p>
    <p>
      Anyway, I won't waste much time. Let me get straight to the point. You
      know how expert I am in keeping records. (BAZINGA !!) No. You're good at
      it. You're the ORACLE, remember? So I thought let me improve upon myself
      this leap year and create a story that'd last. So I decided to paint it on
      the wall for the world to see. (Things I do for love!!) So here's the
      story of us for the kids to tell them,{' '}
      <Chapter.Next to="/story/1">HOW I MET YOUR MOTHER ^smile^ </Chapter.Next>
    </p>
  </Chapter>
);

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "0.jpg" }) {
      ...fluidImage
    }
  }
`;
