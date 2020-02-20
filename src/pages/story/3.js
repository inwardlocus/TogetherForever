import React from 'react';
import Page from '../../components/page';
import three from '../../images/3.jpg';
import { Link } from 'gatsby';

export default () => (
  <Page title="The One Where Everybody Finds Out">
    <div style={{ textAlign: `center` }}>
      <img src={three} alt="tf" />
      <Link to="/story/4">Mustn't we?</Link>
    </div>
  </Page>
);
