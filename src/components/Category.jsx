import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import kebabCase from 'lodash.kebabcase';
import moment from 'moment';

const Timestamp = (props) => {
  const hours = moment.utc(props.time * 1000).format('H');
  const minutes = moment.utc(props.time * 1000).format('mm');
  const seconds = moment.utc(props.time * 1000).format('ss');
  return (
    <time>
      {hours !== '0' && `${hours} hours `}
      {minutes !== '00' && `${minutes} minutes `}
      {(seconds !== '00' && hours === '0') && `${seconds} seconds `}
    </time>
  );
};

Timestamp.propTypes = {
  time: PropTypes.string
};

const Activities = (props) => {
  const activities = props.activities.join(', ');
  return (
    <div title={activities} className='activities ellipsis'>
      {activities}
    </div>
  );
};

Activities.propTypes = {
  activities: PropTypes.array
};

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { activities, category, time } = this.props;
    const thumb = {
      backgroundImage: `url(${prefixLink(`/icons/${kebabCase(category)}`)}.svg)`
    };
    return (
      <div style={{ opacity: 0 }} className='activity' key={category}>
        <div className='thumb icon' style={thumb} />
        <div className='info'>
          <div title={category} className='category ellipsis'>{category}</div>
          <Timestamp className='timestamp ellipsis' time={time} />
          <Activities activities={activities} />
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  activities: PropTypes.array,
  category: PropTypes.string,
  time: PropTypes.string,
};
