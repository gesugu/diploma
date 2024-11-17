import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import React, {useEffect, useState} from "react";
import MainPage from "./components/MainPage";
import KorzinaPage from "./components/KorzinaPage";
import KatalogPage from "./components/KatalogPage";
import FavoritesPage from "./components/FavoritesPage";
import ComparePage from './components/ComparePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/korzina" element={<KorzinaPage />} />
          <Route path="/katalog" element={<KatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
