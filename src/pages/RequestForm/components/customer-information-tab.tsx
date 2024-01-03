import TextBox from '@components/form/TextBox';
import { Tabs } from 'react-daisyui';
import { TabProps } from './types';
import { FormInput } from '../schema';
import { useFormContext } from 'react-hook-form';
import { CONTENT_TAB_STYLE } from './constants';

const CustomerInformationTab = ({ indexTab, activeTab, setActiveTab }: TabProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInput>();

  return (
    <Tabs.RadioTab
      checked={activeTab === indexTab}
      onChange={() => setActiveTab(indexTab)}
      name="section"
      label="Customer Information"
      contentClassName={CONTENT_TAB_STYLE}
    >
      <div className="flex justify-center flex-wrap">
        <div className="w-2/5 px-1">
          <TextBox label="Customer" error={errors.customer?.message} {...register('customer')} />
          <TextBox label="Field Name" {...register('field_name')} />
          <TextBox label="Formation Name" {...register('formation_name')} />
        </div>
        <div className="w-2/5 px-1">
          <TextBox label="Bottom Hole Temperature" {...register('bottom_hole_temperature')} />
          <TextBox label="Bottom Hole Pressure" {...register('bottom_hole_pressure')} />
        </div>
      </div>
    </Tabs.RadioTab>
  );
};

export default CustomerInformationTab;
