import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrackerPage from "../../pages/TrackerPage/TrackerPage";

import { useState } from "react";
import "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";
import SignInPage from "../../pages/SignInPage/SignInPage.jsx";
import SharedLayout from "../../../SharedLayout.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="tracker" element={<TrackerPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SignInPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
