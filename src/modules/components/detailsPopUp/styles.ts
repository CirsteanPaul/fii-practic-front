import styled from '../../../theme/styled';

export const DetailsPop = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: auto;
  z-index: 100;
  overflow-y: scroll;
  overflow-x: hidden;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const PopContainer = styled.div`
  width: 80%;
  min-height: 100%;

  background-color: ${props => props.theme.colors.white};
  border-radius: 50px;
  padding: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    padding: 50px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px;
  }
  @media (max-width: 400px) {
    padding: 15px;
  }
`;

export const LeftPop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 35%;
  height: 100%;
  @media (max-width: 900px) {
    height: auto;
    width: auto;
  }
`;

export const TopOfLeftPop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const UserName = styled.div`
  color: ${props => props.theme.colors.darkBlue};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: ${props => props.theme.fontSize.large};
`;

export const Position = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  padding-top: 40px;
  @media (max-width: 440px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const PositionTitle = styled.div`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  font-size: ${props => props.theme.fontSize.large};
  @media (max-width: 1230px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const PositionText = styled.div`
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: ${props => props.theme.fontSize.large};
  @media (max-width: 1230px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 30px;
  @media (max-width: 440px) {
    gap: 5px;
    padding-top: 15px;
  }
`;

export const DetailsTitle = styled.div`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  font-size: ${props => props.theme.fontSize.large};
  @media (max-width: 1230px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const DetailsText = styled.div`
  color: ${props => props.theme.colors.lighterGray};
  font-family: ${props => props.theme.fonts.interRegular};
  font-size: ${props => props.theme.fontSize.medium};

  padding-left: 10px;
  @media (max-width: 1230px) {
    font-size: ${props => props.theme.fontSize.small};
    padding-left: 0;
  }
  @media (max-width: 400px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;

export const HireButton = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: ${props => props.theme.fontSize.large};

  background-color: ${props => props.theme.colors.logoPurple};
  height: 80px;
  width: 200px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.borderGray};

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1230px) {
    font-size: ${props => props.theme.fontSize.medium};
    height: 60px;
    width: 150px;
    margin-top: 20px;
    align-self: center;
  }
  @media (max-width: 1230px) {
    font-size: ${props => props.theme.fontSize.medium};
    height: 40px;
    width: 100px;
    margin-top: 10px;
  }
`;

export const RightPop = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding-left: 50px;
  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const ChartColumn = styled.div`
  width: 100px;
  height: 200px;
  background-color: ${props => props.theme.colors.backgroundGray};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  @media (max-width: 830px) {
    width: 50px;
    height: 100px;
    padding-bottom: 5px;
  }
`;

export const ChartHeight = styled.div`
  width: 80px;
  background-color: ${props => props.theme.colors.inactiveRed};
  border-radius: 20px;
  @media (max-width: 830px) {
    width: 40px;
  }
`;

export const ChartElement = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-left: 10px;
    margin-right: 10px;
    justify-content: center;
  }
  @media (max-width: 400px) {
    margin-left: 4px;
    margin-right: 4px;
  }
`;

export const SkillsTitle = styled.div`
  color: ${props => props.theme.colors.darkBlue};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: ${props => props.theme.fontSize.large};

  padding: 50px;
  @media (max-width: 900px) {
    text-align: center;
    padding: 10px;
  }
`;

export const ChartsFull = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 100%; */
`;
