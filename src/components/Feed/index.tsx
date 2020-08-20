import React from 'react';
import {Container, Tab, Tweets} from './style';

import Tweet from '../Tweet';

const Feed = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        <Tweet />
      </Tweets>
    </Container>
  )
}

export default Feed
