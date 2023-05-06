import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DetailsButton, LeaderboardAction, LeaderboardGender, LeaderboardName, LeaderboardRole, LeaderboardScore, UserButton, UserImg, UserLeaderboard } from './styles';
import detailsImg from './details.png';
import userImg from './user.png';
import DetailsPopUp from '../detailsPopUp';

const LeaderboardElement = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenDetails = () => {
    navigate('details');
  };

  const handleOpenPopUp = () => {
    setModalIsOpen(true);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Types = () => (
    <UserLeaderboard>
      {modalIsOpen && <DetailsPopUp setModalIsOpen={setModalIsOpen} />}
      <LeaderboardRole>Role</LeaderboardRole>
      <LeaderboardName>
        <UserImg src="../../not-found/corner.png" />
        Name
      </LeaderboardName>
      <LeaderboardGender>Gender</LeaderboardGender>
      <LeaderboardScore>Score</LeaderboardScore>
      <LeaderboardAction>
        <DetailsButton src={detailsImg} onClick={handleOpenPopUp} />
        <UserButton src={userImg} onClick={handleOpenDetails} />
      </LeaderboardAction>
    </UserLeaderboard>
  );

  return <Types />;
};

export default LeaderboardElement;
