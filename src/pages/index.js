import React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <Header about="Together Forever" />
    </div>
    <h3 style={{ textAlign: `center`, padding: `0 0 3rem` }}>
      Story of Shiya & Jeps
    </h3>

    <ul>
      <li>
        <Link to="/Story/landing/">Landing Page</Link>
      </li>
      <li>
        <Link to="/Story/1/">The One With The Blind Dates</Link>
      </li>
      <li>
        <Link to="/Story/2/">The One With The Tea Leaves</Link>
      </li>
      <li>
        <Link to="/Story/3/">The One Where Everybody Finds Out</Link>
      </li>
      <li>
        <Link to="/Story/4/">The One After 'I Do'</Link>
      </li>
      <li>
        <Link to="/Story/5/">The One With The Vows</Link>
      </li>
    </ul>
  </Layout>
);
