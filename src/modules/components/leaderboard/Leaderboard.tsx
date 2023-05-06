import LeaderboardElement from '../LeaderboardElement';
import {
  LeaderboardPage,
  LeaderboardContainer,
  LeaderboardTitle,
  LeaderboardTypes,
  LeaderboardStatus,
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
    <LeaderboardStatus>Status</LeaderboardStatus>
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
