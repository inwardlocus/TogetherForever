import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import Card from 'card-vibes';

function Chapter({ title, children, ...props }) {
  return (
    <div
      css={`
        margin: 2rem auto;
        max-width: 720px;
        padding: 0 1rem;
      `}
      {...props}
    >
      <header>
        <h1
          css={`
            font-family: 'Architects Daughter', cursive;
            text-align: center;
          `}
        >
          Shiya & Japs
        </h1>
      </header>
      <h1
        css={`
          text-align: center;
          margin-top: 3rem;
          font-family: 'Caveat';
          font-size: 3rem;
        `}
      >
        {title}
      </h1>
      {children}
    </div>
  );
}

const Quote = styled.p`
  font-weight: bold;
  font-style: italic;
`;

function Next({ children, to, ...props }) {
  return (
    <AniLink cover direction="left" to={to} {...props}>
      {children} ⇨
    </AniLink>
  );
}

function Image(props) {
  return (
    <Card style={{ width: 'auto', padding: '20px' }}>
      <Img {...props} />
    </Card>
  );
}

Chapter.Quote = Quote;
Chapter.Next = Next;
Chapter.Image = Image;

export default Chapter;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
