import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import IRecruitResponse from '../../types/responses/IRecruitResponse';
import { RECRUIT__FETCH_LEADERBOARD, SET__RECRUIT_LEADERBOARD, SET__RECRUIT_LOADING, SET__RECRUIT_SELECTED } from '../constants';
import { RootState } from '..';
import { leaderBoardRequest } from '../../api/requests/recruit-requests';
import ApiException from '../../types/IErrorException';
import alertService from '../../services/alert-service';

export const setRecruitLoadingAction = createAction<boolean>(SET__RECRUIT_LOADING);
export const setSelectedRecruitAction = createAction<IRecruitResponse>(SET__RECRUIT_SELECTED);
export const setRecruitLeaderboardAction = createAction<IRecruitResponse[]>(SET__RECRUIT_LEADERBOARD);

export const fetchLeaderboardAsyncAction = createAsyncThunk<void, never, { state: RootState }>(RECRUIT__FETCH_LEADERBOARD, async (__, thunkApi) => {
  thunkApi.dispatch(setRecruitLoadingAction(true));
  try {
    const response = await leaderBoardRequest();
    thunkApi.dispatch(setRecruitLeaderboardAction(response));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: 'Leaderboard is unavailable', message: null });
    }
  } finally {
    thunkApi.dispatch(setRecruitLoadingAction(false));
  }
});
