import React from 'react';
import { BrowserRouter as Router, Route, Routes,Switch,Link } from 'react-router-dom';
import Header from '../common/header';
  
function Pages() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
       </Switch>
    </Router>
  );
}

export default Pages;
