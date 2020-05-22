import React from 'react';
import styled from 'styled-components';

const Thumbnail = props => {
  const {
    style,
    className,
    url,
    meta,
    ratio = 1,
  } = props;

  return (
    <Root style={style} className={className} aria-label={meta}>
      <Outer ratio={ratio}>
        <Inner img={url} />
      </Outer>
    </Root>
  );
};

export default Thumbnail;

const Root = styled.div`
  
`;

const Outer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({ ratio }) => ratio * 100}%;
`;

const Inner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  background-image: ${({ img }) => `url('${img}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
