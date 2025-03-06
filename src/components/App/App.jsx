import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrackerPage from "../../pages/TrackerPage/TrackerPage";

import { useState } from "react";
import "./App.module.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
