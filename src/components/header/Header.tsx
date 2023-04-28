import React from 'react';
import { setModalOpenAction } from '../../store/slices/appSlice';
import { appWidthSelector, isAppScrolledSelector, isModalOpenAppStateSelector } from '../../store/selectors/app-selectors';
import {
  HeaderContainer,
  HeaderLeftSection,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoMobile,
  HeaderLogoNavMenuMobile,
  HeaderMobileMenu,
  HeaderNavContainer,
  HeaderNavIconDiscord,
  HeaderNavIconTwitter,
  HeaderTitle,
  HeaderLogoText,
  InsideLink,
  NavLink,
} from './styles';
import './styles.css';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isScrolled = useAppSelector(isAppScrolledSelector);
  const width = useAppSelector(appWidthSelector);
  const isOpen = useAppSelector(isModalOpenAppStateSelector);
  const handleOpenDiscord = () => {
    window.open('');
  };
  const handleOpenTwitter = () => {
    window.open('https://twitter.com/TopBullNFT');
  };
  const handleOpenMedium = () => {
    window.open('https://medium.com/@TopBullNFT');
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
  if (width < 900) {
    return (
      <HeaderContainer isScrolled={isScrolled}>
        <HeaderLogoContainer>
          <HeaderLogoNavMenuMobile src="assets/logo-silver.png" />
          <HeaderLogoText>Topbull</HeaderLogoText>
        </HeaderLogoContainer>
        {!isOpen && buildButton()}
        <HeaderMobileMenu isOpen={isOpen}>
          <div style={{ position: 'absolute', top: '20px', right: '30px' }}>{buildButton()}</div>
          <HeaderLogoMobile isOpen={isOpen} src="assets/logo-silver.png" />
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="banner">
            Home
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="exclusive">
            Overview
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="mint">
            Mint
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="roadmap">
            Roadmap
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setModalOpenAction(false))} to="faq">
            Faq
          </InsideLink>
        </HeaderMobileMenu>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderLeftSection>
        <HeaderLogo src="assets/logo-silver.png" />
        <HeaderTitle>Top</HeaderTitle>
        <HeaderTitle isRed>Bull</HeaderTitle>
      </HeaderLeftSection>
      <HeaderNavContainer>
        <NavLink to="banner">Home</NavLink>
        <NavLink to="exclusive">Overview</NavLink>
        <NavLink to="mint">Mint</NavLink>
        <NavLink to="roadmap">Roadmap</NavLink>
        <NavLink to="faq">Faq</NavLink>
        <HeaderNavIconTwitter onClick={handleOpenTwitter} src="assets/twitter.png" />
        <HeaderNavIconDiscord onClick={handleOpenDiscord} src="assets/discord-black.png" />
        <HeaderNavIconDiscord onClick={handleOpenMedium} src="assets/medium.png" />
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

export default Header;
