import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line

const BUILD_TIME = new Date().getTime();

export default function HTML(props) {
  const { body } = props;
  const { title, meta } = Helmet.rewind();
  let path = '';
  if (props.location && props.location.pathname) {
    path = props.location.pathname;
  }

  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />; // eslint-disable-line
  }

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        {title.toComponent()}

        <meta name='robots' content='index, follow' />
        <meta name='author' content='Quoc Khanh' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@bkdev98' />

        <meta property='og:url' content={`https://khanhquoc.press${path}`} />
        <meta property='og:site_name' content='Khanh Quoc Press' />

        {meta.toComponent()}

        <link href='https://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' />
        {css}
      </head>
      <body className='container'>
        <div id='react-mount' dangerouslySetInnerHTML={{ __html: body }} />
        <script async src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  );
}

HTML.propTypes = {
  body: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};
