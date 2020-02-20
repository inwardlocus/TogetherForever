import React from 'react';
import Page from '../../components/page';
import four from '../../images/4.jpg';
import { Link } from 'gatsby';

export default () => (
  <Page title="The One After 'I Do'">
    <div style={{ textAlign: `center` }}>
      <img src={four} alt="tf" />
      <Link to="/story/5">Hungry?</Link>
    </div>
  </Page>
);
