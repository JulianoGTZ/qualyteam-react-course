import React, { Fragment } from "react";
import { Switch, Route } from 'react-router-dom';

import { List } from "./pages/list";
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Recipe } from "./components/Recipe";
import { EditRecipe } from "./pages/edit";

import "./App.scss";

const Navigation = () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={List} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/recipe/:id' exact component={Recipe} />
      <Route path='/recipe/:id/edit' exact component={EditRecipe} />
    </Switch>
  </Fragment>
);


function App() {
  return (
    <div className="app">
      <Navigation />
    </div>
  );
}

export default App;
