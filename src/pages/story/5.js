import React from 'react';
import Layout from '../../components/layout';
import five from '../../images/5.jpg';
import { Link } from 'gatsby';

export default () => (
  <Layout pageTitle="The One With The Vows">
    <div style={{ textAlign: `center` }}>
      <img src={five} alt="tf" />
      <Link to="/story/summary">The End</Link>
    </div>
  </Layout>
);
