import React from 'react';
import Header from '../../components/header';
import Layout from '../../components/layout';
import five from '../../images/5.jpg';

export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="The One With The Vows " />
      <img src={five} alt="tf"></img>
    </div>
  </Layout>
);
