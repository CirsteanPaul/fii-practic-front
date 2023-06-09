import { useState } from 'react';
import { RegisterFormContainer, RegisterFormStyled, LoginLinkContainer, CloseButton } from './styles';
import IRegisterPostRequest from '../../../types/auth/IRegisterPostRequest';
import { registerAuthActionAsync } from '../../../store/actions/auth-actions';
import { useAppDispatch } from '../../../hooks/store-hooks';
import { setLoginModalOpenAction, setRegisterModalOpenAction } from '../../../store/slices/appSlice';
import xIcon from '../../auth-modal/resources/x-symbol.png';

interface IProps {
  isOpen: boolean;
  role: number;
  setRole: (value: React.SetStateAction<number>) => void;
}

const RegisterForm = ({ isOpen, role, setRole }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();

  const onUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);
  const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);

  const handleRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const registerData: IRegisterPostRequest = {
      username,
      password: userPassword,
      email: userEmail,
      role,
    };
    const canNavigateToLogin = await dispatch(registerAuthActionAsync(registerData));

    if (canNavigateToLogin.payload) {
      setRole(0);
      dispatch(setRegisterModalOpenAction(false));
      dispatch(setLoginModalOpenAction(true));
    }
  };

  const handleNavigateToLogin = () => {
    setUsername('');
    setUserPassword('');
    setUserEmail('');
    setRole(0);
    dispatch(setRegisterModalOpenAction(false));
    dispatch(setLoginModalOpenAction(true));
  };

  const handleClose = () => {
    setUsername('');
    setUserPassword('');
    setRole(0);
    dispatch(setRegisterModalOpenAction(false));
  };

  return (
    <RegisterFormContainer isOpen={isOpen}>
      <CloseButton type="button" onClick={handleClose}>
        <img src={xIcon} alt="" />
      </CloseButton>
      <RegisterFormStyled onSubmit={handleRegister}>
        <h1>Create Account</h1>
        <input type="text" id="username" name="username" required placeholder="Username" value={username} onChange={onUsernameChanged} />
        <input type="text" id="email" name="email" required placeholder="Email Address" value={userEmail} onChange={onEmailChanged} />
        <input type="password" id="password" name="password" required placeholder="Password" value={userPassword} onChange={onPasswordChanged} />
        <button type="submit">Create Account</button>
        <LoginLinkContainer>
          <p>Already have an account? </p>
          <button type="button" onClick={handleNavigateToLogin}>
            Login
          </button>
        </LoginLinkContainer>
      </RegisterFormStyled>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
