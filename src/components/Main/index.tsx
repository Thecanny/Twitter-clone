import React from 'react';
import ProfilePage from '../ProfilePage';

import { 
  Container,
  Header, 
  BackIcon, 
  ProfileInfo, 
  BottonMenu, 
  HomeIcon, 
  SearchIcon, 
  BellIcon, 
  EmailIcon
  } from './style';




const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Nícolas Azevedo</strong>
          <span>66 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottonMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottonMenu>

    </Container>
  )
}

export default Main
