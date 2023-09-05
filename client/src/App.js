import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import WorkoutsPage from "./pages/Workouts"
import WorkoutPage from "./pages/Workout"
import LogPage from "./pages/Log"
import AddLogPage from "./pages/Log/add"
import ReportPage from "./pages/Report"

import Navigation from "./components/Navbar"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App" style={{background: "#121212"}}>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/workout">
            <Route path=":id" element={<WorkoutPage />}></Route>
          </Route>
          <Route path="/logs">
            <Route path="/logs/" element={<LogPage />} />
            <Route path="/logs/add" element={<AddLogPage />} />
          </Route>
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}

export default App;
