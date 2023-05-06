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

  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const NotFoundText = styled.h1`
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSize.medium};
  margin: 1rem 0;

  @media (max-width: 620px) {
    font-size: ${props => props.theme.fontSize.small};
    width: 80%;
    text-align: center;
  }

  @media (max-width: 310px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;

export const NotFoundLink = styled(Link)`
  color: ${props => props.theme.colors.logoPurple};
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    color: ${props => props.theme.colors.hoverPurple};
    transition: color 0.2s ease;
  }

  @media (max-width: 310px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;

export const TopLeftCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  top: 0px;
  left: 0px;

  @media (max-width: 310px) {
    display: none;
  }
`;

export const TopRightCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  top: 0px;
  right: 0px;
  transform: scaleX(-1);

  @media (max-width: 310px) {
    display: none;
  }
`;

export const BottomLeftCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: scaleY(-1);

  @media (max-width: 310px) {
    display: none;
  }
`;

export const BottomRightCorner = styled.img`
  height: 100px;
  width: auto;

  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: scale(-1);

  @media (max-width: 310px) {
    display: none;
  }
`;
