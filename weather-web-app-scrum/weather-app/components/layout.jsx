import React from 'react';
import NavBar from './NavBar';
import Footeri from './Footeri';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      {/* <Footeri /> */}
    </>
  );
}

export default Layout;
