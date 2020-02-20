import React from 'react';
import Page from '../../components/page';
import lp from '../../images/lp.jpg';
import { Link } from 'gatsby';

export default () => (
  <Page title="Wish">
    <div style={{ textAlign: `center` }}>
      <img src={lp} alt="tf" />
      <Link to="/story/1">Wouldn't you?</Link>
    </div>
  </Page>
);
