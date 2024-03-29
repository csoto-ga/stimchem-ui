import { Button } from 'react-daisyui';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../schema';
import TabsNavigator from './tabs-navigator';
import { Dispatch, SetStateAction } from 'react';

type TabsFooterProps = {
  reset: () => void;
  totalTabs: number;
  activeTabState: [number, Dispatch<SetStateAction<number>>];
};

const TabsFooter = ({ reset, totalTabs, activeTabState }: TabsFooterProps) => {
  const {
    formState: { isValid },
  } = useFormContext<FormInput>();
  return (
    <div className="flex mt-4 items-center gap-2">
      <div className="w-full">
        <TabsNavigator {...{ totalTabs, activeTabState }} />
      </div>
      <div className="w-0 flex justify-end gap-2">
        <Button color="neutral" size="xs">
          Save
        </Button>
        <Button color="secondary" size="xs" type="submit" disabled={!isValid}>
          Submit
        </Button>
        <Button size="xs" color="primary" type="reset" onClick={() => reset()}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TabsFooter;
