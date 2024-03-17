
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManagerRequest from './components/tester/ManagerRequest';
import TesterHome from './components/tester/TesterHome';
import URL_Status from './components/tester/URL_Status';
import BugRaiseForm from './components/tester/BugRaiseForm';

const Tester = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TesterHome} />
        <Route path="/ManagerRequest" component={ManagerRequest} />
        <Route path="/URL_Status" exact component={URL_Status} />
        <Route path="/BugRaiseForm" exact component={BugRaiseForm} />
      </Switch>
    </Router>
  );
};
export default Tester;
