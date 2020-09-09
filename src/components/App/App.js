import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import BeginInitiative from '../BeginInitiative/BeginInitiative';
import Nav from '../Nav/Nav';
import Research from '../Research/Research';
import Signup from '../Signup/Signup';


function App() {
  return (
    <div className="App">
        <Nav />
        <div className="page-area">
        <Route 
          exact path = "/"
          render={() => <WelcomePage />} />
        <Route 
          exact path = "/proposal"
          render={() => <BeginInitiative />} />
        <Route 
          exact path = "/research"
          render={() => <Research />} />
        <Route 
          exact path = "/signup"
          render={() => <Signup />} />        
        </div>
    </div>
  );
}

export default App;
