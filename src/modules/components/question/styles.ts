import styled from '../../../theme/styled';

export const QuestionPage = styled.main`
  background-color: ${props => props.theme.colors.backgroundGray};
  height: calc(100vh - 116px);
  padding: 50px 20px 20px 20px;

  @media (max-width: 1000px) {
    height: calc(100vh - 96px);
  }
`;

export const QuestionContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: ${props => props.theme.colors.purple}; */

  display: flex;
  flex-direction: row;
  @media (max-width: 1050px) {
    /* flex-direction: column; */
    justify-content: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const QuestionPart = styled.div`
  width: 90%;
  height: 250px;

  background-color: ${props => props.theme.colors.white};
  border-radius: 15px;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const QuestionNumber = styled.div`
  background-color: ${props => props.theme.colors.logoPurple};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};

  width: 180px;
  height: 50px;
  border-radius: 20px;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 50px;
`;

export const QuestionText = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.lightGray};

  padding: 10px 50px 0 50px;

  @media (max-width: 1100px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media (max-width: 400px) {
    padding: 2px 15px 0 15px;
    /* text-align: center; */
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;

export const ResponsesPart = styled.div`
  height: 250px;
  width: 90%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 15px;
  margin-top: 20px;
  /* padding-top: 50px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const ResponseContainer = styled.div`
  width: 90%;
  height: 60px;
  background-color: ${props => props.theme.colors.backgroundBlue};
  margin-bottom: 10px;
  margin-left: 50px;
  border-radius: 15px;

  display: flex;
  flex-direction: row;

  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 560px) {
    width: 85%;
  }
  @media (max-width: 560px) {
    width: 80%;
    margin-left: 20px;
  }
`;

export const ResponseNumber = styled.div`
  height: 60px;
  width: 60px;

  background-color: ${props => props.theme.colors.logoPurple};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.medium};
  border-radius: 15px;
  transform: translateX(-60%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResponseText = styled.div`
  background-color: ${props => props.theme.colors.backgroundBlue};
  color: ${props => props.theme.colors.textBlue};
  /* padding: 5px 30px 5px 30px; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 23%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 15px;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const PastQuestionsTitle = styled.div`
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.darkBlue};
  font-size: ${props => props.theme.fontSize.medium};

  text-align: center;
  padding-top: 30px;
`;

export const OldQuestion = styled.div`
  font-family: ${props => props.theme.fonts.interRegular};
  color: ${props => props.theme.colors.darkBlue};
  font-size: ${props => props.theme.fontSize.mSmall};

  background-color: ${props => props.theme.colors.backgroundBlue};
  border-radius: 15px;

  padding: 8px;
  margin: 10px 15px 10px 15px;
`;

export const BottomPart = styled.div`
  height: 20%;
  width: 90%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 15px;
  margin-top: 20px;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;
