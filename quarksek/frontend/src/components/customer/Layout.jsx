// Layout.js

import React from 'react';
import CustomerNavbar from '../customer/Navbar';
import CustomerSidebar from '../customer/Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
};

export default Layout;
