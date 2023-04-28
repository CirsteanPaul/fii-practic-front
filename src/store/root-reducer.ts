import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/auth-reducer';
import appSlice from './slices/appSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appSlice,
});

export default rootReducer;
