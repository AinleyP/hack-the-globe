import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from "react";

import './App.scss';
import SamplePage from './pages/SamplePage'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/login'><SamplePage pageName="login" /></Route>
        <Route path='/'><SamplePage pageName="home" /></Route>
      </Switch>
    </Router>
  );
}

export default App;
