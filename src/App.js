import React from "react";
<<<<<<< HEAD
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FatalError from "./pages/FatalError";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
=======
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
import FatalError from "./pages/FatalError";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
>>>>>>> feature/settings

function App() {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
