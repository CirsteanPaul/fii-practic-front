import { AxiosResponse } from 'axios';
import IImageRequest from '../../types/image/IImageRequest';
import { getApi } from '../Api';
import handleApiError from '../../services/handlerApiError';

export const imagePostRequest = async (data: IImageRequest): Promise<boolean> => {
  try {
    const response: AxiosResponse<boolean> = await getApi().put('/home/blob/update', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
};
