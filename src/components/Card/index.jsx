import React, { useState } from 'react';
import VerticalCard from './VerticalCard';
import HorizontalCard from './HorizontalCard';
// import styled from 'styled-components';

// import Thumbnail from './Thumbnail'
// import Rate from './Rate'

const Card = props => {
  const { horizontal } = props;
  return (
    <>
      {horizontal ? <HorizontalCard {...props} /> : <VerticalCard {...props} />}
    </>
  );
};

export default Card;
