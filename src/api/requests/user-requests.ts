import { Axios, AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IUserState from '../../types/user/IUserState';
import handleApiError from '../../services/handlerApiError';

export const userPostRequest = async (data: IUserState): Promise<IUserState> => {
  try {
    const response: AxiosResponse<IUserState> = await getApi().post('/users', data);
    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};

export const userGetRequest = async (): Promise<IUserState> => {
  try {
    const response: AxiosResponse<IUserState> = await getApi().get('./users/details');
    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};
