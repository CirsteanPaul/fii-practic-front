import { RootState } from '..';

export const isRecruitLoadingSelector = (state: RootState): boolean => state.recruit.loading;
