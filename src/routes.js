import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login">
          <LoginPage />
        </PublicRoute>
        <ProtectedRoute path="/">
          <DashboardPage />
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard">
          <DashboardPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
