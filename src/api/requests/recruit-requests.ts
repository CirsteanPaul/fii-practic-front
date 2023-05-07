import { AxiosResponse } from 'axios';
import IRecruitResponse from '../../types/responses/IRecruitResponse';
import handleApiError from '../../services/handlerApiError';
import { getApi } from '../Api';

export const leaderBoardRequest = async (): Promise<IRecruitResponse[]> => {
  try {
    const response: AxiosResponse<IRecruitResponse[]> = await getApi().get('/recruits/all');

    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};
