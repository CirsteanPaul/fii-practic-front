import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../modules/home';
import NotFound from '../modules/not-found';
import AppLoaderOverlay from '../components/app-loader-overlay';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppLoaderOverlay />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
