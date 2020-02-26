import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { DEVICES } from '../config';

const ButtonLink = styled(AniLink)`
  background-color: var(--color-green-1);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
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
  ${DEVICES.small} {
    font-size: 1.5rem;
  }

  ${DEVICES.medium} {
    font-size: 2rem;
    padding: 1rem 3rem;
  }
`;

export default ButtonLink;
