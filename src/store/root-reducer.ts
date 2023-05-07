import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/auth-reducer';
import userReducer from './reducer/user-reducer';
import appSlice from './slices/appSlice';
import recruitReducer from './reducer/recruit-reducer';
import gameReducer from './reducer/game-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  app: appSlice,
  recruit: recruitReducer,
  game: gameReducer,
});

export default rootReducer;
