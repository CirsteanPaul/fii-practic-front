import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../modules/not-found';
import AppLoaderOverlay from '../components/app-loader-overlay';
import Footer from '../components/footer';
import Header from '../components/header';
import useModalIsOpen from '../hooks/useModallsOpen';
import useEmitters from '../hooks/useEmitters';
import Home from '../modules/home';

const AppRouter = () => {
  useModalIsOpen();
  useEmitters();

  return (
    <BrowserRouter>
      <AppLoaderOverlay />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
