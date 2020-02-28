import React from 'react';
import landing from '../../images/lp.jpg';
import zero from '../../images/0.jpg';
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';
import five from '../../images/5.jpg';
import './summary.css';
import { DEVICES } from '../../config';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const IMAGES = [
  {
    src: landing,
    caption: 'Wish',
    to: '/story',
  },
  {
    src: zero,
    caption: 'The Romance Resonance',
    to: '/story/0',
  },
  {
    src: one,
    caption: 'The One With The Blind Dates',
    to: '/story/1',
  },
  {
    src: two,
    caption: 'The One With The Tea Leaves',
    to: '/story/2',
  },
  {
    src: three,
    caption: 'The One Where Everybody Finds Out',
    to: '/story/3',
  },
  {
    src: four,
    caption: `The One After 'I Do'`,
    to: '/story/4',
  },
  {
    src: five,
    caption: 'The One With The Vows',
    to: '/story/5',
  },
];

function Summary() {
  return (
    <div
      css={`
        background: var(--color-primary);
        color: var(--color-secondary);
        padding: 2rem 0;
      `}
    >
      <header>
        <h1
          css={`
            font-family: 'Architects Daughter', cursive;
            text-align: center;
            margin: 0;
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
        Our Utopia
      </h1>
      <div
        css={`
          max-width: 980px;
          margin: 0 auto;
        `}
      >
        {IMAGES.map(image => (
          <AniLink
            className="item"
            cover
            direction="right"
            to={image.to}
            key={image.src}
            css={`
              width: 100%;

              ${DEVICES.small} {
                width: 50%;
              }

              ${DEVICES.medium} {
                filter: grayscale(100%);
              }

              ${DEVICES.extraLarge} {
                width: 30%;
              }
            `}
          >
            <div className="polaroid">
              <img alt={image.caption} src={image.src} />
              <div
                className="caption"
                css={`
                  font-size: 2.4rem;
                  ${DEVICES.small} {
                    font-size: 1.6rem;
                  }
                `}
              >
                {image.caption}
              </div>
            </div>
          </AniLink>
        ))}
      </div>
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

export default Summary;
