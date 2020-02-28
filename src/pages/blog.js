import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

function Blog() {
  return (
    <div>
      <h1
        css={`
          font-family: 'Architects Daughter', cursive;
          text-align: center;
          margin: 3rem;
          color: #bc3440;
        `}
      >
        Together Forever Blog
      </h1>
      <p
        css={`
          text-align: center;
          margin-top: 3rem;
          font-size: 1rem;
        `}
      >
        Here,
        <br /> Thoughts and feelings embrace.
        <br /> Here ,
        <br /> Poetry and philosophy shake hands
        <br /> A search for
        <br /> New Equilibrium
        <br /> New Synthesis
        <br /> New Dimensions
        <br /> A quest eternal
        <br /> With a longing for
        <br /> Nothing less than
        <br /> The Ultimate truth
        <br /> Begin from Here.
      </p>
      <p
        css={`
          text-align: center;
          margin-top: 3rem;
          font-size: 3rem;
          font-family: 'Caveat';
          color: blue;
        `}
      >
        Coming Soon
      </p>
      <footer
        css={`
          width: 100%;
          display: flex;
        `}
      >
        <AniLink
          css={`
            /* font-size: 1.5rem; */
            color: var(--color-secondary);
            margin: 2rem auto;
            color: #bc3440;
            font-weight: bold;

            /* border-bottom: 2px solid var(--color-secondary); */
          `}
          to="/"
          cover
          direction="right"
        >
          ⇦ Home
        </AniLink>
      </footer>
    </div>
  );
}

export default Blog;
