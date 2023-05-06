import { useEffect } from 'react';
import { useAppSelector } from './store-hooks';
import { isModalOpenAppStateSelector, isLoginModalOpenAppStateSelector, isRegisterModalOpenAppStateSelector } from '../store/selectors/app-selectors';

const useModalIsOpen = (): void => {
  const isModalOpen = useAppSelector(isModalOpenAppStateSelector);
  const isRegisterOpen = useAppSelector(isRegisterModalOpenAppStateSelector);
  const isLoginOpen = useAppSelector(isLoginModalOpenAppStateSelector);

  const isOpen = isModalOpen || isLoginOpen || isRegisterOpen;

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body?.setAttribute('style', ' overflow-x: hidden; overflow-y: hidden');
    } else {
      body?.setAttribute('style', 'overflow-x: hidden; overflow-y: scroll');
    }
  }, [isOpen]);
};
export default useModalIsOpen;
