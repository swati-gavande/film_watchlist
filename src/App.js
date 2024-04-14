
import './App.css';
import Search from './components/Search';
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import React, { useContext } from 'react'
import Watchlist from './components/Watchlist';
import { GlobalContext, GlobalProvider } from './contexts/GlobalProvider';
import Watched from './components/Watched';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

export default function App() {
  // State to handle login & logout
  const { user,currSession } = useContext(GlobalContext);
  var loggedIn = false;
  user.forEach(element => {
    if (element.userid === currSession) {
      loggedIn = element.islogged;
    }
  });

  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar status={loggedIn} userid={currSession} />
          <Info />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/search" element={!loggedIn ? <Navigate replace to="/" /> : <Search />} />
            <Route exact path="/watchlist" element={!loggedIn ? <Navigate replace to="/" /> : <Watchlist />} />
            <Route exact path="/watched" element={!loggedIn ? <Navigate replace to="/" /> : <Watched />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  )
}
