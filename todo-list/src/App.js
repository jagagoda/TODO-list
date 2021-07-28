import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './components/pages/WelcomeScreen';
import TODOlistScreen from './components/pages/TODOlistScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/list" component={TODOlistScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
