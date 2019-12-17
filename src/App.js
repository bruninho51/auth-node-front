import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
import Principal from './views/Principal';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/" component={Principal} />
        </Switch>
    </ BrowserRouter>
  );
}

export default App;
