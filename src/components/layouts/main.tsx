import React from 'react';

type MainProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <div className="justify-center">
      <p>Main</p>
      {children}
    </div>
  );
};
export default Main;
