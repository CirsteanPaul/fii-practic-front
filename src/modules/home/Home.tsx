import React from 'react';
import { HomeContainer } from './styles';
import { useAppDispatch } from '../../hooks/store-hooks';
import ILoginPostRequest from '../../types/auth/ILoginRequest';
import { loginAuthActionAsync, registerAuthActionAsync } from '../../store/actions/auth-actions';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const registerData = {
    username: 'alinasdasd',
    password: 'lala',
    email: 'lala@',
  };
  const handleLogin = () => {
    const loginData: ILoginPostRequest = {
      username: 'alinad',
      password: 'lala',
    };
    dispatch(loginAuthActionAsync(loginData));
  };
  return (
    <HomeContainer>
      Hello Home page
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={() => dispatch(registerAuthActionAsync(registerData))}>
        Register
      </button>
    </HomeContainer>
  );
};

export default Home;
