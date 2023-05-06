import React from 'react';
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

const SideNavbar = (): JSX.Element => {
  return (
    <SideNavbarContainer>
      <SideNavbarNavigationWrapper>
        <SideNavbarLogoContainer>
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
      </SideNavbarFooter>
    </SideNavbarContainer>
  );
};

export default SideNavbar;
