
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerHome from './components/customer/Home'; 
import URL_Request from './components/customer/Request';

const Customer = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={CustomerHome} />
          <Route path="/TestRequest"  component={URL_Request}/>
        </Switch>
    </Router>
  );
};

export default Customer;
