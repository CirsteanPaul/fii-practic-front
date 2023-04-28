import { createReducer } from '@reduxjs/toolkit';
import IAuthState from '../../types/auth/IAuthState';
import { setLoadingAuthAction, setLoginErrorAuthAction, setStateAuthAction, setTokenAuthAction } from '../actions/auth-sync-actionts';

const initialState: IAuthState = {
  token: null,
  state: false,
  loading: false,
  loginError: false,
};

const authReducer = createReducer(initialState, builder =>
  builder
    .addCase(setStateAuthAction, (state, action) => ({ ...state, state: action.payload }))
    .addCase(setTokenAuthAction, (state, action) => ({ ...state, token: action.payload }))
    .addCase(setLoadingAuthAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setLoginErrorAuthAction, (state, action) => ({ ...state, loginError: action.payload })),
);

export default authReducer;
