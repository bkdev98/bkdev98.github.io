import React, { Component, PropTypes } from 'react';
import Rebase from 're-base';
import axios from 'axios';

import Track from './Track';
import Category from './Category';
import StaggerFlipMove from './StaggerFlipMove';
import '../css/lists.css';

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
      date: null,
      tracks: null,
      categories: null,
      loading: true
    };
    this.refsArr = [];
  }

  componentDidMount() {
    this.init();
    this.fetchTracks();
  }

  componentDidUpdate() {
    if (!this.state.loading) {
      this.fadeIn('.list-intro', 100);
    }
  }

  componentWillUnmount() {
    this.refsArr.forEach((ref) => {
      if (ref) {
        this.base.removeBinding(ref);
      }
    });
  }

  getTrackKey(track) {
    return `${track.title}${track.artist}`.replace(/ /g, '').toLowerCase();
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

  fetchTracks = async () => {
    const result = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      params: {
        type: 'track',
        limit: 5,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer BQAMUaRrYAZFtI6ia7kq6bsV6n3I6H9MJ4xTf1WK5PWMyH8bARr2FbrJKQCJsHLLVe20Ks0HRRS6PX3A7fxuYExFy7FbCA3L8Ha8f9m9ZP5SDwCyH5xT8sv_VL2boQztHzkEd7aTET3a',
      }
    });
    const tracks = result.data.items.map(item => ({
      artist: item.track.artists[0].name,
      key: item.track.id,
      link: item.track.external_urls.spotify,
      thumbs: {
        alt: item.track.album.images[0].url,
        yt: item.track.album.images[0].url,
      },
      timestamp: {
        uts: new Date(item.played_at).getTime(),
      },
      title: item.track.name,
    }));
    this.setState({ tracks });
    if (this.state.categories) {
      this.setState({ loading: false });
    }
  }

  init() {
    this.base = Rebase.createClass({
      apiKey: 'AIzaSyCTV2O9hthOdcC6uxTgbtFVWu7HxiYH_0g',
      authDomain: 'meapi.firebaseapp.com',
      databaseURL: 'https://meapi.firebaseio.com',
      storageBucket: 'project-5128764592720470892.appspot.com'
    });

    this.dateRef = this.base.listenTo('lastDate', {
      context: this,
      then: (date) => {
        this.setState({ date });

        this.catsRef = this.base.listenTo(`${date.toString()}/categories`, {
          context: this,
          asArray: true,
          queries: {
            limitToFirst: 6 // +1 for Uncategorized
          },
          then: (allCategories) => {
            const categories = allCategories.filter(({ category }) => category !== 'Uncategorized').splice(0, 5);
            this.setState({ categories });
            if (this.state.tracks) {
              this.setState({ loading: false });
            }
          }
        });
        this.refsArr.push(this.catsRef);
      }
    });
    this.refsArr.push(this.dateRef);
  }

  render() {
    const { date, tracks, categories, loading } = this.state;
    if (!date || loading) {
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
