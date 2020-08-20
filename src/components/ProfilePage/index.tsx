import React from 'react';
import {
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon,
  CakeIcon,
  Fallowage,
  EditButton
}from './styles';

import profilePic from '../../img/profile.jpg';

import Feed from '../Feed';

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={profilePic} alt="profile pic"/>
        </Avatar>
      </Banner>
        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>

          <h1>Nícolas Azevedo</h1>
          <h2>@Nickolino</h2>
          <p>
            Desenvolvedor Front-end
          </p>

          <ul>
            <li>
              <LocationIcon />
              Porto Alegre
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 24 de junho de 1987
            </li>
          </ul>
          <Fallowage>
            <span>
              Seguindo <strong>100</strong>
            </span>
            <span>
              <strong>300 </strong> seguidores
            </span>
          </Fallowage>
        </ProfileData>
     <Feed />
    </Container>
  )
}

export default ProfilePage
