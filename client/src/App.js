// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import Hub from "./pages/Hub";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* Admin renders */}
          <Route path="/admin" component={Hub.Admin} />
          {/* Visitor/client renders */}
          <Route path="/" component={Hub.Visitor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
