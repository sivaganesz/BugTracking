
import React from 'react';
import { BrowserRouter as Router, Route,Switch,Routes } from 'react-router-dom';
import AssignTester from './components/manager/AssignTester';
import CustomerRequest from './components/manager/CustomerRequest';
import Request_Status from './components/manager/Request_Status';
import ManagerHome from './components/manager/ManagerHome'

const Manager = () => {
  return (
    <div>
      
      <Router>
          <Switch>
          <Route path="/" exact component={ManagerHome} />
          <Route path="/AssignTester"  component={AssignTester} />
          <Route path="/CustomerRequest" component={CustomerRequest} />
          <Route path="/Request_Status" component={Request_Status} />
          </Switch>
      </Router>
    </div>
  );
};

export default Manager;
