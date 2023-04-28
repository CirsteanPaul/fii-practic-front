import * as material from '@mui/material';
import { useAppSelector } from '../../hooks/store-hooks';
import { isLoadingAppStateSelector } from '../../store/selectors/app-selectors';
import useIsLoading from '../../hooks/useIsLoading';

/**
 * This component is used with internal state from redux
 * When a loading selector is true this component will show
 * General state of loading is handled in *useIsLoading* hook
 */

const AppLoaderOverlay = (): JSX.Element => {
  useIsLoading();
  const isAppLoading = useAppSelector(isLoadingAppStateSelector);

  if (!isAppLoading) {
    return null;
  }

  return (
    <material.Backdrop sx={{ display: 'block', color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open>
      <material.CircularProgress sx={{ position: 'sticky', top: '49%', left: ' calc((100vw - 40px)/2)' }} color="inherit" />
    </material.Backdrop>
  );
};

export default AppLoaderOverlay;
