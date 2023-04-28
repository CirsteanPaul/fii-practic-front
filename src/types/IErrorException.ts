export interface IErrorException {
  status: number;
  detail: string;
  instance: string;
  code: number;
}

class ApiException extends Error {
  data: IErrorException;

  constructor(data: IErrorException) {
    super();
    this.data = data;
  }
}

export default ApiException;
