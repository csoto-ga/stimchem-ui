import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-daisyui';

type TabsNavigatorProps = {
  totalTabs: number;
  activeTabState: [number, Dispatch<SetStateAction<number>>];
};

const TabsNavigator = ({ activeTabState, totalTabs }: TabsNavigatorProps) => {
  const [, setActiveTab] = activeTabState;
  return (
    <div className="border-base-300 rounded-box border-t-0 rounded-t-none pb-2 flex justify-center items-center h-full">
      <div className="w-full flex justify-center items-center gap-2 ">
        <Button
          size="sm"
          className="bg-base-100"
          type="button"
          variant="outline"
          shape="square"
          onClick={() => setActiveTab((prevTab) => (prevTab === 1 ? totalTabs : prevTab - 1))}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <Button
          size="sm"
          className="bg-base-100"
          type="button"
          variant="outline"
          shape="square"
          onClick={() => setActiveTab((prevTab) => (prevTab === totalTabs ? 1 : prevTab + 1))}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default TabsNavigator;
