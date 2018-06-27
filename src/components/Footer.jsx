import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line

const Icon = ({ icon }) =>
  <span className='footer-icon' style={{ backgroundImage: `url(${prefixLink(`/icons/${icon}.svg`)})` }} />;

Icon.propTypes = {
  icon: PropTypes.string
};

export default function Footer() {
  return (
    <footer>
      <section>
        <p>
          <a href='mailto:khanhbq@innoteq.vn' >
            <Icon icon='send' /> khanhbq@innoteq.vn
          </a>
        </p>
        <ul>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='//facebook.com/bkdev98'>
              <Icon icon='facebook' />
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='//twitter.com/bkdev98'>
              <Icon icon='twitter' />
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='//github.com/bkdev98'>
              <Icon icon='github' />
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='//linkedin.com/in/bkdev98'>
              <Icon icon='linkedin' />
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='//medium.com/@khanhbq'>
              <Icon icon='medium' />
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='//open.spotify.com/user/bkdev98'>
              <Icon icon='spotify' />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
