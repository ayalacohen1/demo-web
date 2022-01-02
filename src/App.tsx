import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Subjects } from './components/subjects/subjects';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/Subjects" component={Subjects} />
    <Route exact path="/" component={Subjects} />
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
