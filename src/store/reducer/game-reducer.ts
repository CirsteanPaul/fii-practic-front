import { createReducer } from '@reduxjs/toolkit';
import IQuestionResponse from '../../types/responses/IQuestionResponse';
import { setGameAction, setGameLoadingAction } from '../actions/game-actions';

interface State {
  loading: boolean;
  game: IQuestionResponse;
}
const initialState: State = {
  loading: false,
  game: null,
};

const gameReducer = createReducer(initialState, builder =>
  builder.addCase(setGameLoadingAction, (state, action) => ({ ...state, loading: action.payload })).addCase(setGameAction, (state, action) => ({ ...state, game: action.payload })),
);

export default gameReducer;
