import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrackerPage from "../../pages/TrackerPage/TrackerPage";

import { useState } from "react";
import "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
