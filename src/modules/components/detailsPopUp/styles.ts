import styled from '../../../theme/styled';

export const DetailsPop = styled.main`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(242, 242, 242, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopContainer = styled.div`
  width: 80%;
  height: 60%;

  background-color: ${props => props.theme.colors.white};
  border-radius: 50px;
  padding: 100px;

  display: flex;
  flex-direction: row;
`;

export const LeftPop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 35%;
  height: 100%;
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
`;

export const PositionTitle = styled.div`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  font-size: ${props => props.theme.fontSize.large};
`;

export const PositionText = styled.div`
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: ${props => props.theme.fontSize.large};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 40px;
`;

export const DetailsTitle = styled.div`
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.interRegular};
  font-size: ${props => props.theme.fontSize.large};
`;

export const DetailsText = styled.div`
  color: ${props => props.theme.colors.lighterGray};
  font-family: ${props => props.theme.fonts.interRegular};
  font-size: ${props => props.theme.fontSize.medium};

  padding-left: 10px;
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
`;

export const RightPop = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding-left: 50px;
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
`;

export const ChartHeight = styled.div`
  width: 80px;
  background-color: ${props => props.theme.colors.inactiveRed};
  border-radius: 20px;
`;

export const ChartElement = styled.div`
  margin-left: 60px;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SkillsTitle = styled.div`
  color: ${props => props.theme.colors.darkBlue};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: ${props => props.theme.fontSize.large};

  padding: 50px;
`;

export const ChartsFull = styled.div`
  display: flex;
  flex-direction: row;
`;
