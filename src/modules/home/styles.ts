import styled from '../../theme';

export const HomePage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 116px);

  background-color: ${props => props.theme.colors.backgroundGray};

  @media (max-width: 1000px) {
    height: calc(100vh - 96px);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 14px;

  position: relative;
  padding: 50px 120px 50px 100px;

  @media (max-width: 1300px) {
    padding: 30px 100px 50px 60px;
  }

  @media (max-width: 1185px) {
    padding: 60px;
    text-align: center;
    padding-top: 20px;
  }
  @media (max-width: 750px) {
    width: 90%;
    height: 95%;
  }
  @media (max-width: 560px) {
    padding: 30px;
    padding-top: 10px;
  }
  @media (max-width: 400px) {
    width: 95%;
    height: 95%;
    padding: 10px;
  }
`;

export const BackgroundLogo = styled.img`
  position: absolute;
  top: 2%;
  right: 3%;

  @media (max-width: 1120px) {
    width: 350px;
    height: auto;
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MainTitle = styled.h1`
  /* font-family: ${props => props.theme.fonts.interBold}; */
  font-size: ${props => props.theme.fontSize.gigant};
  color: ${props => props.theme.colors.logoPurple};

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }

  @media (max-width: 1185px) {
    padding: 0;
  }
  @media (max-width: 560px) {
    padding-top: 20px;
    font-size: ${props => props.theme.fontSize.large};
  }
  @media (max-width: 400px) {
    padding-top: 10px;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const SubTitle = styled.h2`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  padding-left: 15px;

  @media (max-width: 1185px) {
    padding: 0;
  }
  @media (max-width: 560px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const HowItWorks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding-top: 50px;
  padding-left: 30px;

  @media (max-width: 1185px) {
    padding-left: 0;
    padding-top: 30px;
  }
  @media (max-width: 560px) {
    padding-top: 15px;
  }
`;

export const HowItWorksTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.logoPurple};

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.large};
  }
  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.large};
  }
  @media (max-width: 400px) {
    padding-top: 0px;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const HowItWorksDescription = styled.h2`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  font-size: ${props => props.theme.fontSize.medium};
  padding-left: 15px;

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media (max-width: 1185px) {
    padding-left: 0;
  }
  @media (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media (max-width: 400px) {
    padding-top: 0px;
    font-size: ${props => props.theme.fontSize.mxSmall};
  }
`;

export const HowToPlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding-top: 25px;
  padding-left: 60px;

  @media (max-width: 1185px) {
    padding-left: 0;
  }
  @media (max-width: 560px) {
    padding-top: 10px;
  }
  @media (max-width: 350px) {
    padding-top: 10px;
  }
`;

export const HowToPlayTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.logoPurple};

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.large};
  }
  @media (max-width: 400px) {
    padding-top: 0px;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const HowToPlayDescription = styled.h2`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  padding-left: 15px;

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media (max-width: 1185px) {
    padding-left: 0;
  }
  @media (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media (max-width: 400px) {
    padding-top: 10px;
    font-size: ${props => props.theme.fontSize.mxSmall};
  }
`;

export const SignUpButton = styled.button`
  background-color: ${props => props.theme.colors.logoPurple};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.medium};

  width: 200px;
  height: 50px;

  border-radius: 15px;
  border: 2px solid ${props => props.theme.colors.borderGray};

  align-self: center;
  margin-top: 50px;
`;
