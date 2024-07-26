import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Com/SignUp';
import Login from './Com/Login';

import Privaterouter from './Com/Privaterouter';
import Form from "./Com/Form";
import "./App.css"
import Feed from './Com/Feed';
import List from './Com/List';

const App = () => {
  return (

    <div>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/form" element={<Privaterouter> <Form /></Privaterouter>} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;


