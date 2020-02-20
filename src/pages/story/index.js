import React from 'react';
import Layout from '../../components/layout';
import lp from '../../images/lp.jpg';
import { Link } from 'gatsby';

export default () => (
  <Layout pageTitle="Wish">
    <div style={{ textAlign: `center` }}>
      <img src={lp} alt="tf" />
      <Link to="/story/1">Wouldn't you?</Link>
    </div>
  </Layout>
);
