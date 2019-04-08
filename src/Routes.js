import React from 'react';
import Layout from "./components/hoc/Layout";
import {Switch} from 'react-router-dom';

import Home from "./components/home";
import Login from "./components/login";

import Dashboard from "./components/admin/Dashboard";
import PrivateRoute from "./components/authRoutes/PrivateRoute";
import PublicRoute from "./components/authRoutes/PublicRoute";


const Routes = (props) => {
  // console.log(props);
  return (
        <Layout>
          <Switch>

            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>

            <PublicRoute {...props} restricted={true} path="/login" exact component={Login}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>

          </Switch>
        </Layout>

  );
};

export default Routes;
