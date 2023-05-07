import React from 'react';
import { Name, ProfilePicture, TopNavbarContainer, TopNavBarLoginButton, TopNavBarMenu } from './styles';
import profilepicture from './assets/profile_picture.png';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { isLoggedInAuthSelector } from '../../store/selectors/auth-selectors';
import { setLoginModalOpenAction } from '../../store/slices/appSlice';

const TopNavBar = (): JSX.Element => {
  const isAuth = useAppSelector(isLoggedInAuthSelector);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(setLoginModalOpenAction(true));
  };
  const buildButton = () => {
    if (!isAuth) {
      return (
        <TopNavBarLoginButton type="button" onClick={handleLogin}>
          Login
        </TopNavBarLoginButton>
      );
    }
    return (
      <>
        <ProfilePicture src={profilepicture} />
        <Name to="settings">Mihai</Name>
      </>
    );
  };
  return (
    <TopNavbarContainer>
      <TopNavBarMenu>{buildButton()}</TopNavBarMenu>
    </TopNavbarContainer>
  );
};

export default TopNavBar;
