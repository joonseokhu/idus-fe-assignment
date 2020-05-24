import React from 'react';
import styled from 'styled-components';

import lorem from 'src/utils/loremIpsum';

import { Card, TextArea } from './components';

function App() {
  return (
    <Root>
      <TextArea max={20} style={{ width: '500px' }} value="기본 텍스트박스" placeholder="placeholder는 props로 설정가능합니다. 기본값으로 입력된 내용과 현재 내용이 일치하면 버튼이 사라집니다." />
      <TextArea max={200} style={{ width: '500px' }} value="readonly 텍스트박스" readonly />
      <TextArea max={400} style={{ width: '500px' }} value="disabled 텍스트박스" disabled />
      <Card
        title="Title"
        label={lorem(40)}
        img="https://picsum.photos/seed/123/300/300"
        rate={2}
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        // style={{ display: 'inline-block' }}
        width="500px"
        horizontal
      />
      <Card
        title="This is the title message of card"
        label="This is label"
        width="200px"
        height="400px"
        img="https://picsum.photos/seed/2/300/300"
        rate={0}
        current="12345"
        previous="12345"
        // horizontal
      />
      <Card
        title="This is the title message of card"
        label="This is label"
        img="https://picsum.photos/seed/3/300/300"
        message="Lorem ipsum dolor sit amet, foo consectetur adipiscing elit."
        width="200px"
        height="400px"
        rate={4}
        current="12345"
        previous="12345"
        // horizontal
      />
      <Card
        title="This is the title message of card"
        label="This is label"
        // width="300px"
        img="https://picsum.photos/seed/4/300/300"
        current="12345"
        previous="12345"
        // horizontal
      />
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 2000px;
  /* display: flex;
  flex-wrap: wrap; */
  > * {
    display: inline-block;
    vertical-align: top;
  }
`;
