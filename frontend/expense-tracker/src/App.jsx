import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/login'
import Expense from './pages/Dashboard/Expense'
import Income from "./pages/Dashboard/Income"
import Home from "./pages/Dashboard/Home"

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/signup"  element={<SignUp/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/dashboard"  element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () =>  {
  //check if token exists in local storage 
  const isAuthenticated = !!localStorage.getItem("token")

  //Redirect to dashboard if authenticated, else to login 

  return isAuthenticated ? (

    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};