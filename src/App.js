import React from 'react';
import './App.css';
import Login from './views/Login';
import Home from './views/Home';
import CadProfile from './views/CadProfile';
import CadTask from "./views/CadTask";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadTaskWeek from './views/CadTaskWeek';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/profile" exact={true} component={CadProfile} />
            <Route path="/task" exact={true} component={CadTask} />
            <Route path="/task/week" exact={true} component={CadTaskWeek} />
            <Route path="/" component={Home} />
        </Switch>
    </ BrowserRouter>
  );
}

export default App;
