import { RootState } from '..';

export const isModalOpenAppStateSelector = (state: RootState): boolean => state.app.isAppModalOpen;
export const isLoginModalOpenAppStateSelector = (state: RootState): boolean => state.app.isLoginModalOpen;
export const isRegisterModalOpenAppStateSelector = (state: RootState): boolean => state.app.isRegisterModalOpen;
export const isRolesModalOpenAppStateSelector = (state: RootState): boolean => state.app.isRolesModalOpen;
export const isLoadingAppStateSelector = (state: RootState): boolean => state.app.isAppLoading;
export const isAppScrolledSelector = (state: RootState): boolean => state.app.isAppScrolled;
export const appWidthSelector = (state: RootState): number => state.app.appStateWidth;
