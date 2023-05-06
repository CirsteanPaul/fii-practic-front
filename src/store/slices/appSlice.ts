/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  isAppModalOpen: boolean;
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  isRolesModalOpen: boolean;
  isAppLoading: boolean;
  isAppScrolled: boolean;
  appStateWidth: number;
}

const initialState: AppState = {
  isAppModalOpen: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isRolesModalOpen: false,
  isAppLoading: false,
  isAppScrolled: false,
  appStateWidth: 0,
};

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setModalOpenAction(state, action: PayloadAction<boolean>) {
      state.isAppModalOpen = action.payload;
    },
    setLoginModalOpenAction(state, action: PayloadAction<boolean>) {
      state.isLoginModalOpen = action.payload;
    },
    setRegisterModalOpenAction(state, action: PayloadAction<boolean>) {
      state.isRegisterModalOpen = action.payload;
    },
    setRolesModalOpenAction(state, action: PayloadAction<boolean>) {
      state.isRolesModalOpen = action.payload;
    },
    setIsLoadingAction(state, action: PayloadAction<boolean>) {
      state.isAppLoading = action.payload;
    },
    setAppIsScrolledAction(state, action: PayloadAction<boolean>) {
      state.isAppScrolled = action.payload;
    },
    setAppWidthAction(state, action: PayloadAction<number>) {
      state.appStateWidth = action.payload;
    },
  },
});

export const { setModalOpenAction, setLoginModalOpenAction, setRegisterModalOpenAction, setRolesModalOpenAction, setIsLoadingAction, setAppIsScrolledAction, setAppWidthAction } =
  appSlice.actions;
export default appSlice.reducer;
