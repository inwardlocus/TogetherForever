import React from "react"
import Header from "../../components/header"
import Layout from "../../components/layout"
import one from "../../images/1.jpg"

export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="The One With The Blind Dates" />
      <img src={one} alt="tf"></img>
    </div>
  </Layout>
)
