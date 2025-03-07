import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrackerPage from "../../pages/TrackerPage/TrackerPage";

import { useState } from "react";
import "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
