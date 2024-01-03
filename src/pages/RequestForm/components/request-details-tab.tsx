import TextBox from '@components/form/TextBox';
import { Tabs } from 'react-daisyui';
import { Controller, useFormContext } from 'react-hook-form';
import { FormInput } from '../schema';
import TabContent from './tab-content';
import TabContentCard from './tab-content-card';
import { TabProps } from './types';
import Dropdown from '@components/form/Dropdown';
import FormCheckbox from '@components/form/FormCheckbox';
import DatePicker from '@components/form/Datepicker';
import { Dispatch, SetStateAction } from 'react';
import { DateValueType } from 'react-tailwindcss-datepicker';
import { CONTENT_TAB_STYLE } from './constants';

type RequestDetailsTabProps = {
  dateOfRequestState: [DateValueType, Dispatch<SetStateAction<DateValueType>>];
  dateFinalReportState: [DateValueType, Dispatch<SetStateAction<DateValueType>>];
} & TabProps;

const RequestDetailsTab = ({
  indexTab,
  activeTab,
  setActiveTab,
  dateOfRequestState,
  dateFinalReportState,
}: RequestDetailsTabProps) => {
  const [dateOfRequestValue, setDateOfRequestValue] = dateOfRequestState;
  const [dateFinalReportValue, setDateFinalReportValue] = dateFinalReportState;
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormInput>();

  return (
    <Tabs.RadioTab
      checked={activeTab === indexTab}
      onChange={() => setActiveTab(indexTab)}
      name="section"
      label="Request Details"
      contentClassName={CONTENT_TAB_STYLE}
    >
      <TabContent>
        <TabContentCard>
          <Dropdown
            label="Type of Request"
            {...register('type_of_request')}
            error={errors.type_of_request?.message}
            options={[
              { key: '1', text: 'Type 1', value: '1' },
              { key: '2', text: 'Type 2', value: '2' },
              { key: '3', text: 'Type 3', value: '3' },
              { key: '4', text: 'Type 4', value: '4' },
            ]}
          />
          <FormCheckbox label="Is this Request for a Tender/Bid?" {...register('is_tender')} />
          <Controller
            name="date_of_request"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Date of Request"
                value={dateOfRequestValue}
                onChange={(newValue) => {
                  field.onChange(newValue?.startDate);
                  field.value = newValue?.startDate as string;
                  setDateOfRequestValue(newValue);
                }}
                error={error?.message}
              />
            )}
          />
        </TabContentCard>
        <TabContentCard>
          <Controller
            name="date_final_report_requested"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Date Final Report is Requested"
                value={dateFinalReportValue}
                onChange={(newValue) => {
                  field.onChange(newValue?.startDate);
                  field.value = newValue?.startDate as string;
                  setDateFinalReportValue(newValue);
                }}
                error={error?.message}
              />
            )}
          />
          <Dropdown
            label="Sub PSL"
            {...register('sub_psl')}
            error={errors.sub_psl?.message}
            options={[
              { key: '1', text: 'Item 1', value: '1' },
              { key: '2', text: 'Item 2', value: '2' },
              { key: '3', text: 'Item 3', value: '3' },
              { key: '4', text: 'Item 4', value: '4' },
            ]}
          />
          <TextBox
            label="Cost Center"
            error={errors.cost_center?.message}
            {...register('cost_center')}
          />
        </TabContentCard>
      </TabContent>
    </Tabs.RadioTab>
  );
};

export default RequestDetailsTab;
