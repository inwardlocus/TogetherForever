import React from 'react';
import { graphql } from 'gatsby';

export default function Page({ title, children }) {
  return (
    <div
      style={{
        margin: `2rem auto`,
        maxWidth: 720,
        padding: `0 1rem`,
      }}
    >
      <header>
        <h3
          css={`
            font-family: 'Architects Daughter', cursive;
            text-align: center;
          `}
        >
          Shiya & Japs
        </h3>
      </header>
      <h1
        css={`
          text-align: center;
        `}
      >
        {title}
      </h1>
      {children}
    </div>
  );
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
