import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './components/pages/WelcomeScreen';
import TODOlistScreen from './components/pages/TODOlistScreen';
import ListItem from './components/ListItem';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={WelcomeScreen} />
      <Route path="/list" component={TODOlistScreen} />
      <Route path="/list/:id/edit" component={ListItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
