import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLoaderOverlay from '../components/app-loader-overlay';
import useModalIsOpen from '../hooks/useModallsOpen';
import useEmitters from '../hooks/useEmitters';
import Home from '../modules/home';
import SideNavbar from '../components/side-navbar';
import { ColumnContainer, HeaderLogoMobile, HeaderMobileMenu, InsideLink, RowContainer } from './styles';
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
import headerLogo from './header_logo.png';
import Leaderboard from '../modules/components/leaderboard';
import CreateCv from '../modules/create-cv';
import AuthModal from '../modules/auth-modal';

const AppRouter = () => {
  useModalIsOpen();
  useEmitters();

  const dispatch = useAppDispatch();
  const width = useAppSelector(appWidthSelector);
  const isOpen = useAppSelector(isModalOpenAppStateSelector);

  const isLoginOpen = useAppSelector(isLoginModalOpenAppStateSelector);
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
      <ColumnContainer>
        {!isOpen && buildButton()}
        <Routes>
          <Route index element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ColumnContainer>
      <HeaderMobileMenu isOpen={isOpen}>
        <div style={{ position: 'absolute', top: '20px', right: '30px' }}>{buildButton()}</div>
        <HeaderLogoMobile isOpen={isOpen} src={headerLogo} />
        <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="dashboard">
          Dashboard
        </InsideLink>
        <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="appointment">
          Appointment
        </InsideLink>
        <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="doctors">
          Doctors
        </InsideLink>
        <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="patients">
          Patients
        </InsideLink>
        <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="chats">
          Chats
        </InsideLink>
        <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="settings">
          Settings
        </InsideLink>
      </HeaderMobileMenu>
      <AppLoaderOverlay />
    </BrowserRouter>
  );
};

export default AppRouter;
