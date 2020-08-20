import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import { 
  Container, 
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './style';

const SideBar = () => {
  return (
   <Container>
     <SearchWrapper>
       <SearchInput placeholder="Buscar no twitter"/>
       <SearchIcon />
     </SearchWrapper>
     <StickyBox>
     <Body>
      <List 
        title="O que está acontecendo"
        elements={[
          <News 
            assunto="Futebol · Assunto do Momento"
            titulo="Pato"
            tweets="36,8 mil Tweets"
          />,
          <News 
            assunto="Celebridades · Assunto do Momento"
            titulo="Leonardo DiCaprio"
            tweets="7.512 Tweets"
          />,
          <News 
            assunto="Assunto do Momento em Distrito Federal"
            titulo="#FreeBritney"
            tweets="41 mil Tweets"
          />,
        ]}
      />
      <List 
        title="Quem seguir"
        elements={[
          <FollowSuggestion
          name="Leonardo Morandi"
          nickname="@pescoço"
          />,
          <FollowSuggestion
          name="Davi Azevedo"
          nickname="@pomba"
          />,
          <FollowSuggestion
          name="Julherme"
          nickname="@cabelinhofininho"
          />,
        ]}
      />
     </Body>
       
     </StickyBox>
   </Container>
  )
}

export default SideBar
