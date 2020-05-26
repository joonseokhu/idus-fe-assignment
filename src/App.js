import React from 'react';
import styled from 'styled-components';

import lorem from 'src/utils/loremIpsum';

import { Card, TextArea } from './components';

function App() {
  return (
    <main>
      <CardSection>
        <Card
          title="This is the title message of card"
          label="This is label"
          img="https://picsum.photos/seed/3/300/300"
          message={lorem(10)}
          size="200px"
          rate={4}
          highlight="12345"
          crossout="12345"
        />
        <Card
          title={lorem(10)}
          label="This is label"
          size="200px"
          img="https://picsum.photos/seed/2/300/300"
          rate={2}
          highlight="abcde"
          crossout="abcde"
        />
        <Card
          title="This is the title message of card"
          label="This is label"
          img="https://picsum.photos/seed/4/300/300"
          highlight="highlight"
          crossout="crossout"
        />
        <Card
          title="Title"
          label={lorem(40)}
          img="https://picsum.photos/seed/123/300/300"
          rate={2}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          style={{ width: '500px' }}
          horizontal
        />
      </CardSection>
      <TextAreaSection>
        <TextArea max={20} value="기본 텍스트박스" placeholder="placeholder는 props로 설정가능합니다. 기본값으로 입력된 내용과 현재 내용이 일치하면 버튼이 사라집니다." />
        <TextArea max={200} value="readonly 텍스트박스" readonly />
        <TextArea max={400} value="disabled 텍스트박스" disabled />
      </TextAreaSection>
    </main>
  );
}

export default App;

const TextAreaSection = styled.section`

`;

const CardSection = styled.section`
  /* width: 2000px; */
  /* display: flex;
  flex-wrap: wrap; */
  > * {
    display: inline-block;
    vertical-align: top;
  }
`;
