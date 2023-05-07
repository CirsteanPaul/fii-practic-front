import React from 'react';

import backgroundLogo from './backgroundLogo.png';
import {
  BackgroundLogo,
  HomeContainer,
  HomePage,
  HomeTitle,
  HowItWorks,
  HowItWorksDescription,
  HowItWorksTitle,
  HowToPlay,
  HowToPlayDescription,
  HowToPlayTitle,
  MainTitle,
  SignUpButton,
  SubTitle,
} from './styles';
import { useAppDispatch } from '../../hooks/store-hooks';
import { setRolesModalOpenAction } from '../../store/slices/appSlice';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleOpenSignUp = () => {
    dispatch(setRolesModalOpenAction(true));
  };

  return (
    <HomePage>
      <HomeContainer>
        <BackgroundLogo src={backgroundLogo} />
        <HomeTitle>
          <MainTitle>Gamified Recruitment</MainTitle>
          <SubTitle>An interactive way of evaluating strengths</SubTitle>
        </HomeTitle>
        <HowItWorks>
          <HowItWorksTitle>How does it work?</HowItWorksTitle>
          <HowItWorksDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </HowItWorksDescription>
        </HowItWorks>
        <HowToPlay>
          <HowToPlayTitle>How to play the game?</HowToPlayTitle>
          <HowToPlayDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </HowToPlayDescription>
        </HowToPlay>
        <SignUpButton onClick={handleOpenSignUp}>+ Sign up</SignUpButton>
      </HomeContainer>
    </HomePage>
  );
};

export default Home;
