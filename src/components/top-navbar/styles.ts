import * as Router from 'react-router-dom';
import styled from '../../theme';

export const TopNavbarContainer = styled.div`
  display: flex;
  height: auto;
  padding-top: 32px;
  padding-right: 50px;
  justify-content: flex-end;
`;

export const TopNavBarLoginButton = styled.button`
  font-family: ${props => props.theme.fonts.inter};
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #8146ff;
  outline: 0;
  background-color: transparent;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  font-family: ${props => props.theme.fonts.inter};
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #8146ff;
  outline: 0;
  background-color: transparent;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const TopNavBarMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  border-radius: 10px;
`;

export const Name = styled(Router.Link)`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.darkerGray};
  font-family: ${props => props.theme.fonts.inter};
  background-color: transparent;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.purple};
  }
`;
