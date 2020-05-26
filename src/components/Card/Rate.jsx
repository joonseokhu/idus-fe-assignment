import React from 'react';
import styled from 'styled-components';

const Rate = props => {
  const {
    style,
    className,
    rate,
    size = 14,
    activeColor = 'rgb(248, 197, 51)',
    defaultColor = 'rgb(217, 216, 216)',
  } = props;

  return (
    <Root style={style} className={className} aria-label={`평점 ${rate}/5`}>
      {Array(5).fill().map((_, i) => (
        <Star
          key={i}
          _size={size}
          _color={rate > i ? activeColor : defaultColor}
        />
      ))}
    </Root>
  );
};

export default Rate;

const Root = styled.div`
  display: flex;
`;

const Star = styled.div`
  background-color: ${({ _color }) => _color};
  width: ${({ _size }) => `${_size}px`};
  height: ${({ _size }) => `${_size}px`};
  border-radius: 50%;
  &:not(:last-child) {
    margin-right: 4px;
  }
`;
