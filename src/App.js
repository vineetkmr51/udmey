import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import MainPage from "./pages/landing";
import Error from "./pages/error/index.js";
import List from "./pages/listItem/index.js";
import Login from "./pages/login/index.js";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" Component={MainPage} />
          <Route exact path="/list" Component={List} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="*" Component={Error} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
