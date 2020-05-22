import React, { useState } from 'react';
import styled from 'styled-components';

import Thumbnail from './Thumbnail';
import Rate from './Rate';

const Card = props => {
  const {
    label,
    title,
    highlight,
    crossOut,
    img,
    rate,
    message,
    style,
    className,
    width,
    height,
  } = props;

  return (
    <Root style={style} className={className} _width={width}>
      {img && <Thumbnail url={img} ratio={1} meta={`이미지: ${title}`} />}
      <ContentSection>
        <Label>{label}</Label>
        <Title>{title || 'Card Title'}</Title>
        <ContentFooter>
          ddd
        </ContentFooter>
      </ContentSection>
      {(rate !== undefined) && (
      <RateSection>
        <Rate rate={rate} />
        {message && (
        <RateMessage>
          <p>{message}</p>
        </RateMessage>
        )}
      </RateSection>
      )}
    </Root>
  );
};

export default Card;

const Root = styled.section`
  border-radius: 6px;
  overflow: hidden;
  background-color: rgb(248, 249, 251);
  border: 1px solid rgb(217, 216, 216);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  margin: 10px;
  width: ${({ _width }) => _width};
`;

const ContentSection = styled.div`
  padding: 6px 8px;
  position: relative;
  /* min-height: ${({ _height }) => _height}; */
  /* &:not(:first-child) {
    border-top: 1px solid rgb(217, 216, 216);
  } */
  > *:not(:first-child) {
    margin-top: 6px;
  }
  * {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const RateSection = styled.div`
  border-top: 1px solid rgb(217, 216, 216);
  padding: 6px 8px;
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
`;

const RateMessage = styled.div`
  margin-top: 6px;
  p {
    margin: 0;
    font-size: 13px;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ContentFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 6px 8px;
`;

const Label = styled.div`
  color: rgb(150, 150, 150);
  font-size: 13px;
`;

const Title = styled.h5`
  color: #000;
  font-size: 15px;
  font-weight: 400;
`;
