import { useEffect } from 'react';
import { useAppSelector } from './store-hooks';
import { isModalOpenAppStateSelector } from '../store/selectors/app-selectors';

const useModalIsOpen = (): void => {
  const isOpen = useAppSelector(isModalOpenAppStateSelector);

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
