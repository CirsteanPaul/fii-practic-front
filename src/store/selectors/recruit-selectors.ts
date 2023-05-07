import { RootState } from '..';
import IRecruitResponse from '../../types/responses/IRecruitResponse';

export const isRecruitLoadingSelector = (state: RootState): boolean => state.recruit.loading;
export const leaderboartSelector = (state: RootState): IRecruitResponse[] => state.recruit.leaderboard;
export const selectedRecruit = (state: RootState): IRecruitResponse => state.recruit.selectedRecruit;
