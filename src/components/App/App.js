import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import BeginInitiative from '../BeginInitiative/BeginInitiative';
import Nav from '../Nav/Nav';
import Research from '../Research/Research';
import Signup from '../Signup/Signup';
import StepTracker from '../StepTracker/component'
import Info from '../Info/Info'

function App() {
  return (
    <div className="App">
        <Nav />
        <StepTracker />
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
        <Route 
          exact path = "/proposal/step-one"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-two"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-three"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-four"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-five"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-six"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-seven"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-eight"
          render={() => <Info />} />
        <Route 
          exact path = "/proposal/step-nine"
          render={() => <Info />} />
                  <Route 
          exact path = "/proposal/step-ten"
          render={() => <Info />} />        
                  <Route 
          exact path = "/proposal/step-eleven"
          render={() => <Info />} />        
                  <Route 
          exact path = "/proposal/step-twelve"
          render={() => <Info />} />
                  <Route 
          exact path = "/proposal/step-thirteen"
          render={() => <Info />} />        
                  <Route 
          exact path = "/proposal/step-fourteen"
          render={() => <Info />} />                                                                          
        </div>
    </div>
  );
}

export default App;
