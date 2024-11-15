import React from 'react';
import "./App.css";

import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import LoginPage from './Pages/Auth/Login/LoginPage';
import SignupPage from './Pages/Auth/Signup/SignupPage';
import DashboardHome from './Pages/Dashboard/Index/DashboardHome';
import PasswordResetPage from './Pages/Auth/PasswordReset/PasswordResetPage';
import DashboardRoute from './routes/DashboardRoute';
import HomeRoute from './routes/HomeRoute';
import Income from './Pages/Dashboard/Income/Income';
import Investment from './Pages/Dashboard/Investment/Investment';
import Menu from './Pages/Dashboard/Menu/Menu';
import RequestFeature from './Pages/Dashboard/RequestFeature/RequestFeature';
import Budget from './Pages/Dashboard/Budget/Budget';
import Chat from './Pages/Dashboard/Chat/Chat';
import Trading from './Pages/Dashboard/Trading/Trading';


function App() {
  return (
    <div className="App">
      <Routes>

      <Route path={DashboardRoute.chat} element={<Chat />} />
      <Route path={DashboardRoute.trading} element={<Trading />} />
      <Route path={DashboardRoute.income} element={<Income />} />
      <Route path={DashboardRoute.budget} element={<Budget />} />
      <Route path={DashboardRoute.requestFeature} element={<RequestFeature />}/>
      <Route path={DashboardRoute.home} element={<DashboardHome />}/>
      <Route path={DashboardRoute.investment} element={<Investment />} />
      <Route path={DashboardRoute.menu} element={<Menu />} />
      <Route path={HomeRoute.signup} element={<SignupPage/>} />
      <Route path={HomeRoute.forgotPassword} element={<PasswordResetPage/>} />
      <Route path={HomeRoute.login} element={<LoginPage/>} />
      <Route path={HomeRoute.notFound} element={<h1>Not found</h1>} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
