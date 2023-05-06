import styled from '../../../theme/styled';

export const LeaderboardPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 116px);
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

  width: 95%;
  /* height: 80vh; */
`;

export const LeaderboardTitle = styled.h2`
  font-family: ${props => props.theme.fonts.interBold};
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
  width: 20%;
  font-family: ${props => props.theme.fonts.interRegular};
`;

export const LeaderboardName = styled.div`
  font-family: ${props => props.theme.fonts.interRegular};
  width: 30%;
  display: flex;
  align-items: center;
`;

export const LeaderboardGender = styled.div`
  width: 20%;
  font-family: ${props => props.theme.fonts.interRegular};
`;

export const LeaderboardScore = styled.div`
  font-family: ${props => props.theme.fonts.interRegular};
  width: 20%;
`;

export const LeaderboardAction = styled.div`
  font-family: ${props => props.theme.fonts.interRegular};
  width: 15%;
  text-align: center;

  display: flex;
  gap: 10px;
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

export const DetailsButton = styled.img`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderGray};
  width: 25px;
  height: 25px;
  padding: 2px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const UserButton = styled.img`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderGray};
  width: 25px;
  height: 25px;
  padding: 2px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
