import { createAction } from '@reduxjs/toolkit';
import {
  USER_AVATAR,
  USER_DESCRIPTION,
  USER_EMAIL,
  USER_FACEBOOK,
  USER_ID,
  USER_LINKEDIN,
  USER_NAME,
  USER_PASSWORD,
  USER_POSITIONROLE,
  USER_ROLE,
  USER_USERNAME,
} from '../constants';

export const setIdUserAction = createAction<number>(USER_ID);
export const setUsernameUserAction = createAction<string>(USER_USERNAME);
export const setRoleUserAction = createAction<number>(USER_ROLE);
export const setNameUserAction = createAction<string>(USER_NAME);
export const setPasswordUserAction = createAction<string>(USER_PASSWORD);
export const setFacebookUserAction = createAction<string>(USER_FACEBOOK);
export const setLinkedinUserAction = createAction<string>(USER_LINKEDIN);
export const setPositionRoleUserAction = createAction<number>(USER_POSITIONROLE);
export const setDescriptionUserAction = createAction<string>(USER_DESCRIPTION);
export const setEmailUserAction = createAction<string>(USER_EMAIL);
export const setAvatarUserAction = createAction<string>(USER_AVATAR);
export const setLoadingUserAction = createAction<boolean>('USER_LOADING');
