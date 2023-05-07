import { createReducer } from '@reduxjs/toolkit';
import IRecruitResponse from '../../types/responses/IRecruitResponse';
import { setRecruitLeaderboardAction, setRecruitLoadingAction, setSelectedRecruitAction } from '../actions/recruit-actions';

interface State {
  loading: boolean;
  selectedRecruit: IRecruitResponse;
  leaderboard: IRecruitResponse[];
}

const initialState: State = {
  loading: false,
  selectedRecruit: null,
  leaderboard: [],
};

const userReducer = createReducer(initialState, builder =>
  builder
    .addCase(setRecruitLoadingAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setSelectedRecruitAction, (state, action) => ({ ...state, selectedRecruit: action.payload }))
    .addCase(setRecruitLeaderboardAction, (state, action) => ({ ...state, leaderboard: action.payload })),
);

export default userReducer;
