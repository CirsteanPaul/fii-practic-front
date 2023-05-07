/* eslint-disable no-restricted-globals */
import LeaderboardElement from './LeaderboardElement';
import {
  LeaderboardPage,
  LeaderboardContainer,
  LeaderboardTitle,
  LeaderboardTypes,
  LeaderboardAction,
  LeaderboardGender,
  LeaderboardName,
  LeaderboardRole,
  LeaderboardScore,
  Delimitator,
} from './styles';

const Types = () => (
  <LeaderboardTypes>
    <LeaderboardRole>Role</LeaderboardRole>
    <LeaderboardName>Name</LeaderboardName>
    <LeaderboardGender>Gender</LeaderboardGender>
    <LeaderboardScore>Score</LeaderboardScore>
    <LeaderboardAction>Action</LeaderboardAction>
  </LeaderboardTypes>
);

const Leaderboard = (): JSX.Element => (
  <LeaderboardPage>
    <LeaderboardTitle>Leaderboard</LeaderboardTitle>
    <LeaderboardContainer>
      {screen.width > 850 && <Types />}
      <LeaderboardElement />
      {screen.width > 850 && <Delimitator />}
      <LeaderboardElement />
      {screen.width > 850 && <Delimitator />}
      <LeaderboardElement />
      {screen.width > 850 && <Delimitator />}
    </LeaderboardContainer>
  </LeaderboardPage>
);

export default Leaderboard;
