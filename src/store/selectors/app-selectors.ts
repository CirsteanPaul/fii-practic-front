import { RootState } from '..';

export const isModalOpenAppStateSelector = (state: RootState) => state.app.isModalOpen;
export const isLoadingAppStateSelector = (state: RootState) => state.app.isLoading;
