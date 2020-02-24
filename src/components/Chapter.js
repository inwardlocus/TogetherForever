import React from 'react';
import { graphql } from 'gatsby';

export default function Chapter({ title, children, ...props }) {
  return (
    <div
      css={`
        margin: 2rem auto;
        max-width: 720px;
        padding: 0 1rem;

        .gatsby-image-wrapper {
          margin-bottom: 1rem;
        }
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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
