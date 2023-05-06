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
import { chart } from './constants';

interface Props {
  setModalIsOpen: (a: any) => void;
}

const DetailsPopUp = ({ setModalIsOpen }: Props) => {
  const handleStopPropagation = (event: any) => {
    event.stopPropagation();
  };

  const chartTypes: string[] = ['coding', 'psychology', 'calm', 'assertive', 'agreeable'];
  const chartScores: number[] = [10, 55, 22, 90, 100];

  // eslint-disable-next-line react/no-unstable-nested-components
  const Charts = () => (
    <ChartsFull>
      {chart.map(chartElement => (
        <ChartElement>
          <ChartColumn>
            {/* <div>{chartElement.score}</div> */}
            <ChartHeight style={{ height: `calc(${chartElement.score * 1.8}px)` }} />
          </ChartColumn>
          <div style={{ paddingTop: '10px' }}>{chartElement.title}</div>
          <div>{chartElement.score}%</div>
        </ChartElement>
      ))}
    </ChartsFull>
  );

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
              <ProfilePicture src={null} />
              <UserName>Nume</UserName>
            </UserDetails>
            <Position>
              <PositionTitle>Position</PositionTitle>
              <PositionText>Head of S</PositionText>
            </Position>
            <Details>
              <DetailsTitle>Details</DetailsTitle>
              <DetailsText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus blanditiis labore culpa deleniti esse error molestiae mollitia possimus optio quasi delectus in
                adipisci, expedita quae illum eius nesciunt autem excepturi!
              </DetailsText>
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
