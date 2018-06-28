import { config } from 'config'; // eslint-disable-line
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Helmet from 'react-helmet';
import QuantfiedSelf from '../src/components/QuantifiedSelf';
import { getBlogPosts } from '../src/utils/blog-helpers';
import '../src/css/lists.css';

const Anchor = props =>
  <a target='_blank' rel='noopener noreferrer' href={props.href}>
    {props.title}
  </a>;

Anchor.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
};

export default function BlogIndex(props) {
  const latestBlogPost = getBlogPosts(props.route).shift();
  const { data: { title, date }, path } = latestBlogPost;
  const fromNow = moment(date, 'MM/DD/YYYY').fromNow();
  const docTitle = `${config.blogTitle} by ${config.authorName}`;

  return (
    <section className='content'>
      <Helmet
        title={docTitle}
        meta={[
          { name: 'description', content: config.description },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: docTitle },
          { property: 'og:description', content: config.description },
          { name: 'twitter:description', content: config.description },
          { name: 'twitter:title', content: docTitle }
        ]}
      />
      <p>Hello, my name is <Link to='/about/'>Quoc Khanh</Link>.</p>
      <p>
        I am a developer living in <del>My Tho</del>
        &nbsp;Ho Chi Minh City.<br />I work at <Anchor href='//innoteq.vn' title='Innoteq Vietnam' />.<br />I'm passionate about software, music and beer.
      </p>
      <p>
        The last piece I wrote was&nbsp;
        <i><Link to={path}>&lsquo;{title}&rsquo;</Link></i> {fromNow}.
      </p>
      <QuantfiedSelf />
    </section>
  );
}

BlogIndex.propTypes = {
  route: PropTypes.object
};
