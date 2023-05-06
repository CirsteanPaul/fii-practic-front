import React, { useState } from 'react';
import { HomeContainer } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import ILoginPostRequest from '../../types/auth/ILoginPostRequest';
import { loginAuthActionAsync, registerAuthActionAsync } from '../../store/actions/auth-actions';
import IImageRequest from '../../types/requests/IImageRequest';
import { imagePostRequest } from '../../api/requests/image-requests';
import { setRegisterModalOpenAction, setLoginModalOpenAction, setRolesModalOpenAction } from '../../store/slices/appSlice';
import AuthModal from '../auth-modal';
import { isLoginModalOpenAppStateSelector, isRegisterModalOpenAppStateSelector, isRolesModalOpenAppStateSelector } from '../../store/selectors/app-selectors';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const isLoginModal = useAppSelector(isLoginModalOpenAppStateSelector);
  const isRegisterModal = useAppSelector(isRegisterModalOpenAppStateSelector);
  const isRolesModal = useAppSelector(isRolesModalOpenAppStateSelector);

  const isOpenModal = isLoginModal || isRegisterModal || isRolesModal;

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleSubmission = async () => {
    const imageRequest: IImageRequest = {
      name: selectedFile.name,
      file: selectedFile,
    };
    console.log(imageRequest);
    await imagePostRequest(imageRequest);
  };

  const registerData = {
    username: 'alinad',
    password: 'lala',
    email: 'lalam',
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
      <AuthModal isOpen={isOpenModal} />
      Hello Home page
      <button
        type="button"
        onClick={() => {
          dispatch(setRegisterModalOpenAction(true));
        }}
      >
        Register
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setLoginModalOpenAction(true));
        }}
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setRolesModalOpenAction(true));
        }}
      >
        Roles
      </button>
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button type="button" onClick={handleSubmission}>
          Submit
        </button>
      </div>
    </HomeContainer>
  );
};

export default Home;
