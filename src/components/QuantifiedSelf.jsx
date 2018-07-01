import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import Track from './Track';
import Category from './Category';
import StaggerFlipMove from './StaggerFlipMove';
import '../css/lists.css';

const API_URL = process.env.NODE_ENV === 'dev' ? 'http://localhost:1221' : 'https://kqp-service.herokuapp.com';

const DoubleBounce = () =>
  <div className={'double-bounce'}>
    <div className='double-bounce1' />
    <div className='double-bounce2' />
  </div>;

const LoadingIndicator = ({ msg }) =>
  <div className='loading'>
    <DoubleBounce />{msg}
  </div>;

LoadingIndicator.defaultProps = {
  msg: 'Loading'
};

LoadingIndicator.propTypes = {
  msg: PropTypes.string
};

export default class QuantfiedSelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: null,
      categories: null,
      loading: true
    };
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    if (!this.state.loading) {
      this.fadeIn('.list-intro', 100);
    }
  }

  fadeIn(selector, staggerDelay = 0) {
    [...document.querySelectorAll(selector)].forEach((child, i) => { // eslint-disable-line
      setTimeout(() => {
        window.requestAnimationFrame(() => { // eslint-disable-line
          child.style.opacity = 1; // eslint-disable-line
        });
      }, staggerDelay + (staggerDelay * i));
    });
  }

  init = async () => {
    const result = await axios.get(`${API_URL}`);
    if (result.status === 200) {
      const { tracks, categories } = result.data;
      this.setState({ tracks, categories, loading: false });
    }
  }

  render() {
    const { tracks, categories, loading } = this.state;
    if (loading) {
      return <LoadingIndicator msg='Crunching latest data...' />;
    }
    const tunes = tracks.map((track) => {
      if (track) {
        return <Track {...track} />;
      }
      return null;
    });
    const cats = categories.map((category) => {
      if (category) {
        return <Category key={category.category} {...category} />;
      }
      return null;
    });
    return (
      <article className='lists'>

        { cats.length > 0 ?
          <div className='activity-list'>
            <div style={{ opacity: 0 }} className='list-intro'>
              &#10095; sort -t'time' -k2 ~/.<b style={{ color: '#f92672' }}>todays_tasks</b>
            </div>
            <StaggerFlipMove>
              {cats}
            </StaggerFlipMove>
          </div>
        : null }

        { tunes.length > 0 ?
          <div className='track-list'>
            <div style={{ opacity: 0 }} className='list-intro'>
              &#10095; ls -1ltu ~/<b style={{ color: '#f92672' }}>recent_music_history</b>
            </div>
            <StaggerFlipMove>{tunes}</StaggerFlipMove>
          </div>
        : null }

      </article>
    );
  }
}
