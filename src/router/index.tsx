import React from 'react';

import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';

import App from '../App';
import SignIn from '../view/SignIn';

function PrivateRoute({ component, isAuthenticated, ...rest }: any) {
  const routeComponent = (props: any) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Navigate to="/sign-in" />
    );
  return <Route {...rest} render={routeComponent} />;
}

const RoutersApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
