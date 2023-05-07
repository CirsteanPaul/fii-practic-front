/* eslint-disable no-restricted-globals */
import { setModalOpenAction } from '../../../store/slices/appSlice';
import {
  ChartColumn,
  ChartElement,
  ChartHeight,
  ChartsFull,
  Details,
  DetailsPop,
  DetailsText,
  DetailsTitle,
  HireButton,
  LeftPop,
  PopContainer,
  Position,
  PositionText,
  PositionTitle,
  ProfilePicture,
  RightPop,
  SkillsTitle,
  TopOfLeftPop,
  UserDetails,
  UserName,
} from './styles';
import IRecruitResponse from '../../../types/responses/IRecruitResponse';
import { PositionRole } from '../leaderboard/LeaderboardElement';
import { chartDetails } from './constants';

interface Props {
  setModalIsOpen: (a: any) => void;
  recruit: IRecruitResponse;
}

const DetailsPopUp = ({ setModalIsOpen, recruit }: Props) => {
  const handleStopPropagation = (event: any) => {
    event.stopPropagation();
  };

  const chart: chartDetails[] = [
    {
      score: recruit.codingScore,
      title: 'coding',
    },
    {
      score: recruit.psychologyScore,
      title: 'psychology',
    },
    {
      score: recruit.calmScore,
      title: 'calm',
    },
    {
      score: recruit.assertiveScore,
      title: 'assertive',
    },
    {
      score: recruit.agreeableScore,
      title: 'agreeable',
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const Charts = () => (
    <ChartsFull>
      {chart.map(chartElement => (
        <ChartElement>
          <ChartColumn>
            {/* <div>{chartElement.score}</div> */}
            {screen.width > 830 && <ChartHeight style={{ height: `calc(${chartElement.score * 1.8}px)` }} />}
            {screen.width < 830 && <ChartHeight style={{ height: `calc(${chartElement.score * 0.9}px)` }} />}
          </ChartColumn>
          <div style={{ paddingTop: '10px' }}>{chartElement.title}</div>
          <div>{chartElement.score ?? 0}%</div>
        </ChartElement>
      ))}
    </ChartsFull>
  );

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
    <DetailsPop
      onClick={() => {
        setModalIsOpen(false);
      }}
    >
      <PopContainer onClick={handleStopPropagation}>
        <LeftPop>
          <TopOfLeftPop>
            <UserDetails>
              <ProfilePicture src={recruit.user.avatar} />
              <UserName>{recruit.user.name}</UserName>
            </UserDetails>
            <Position>
              <PositionTitle>Position</PositionTitle>
              <PositionText>{role(recruit)}</PositionText>
            </Position>
            <Details>
              <DetailsTitle>Details</DetailsTitle>
              <DetailsText>{recruit.user.description}</DetailsText>
            </Details>
          </TopOfLeftPop>
          <HireButton>Hire</HireButton>
        </LeftPop>
        <RightPop>
          <SkillsTitle>Skills</SkillsTitle>
          <Charts />
        </RightPop>
      </PopContainer>
    </DetailsPop>
  );
};

export default DetailsPopUp;
