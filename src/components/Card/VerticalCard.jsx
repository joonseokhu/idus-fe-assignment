import React, { useState } from 'react';
import styled from 'styled-components';

import Thumbnail from './Thumbnail';
import Rate from './Rate';

const Card = props => {
  const {
    label,
    title,
    highlight,
    crossout,
    img,
    rate,
    message,
    style,
    className,
    size = '200px',
  } = props;

  return (
    <Root
      style={style}
      className={className}
      size={size}
      hasRate={rate !== undefined}
    >
      {img && <Thumbnail url={img} ratio={1} width={size} meta={`이미지: ${title}`} />}
      <ContentSection size={size}>
        <ContentInner>
          <Label>{label}</Label>
          <Title>{title || 'Card Title'}</Title>
        </ContentInner>
        <ContentFooter>
          <TextRed>{highlight}</TextRed>
          <TextGray>{crossout}</TextGray>
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
  position: relative;
  overflow: hidden;
  background-color: rgb(248, 249, 251);
  border: 1px solid rgb(217, 216, 216);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  margin: 10px;
  width: ${({ size }) => size};
  height: ${({ hasRate }) => (hasRate ? '350px' : 'calc(350px - 50px)')};
`;

const ContentSection = styled.div`
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ size }) => `calc(350px - ${size} - 50px)`};
  > *:not(:first-child) {
    margin-top: 6px;
  }
`;

const ContentInner = styled.div`
  > * {
    margin: 0;
  }
`;

const ContentFooter = styled.div`
  display: flex;
  align-items: center;
`;

const TextRed = styled.div`
  color: rgb(200, 95, 89);
  margin-right: 4px;
  font-size: 15px;
`;

const TextGray = styled.div`
  color: rgb(153, 153, 153);
  text-decoration: line-through;
  font-size: 13px;
`;

const RateSection = styled.div`
  border-top: 1px solid rgb(217, 216, 216);
  padding: 6px 8px;
  display: flex;
  height: 50px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
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

const Label = styled.div`
  color: rgb(150, 150, 150);
  font-size: 13px;
`;

const Title = styled.h5`
  color: #000;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  display: -webkit-box;
  line-height: 20px;
  height: 40px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
