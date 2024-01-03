import React from 'react';

type TabContentProps = {
  children: React.ReactNode;
};

const TabContent = ({ children }: TabContentProps) => {
  return <div className="flex justify-center flex-wrap">{children}</div>;
};

export default TabContent;
