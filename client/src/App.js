import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';

import HomePage from "./pages/Home/index"
import LoginPage from "./pages/Login/index"
import RegisterPage from "./pages/Register/index"
import WorkoutsPage from "./pages/Workouts/index"
import WorkoutPage from "./pages/Workout/index"
import LogPage from "./pages/Log/index"
import AddLogPage from "./pages/Log/add"
import ReportPage from "./pages/Report/index"
import ReportsPage from "./pages/Reports/index"

import Navigation from "./components/Navbar/index"
import Footer from "./components/Footer/index"

class App extends Component {
  render() {
    return (
      <div className="App">
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
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}

export default App;
