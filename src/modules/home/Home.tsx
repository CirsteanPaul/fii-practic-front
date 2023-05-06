import React, { useState } from 'react';
import { HomeContainer } from './styles';
import { useAppDispatch } from '../../hooks/store-hooks';
import ILoginPostRequest from '../../types/auth/ILoginPostRequest';
import { loginAuthActionAsync, registerAuthActionAsync } from '../../store/actions/auth-actions';
import IImageRequest from '../../types/image/IImageRequest';
import { imagePostRequest } from '../../api/requests/image-requests';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFilePicked] = useState(false);

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
  return <HomeContainer>Home</HomeContainer>;
};

export default Home;
