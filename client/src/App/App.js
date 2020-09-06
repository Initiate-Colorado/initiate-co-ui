import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import BeginInitiative from '../BeginInitiative/BeginInitiative';

function App() {
  return (
    <div className="App">
        <Route 
          exact path = "/"
          render={() => <WelcomePage />} />
        <Route 
          exact path = "/proposal"
          render={() => <BeginInitiative />} />  
    </div>
  );
}

export default App;
