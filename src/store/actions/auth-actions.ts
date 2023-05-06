import { createAsyncThunk } from '@reduxjs/toolkit';
// import errorService from '@app/services/error-handler';
import { loginPostRequest, registerPostRequest } from '../../api/requests/auth-requests';
import ILoginPostRequest from '../../types/auth/ILoginPostRequest';
import { RootState } from '..';
import { setLoadingAuthAction, setLoginErrorAuthAction, setStateAuthAction, setTokenAuthAction } from './auth-sync-actionts';
import { AUTH__LOGIN, AUTH__REGISTER } from '../constants';
import IRegisterPostRequest from '../../types/auth/IRegisterPostRequest';
import alertService from '../../services/alert-service';
import { LOGIN_FAILED__TITLE, REGISTER_FAILED__TITLE } from '../../services/alert-service/alert-errors';
import ApiException from '../../types/IErrorException';
import { setItem } from '../../services/storage-service';
import { TOKEN_AUTH_LOGIN } from '../../services/auth-service';

export const loginAuthActionAsync = createAsyncThunk<void, ILoginPostRequest, { state: RootState }>(AUTH__LOGIN, async (data, thunkApi) => {
  thunkApi.dispatch(setLoginErrorAuthAction(false));
  thunkApi.dispatch(setLoadingAuthAction(true));
  try {
    const response = await loginPostRequest(data);
    if (response?.token) {
      thunkApi.dispatch(setTokenAuthAction(response.token));
      setItem(TOKEN_AUTH_LOGIN, response.token);
      thunkApi.dispatch(setStateAuthAction(true));
      alertService.successAlert({ title: 'Login successfully', message: null });
    } else {
      alertService.errorAlert({ title: LOGIN_FAILED__TITLE, message: 'Error from session, please reload!' });
      thunkApi.dispatch(setLoginErrorAuthAction(true));
    }
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: LOGIN_FAILED__TITLE, message: err.data.detail });
    }
    thunkApi.dispatch(setLoginErrorAuthAction(true));
  } finally {
    thunkApi.dispatch(setLoadingAuthAction(false));
  }
});

export const registerAuthActionAsync = createAsyncThunk<boolean, IRegisterPostRequest, { state: RootState }>(AUTH__REGISTER, async (data, thunkApi) => {
  thunkApi.dispatch(setLoadingAuthAction(true));
  let isValid = false;
  try {
    await registerPostRequest(data);
    alertService.successAlert({ title: 'Register successfully', message: null });
    isValid = true;
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: REGISTER_FAILED__TITLE, message: err.data.detail });
    }
    isValid = false;
  } finally {
    thunkApi.dispatch(setLoadingAuthAction(false));
  }
  return isValid;
});
