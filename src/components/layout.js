import React from 'react';

export default ({ children, pageTitle }) => (
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
      {pageTitle}
    </h1>
    {children}
  </div>
);
