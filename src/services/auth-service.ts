import store from '../store';
import { setStateAuthAction, setTokenAuthAction } from '../store/actions/auth-sync-actionts';
import { getItem } from './storage-service';

export const TOKEN_AUTH_LOGIN = 'token';

const autoLogin = (): void => {
  const isLoggedIn = store.getState().auth.state;
  if (isLoggedIn) {
    return;
  }
  const token = getItem(TOKEN_AUTH_LOGIN);

  if (token) {
    store.dispatch(setTokenAuthAction(token));
    store.dispatch(setStateAuthAction(true));
  }
};

export default autoLogin;
