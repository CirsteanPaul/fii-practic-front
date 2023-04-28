import ILoginPostRequest from './types/auth/ILoginRequest';
import { useAppDispatch } from './hooks/store-hooks';
import { loginAuthActionAsync, registerAuthActionAsync } from './store/actions/auth-actions';
import useModalIsOpen from './hooks/useModallsOpen';
import useAsyncOnMount from './hooks/useAsyncOnMounts';
import loadServices from './services/load-services';
import AppRouter from './router/AppRouter';
import './theme/reset.css';

const App = () => {
  const isReady = useAsyncOnMount(loadServices);
  useModalIsOpen();
  const dispatch = useAppDispatch();

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

  return <AppRouter />;
};

export default App;
