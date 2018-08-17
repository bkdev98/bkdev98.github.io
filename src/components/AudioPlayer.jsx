import React, { Component } from 'react';
import PlayPause from './PlayPause';
import MuteUnmute from './MuteUnmute';
import '../scss/main.scss';

const isBrowser = typeof window !== 'undefined';
const { Media, Player, controls } = isBrowser ? require('react-media-player') : {};

const { CurrentTime, SeekBar, Duration, Volume } = isBrowser ? controls : {};

const audioContext = isBrowser ? new (window.AudioContext || window.webkitAudioContext)() : null; // eslint-disable-line
let panner;
if (audioContext) {
  panner = audioContext.createPanner();
  panner.setPosition(0, 0, 1);
  panner.panningModel = 'equalpower';
  panner.connect(audioContext.destination);
}

class AudioPlayer extends Component {
  componentDidMount() {
    if (isBrowser) {
      const source = audioContext.createMediaElementSource(this.player.instance);
      source.connect(panner);
      panner.connect(audioContext.destination);
    }
  }

  handlePannerChange = ({ target }) => {
    const x = +target.value;
    const y = 0;
    const z = 1 - Math.abs(x);
    panner.setPosition(x, y, z);
  }

  render() {
    if (!isBrowser) {
      return null;
    }
    return (
      <Media>
        <div>
          <Player
            ref={c => this.player = c} // eslint-disable-line
            {...this.props}
            useAudioObject
            crossOrigin='anonymous'
          />
          <div className='media-controls'>
            <PlayPause className='media-control media-control--play-pause' />
            <CurrentTime className='media-control media-control--current-time' />
            <SeekBar className='media-control media-control--volume-range' />
            <Duration className='media-control media-control--duration' />
            <MuteUnmute className='media-control media-control--mute-unmute' />
            <Volume className='media-control media-control--volume' />
          </div>
        </div>
      </Media>
    );
  }
}

export default AudioPlayer;
