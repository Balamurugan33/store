import React from 'react';
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import Home from './constainer/home';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="cart" element={<></>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
