import React from 'react';
import Layout from '../../components/layout';
import two from '../../images/2.jpg';
import { Link } from 'gatsby';

export default () => (
  <Layout pageTitle="The One With The Tea Leaves">
    <div style={{ textAlign: `center` }}>
      <img src={two} alt="tf" />
      <Link to="/story/3">Is it late already?</Link>
    </div>
  </Layout>
);
