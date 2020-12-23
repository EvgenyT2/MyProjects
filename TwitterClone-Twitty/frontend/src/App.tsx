import React from 'react';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
