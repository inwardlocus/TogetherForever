import React from 'react';
import Page from '../../components/Page';
import landing from '../../images/lp.jpg';
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
    <Page title="Summary">
      {IMAGES.map(image => (
        <AniLink
          className="item"
          hex="#1ca086"
          paintDrip
          to={image.to}
          key={image.src}
          css={`
            width: 100%;

            ${DEVICES.small} {
              width: 50%;
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
                font-size: 1.8rem;
                ${DEVICES.small} {
                  font-size: 1rem;
                }
              `}
            >
              {image.caption}
            </div>
          </div>
        </AniLink>
      ))}
    </Page>
  );
}

export default Summary;
