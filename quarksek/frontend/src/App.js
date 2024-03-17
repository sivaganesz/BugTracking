// Using Routes
import React from 'react';
import './App.css'; // Import CSS file for styling
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Customer Routes
import CustomerHome from './components/customer/Home';
import URL_Request from './components/customer/Request';
import { Send_Request_Manager } from './components/customer/C_SendRequest'

//Manager Routes 
import AssignTester from './components/manager/AssignTester';
import CustomerRequest from './components/manager/CustomerRequest';
import Request_Status from './components/manager/Request_Status';
import ManagerHome from './components/manager/ManagerHome'
import ShowMessage from './components/manager/ShowMessage';
import AvailableTester from './components/manager/AvailableTester'

// Tester Routes 
import ManagerRequest from './components/tester/ManagerRequest';
import TesterHome from './components/tester/TesterHome';
import URL_Status from './components/tester/URL_Status';
import BugRaiseForm from './components/tester/BugRaiseForm';
import CheckBugraise from './components/tester/checkbugraise'

import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <Routes>

        {/* user */}

        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        {/* Customer Routes */}
        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/TestRequest" element={<URL_Request />} />
        <Route path="/Send_Request_Manager" element={<Send_Request_Manager/>}/>
  
        {/* Manager Routes */}
        <Route path="/manager" element={<ManagerHome />} />
        <Route path="/AssignTester" element={<AssignTester />} />
        <Route path="/CustomerRequest" element={<CustomerRequest />} />
        <Route path="/Request_Status" element={<Request_Status />} />
        <Route path="/ShowMessage" element={<ShowMessage/>}/>
        <Route path="/AvailableTester" element={<AvailableTester/>}/>

        {/* Tester Routes */}
        <Route path="/tester" element={<TesterHome />} />
        <Route path="/ManagerRequest" element={<ManagerRequest />} />
        <Route path="/URL_Status" element={<URL_Status />} />
        <Route path="/BugRaiseForm" element={<BugRaiseForm />} />
        <Route path="/CheckBugraise" element={<CheckBugraise/>}/>
      </Routes>
    </Router>
  );
}
export default App;


// using switch

// import React from 'react';
// import './App.css'; // Import CSS file for styling
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import CustomerHome from './components/customer/Home';
// import URL_Request from './components/customer/Request';

// import AssignTester from './components/manager/AssignTester';
// import CustomerRequest from './components/manager/CustomerRequest';
// import Request_Status from './components/manager/Request_Status';
// import ManagerHome from './components/manager/ManagerHome'

// import ManagerRequest from './components/tester/ManagerRequest';
// import TesterHome from './components/tester/TesterHome';
// import URL_Status from './components/tester/URL_Status';
// import BugRaiseForm from './components/tester/BugRaiseForm';

// import FrontPage from './components/FrontPage';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         {/* Customer Routes */}
//         {/* <Route path="/arjun" component={FrontPage}/> */}
        
//         <Route path="/customer" component={CustomerHome} />
//         <Route path="/TestRequest" component={URL_Request} />
  
//         {/* Manager Routes */}
//         <Route path="/manager" exact component={ManagerHome} />
//         <Route path="/AssignTester" component={AssignTester} />
//         <Route path="/CustomerRequest" component={CustomerRequest} />
//         <Route path="/Request_Status" component={Request_Status} />

//         {/* Tester Routes */}
//         <Route path="/tester" exact component={TesterHome} />
//         <Route path="/ManagerRequest" component={ManagerRequest} />
//         <Route path="/URL_Status" exact component={URL_Status} />
//         <Route path="/BugRaiseForm" exact component={BugRaiseForm} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
