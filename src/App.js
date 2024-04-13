
import './App.css';
import Add from './components/Search';
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import React from 'react'
import Watchlist from './components/Watchlist';
import { GlobalProvider } from './contexts/GlobalProvider';
import Watched from './components/Watched';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (

    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Info />
          <Routes>
            <Route exact path="/search" element={<Add />} />
            <Route exact path="/watchlist" element={<Watchlist />} />
            <Route exact path="/watched" element={<Watched />} />
          </Routes>
        </BrowserRouter>
      </div >
    </GlobalProvider>
  )
}
