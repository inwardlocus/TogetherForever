import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
export default () => (
  <Layout style={{ color: `green` }}>
    <Header about="Connect With Us" />
    <a href="mailto:08me108@gmail.com">Let's talk</a>
    <p>Drop us an email.</p>
  </Layout>
)
