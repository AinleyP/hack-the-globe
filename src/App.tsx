import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from "react";

import './App.scss';
import SamplePage from './pages/SamplePage'
import Navbar from './components/Navbar'
import OrganizationAndVolunteerList from './components/OrganizationAndVolunteerList'
import organizations from './data/sample_data/organizations'

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
        <Route path='/'><OrganizationAndVolunteerList organizations={organizations} volunteers={[]}  /></Route>
      </Switch>
    </Router>
  );
}

export default App;
