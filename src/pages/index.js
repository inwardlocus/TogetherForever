import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';

const StyledLink = styled(AniLink)`
  background-color: var(--color-green-1);
  color: #fff;
  font-size: 2rem;
  padding: 1rem 3rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.5rem;
  border-bottom: 0.25rem solid var(--color-green-2);
  transition: 0.1s;
  box-shadow: 0 2px 3px #ccc;
  position: relative;
  text-shadow: none;
  font-family: 'Quattrocento Sans';

  :hover {
    background-color: var(--color-green-2);
    border-bottom-width: 0;
    margin-top: 0.2rem;
  }
`;

function Index() {
  return (
    <div
      css={`
        margin: 0 auto;
        max-width: 42rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      `}
    >
      <h1
        css={`
          font-family: 'Architects Daughter', cursive;
          margin: 0 auto 2rem;
          font-size: 4rem;
        `}
      >
        Shiya & Japs
      </h1>
      <div
        css={`
          display: flex;
        `}
      >
        <StyledLink paintDrip hex="#1ca086" to="/story">
          Story
        </StyledLink>
        <StyledLink
          css={`
            margin-left: 1rem;
          `}
          to="/blog"
        >
          Blog
        </StyledLink>
      </div>
    </div>
  );
}

export default Index;
