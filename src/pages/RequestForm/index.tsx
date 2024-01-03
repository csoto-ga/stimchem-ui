import { useState } from 'react';
import { Form, Tabs } from 'react-daisyui';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput, schema } from './schema';
import { DateValueType } from 'react-tailwindcss-datepicker';
import RequestorInformationTab from './components/requestor-information-tab';
import RequestDetailsTab from './components/request-details-tab';
import CustomerInformationTab from './components/customer-information-tab';
import TechnicalDetailsTab from './components/technical-details-tab';
import StatusAndFinanceTab from './components/status-and-finance-tab';
import TabsNavigator from './components/tabs-navigator';
import SubmitButtons from './components/submit-buttons';

const RequestForm = () => {
  const activeTabState = useState<number>(1);
  const [activeTab, setActiveTab] = activeTabState;
  const dateInitialValue = {
    startDate: null,
    endDate: null,
  };
  const dateOfRequestState = useState<DateValueType>(dateInitialValue);
  const dateFinalReportState = useState<DateValueType>(dateInitialValue);
  const [, setDateOfRequestValue] = dateOfRequestState;
  const [, setDateFinalReportValue] = dateFinalReportState;

  const totalTabs = 5;

  const methods = useForm<FormInput>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });
  // console.log('errors: ', errors);
  // console.log('dateValue: ', dateOfRequestValue);
  // console.log('touchedFields: ', touchedFields);
  //console.log(watch('firstName')); // watch input value by passing the name of it
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('onSubmit', data);
  };
  const formReset = () => {
    methods.reset();
    setActiveTab(1);
    setDateOfRequestValue(dateInitialValue);
    setDateFinalReportValue(dateInitialValue);
  };

  return (
    <FormProvider {...methods}>
      <Form
        className="shadow shadow-gray-600 bg-base-200 w-full rounded-lg p-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Tabs variant="lifted" size="md">
          <RequestDetailsTab
            indexTab={1}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            {...{ dateOfRequestState, dateFinalReportState }}
          />
          <RequestorInformationTab indexTab={2} activeTab={activeTab} setActiveTab={setActiveTab} />
          <CustomerInformationTab indexTab={3} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TechnicalDetailsTab indexTab={4} activeTab={activeTab} setActiveTab={setActiveTab} />
          <StatusAndFinanceTab indexTab={5} activeTab={activeTab} setActiveTab={setActiveTab} />
        </Tabs>
        <TabsNavigator {...{ totalTabs, activeTabState }} />
        <SubmitButtons reset={formReset} />
      </Form>
    </FormProvider>
  );
};

export default RequestForm;
