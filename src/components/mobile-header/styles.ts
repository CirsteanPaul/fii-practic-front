import * as Router from 'react-router-dom';
import styled, { css } from '../../theme';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: calc(100% - 265px);
  gap: 50px;
  padding-left: 100px;
  @media (max-width: 1000px) {
    padding: 0px;
    gap: 40px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
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
  gap: 40px;
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
  ${props =>
    props.isOpen &&
    css`
      width: 50px;
      transition: width 1s ease-out;
    `}
  margin-top: 90px;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
  }
`;
export const InsideLink = styled(Router.Link).attrs(props => ({
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
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.darkBlue};
  }
`;
