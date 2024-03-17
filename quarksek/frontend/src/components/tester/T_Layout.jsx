// Layout.js

import React from 'react';
import T_Navbar from './T_Navbar';
import T_Sidebar from './T_Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <T_Navbar />
      <T_Sidebar />
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
};

export default Layout;
