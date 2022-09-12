import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/Auth.context";

import Layout from "../layouts/Layout";
import Login from "../components/Login";
import Dashboard from "../containers/Dashboard";
import CreatePost from "../containers/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            {/* Tenemos un bug en la redireccion */}
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
