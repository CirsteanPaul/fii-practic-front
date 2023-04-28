/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  isModalOpen: boolean;
  isLoading: boolean;
}

const initialState: AppState = {
  isModalOpen: false,
  isLoading: false,
};

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setModalOpenAction(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setIsLoadingAction(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setModalOpenAction, setIsLoadingAction } = appSlice.actions;
export default appSlice.reducer;
