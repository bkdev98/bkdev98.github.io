import React, { PropTypes } from 'react';
import Masthead from '../src/components/Masthead';
import Footer from '../src/components/Footer';
import '../src/css/style.css';

export default function Template({ children }) {
  return (
    <main>
      <Masthead />
      {children}
      <Footer />
    </main>
  );
}

Template.propTypes = {
  children: PropTypes.any
};
