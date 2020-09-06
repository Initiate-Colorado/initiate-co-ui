import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import BeginInitiative from '../BeginInitiative/BeginInitiative';
import Nav from '../Nav/Nav';
import Research from '../Research/Research';

function App() {
  return (
    <div className="App">
        <Nav />
        <Route 
          exact path = "/"
          render={() => <WelcomePage />} />
        <Route 
          exact path = "/proposal"
          render={() => <BeginInitiative />} />
        <Route 
          exact path = "/research"
          render={() => <Research />} />    
    </div>
  );
}

export default App;
