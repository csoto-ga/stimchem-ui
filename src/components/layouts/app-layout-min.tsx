import React from 'react';
import Header from './header';
import './app-layout-min.css';

type AppLayoutMinProps = {
  children?: React.ReactNode;
};

const AppLayoutMin = ({ children }: AppLayoutMinProps) => {
  return (
    <div className="app-layout-min m-4">
      <Header />
      <div className="main container mx-auto px-4">{children}</div>
    </div>
  );
};

export default AppLayoutMin;
