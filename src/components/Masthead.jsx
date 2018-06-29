import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import { config } from 'config'; // eslint-disable-line

function Masthead() {
  return (
    <header className='masthead'>
      <h1>
        <Link to={prefixLink('/')}>
          {config.mastHead}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link activeClassName='active' to={prefixLink('/about/')}>
              About
            </Link>
          </li>
          &middot;
          <li>
            <Link activeClassName='active' to={prefixLink('/blog/')}>
              Blog
            </Link>
          </li>
          &middot;
          <li>
            <Link activeClassName='active' to={prefixLink('/portfolio/')}>
              Portfolio
            </Link>
          </li>
          &middot;
          <li>
            <Link activeClassName='active' to={prefixLink('/hire/')}>
              Hire Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Masthead);

Masthead.propTypes = {
  className: PropTypes.string
};
