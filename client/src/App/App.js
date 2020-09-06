import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage';

function App() {
  return (
    <div className="App">
        <Route 
          exact path = "/"
          render={() => <WelcomePage />} />
    </div>
  );
}

export default App;
