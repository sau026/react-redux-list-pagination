import React from "react";
import { Route } from "react-router-dom";
import TaskDashboard from './pages/landing/index';
import Dashboard from './pages/dashboard';

export default function Router_outlet() {
    return (
        <React.Fragment>
        <Route exact path="/" component={TaskDashboard}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        </React.Fragment>
    );
  }
