import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="Connect With Us" />
    </div>
    <a href="mailto:08me108@gmail.com">Let's talk</a>
    <p>Drop us an email.</p>
  </Layout>
)
