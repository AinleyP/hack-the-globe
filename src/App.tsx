import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from "react";

import './App.scss';
import SamplePage from './pages/SamplePage'
import Navbar from './components/Navbar'
import ActivistProfileEventList from './components/ActivistProfileEventList'
import events from './data/sample_data/events'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/sample'><SamplePage pageName="home" /></Route>
        <Route path='/profile'><Navbar /></Route>
        <Route path='/matches'><Navbar /></Route>
        <Route path='/pending-requests'><Navbar /></Route>
        <Route path='/events'><Navbar /></Route>
        <Route path='/settings'><Navbar /></Route>
        <Route path='/'><ActivistProfileEventList events={events}  /></Route>
      </Switch>
    </Router>
  );
}

export default App;
