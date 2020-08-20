import React from 'react';

import { Container } from './style';

interface Props {
  assunto: string;
  titulo: string;
  tweets: string;
}

const News: React.FC<Props> = ({
  assunto,
  titulo,
  tweets
}) => {
  return (
    <Container>
      <p>{assunto}</p>
      <h4>{titulo}</h4>
      <p>{tweets}</p>    
    </Container>
  )
}

export default News
