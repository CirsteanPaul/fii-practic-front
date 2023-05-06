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
    <LeaderboardContainer>
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      <Types />
      <LeaderboardElement />
      <Delimitator />
      <LeaderboardElement />
      <Delimitator />
      <LeaderboardElement />
      <Delimitator />
    </LeaderboardContainer>
  </LeaderboardPage>
);

export default Leaderboard;
