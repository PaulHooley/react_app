import React from "react";
import { Color } from "./features/color/color";
import { Home } from "./features/home/home";
import { Toolbar } from "./features/toolbar/toolbar";
import { Stock } from "./features/stocks/stocks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Toolbar />
        <header className="App-header">
          <Route path="/home" component={Home} />
          <Route path="/color" component={Color} />
          <Route path="/stock" component={Stock} />
        </header>
      </Router>
    </div>
  );
}

export default App;
