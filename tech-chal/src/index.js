import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';

ReactDOM.render(
  <Router>
    <App />
    <React.StrictMode>
      <Routes>
        <Route exact path='/' element={App} />
        <Route exact path='/contact' element={Contact} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
