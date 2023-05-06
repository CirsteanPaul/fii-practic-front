import React from 'react';
import { Name, ProfilePicture, TopNavbarContainer, TopNavBarMenu } from './styles';
import profilepicture from './assets/profile_picture.png';

const TopNavBar = (): JSX.Element => {
  return (
    <TopNavbarContainer>
      <TopNavBarMenu>
        <ProfilePicture src={profilepicture} />
        <Name to="">Mihai</Name>
      </TopNavBarMenu>
    </TopNavbarContainer>
  );
};

export default TopNavBar;
