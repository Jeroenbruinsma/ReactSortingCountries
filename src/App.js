import React from "react";
import  "./App.css"

import Countries from "./Components/Countries";
import RoutingComponent from "./Components/RoutingComponent";
import { Route, Switch } from "react-router-dom";
import Oops from "./Components/Oops";
import State from "./Components/State";

function App() {
  return (
    <div className="App">
      <h1> Country app</h1>
      <State/>
{/*      
      <Switch>
        <Route path="/other" component={RoutingComponent} />
        <Route path="*" component={Oops} />
        <Route exact path="/" component={Countries} />
      </Switch> */}
    </div>
  );
}

export default App;
