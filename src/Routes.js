import React from 'react';
import Layout from "./components/hoc/Layout";
import {Switch, Route} from 'react-router-dom';
import Home from "./components/home";
import Login from "./components/login";


const Routes = (props) => {

  return (
        <Layout>
          <Switch>
            <Route exact component={Login} path='/login'/>
            <Route exact component={Home} path='/'/>
          </Switch>
        </Layout>

  );
};

export default Routes;
