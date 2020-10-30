import React from "react";
import "./App.scss";

import { Redirect, Route, Switch } from "react-router-dom";
import { Main } from "../Main/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
