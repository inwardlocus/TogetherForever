import React from 'react';
import Layout from '../../components/layout';
import four from '../../images/4.jpg';
import { Link } from 'gatsby';

export default () => (
  <Layout pageTitle="The One After 'I Do'">
    <div style={{ textAlign: `center` }}>
      <img src={four} alt="tf" />
      <Link to="/story/5">Hungry?</Link>
    </div>
  </Layout>
);
