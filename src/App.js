import React from "react";
import  "./App.css"

import Countries from "./Components/Countries";
import { Route, Switch } from "react-router-dom";
import Oops from "./Components/Oops";
import DetailsPage from "./Components/DetailsPage";
import UserInput from "./Components/UserInput";

function App() {
  return (
    <div className="App">
      <h1> Country app</h1>
  
      <Switch>
        <Route exact path="/test" component={UserInput} />
        <Route exact path="/" component={Countries} />
        <Route path="/country/:countryCode" component={DetailsPage} />
        <Route path="*" component={Oops} />
      </Switch>
    </div>
  );
}

export default App;
