import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SideNavbarContainer,
  SideNavbarFooter,
  SideNavbarLink,
  SideNavbarLogo,
  SideNavbarLogoContainer,
  SideNavBarLogoName,
  SideNavbarNavigationContainer,
  SideNavBarNavigationLogo,
  SideNavbarNavigationWrapper,
} from './styles';
import fiiLogo from './assets/fii_logo.png';
import { SideNavbarLinks } from './constants';
import settingslogo from './assets/settings_logo.png';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { isLoggedInAuthSelector } from '../../store/selectors/auth-selectors';
import { logoutActionAsync } from '../../store/actions/auth-actions';

const SideNavbar = (): JSX.Element => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(isLoggedInAuthSelector);
  const dispatch = useAppDispatch();
  const handleHomeNavigation = () => {
    navigate('/');
  };

  const handleLogout = () => {
    dispatch(logoutActionAsync());
  };

  const buildBottomButton = () => {
    if (!isAuth) {
      return null;
    }
    return (
      <SideNavbarLink onClick={handleLogout} style={{ paddingLeft: 38 }} to="#">
        Logout
      </SideNavbarLink>
    );
  };

  return (
    <SideNavbarContainer>
      <SideNavbarNavigationWrapper>
        <SideNavbarLogoContainer onClick={handleHomeNavigation}>
          <SideNavbarLogo src={fiiLogo} />
          <SideNavBarLogoName>BrandName</SideNavBarLogoName>
        </SideNavbarLogoContainer>

        {SideNavbarLinks.map(e => (
          <SideNavbarNavigationContainer key={e.name}>
            <SideNavBarNavigationLogo src={e.img} />
            <SideNavbarLink to={e.name}>{e.name}</SideNavbarLink>
          </SideNavbarNavigationContainer>
        ))}
      </SideNavbarNavigationWrapper>
      <SideNavbarFooter>
        <SideNavbarNavigationContainer>
          <SideNavBarNavigationLogo src={settingslogo} />
          <SideNavbarLink to="settings">Settings</SideNavbarLink>
        </SideNavbarNavigationContainer>
        {buildBottomButton()}
      </SideNavbarFooter>
    </SideNavbarContainer>
  );
};

export default SideNavbar;
