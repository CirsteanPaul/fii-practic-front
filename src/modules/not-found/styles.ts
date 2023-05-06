import { Link } from 'react-router-dom';
import styled from '../../theme/styled';

export const NotFoundPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundGray};
  align-items: center;
  justify-content: center;
`;

export const NotFoundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.white};
  border-radius: 50px;
  margin-top: 20px;

  width: 80vw;
  height: 80vh;
`;

export const NotFoundTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.darkBlue};
  text-justify: center;
  margin: 1rem 0;
`;

export const NotFoundText = styled.h1`
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSize.medium};
  margin: 1rem 0;
`;

export const NotFoundLink = styled(Link)`
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    color: #2b4069;
    transition: color 0.2s ease;
  }
`;

export const TopLeftCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  top: 0px;
  left: 0px;
`;

export const TopRightCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  top: 0px;
  right: 0px;
  transform: scaleX(-1);
`;

export const BottomLeftCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: scaleY(-1);
`;

export const BottomRightCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: scale(-1);
`;
