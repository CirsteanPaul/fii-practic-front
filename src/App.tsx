import React from 'react';
import logo from './logo.svg';
import './App.css';
import ILoginPostRequest from './types/auth/ILoginRequest';
import { useAppDispatch } from './hooks/store-hooks';
import { loginAuthActionAsync, registerAuthActionAsync } from './store/actions/auth-actions';
import { testGetRequest } from './api/requests/auth-requests';
import useModalIsOpen from './hooks/useModallsOpen';
import { setModalOpenAction } from './store/slices/appSlice';
import AppLoaderOverlay from './components/app-loader-overlay';
import useAsyncOnMount from './hooks/useAsyncOnMounts';
import loadServices from './services/load-services';

const App = () => {
  const isReady = useAsyncOnMount(loadServices);
  useModalIsOpen();
  const dispatch = useAppDispatch();
  console.log('tst2');

  if (!isReady) {
    return null;
  }

  const registerData = {
    username: 'alinad',
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
  const test = async () => {
    await testGetRequest();
    console.log('functioneaza');
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppLoaderOverlay />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={() => dispatch(registerAuthActionAsync(registerData))}>
          Register
        </button>

        <button type="button" onClick={test}>
          Test
        </button>

        <button type="button" onClick={() => dispatch(setModalOpenAction(true))}>
          Modal
        </button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
