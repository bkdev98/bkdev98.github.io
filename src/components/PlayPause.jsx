import React, { Component } from 'react';
import Transition from 'react-motion-ui-pack';
import { withMediaProps } from 'react-media-player';

const ScaleX = ({ children }) => (
  <Transition
    component='g'
    enter={{ scaleX: 1 }}
    leave={{ scaleX: 0 }}
  >
    {children}
  </Transition>
);

class PlayPause extends Component {
  handlePlayPause = () => {
    this.props.media.playPause();
  }

  render() {
    const { media: { isPlaying }, className } = this.props;
    return (
      <svg
        role='button'
        width='55px'
        height='55px'
        viewBox='0 0 36 36'
        className={className}
        onClick={this.handlePlayPause}
      >
        <circle fill='#21242D' cx='18' cy='18' r='18' />
        <ScaleX>
          { isPlaying &&
          <g key='pause' style={{ transformOrigin: '0% 50%' }}>
            <rect x='12' y='11' fill='#d8d8d6' width='4' height='14' />
            <rect x='20' y='11' fill='#d8d8d6' width='4' height='14' />
          </g>
            }
        </ScaleX>
        <ScaleX>
          { !isPlaying &&
            <polygon
              key='play'
              fill='#d8d8d6'
              points='14,11 26,18 14,25'
              style={{ transformOrigin: '100% 50%' }}
            />
          }
        </ScaleX>
      </svg>
    );
  }
}

export default withMediaProps(PlayPause);
