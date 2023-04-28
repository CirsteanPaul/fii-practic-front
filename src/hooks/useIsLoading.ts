import { useEffect, useMemo } from 'react';
import { isLoadingAuthSelector } from '../store/selectors/auth-selectors';
import { setIsLoadingAction } from '../store/slices/appSlice';
import { useAppDispatch, useAppSelector } from './store-hooks';

/**
 * This hook will change the state in appStateSlice
 * When a general loading is added here should be added as well
 * Exactly like isAuthLoading and in if statement just a || operator
 */
const useIsLoading = (): void => {
  const dispatch = useAppDispatch();

  const isAuthLoading = useAppSelector(isLoadingAuthSelector); // a selector should be added

  const isStateLoading = useMemo(() => {
    return isAuthLoading; // here should be added
  }, [isAuthLoading]); // here should be added

  useEffect(() => {
    if (isStateLoading) {
      dispatch(setIsLoadingAction(true));
    } else {
      dispatch(setIsLoadingAction(false));
    }
  }, [dispatch, isStateLoading]);
};
export default useIsLoading;
