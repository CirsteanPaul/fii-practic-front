import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogoMobile, HeaderMobileMenu, InsideLink } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { isModalOpenAppStateSelector } from '../../store/selectors/app-selectors';
import { setLoginModalOpenAction, setModalOpenAction } from '../../store/slices/appSlice';
import headerLogo from './header_logo.png';
import { isLoggedInAuthSelector } from '../../store/selectors/auth-selectors';

const MobileHeader = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isOpen = useAppSelector(isModalOpenAppStateSelector);
  const isAuth = useAppSelector(isLoggedInAuthSelector);

  const buildLoginButton = (): JSX.Element => {
    if (isAuth) {
      return null;
    }

    return (
      <InsideLink
        isOpen={isOpen}
        onClick={() => {
          dispatch(setModalOpenAction(false));
          dispatch(setLoginModalOpenAction(true));
        }}
        to="#"
      >
        Login
      </InsideLink>
    );
  };

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

  return (
    <HeaderMobileMenu isOpen={isOpen}>
      <div style={{ position: 'absolute', top: '20px', right: '30px' }}>{buildButton()}</div>
      <HeaderLogoMobile
        isOpen={isOpen}
        src={headerLogo}
        onClick={() => {
          navigate('/');
          dispatch(setModalOpenAction(false));
        }}
      />
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
      {buildLoginButton()}
    </HeaderMobileMenu>
  );
};

export default MobileHeader;
