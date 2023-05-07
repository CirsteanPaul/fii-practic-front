import * as Router from 'react-router-dom';
import styled from '../../theme';

export const SideNavbarContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 25px;
  padding-left: 40px;
  width: 300px;
  position: fixed;
  background-color: ${props => props.theme.colors.white};
`;

export const SideNavbarLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 60px;

  &:hover {
    cursor: pointer;
  }
`;

export const SideNavbarLogo = styled.img``;

export const SideNavBarLogoName = styled.p`
  color: ${props => props.theme.colors.purple};
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.inter};
`;

export const SideNavbarNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;

export const SideNavbarNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;
`;

export const SideNavBarNavigationLogo = styled.img`
  padding-left: 5px;
  min-width: 29px;
`;

export const SideNavbarLink = styled(Router.Link)`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.inter};
  background-color: transparent;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.purple};
  }
`;

export const SideNavbarFooter = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 20px;
`;
