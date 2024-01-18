import React from 'react';

type TabContentCardProps = {
  children: React.ReactNode;
};

const TabContentCard = ({ children }: TabContentCardProps) => {
  return <div className="w-1/2 px-1">{children}</div>;
};

export default TabContentCard;
