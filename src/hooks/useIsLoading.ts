import { isLoadingAuthSelector } from '../store/selectors/auth-selectors';
import { setIsLoadingAction } from '../store/slices/appSlice';
import { useAppDispatch, useAppSelector } from './store-hooks';

/**
 * This hook will change the state in appStateSlice
 * When a general loading is added here should be added as well
 * Exactly like isAuthLoading and in if statement just a && operator
 */
const useIsLoading = (): void => {
  const isAuthLoading = useAppSelector(isLoadingAuthSelector);
  const dispatch = useAppDispatch();
  if (isAuthLoading) {
    dispatch(setIsLoadingAction(true));
  } else {
    dispatch(setIsLoadingAction(false));
  }
};
export default useIsLoading;
