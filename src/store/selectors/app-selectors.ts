import { RootState } from '..';

export const isModalOpenAppStateSelector = (state: RootState): boolean => state.app.isAppModalOpen;
export const isLoadingAppStateSelector = (state: RootState): boolean => state.app.isAppLoading;
export const isAppScrolledSelector = (state: RootState): boolean => state.app.isAppScrolled;
export const appWidthSelector = (state: RootState): number => state.app.appStateWidth;
