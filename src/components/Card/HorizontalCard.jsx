import React from 'react';
import styled from 'styled-components';

import Thumbnail from './Thumbnail';
import Rate from './Rate';

const Card = props => {
  const {
    label,
    title,
    img,
    rate,
    message,
    style,
    className,
    size = '160px',
  } = props;

  const getLines = h => {
    const value = Number(h.replace('px', ''));
    if (Number.isNaN(value)) return 1;
    const result = Math.floor((value - 100) / 20);
    return result;
  };

  return (
    <Root style={style} className={className} _height={size}>
      {img && <Thumbnail url={img} ratio={1} meta={`이미지: ${title}`} width={size} />}
      <ContentSection size={size}>
        <Title>{title || 'Card Title'}</Title>
        <Label _height={size} lines={getLines(size)}>{label}</Label>
        {rate && (
          <RateSection>
            <Rate rate={rate} />
            {message && (
              <>
                <Divider />
                <RateName>{message}</RateName>
              </>
            )}
          </RateSection>
        )}
      </ContentSection>
    </Root>
  );
};

export default Card;

const Root = styled.section`
  height: ${({ _height }) => _height};
  display: flex;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background-color: rgb(248, 249, 251);
  border: 1px solid rgb(217, 216, 216);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  margin: 10px;
  & > * {
    float: left;
  }
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const ContentSection = styled.div`
  width: ${({ size }) => `calc(100% - ${size})`};
  height: 100%;
  overflow: hidden;
  padding: 16px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > *:not(:first-child) {
    margin: 0;
  }
`;

const RateSection = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  margin: 0 10px;
  width: 1px; height: 13px;
  background-color: rgb(200, 200, 200);
`;

const RateName = styled.div`
  font-size: 13px;
  color: rgb(158, 158, 158);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Label = styled.div`
  color: rgb(150, 150, 150);
  font-size: 14px;
  height: ${({ lines }) => `${lines * 20}px`};
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines }) => lines};
  -webkit-box-orient: vertical;
`;

const Title = styled.h5`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
