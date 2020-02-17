import React from "react"
import Header from "../../components/header"
import Layout from "../../components/layout"
import three from "../../images/3.jpg"
export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="The One Where Everybody Finds Out" />
      <img src={three} alt="tf"></img>
    </div>
  </Layout>
)
