import { Navigate, useNavigate } from 'react-router-dom';
import { DetailsButton, LeaderboardAction, LeaderboardGender, LeaderboardName, LeaderboardRole, LeaderboardScore, UserButton, UserImg, UserLeaderboard } from './styles';
import detailsImg from './details.png';
import userImg from './user.png';

const LeaderboardElement = () => {
  const navigate = useNavigate();

  const handleOpenDetails = () => {
    navigate('details');
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Types = () => (
    <UserLeaderboard>
      <LeaderboardRole>Role</LeaderboardRole>
      <LeaderboardName>
        <UserImg src="../../not-found/corner.png" />
        Name
      </LeaderboardName>
      <LeaderboardGender>Gender</LeaderboardGender>
      <LeaderboardScore>Score</LeaderboardScore>
      <LeaderboardAction>
        <DetailsButton src={detailsImg} onClick={handleOpenDetails} />
        <UserButton src={userImg} />
      </LeaderboardAction>
    </UserLeaderboard>
  );

  return <Types />;
};

export default LeaderboardElement;
