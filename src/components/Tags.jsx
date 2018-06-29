import React from 'react';
import TagIcon from 'react-icons/lib/ti/tag';
import EmotionIcon from 'react-icons/lib/ti/heart-outline';
import LifeIcon from 'react-icons/lib/ti/anchor';
import StartupIcon from 'react-icons/lib/ti/coffee';

import Icon from './Icon';

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
    icon: 'film',
  },
  startup: {
    label: 'Startup',
    color: '#f92672',
    icon: StartupIcon,
  },
  react: {
    label: 'React',
    color: '#f92672',
    icon: 'react',
  },
  node: {
    label: 'Node',
    color: '#f92672',
    icon: 'node',
  },
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
    {tags.map(tag => !tagList[tag] ? null : (
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
          {typeof tagList[tag].icon === 'string'
            ? <Icon type={tagList[tag].icon} fill='#f92672' size={14} />
            : tagList[tag].icon()
          }

          <div style={{ marginLeft: 3 }}>
            {tagList[tag].label}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Tags;
