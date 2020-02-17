import React from "react"
import Header from "../../components/header"
import Layout from "../../components/layout"
import four from "../../images/4.jpg"

export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="The One After 'I Do' " />
      <img src={four} alt="tf"></img>
    </div>
  </Layout>
)
