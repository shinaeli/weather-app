"use client";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryPage from './components/ErrorBoundaryPage.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Switch>
          <ErrorBoundary FallbackComponent={ErrorBoundaryPage}>
            <Route exact path="/">
              <App />
            </Route>
          </ErrorBoundary>
      </Switch>
    </Router>
  </>
);


