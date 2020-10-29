import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";
import { Main } from "../Main/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
