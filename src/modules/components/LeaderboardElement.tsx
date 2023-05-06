import React from 'react';
import {
  LeaderboardAction,
  LeaderboardGender,
  LeaderboardName,
  LeaderboardRole,
  LeaderboardScore,
  LeaderboardStatus,
  StatusDoneButton,
  UserImg,
  UserLeaderboard,
} from './leaderboard/styles';

const Types = () => (
  <UserLeaderboard>
    <LeaderboardRole>Role</LeaderboardRole>
    <LeaderboardName>
      <UserImg src="../../not-found/corner.png" />
      Name
    </LeaderboardName>
    <LeaderboardGender>Gender</LeaderboardGender>
    <LeaderboardScore>Score</LeaderboardScore>
    <LeaderboardAction>Action</LeaderboardAction>
    <LeaderboardStatus>
      <StatusDoneButton>Done</StatusDoneButton>
    </LeaderboardStatus>
  </UserLeaderboard>
);

const LeaderboardElement = () => {
  return <Types />;
};

export default LeaderboardElement;
