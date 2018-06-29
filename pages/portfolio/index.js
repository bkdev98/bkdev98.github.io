import { config } from 'config'; // eslint-disable-line
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

export default function Portfolio() {
  return (
    <section className='content'>
      <Helmet title='Portfolio' />
      <header>
        <h2>My Projects</h2>
      </header>
    </section>
  );
}

Portfolio.propTypes = {
  route: PropTypes.object,
};
