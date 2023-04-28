import { createAction } from '@reduxjs/toolkit';
import { AUTH__SET_LOADING, AUTH__SET_LOGIN_ERROR, AUTH__SET_STATE, AUTH__SET_TOKEN } from '../constants';

export const setTokenAuthAction = createAction<string>(AUTH__SET_TOKEN);
export const setStateAuthAction = createAction<boolean>(AUTH__SET_STATE);
export const setLoadingAuthAction = createAction<boolean>(AUTH__SET_LOADING);
export const setLoginErrorAuthAction = createAction<boolean>(AUTH__SET_LOGIN_ERROR);
