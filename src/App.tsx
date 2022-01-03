import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Header } from './components/header';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/header" component={Header} />
    <Route exact path="/" component={Header} />
{/* 
      <Route
        path={'/subjects'}
        element={<Subjects />} /> */}
            <Route
        path={'/'}
        component={App} />
      {/* <Route path="/qrCode/:hotlineId"  render={(props) => (<QrCode {...props} />)} /> */}
      {/* <Route path="/" render={(props) => (<Page title="Login"> <Login {...props} /></Page>)} /> */}
    </Switch>
  </Router>


  );
}

export default App;
