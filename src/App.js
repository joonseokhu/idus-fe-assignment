import React from 'react';
import styled from 'styled-components';

import Card from './components/Card'

function App() {
  return (
    <Root>
      <Card
        title="Title"
        label="This is label"
        img="https://picsum.photos/seed/123/300"
        rate={2}
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        width="200px"
      />
      <Card
        title="This is the title message of card"
        label="This is label"
        width="200px"
        img="https://picsum.photos/seed/2/300"
        rate={0}
      />
      <Card
        title="This is the title message of card"
        label="This is label"
        width="200px"
        img="https://picsum.photos/seed/3/300"
        message="Lorem ipsum dolor sit amet, foo consectetur adipiscing elit."
        rate={4}
      />
      <Card
        title="This is the title message of card"
        label="This is label"
        width="300px"
        img="https://picsum.photos/seed/4/300"
        rate={7}
        horizontal
      />
    </Root>
  );
}

export default App;

const Root = styled.div`
/* display: flex; */
`