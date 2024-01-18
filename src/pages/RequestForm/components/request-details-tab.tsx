import TextBox from '@components/form/Textbox';
import { Tabs } from 'react-daisyui';
import { Controller } from 'react-hook-form';
import TabContent from './tab-content';
import TabContentCard from './tab-content-card';
import { TabProps } from './types';
import Dropdown from '@components/form/Dropdown';
import DatePicker from '@components/form/Datepicker';
import { Dispatch, SetStateAction } from 'react';
import { DateValueType } from 'react-tailwindcss-datepicker';
import { CONTENT_TAB_STYLE } from './constants';
import useFormContextExtended from './useFormContextExtended';
import Swap from '@components/form/Swap';

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
  const { control, extendRegister, errors } = useFormContextExtended();

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
          <TextBox label="Name" error={errors.name?.message} {...extendRegister('name')} />
          <TextBox
            label="Work Location (Country, City)"
            error={errors.work_location?.message}
            {...extendRegister('work_location')}
          />
          <TextBox label="Phone" error={errors.phone?.message} {...extendRegister('phone')} />
          <TextBox label="Email" error={errors.email?.message} {...extendRegister('email')} />
        </TabContentCard>
        <TabContentCard>
          <TextBox
            label="Customer"
            error={errors.customer?.message}
            {...extendRegister('customer')}
          />
          <Swap label="Request for a Tender/Bid?" {...extendRegister('is_tender')} />
          <TextBox label="Formation Name" {...extendRegister('formation_name')} />
          <TextBox label="Field Name" {...extendRegister('field_name')} />
        </TabContentCard>
        <TabContentCard>
          <Dropdown
            label="Type of Request"
            {...extendRegister('type_of_request')}
            error={errors.type_of_request?.message}
            options={[
              { key: '1', text: 'Type 1', value: '1' },
              { key: '2', text: 'Type 2', value: '2' },
              { key: '3', text: 'Type 3', value: '3' },
              { key: '4', text: 'Type 4', value: '4' },
            ]}
          />
          <Dropdown
            label="Application"
            {...extendRegister('application')}
            error={errors.status?.message}
            options={[
              { key: '1', text: 'App 1', value: '1' },
              { key: '2', text: 'App 2', value: '2' },
              { key: '3', text: 'App 3', value: '3' },
              { key: '4', text: 'App 4', value: '4' },
            ]}
          />
          <Dropdown
            label="PSL"
            error={errors.psl?.message}
            {...extendRegister('psl')}
            options={[
              { key: '1', text: 'PSL 1', value: '1' },
              { key: '2', text: 'PSL 2', value: '2' },
              { key: '3', text: 'PSL 3', value: '3' },
              { key: '4', text: 'PSL 4', value: '4' },
            ]}
          />
          <TextBox
            label="Project Revenue"
            error={errors.project_revenue?.message}
            {...extendRegister('project_revenue')}
          />
        </TabContentCard>
        <TabContentCard>
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
          <Controller
            name="date_final_report_requested"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Date Final Report is Requested"
                is_required="true"
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
          <Swap label="Shipping samples?" {...extendRegister('is_shipping_samples')} />
          <TextBox
            label="Cost Center"
            error={errors.cost_center?.message}
            {...extendRegister('cost_center')}
          />
        </TabContentCard>
      </TabContent>
    </Tabs.RadioTab>
  );
};

export default RequestDetailsTab;
