import React from 'react';
import './App.css';
import Login from './views/Login';
import Home from './views/Home';
import CadProfile from './views/CadProfile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/profile" exact={true} component={CadProfile} />
            <Route path="/" component={Home} />
        </Switch>
    </ BrowserRouter>
  );
}

export default App;
