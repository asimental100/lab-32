import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CharacterList } from '../characters/CharactersList';
import { Header } from '../Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
      </Switch>
    </Router>
  );
}
