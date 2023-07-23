import React from "react";
import { NavLink, Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DogsList from "./DogsList";
import Dog from "./Dog";


import './App.css';

function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/dogs">
          <DogsList />
        </Route>
        <Route exact path="/dogs/:name">
          <Dog />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
      </BrowserRouter>
   </div>
  );
}



export default App;
