import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';
import { userPostRequest, userGetRequest } from '../../api/requests/user-requests';
import alertService from '../../services/alert-service';
import { USER_GET_FAILED__TITLE, USER_POST_FAILED__TITLE } from '../../services/alert-service/alert-errors';
import ApiException from '../../types/IErrorException';
import IUserState from '../../types/user/IUserState';
import { USER_GET, USER_POST } from '../constants';
import {
  setAvatarUserAction,
  setDescriptionUserAction,
  setEmailUserAction,
  setFacebookUserAction,
  setIdUserAction,
  setLinkedinUserAction,
  setNameUserAction,
  setPositionRoleUserAction,
  setRoleUserAction,
  setUsernameUserAction,
} from './user-sync-actions';

export const postUserActionAsync = createAsyncThunk<void, IUserState, { state: RootState }>(USER_POST, async data => {
  try {
    await userPostRequest(data);
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: USER_POST_FAILED__TITLE, message: err.data.detail });
    }
  }
});

export const getUserActionAsync = createAsyncThunk<void, never, { state: RootState }>(USER_GET, async (__, thunkApi) => {
  try {
    const response = await userGetRequest();
    thunkApi.dispatch(setIdUserAction(response.id));
    thunkApi.dispatch(setUsernameUserAction(response.username));
    thunkApi.dispatch(setRoleUserAction(response.role));
    thunkApi.dispatch(setNameUserAction(response.name));
    thunkApi.dispatch(setFacebookUserAction(response.facebook));
    thunkApi.dispatch(setLinkedinUserAction(response.linkedin));
    thunkApi.dispatch(setPositionRoleUserAction(response.positionRole));
    thunkApi.dispatch(setDescriptionUserAction(response.description));
    thunkApi.dispatch(setEmailUserAction(response.email));
    thunkApi.dispatch(setAvatarUserAction(response.avatar));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: USER_GET_FAILED__TITLE, message: err.data.detail });
    }
  }
});
