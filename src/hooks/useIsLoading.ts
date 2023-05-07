import { useEffect, useMemo } from 'react';
import { isLoadingAuthSelector } from '../store/selectors/auth-selectors';
import { loadingUserSelector } from '../store/selectors/user-selector';
import { setIsLoadingAction } from '../store/slices/appSlice';
import { useAppDispatch, useAppSelector } from './store-hooks';

/**
 * This hook will change the state in appStateSlice
 * When a general loading is added it should be added here as well
 * Exactly like isAuthLoading and in if statement just a || operator
 */
const useIsLoading = (): void => {
  const dispatch = useAppDispatch();

  const isAuthLoading = useAppSelector(isLoadingAuthSelector); // a selector should be added
  const isUserLoading = useAppSelector(loadingUserSelector);
  const isStateLoading = useMemo(() => {
    return isAuthLoading || isUserLoading; // here should be added
  }, [isAuthLoading, isUserLoading]); // here should be added

  useEffect(() => {
    if (isStateLoading) {
      dispatch(setIsLoadingAction(true));
    } else {
      dispatch(setIsLoadingAction(false));
    }
  }, [dispatch, isStateLoading]);
};
export default useIsLoading;
