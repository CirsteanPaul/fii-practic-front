import { RootState } from '..';
import IQuestionResponse from '../../types/responses/IQuestionResponse';

export const isGameLoadingSelector = (state: RootState): boolean => state.game.loading;
export const gameSelector = (state: RootState): IQuestionResponse => state.game.game;
