import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './app-layout.css';

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <Header />
      <Sidebar />
      <div className="main container mx-autod px-4">{children}</div>
    </div>
  );
};

export default AppLayout;
