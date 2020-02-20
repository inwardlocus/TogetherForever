import React from 'react';
import Header from '../../components/header';
import Layout from '../../components/layout';
import two from '../../images/2.jpg';

export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="The One With The Tea Leaves" />
      <img src={two} alt="tf"></img>
    </div>
  </Layout>
);
