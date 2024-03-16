// Layout.js

import React from 'react';
import M_Navbar from '../manager/M_Navbar';
import M_Sidebar from '../manager/M_Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <M_Navbar />
      <M_Sidebar />
      
      <div className="ml-64">
        {children}
       
      </div>
    </div>
  );
};

export default Layout;
