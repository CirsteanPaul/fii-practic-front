import { createReducer } from '@reduxjs/toolkit';
import { StatusDoneButton } from '../../modules/components/leaderboard/styles';
import IUserState from '../../types/user/IUserState';
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
} from '../actions/user-sync-actions';

const initialState: IUserState = {
  id: 0,
  username: null,
  role: 0,
  name: null,
  facebook: null,
  linkedin: null,
  positionRole: 0,
  description: null,
  email: null,
  avatar: null,
};

const userReducer = createReducer(initialState, builder =>
  builder
    .addCase(setIdUserAction, (state, action) => ({ ...state, id: action.payload }))
    .addCase(setUsernameUserAction, (state, action) => ({ ...state, username: action.payload }))
    .addCase(setRoleUserAction, (state, action) => ({ ...state, role: action.payload }))
    .addCase(setNameUserAction, (state, action) => ({ ...state, name: action.payload }))
    .addCase(setFacebookUserAction, (state, action) => ({ ...state, facebook: action.payload }))
    .addCase(setLinkedinUserAction, (state, action) => ({ ...state, linkedin: action.payload }))
    .addCase(setPositionRoleUserAction, (state, action) => ({ ...state, position: action.payload }))
    .addCase(setDescriptionUserAction, (state, action) => ({ ...state, description: action.payload }))
    .addCase(setEmailUserAction, (state, action) => ({ ...state, email: action.payload }))
    .addCase(setAvatarUserAction, (state, action) => ({ ...state, avatar: action.payload })),
);

export default userReducer;
