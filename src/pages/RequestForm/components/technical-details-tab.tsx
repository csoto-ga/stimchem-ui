import { Tabs } from 'react-daisyui';
import { TabProps } from './types';
import TextArea from '@components/form/Textarea';
import Dropdown from '@components/form/Dropdown';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../schema';
import TabContent from './tab-content';
import TabContentCard from './tab-content-card';
import { CONTENT_TAB_STYLE } from './constants';

const TechnicalDetailsTab = ({ indexTab, activeTab, setActiveTab }: TabProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInput>();

  return (
    <Tabs.RadioTab
      checked={activeTab === indexTab}
      onChange={() => setActiveTab(indexTab)}
      name="section"
      label="Technical Details"
      contentClassName={CONTENT_TAB_STYLE}
    >
      <TabContent>
        <TabContentCard>
          <TextArea
            label="Type of Data Being Requested"
            error={errors.type_of_data_being_requested?.message}
            {...register('type_of_data_being_requested')}
          />
          <Dropdown
            label="Will you be shipping samples"
            {...register('shipping_samples')}
            error={errors.shipping_samples?.message}
            options={[
              { key: '1', text: 'Sample 1', value: '1' },
              { key: '2', text: 'Sample 2', value: '2' },
              { key: '3', text: 'Sample 3', value: '3' },
              { key: '4', text: 'Sample 4', value: '4' },
            ]}
          />
        </TabContentCard>
        <TabContentCard>
          <TextArea label="Fluid Details" {...register('fluid_details')} />
        </TabContentCard>
      </TabContent>
    </Tabs.RadioTab>
  );
};

export default TechnicalDetailsTab;
