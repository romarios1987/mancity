import React from 'react';
import Layout from "./components/hoc/Layout";
import {Switch, Route} from 'react-router-dom';

import Home from "./components/home";
import Login from "./components/login";

import Dashboard from "./components/admin/Dashboard";


const Routes = (props) => {

  return (
        <Layout>
          <Switch>
            <Route exact component={Dashboard} path='/dashboard'/>
            <Route exact component={Login} path='/login'/>
            <Route exact component={Home} path='/'/>
          </Switch>
        </Layout>

  );
};

export default Routes;
