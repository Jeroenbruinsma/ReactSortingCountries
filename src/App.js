import React from "react";
import  "./App.css"

import Countries from "./Components/Countries";
import RoutingComponent from "./Components/RoutingComponent";
import { Route, Switch } from "react-router-dom";
import Oops from "./Components/Oops";
import State from "./Components/State";
import DetailsPage from "./Components/DetailsPage";

function App() {
  return (
    <div className="App">
      <h1> Country app</h1>
      {/* <State/> */}
     
      <Switch>
        <Route exact path="/" component={Countries} />
        <Route path="/country/:countryCode" component={DetailsPage} />
        <Route path="*" component={Oops} />
      </Switch>
    </div>
  );
}

export default App;
