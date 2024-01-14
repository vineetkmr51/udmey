import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header.js';
import MainPage from './pages/landing';
import Error from "./pages/error/index.js";

function App() {
  return (
    <div>
      <Header />
     <Router>
      <div>
       
        <Routes>
          <Route exact path="/" Component={MainPage}/>

          
          <Route exact path="*" Component={Error}/>
        </Routes>
      </div>
    </Router>
     
   


    </div>
  );
}

export default App;