import './index.css';
import React from 'react';
import Chapter from '../../components/Chapter';
import { DEVICES } from '../../config';

function Index() {
  return (
    <Chapter title="1 Day to go.">
      <div
        className="container"
        css={`
          --size: 96px;
          --size-big: calc(var(--size) * 1.5);
          ${DEVICES.medium} {
            --size: 128px;
            --size-big: calc(var(--size) * 1.5);
          }
        `}
      >
        <div className="heart">♡</div>
        <div className="mouth">⌣</div>
        <div className="heart">♡</div>
      </div>
      <p>
        Waiting became worth. <br />
        Like greatest miracle on earth. :) <br />
        That's our two hearts beating as one.
      </p>
    </Chapter>
  );
}

export default Index;
