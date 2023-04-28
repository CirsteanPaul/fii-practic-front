import { AxiosResponse } from 'axios';
import ILoginPostResponse from '../../types/auth/ILoginPostResponse';
import ILoginPostRequest from '../../types/auth/ILoginPostRequest';
import { getApi } from '../Api';
import IRegisterPostRequest from '../../types/auth/IRegisterPostRequest';
import IRegisterPostResponse from '../../types/auth/IRegisterPostResponse';
import handleApiError from '../../services/handlerApiError';

export const loginPostRequest = async (data: ILoginPostRequest): Promise<ILoginPostResponse> => {
  try {
    const response: AxiosResponse<ILoginPostResponse> = await getApi().post('/auth/login', data);

    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};

export const registerPostRequest = async (data: IRegisterPostRequest): Promise<IRegisterPostResponse | null> => {
  try {
    const response: AxiosResponse<IRegisterPostResponse> = await getApi().post('/auth/register', data);

    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};

export const testGetRequest = async (): Promise<boolean> => {
  try {
    const response: AxiosResponse<IRegisterPostResponse> = await getApi().get('/home/test');
    if (response) {
      return true;
    }
  } catch (err) {
    throw handleApiError(err);
  }

  return false;
};
