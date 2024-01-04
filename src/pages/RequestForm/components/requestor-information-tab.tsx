import TextBox from '@components/form/Textbox';
import { Tabs } from 'react-daisyui';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../schema';
import TabContent from './tab-content';
import TabContentCard from './tab-content';
import { TabProps } from './types';
import { CONTENT_TAB_STYLE } from './constants';

const RequestorInformationTab = ({ indexTab, activeTab, setActiveTab }: TabProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInput>();

  return (
    <Tabs.RadioTab
      checked={activeTab === indexTab}
      onChange={() => setActiveTab(indexTab)}
      name="section"
      label="Requestor Information"
      contentClassName={CONTENT_TAB_STYLE}
    >
      <TabContent>
        <TabContentCard>
          <TextBox
            label="Name"
            error={errors.name?.message}
            {...register('name', { required: 'required' })}
          />
          <TextBox
            label="Work Location (Country, City)"
            error={errors.work_location?.message}
            {...register('work_location')}
          />
        </TabContentCard>

        <TabContentCard>
          <TextBox label="Phone" error={errors.phone?.message} {...register('phone')} />
          <TextBox label="Email" error={errors.email?.message} {...register('email')} />
        </TabContentCard>
      </TabContent>
    </Tabs.RadioTab>
  );
};

export default RequestorInformationTab;
