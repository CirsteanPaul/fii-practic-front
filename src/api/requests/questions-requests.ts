import { AxiosResponse } from 'axios';
import handleApiError from '../../services/handlerApiError';
import { getApi } from '../Api';
import IQuestionResponse from '../../types/responses/IQuestionResponse';
import IRespondQuestion from '../../types/responses/IRespondQuestion';

export const createGamePostRequest = async (): Promise<IQuestionResponse> => {
  try {
    const response: AxiosResponse<IQuestionResponse> = await getApi().post('/questions/create');

    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};

export const respondToQuestionPostRequest = async (data: IRespondQuestion): Promise<IQuestionResponse> => {
  try {
    const response: AxiosResponse<IQuestionResponse> = await getApi().post('/questions/respond', data);

    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};
