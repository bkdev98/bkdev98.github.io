import React from 'react';
import TagIcon from 'react-icons/lib/ti/tag';
import EmotionIcon from 'react-icons/lib/ti/heart-outline';
import LifeIcon from 'react-icons/lib/ti/anchor';
import MoviesIcon from 'react-icons/lib/ti/film';
import StartupIcon from 'react-icons/lib/ti/coffee';

const tagList = {
  general: {
    label: 'General',
    color: '#f92672',
    icon: TagIcon,
  },
  emotions: {
    label: 'Emotions',
    color: '#f92672',
    icon: EmotionIcon,
  },
  life: {
    label: 'Life',
    color: '#f92672',
    icon: LifeIcon,
  },
  movies: {
    label: 'Movies',
    color: '#f92672',
    icon: MoviesIcon,
  },
  startup: {
    label: 'Startup',
    color: '#f92672',
    icon: StartupIcon,
  }
};

const Tags = ({ tags }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    {tags.map(tag => (
      <div
        key={tagList[tag].label}
        style={{
          border: `1px solid ${tagList[tag].color}`,
          borderRadius: 3,
          color: tagList[tag].color,
          fontSize: 16,
          paddingTop: 3,
          paddingBottom: 3,
          paddingRight: 4,
          paddingLeft: 4,
          marginRight: 4,
          marginBottom: 4
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >

          {tagList[tag].icon()}

          <div
            style={{
              marginLeft: 3
            }}
          >
            {tagList[tag].label}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Tags;
