/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DetailsButton, LeaderboardAction, LeaderboardGender, LeaderboardName, LeaderboardRole, LeaderboardScore, UserButton, UserImg, UserLeaderboard } from './styles';
import detailsImg from './details.png';
import userImg from './user.png';
import DetailsPopUp from '../detailsPopUp';
import IRecruitResponse from '../../../types/responses/IRecruitResponse';

interface IProps {
  recruit: IRecruitResponse;
}

export const enum PositionRole {
  FrontEnd,
  BackEnd,
  DevOps,
  SystemAdmin,
  FullStack,
}

const LeaderboardElement = ({ recruit }: IProps) => {
  console.log(recruit);
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenDetails = () => {
    navigate('details');
  };

  const handleOpenPopUp = () => {
    setModalIsOpen(true);
  };

  const role = (currentRecruit: IRecruitResponse): string => {
    switch (currentRecruit.user.positionRole) {
      case PositionRole.FrontEnd: {
        return 'FrontEnd';
      }
      case PositionRole.BackEnd: {
        return 'BackEnd';
      }
      case PositionRole.DevOps: {
        return 'DevOps';
      }
      case PositionRole.SystemAdmin: {
        return 'SystemAdmin';
      }
      case PositionRole.FullStack: {
        return 'FullStack';
      }
      default: {
        return '';
      }
    }
  };

  return (
    <UserLeaderboard>
      {modalIsOpen && <DetailsPopUp setModalIsOpen={setModalIsOpen} recruit={recruit} />}
      <LeaderboardRole>{role(recruit)}</LeaderboardRole>
      <LeaderboardName>
        {screen.width > 850 && <UserImg src={recruit.user.avatar} />}
        {recruit.user.name}
      </LeaderboardName>
      <LeaderboardGender>{recruit.gender == null ? 'N/A' : recruit.gender === 0 ? 'Male' : 'Female'}</LeaderboardGender>
      <LeaderboardScore>{recruit.totalScore}</LeaderboardScore>
      <LeaderboardAction>
        <DetailsButton src={detailsImg} onClick={handleOpenPopUp} />
        <UserButton src={userImg} onClick={handleOpenDetails} />
      </LeaderboardAction>
    </UserLeaderboard>
  );
};

export default LeaderboardElement;
