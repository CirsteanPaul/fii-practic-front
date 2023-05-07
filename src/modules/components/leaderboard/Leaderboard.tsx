/* eslint-disable no-restricted-globals */
import { useEffect } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { fetchLeaderboardAsyncAction } from '../../../store/actions/recruit-actions';
import { leaderboartSelector } from '../../../store/selectors/recruit-selectors';

const Types = () => (
  <LeaderboardTypes>
    <LeaderboardRole>Role</LeaderboardRole>
    <LeaderboardName>Name</LeaderboardName>
    <LeaderboardGender>Gender</LeaderboardGender>
    <LeaderboardScore>Score</LeaderboardScore>
    <LeaderboardAction>Action</LeaderboardAction>
  </LeaderboardTypes>
);

const Leaderboard = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLeaderboardAsyncAction());
  }, [dispatch]);

  const leaderboard = useAppSelector(leaderboartSelector);
  console.log(leaderboard);

  const leaderboardMap: JSX.Element[] = leaderboard.map(recruit => {
    console.log(recruit);
    return (
      <>
        <LeaderboardElement key={recruit.id} recruit={recruit} />
        {screen.width > 850 && <Delimitator />}
      </>
    );
  });

  return (
    <LeaderboardPage>
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      <LeaderboardContainer>
        {screen.width > 850 && <Types />}
        {leaderboardMap}
      </LeaderboardContainer>
    </LeaderboardPage>
  );
};

export default Leaderboard;
