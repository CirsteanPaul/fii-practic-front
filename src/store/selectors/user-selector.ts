import { RootState } from '..';

export const idUserSelector = (state: RootState): number => state.user.id;
export const usernameUserSelector = (state: RootState): string => state.user.username;
export const roleUserSelector = (state: RootState): number => state.user.role;
export const nameUserSelector = (state: RootState): string => state.user.name;
export const facebookUserSelector = (state: RootState): string => state.user.facebook;
export const linkedinUserSelector = (state: RootState): string => state.user.linkedin;
export const positionRoleUserSelector = (state: RootState): number => state.user.positionRole;
export const descriptionUserSelector = (state: RootState): string => state.user.description;
export const emailUserSelector = (state: RootState): string => state.user.email;
export const avatarUserSelector = (state: RootState): string => state.user.avatar;
export const loadingUserSelector = (state: RootState): boolean => state.user.loading;
