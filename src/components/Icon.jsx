import React, { PropTypes } from 'react';
import icons from '../utils/icons';

const Icon = ({ type, fill = '#f92672', size = '100%' }) => (
  <svg
    viewBox={`0 0 ${icons[type].viewBox} ${icons[type].viewBox}`}
    fill={fill}
    width={size}
    height={size}
    xmlns='http://www.w3.org/2000/svg'
    style={{ minWidth: size }}
  >
    {icons[type].elements}
  </svg>
);

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Icon;
