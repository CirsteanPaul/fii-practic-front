import axios, { Axios } from 'axios';
import isEmpty from 'lodash/isEmpty';
import store from '../store';
import { tokenAuthSelector } from '../store/selectors/auth-selectors';

// eslint-disable-next-line import/no-mutable-exports
let instance: Axios = null;

const localhostApiUrl = 'https://localhost:7240/api';
// const productionApiUrl = 'https://hackaton-server.azurewebsites.net/api';

export const initApi = () => {
  instance = axios.create({
    baseURL: localhostApiUrl,
  });

  instance.interceptors.request.use(config => {
    const newConfig = { ...config };
    if (tokenAuthSelector(store.getState())) {
      const token = tokenAuthSelector(store.getState());
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  });

  instance.interceptors.response.use(
    res => {
      return res;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

export const getApi = (): Axios => {
  if (isEmpty(instance)) {
    initApi();
  }

  return instance;
};
