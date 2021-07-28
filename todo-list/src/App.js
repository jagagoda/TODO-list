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
        <Route exact path="/list" component={TODOlistScreen} />
        <Route exact path="/list/:id/edit" component={TODOlistScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
