import styled from '../../theme';

export const HomePage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  background-color: ${props => props.theme.colors.backgroundGray};
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 14px;

  position: relative;
  padding: 100px 150px 50px 100px;

  @media (max-width: 1300px) {
    padding: 60px 100px 50px 60px;
  }

  @media (max-width: 1185px) {
    padding: 60px;
    text-align: center;
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
`;

export const SubTitle = styled.h2`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  padding-left: 15px;

  @media (max-width: 1185px) {
    padding: 0;
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
  }
`;

export const HowItWorksTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.logoPurple};

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export const HowItWorksDescription = styled.h2`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  padding-left: 15px;

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media (max-width: 1185px) {
    padding-left: 0;
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
`;

export const HowToPlayTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.logoPurple};

  @media (max-width: 1430px) {
    font-size: ${props => props.theme.fontSize.large};
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
