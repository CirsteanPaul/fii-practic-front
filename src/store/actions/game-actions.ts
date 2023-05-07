import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GAME__CREATE_GAME, GAME__RESPOND_QUESTION, GAME__SET_GAME, GAME__SET_LOADING } from '../constants';
import { RootState } from '..';
import ApiException from '../../types/IErrorException';
import alertService from '../../services/alert-service';
import { createGamePostRequest, respondToQuestionPostRequest } from '../../api/requests/questions-requests';
import IQuestionResponse from '../../types/responses/IQuestionResponse';
import { gameSelector } from '../selectors/game-selectors';
import IRespondQuestion from '../../types/responses/IRespondQuestion';

export const setGameLoadingAction = createAction<boolean>(GAME__SET_LOADING);
export const setGameAction = createAction<IQuestionResponse>(GAME__SET_GAME);

export const createGameActionAsync = createAsyncThunk<void, never, { state: RootState }>(GAME__CREATE_GAME, async (__, thunkApi) => {
  thunkApi.dispatch(setGameLoadingAction(true));
  try {
    const response = await createGamePostRequest();
    thunkApi.dispatch(setGameAction(response));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: 'Game cannot be created', message: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setGameLoadingAction(false));
  }
});

export const respondeGameActionAsync = createAsyncThunk<void, number, { state: RootState }>(GAME__RESPOND_QUESTION, async (answer, thunkApi) => {
  thunkApi.dispatch(setGameLoadingAction(true));
  const state = thunkApi.getState() as RootState;
  const game = gameSelector(state);
  const respondQuestion: IRespondQuestion = {
    answer,
    gameId: game.game.id,
    questionId: game.newQuestion.id,
  };
  try {
    const response = await respondToQuestionPostRequest(respondQuestion);
    thunkApi.dispatch(setGameAction(response));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: 'Game error', message: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setGameLoadingAction(false));
  }
});
