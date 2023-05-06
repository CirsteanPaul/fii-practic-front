import styled from '../../../theme/styled';

export const LeaderboardPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundGray};
  align-items: center;
  justify-content: center;
`;

export const LeaderboardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors.white};
  border-radius: 50px;
  margin-top: 20px;
  padding: 40px;

  width: 80vw;
  height: 80vh;
`;

export const LeaderboardTitle = styled.h2`
  font-family: ${props => props.theme.fonts.interRegular};
`;

export const LeaderboardTypes = styled.div`
  background-color: ${props => props.theme.colors.veryLightGray};
  font-size: ${props => props.theme.fontSize.mSmall};
  font-family: ${props => props.theme.fonts.interRegular};
  width: 95%;
  height: 80px;

  margin-top: 20px;
  border-radius: 8px;
  padding-left: 20px;

  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeaderboardRole = styled.div`
  width: 15%;
  font-family: ${props => props.theme.fonts.interRegular};
  /* text-align: center; */
`;

export const LeaderboardName = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const LeaderboardGender = styled.div`
  width: 20%;
`;

export const LeaderboardScore = styled.div`
  width: 10%;
`;

export const LeaderboardAction = styled.div`
  width: 20%;
  text-align: center;
`;

export const LeaderboardStatus = styled.div`
  width: 20%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Delimitator = styled.div`
  width: 95%;
  height: 2px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.delimitatorGray};

  align-self: center;
`;

export const UserLeaderboard = styled.div`
  width: 95%;
  height: 80px;
  /* margin-top: 20px; */
  padding-left: 20px;

  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 5px;
`;

export const StatusDoneButton = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  padding: 10px;
  color: ${props => props.theme.colors.activeGreen};
  background-color: ${props => props.theme.colors.backgroundGray};
  border-radius: 10px;

  width: 100px;
  height: 50px;
`;
