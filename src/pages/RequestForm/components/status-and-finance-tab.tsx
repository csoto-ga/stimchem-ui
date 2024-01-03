import { useFormContext } from 'react-hook-form';
import { TabProps } from './types';
import { FormInput } from '../schema';
import { Tabs } from 'react-daisyui';
import Dropdown from '@components/form/Dropdown';
import TextBox from '@components/form/TextBox';
import { CONTENT_TAB_STYLE } from './constants';

const StatusAndFinanceTab = ({ indexTab, activeTab, setActiveTab }: TabProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInput>();
  return (
    <Tabs.RadioTab
      checked={activeTab === indexTab}
      onChange={() => setActiveTab(indexTab)}
      name="section"
      label="Status and Finance"
      contentClassName={CONTENT_TAB_STYLE}
    >
      <Dropdown
        label="Status"
        {...register('status')}
        error={errors.status?.message}
        options={[
          { key: '1', text: 'Status 1', value: '1' },
          { key: '2', text: 'Status 2', value: '2' },
          { key: '3', text: 'Status 3', value: '3' },
          { key: '4', text: 'Status 4', value: '4' },
        ]}
      />
      <TextBox
        label="Project Revenue"
        error={errors.project_revenue?.message}
        {...register('project_revenue')}
      />
      <Dropdown
        label="PSL"
        error={errors.psl?.message}
        {...register('psl')}
        options={[
          { key: '1', text: 'PSL 1', value: '1' },
          { key: '2', text: 'PSL 2', value: '2' },
          { key: '3', text: 'PSL 3', value: '3' },
          { key: '4', text: 'PSL 4', value: '4' },
        ]}
      />
    </Tabs.RadioTab>
  );
};

export default StatusAndFinanceTab;
