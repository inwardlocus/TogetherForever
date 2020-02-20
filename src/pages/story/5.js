import React from 'react';
import Page from '../../components/page';
import five from '../../images/5.jpg';
import { Link } from 'gatsby';

export default () => (
  <Page title="The One With The Vows">
    <div style={{ textAlign: `center` }}>
      <img src={five} alt="tf" />
      <Link to="/story/summary">The End</Link>
    </div>
  </Page>
);
