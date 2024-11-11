import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

const App = () => {
  return (
    <div>
      <Router>
        <Link to="/">Home <br/></Link>
        <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
