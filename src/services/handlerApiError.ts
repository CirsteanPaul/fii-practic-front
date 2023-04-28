/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiException, { IErrorException } from '../types/IErrorException';

const handleApiError = (err: any): ApiException => {
  const errorData: IErrorException = err.response?.data as unknown as IErrorException;
  const exception: ApiException = new ApiException(errorData);

  return exception;
};

export default handleApiError;
