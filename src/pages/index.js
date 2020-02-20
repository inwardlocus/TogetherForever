import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: var(--color-primary);
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.5rem;
  border-bottom: 0.25rem solid var(--color-tertiary);
  transition: 0.1s;
  box-shadow: 0 2px 3px #ccc;
  position: relative;
  text-shadow: none;

  :hover {
    background-color: var(--color-tertiary);
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
          font-size: 3rem;
        `}
      >
        Shiya & Japs
      </h1>
      <div
        css={`
          display: flex;
        `}
      >
        <StyledLink to="/story">Story</StyledLink>
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
