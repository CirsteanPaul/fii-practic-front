import * as Scroll from 'react-scroll';
import styled from '../../../theme';

export const FpContainer = styled.section`
  position: absolute;
  top: -240px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 700px;
  height: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: linear-gradient(276.82deg, #812f2f -27.99%, #f06060 104.09%);
  flex-direction: column;
  gap: 20px;
  padding: 15px 30px;
  @media screen and (max-width: 890px) {
    top: -250px;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 250px;
    top: -200px;
  }
  @media screen and (max-width: 512px) {
    width: 90%;
    height: auto;
    top: -200px;
    padding: 30px;
  }
  @media screen and (max-width: 512px) {
    top: -155px;
  }
`;

export const FpLittleText = styled.h6`
  font-size: ${props => props.theme.fontSize.small};
  text-transform: uppercase;
  text-align: center;
`;

export const FpTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  max-width: 75%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const FpButton = styled(Scroll.Link).attrs(props => ({
  spy: true,
  activeClass: `color:${props.theme.colors.primary}`,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))`
  border-radius: 30px;
  padding: 15px 40px;
  display: flex;
  text-align: center;
  align-items: center;
  max-width: 400px;
  text-transform: uppercase;
  justify-content: center;
  outline: 0;
  border: 0;
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  @media screen and (max-width: 512px) {
    max-width: auto;
    padding: 15px 15px;
    min-width: 150px;
  }
`;
