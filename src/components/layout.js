import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `0.5rem`,
    }}
  >
    <Link to={props.to}>{props.children} </Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `2rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `5rem` }}>
      <Link
        to="/"
        style={{ textShadow: `none`, backgroundImage: `none` }}
      ></Link>
      <h3 style={{ display: `inline` }}>Shiya & Japs</h3>
      <ul
        style={{
          listStyle: `none`,
          float: `right`,
        }}
      >
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    {children}
  </div>
)
