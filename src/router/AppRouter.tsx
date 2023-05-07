import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLoaderOverlay from '../components/app-loader-overlay';
import useModalIsOpen from '../hooks/useModallsOpen';
import useEmitters from '../hooks/useEmitters';
import Home from '../modules/home';
import SideNavbar from '../components/side-navbar';
import { ColumnContainer, RowContainer } from './styles';
import TopNavBar from '../components/top-navbar';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import {
  appWidthSelector,
  isLoginModalOpenAppStateSelector,
  isModalOpenAppStateSelector,
  isRegisterModalOpenAppStateSelector,
  isRolesModalOpenAppStateSelector,
} from '../store/selectors/app-selectors';
import { setModalOpenAction } from '../store/slices/appSlice';
import './styles.css';
import Leaderboard from '../modules/components/leaderboard';
import CreateCv from '../modules/create-cv';
import Question from '../modules/components/question';
import AuthModal from '../modules/auth-modal';
import MobileHeader from '../components/mobile-header';

const AppRouter = () => {
  useModalIsOpen();
  useEmitters();

  const dispatch = useAppDispatch();
  const width = useAppSelector(appWidthSelector);
  const isLoginOpen = useAppSelector(isLoginModalOpenAppStateSelector);
  const isOpen = useAppSelector(isModalOpenAppStateSelector);
  const isRegisterOpen = useAppSelector(isRegisterModalOpenAppStateSelector);
  const isRolesOpen = useAppSelector(isRolesModalOpenAppStateSelector);
  const isAuthModalOpen = isLoginOpen || isRegisterOpen || isRolesOpen;

  const buildButton = (): JSX.Element => {
    return (
      <button style={{ zIndex: 50 }} type="button" onClick={() => dispatch(setModalOpenAction(!isOpen))} className={`${isOpen ? 'active' : ''} burger`}>
        <div className={`${isOpen ? 'active' : ''} strip burger-strip-4`}>
          <div />
          <div />
          <div />
        </div>
      </button>
    );
  };

  if (width > 1000) {
    return (
      <BrowserRouter>
        <AuthModal isOpen={isAuthModalOpen} />
        <AppLoaderOverlay />
        <RowContainer>
          <SideNavbar />
          <ColumnContainer>
            <TopNavBar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="game" element={<Question />} />
              <Route path="cv/create" element={<CreateCv />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </ColumnContainer>
        </RowContainer>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <AuthModal isOpen={isAuthModalOpen} />
      <ColumnContainer>
        {!isOpen && buildButton()}
        <Routes>
          <Route index element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="question" element={<Question />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ColumnContainer>
      <MobileHeader />
      <AppLoaderOverlay />
    </BrowserRouter>
  );
};

export default AppRouter;
