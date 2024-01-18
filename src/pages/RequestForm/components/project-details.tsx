import { Controller } from 'react-hook-form';
import { TabProps } from './types';
import { Tabs } from 'react-daisyui';
import Dropdown from '@components/form/Dropdown';
import TextBox from '@components/form/Textbox';
import DatePicker from '@components/form/Datepicker';
import { CONTENT_TAB_STYLE } from './constants';
import TabContent from './tab-content';
import TabContentCard from './tab-content-card';
import { DateValueType } from 'react-tailwindcss-datepicker';
import { Dispatch, SetStateAction } from 'react';
import useFormContextExtended from './useFormContextExtended';

type ProjectDetailsTabProps = {
  dateReadyCloseState: [DateValueType, Dispatch<SetStateAction<DateValueType>>];
} & TabProps;

const ProjectDetails = ({
  indexTab,
  activeTab,
  setActiveTab,
  dateReadyCloseState,
}: ProjectDetailsTabProps) => {
  const [dateReadyCloseDate, setDateReadyCloseDate] = dateReadyCloseState;
  const { control, extendRegister, errors } = useFormContextExtended();
  return (
    <Tabs.RadioTab
      checked={activeTab === indexTab}
      onChange={() => setActiveTab(indexTab)}
      name="section"
      label="Project Details"
      contentClassName={CONTENT_TAB_STYLE}
    >
      <TabContent>
        <TabContentCard>
          <TextBox label="Project Number" {...extendRegister('project_number')} />
          <TextBox label="Project Title" {...extendRegister('project_title')} />
          <TextBox label="Project Type" {...extendRegister('project_type')} />
          <TextBox label="Network Code" {...extendRegister('network_code')} />
        </TabContentCard>
        <TabContentCard>
          <TextBox label="Labor Code" {...extendRegister('labor_code')} />
          <TextBox label="Materials Code" {...extendRegister('materials_code')} />
          <TextBox label="Services Code" {...extendRegister('services_code')} />
          <TextBox label="Travel Code" {...extendRegister('travel_code')} />
        </TabContentCard>
        <TabContentCard>
          <TextBox label="Project Lead" {...extendRegister('project_lead')} />
          <TextBox label="Project Lead Email" {...extendRegister('project_lead_email')} />
          <TextBox label="Shipping Address" {...extendRegister('shipping_address')} />
          <TextBox label="Project Resources" {...extendRegister('project_resources')} />
        </TabContentCard>
        <TabContentCard>
          <Controller
            name="ready_for_close_date"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Ready for Close Date"
                value={dateReadyCloseDate}
                onChange={(newValue) => {
                  field.onChange(newValue?.startDate);
                  field.value = newValue?.startDate as string;
                  setDateReadyCloseDate(newValue);
                }}
                error={error?.message}
              />
            )}
          />
          <Dropdown
            label="Status"
            {...extendRegister('status')}
            error={errors.type_of_request?.message}
            options={[
              { key: '1', text: 'Type 1', value: '1' },
              { key: '2', text: 'Type 2', value: '2' },
              { key: '3', text: 'Type 3', value: '3' },
              { key: '4', text: 'Type 4', value: '4' },
            ]}
          />
        </TabContentCard>
      </TabContent>
    </Tabs.RadioTab>
  );
};

export default ProjectDetails;
