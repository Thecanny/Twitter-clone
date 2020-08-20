import React from 'react';
import Posts from '../Posts';
import { Container } from './style';


const Tweet:  React.FC = () => {
  return (
    <Container>
      <Posts 
      name="Fulaninho"
      nickname="@fulaninho"
      time="25 de jul"
      description="#semideia"
      comentNumber={65}
      retweetNumber={62}
      likeNumber={103}
      />
      <Posts 
      name="Davi Azevedo"
      nickname="@pomba"
      time="30 de jul"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur imperdiet pulvinar. Cras vulputate eros eu ipsum porta pulvinar."
      comentNumber={45}
      retweetNumber={19}
      likeNumber={68}
      />
      <Posts 
      name="Julherme"
      nickname="@cabelinhofininho
      "
      time="01 de ago"
      description="Cras vulputate eros eu ipsum porta pulvinar."
      comentNumber={12}
      retweetNumber={22}
      likeNumber={41}
      />
    </Container>
  )
}

export default Tweet
