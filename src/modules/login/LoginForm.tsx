import { useState } from 'react';
import { LoginFormContainer, LoginFormStyled } from './styles';
import ILoginPostRequest from '../../types/auth/ILoginPostRequest';
import { loginAuthActionAsync } from '../../store/actions/auth-actions';
import { useAppDispatch } from '../../hooks/store-hooks';
import { setLoginModalOpenAction, setRolesModalOpenAction } from '../../store/slices/appSlice';

interface IProps {
  isOpen: boolean;
  setRole: (value: React.SetStateAction<number>) => void;
}

const LoginForm = ({ isOpen, setRole }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();

  const onUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const loginData: ILoginPostRequest = {
      username,
      password: userPassword,
    };
    dispatch(loginAuthActionAsync(loginData));
  };

  const handleNavigateToRegister = () => {
    setRole(0);
    dispatch(setLoginModalOpenAction(false));
    dispatch(setRolesModalOpenAction(true));
  };

  return (
    <LoginFormContainer isOpen={isOpen}>
      <LoginFormStyled onSubmit={handleLogin}>
        <h1>Login</h1>
        <input type="text" id="username" name="username" required placeholder="Username" value={username} onChange={onUsernameChanged} />
        <input type="password" id="password" name="password" required placeholder="Password" value={userPassword} onChange={onPasswordChanged} />
        <button type="submit">Login</button>
      </LoginFormStyled>
      <button type="button" onClick={handleNavigateToRegister}>
        Create Account
      </button>
    </LoginFormContainer>
  );
};

export default LoginForm;