import React from "react"
import Header from "../../components/header"
import Layout from "../../components/layout"
import lp from "../../images/lp.jpg"

export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="WISH" />
      <img src={lp} alt="tf"></img>
    </div>
  </Layout>
)
