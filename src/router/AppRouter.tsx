import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../modules/not-found';
import AppLoaderOverlay from '../components/app-loader-overlay';
import Footer from '../components/footer';
import useModalIsOpen from '../hooks/useModallsOpen';
import useEmitters from '../hooks/useEmitters';
import Home from '../modules/home';
import SideNavbar from '../components/side-navbar';
import { ColumnContainer, RowContainer } from './styles';
import TopNavBar from '../components/top-navbar';
import Leaderboard from '../modules/components/leaderboard';

const AppRouter = () => {
  useModalIsOpen();
  useEmitters();

  return (
    <BrowserRouter>
      <AppLoaderOverlay />

      <RowContainer>
        <SideNavbar />
        <ColumnContainer>
          <TopNavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ColumnContainer>
      </RowContainer>
    </BrowserRouter>
  );
};

export default AppRouter;
