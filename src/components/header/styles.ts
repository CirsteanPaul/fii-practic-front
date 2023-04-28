import * as Scroll from 'react-scroll';
import styled, { css } from '../../theme';

export const HeaderContainer = styled.header<{ isScrolled?: boolean }>`
  position: fixed;
  display: flex;
  padding: 0 24px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 20;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    transition: height 0.1s ease-out;
    left: 0;
    height: 0;
    z-index: 10;
    width: 100%;
    ${props =>
      props.isScrolled &&
      css`
        height: 100%;
        transition: height 0.3s ease;
        -webkit-backdrop-filter: blur(7px);
        backdrop-filter: blur(7px);
        background-color: rgba(0, 0, 0, 0.3);
      `};
  }
`;
export const HeaderLeftSection = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
`;
export const HeaderLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  align-self: center;
`;
export const HeaderTitle = styled.h2<{ isRed?: boolean }>`
  display: flex;
  align-self: center;
  text-transform: uppercase;
  margin-right: 2px;
  font-size: ${props => props.theme.fontSize.medium};
`;
export const HeaderNavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-self: center;
  z-index: 21;
  align-items: center;
`;
export const HeaderNavItem = styled(Scroll.Link)`
  outline: 0;
  border: 0;
  background-color: transparent;
  text-transform: uppercase;
  z-index: 10;

  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
`;
export const HeaderNavIconDiscord = styled.img`
  width: 25px;
  height: 25px;
  align-self: center;
`;
export const HeaderNavIconTwitter = styled.img`
  width: 25px;
  height: 20px;
  align-self: center;
`;
export const InsideLink = styled(Scroll.Link).attrs(props => ({
  spy: true,
  activeClass: `color:${props.theme.colors.primary}`,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))<{ isOpen?: boolean }>`
  transition: visibility 0.2s ease;
  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `};
  text-transform: uppercase;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.medium};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`;
export const NavLink = styled(Scroll.Link).attrs(props => ({
  spy: true,
  activeClass: `color:${props.theme.colors.primary}`,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))`
  text-transform: uppercase;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`;
export const HeaderMobileMenu = styled.nav<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  display: flex;
  height: 100%;
  overflow: hidden;
  background-color: black;
  flex-grow: 1;
  flex-direction: column;
  gap: 30px;
  padding: 0;
  align-items: center;
  z-index: 50;
  transition: width 0.7s ease;
  ${props =>
    props.isOpen &&
    css`
      padding: 20px 10px;
      width: 100vw;
    `}
`;
export const HeaderLogoMobile = styled.img<{ isOpen: boolean }>`
  width: 0;
  height: 70px;
  ${props =>
    props.isOpen &&
    css`
      width: 70px;
      transition: width 1s ease-out;
    `}
`;
export const HeaderLogoContainer = styled.div`
  display: flex;
  z-index: 22;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
`;
export const HeaderLogoNavMenuMobile = styled.img`
  height: 40px;
  width: 40px;
  align-self: center;
`;
export const HeaderLogoText = styled.p`
  text-transform: uppercase;
`;
