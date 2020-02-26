import React from 'react';
import ButtonLink from '../components/ButtonLink';
import { DEVICES } from '../config';

function Index() {
  return (
    <div
      css={`
        margin: 0 auto;
        max-width: 720px;
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
          font-size: 2rem;
          color: #bc3440;

          ${DEVICES.medium} {
            font-size: 4rem;
          }
        `}
      >
        Shiya & Japs
      </h1>
      <div
        css={`
          display: flex;
        `}
      >
        <ButtonLink cover direction="left" hex="#1ca086" to="/story">
          Story
        </ButtonLink>
        <ButtonLink
          css={`
            margin-left: 1rem;
          `}
          to="/blog"
        >
          Blog
        </ButtonLink>
      </div>
    </div>
  );
}

export default Index;
