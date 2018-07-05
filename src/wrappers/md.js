import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { config } from 'config'; // eslint-disable-line

import { TweetThis, FacebookShare } from '../components/Social';
import ReadNext from '../components/ReadNext';
import Tags from '../components/Tags';
import Bio from '../components/Bio';
import AudioPlayer from '../components/AudioPlayer';
import { isBlogPost, getBlogPosts, getNextPosts, getPostsFromPaths } from '../utils/blog-helpers';
import avatar from '../../images/avatar.jpg';

import '../css/tomorrow-night.css';

class MarkdownWrapper extends Component {
  render() {
    const { route } = this.props;
    const { page: { data: post } } = route;
    const path = post.path = route.path;
    const thumbnail = post.thumbnail ? `https://khanhquoc.press${path}${post.thumbnail}` : `https://khanhquoc.press/${avatar}`;
    const posts = getBlogPosts(route);

    if (isBlogPost(post)) {
      const docTitle = `${post.title} - ${config.blogTitle}`;
      const nextPosts = post.readNext ? getPostsFromPaths(post.readNext, posts)
       : getNextPosts(path, posts);
      return (
        <section className='content'>
          <Helmet
            title={docTitle}
            meta={[
              { name: 'description', content: post.description },
              { property: 'og:type', content: 'article' },
              { property: 'og:title', content: docTitle },
              { property: 'og:image', content: thumbnail },
              { property: 'article:author', content: 'https://facebook.com/bkdev98' },
              { property: 'article:published_time', content: `${moment(post.date, 'MM/DD/YYYY').format()}` },
              { name: 'twitter:description', content: post.description },
              { name: 'twitter:title', content: docTitle }
            ]}
          />
          <article className='blog-body'>
            <header className='blog-header'>
              <h2>{post.title}</h2>
              <div>
                <time>{moment(post.date, 'MM/DD/YYYY').format('MMMM D, YYYY')}</time> &middot; {post.words} words &middot; {post.readTime}
                <Tags tags={post.tags} />
              </div>
            </header>
            {post.audio && <AudioPlayer autoPlay src={post.audio} />}
            <div className='post-content' ref='markdown' dangerouslySetInnerHTML={{ __html: post.body }} />
          </article>
          <aside className='post-footer'>
            <ul>
              <li><TweetThis {...post} /></li>
              <li><FacebookShare {...post} /></li>
            </ul>
            <ReadNext posts={nextPosts} />
            <hr />
            <Bio />
          </aside>
        </section>
      );
    }

    return (
      <section className='content'>
        <Helmet
          title={post.title}
          meta={[
            { name: 'description', content: config.description },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: post.title },
            { property: 'article:author', content: 'https://facebook.com/bkdev98' },
            { property: 'article:published_time', content: `${moment(post.date, 'MM/DD/YYYY').format()}` },
            { name: 'twitter:description', content: config.description },
            { name: 'twitter:title', content: post.title }
          ]}
        />
        {
          post.title ?
            <header>
              <h2>{post.title}</h2>
            </header>
          : null
        }
        <div className='post-content' dangerouslySetInnerHTML={{ __html: post.body }} />
      </section>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
};

export default MarkdownWrapper;
