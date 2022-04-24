import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/Auth.context";

import PrivateRoutes from "./PrivateRoutes";
import Login from "../components/Login";
import Home from "../containers/Home";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          {/* Tenemos un bug en la redireccion */}
          <Route exact path="/" component={Login} />
          <PrivateRoutes path="/home" component={Home} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
