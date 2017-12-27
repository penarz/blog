import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import twitter from '../img/Twitter_Logo_Blue.svg';
import './all.sass';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h3 className="title is-3">rich.</h3>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://twitter.com/huios7" target="_blank" rel="noopener noreferrer">
          <span className="icon is-medium">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Rich Pe&#241;a" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
