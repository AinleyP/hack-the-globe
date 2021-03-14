import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from "react";

import './App.scss';
import SamplePage from './pages/SamplePage'
import Navbar from './components/Navbar'
import SuggestionsPage from './pages/SuggestionsPage'
import MatchesPage from './pages/MatchesPage'
import OrgProfile from './pages/OrgProfile'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/sample'><SamplePage pageName="home" /></Route>
        <Route path='/profile'><Navbar /></Route>
        <Route path='/matches'><MatchesPage /></Route>
        <Route path='/suggestions'><SuggestionsPage /></Route>
        <Route path='/events'><Navbar /></Route>
        <Route path='/settings'><Navbar /></Route>
        {/* <Route path='/'><OrganizationCard org={organizations[0]}  /></Route> */}
        <Route path='/organizations/detail'>
          <OrgProfile pageName='Org Profile' orgId={'1'} />
        </Route>
        <Route path='/login'>
          <SamplePage pageName='login' />
        </Route>
        <Route path='/'>
          <SamplePage pageName='home' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
