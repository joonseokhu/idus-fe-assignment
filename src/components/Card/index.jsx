/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import VerticalCard from './VerticalCard';
import HorizontalCard from './HorizontalCard';

export default props => (
  <>{props.horizontal ? <HorizontalCard {...props} /> : <VerticalCard {...props} />}</>
);
