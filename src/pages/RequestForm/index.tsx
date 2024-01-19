import { useState } from 'react';
import { Form, Tabs } from 'react-daisyui';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput, schema } from './schema';
import { DateValueType } from 'react-tailwindcss-datepicker';
import RequestDetailsTab from './components/request-details-tab';
import TechnicalDetailsTab from './components/technical-details-tab';
import ProjectDetails from './components/project-details';
import TabsFooter from './components/tabs-footer';

const RequestForm = () => {
  const activeTabState = useState<number>(1);
  const [activeTab, setActiveTab] = activeTabState;
  const dateInitialValue = {
    startDate: null,
    endDate: null,
  };
  const dateOfRequestState = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const dateFinalReportState = useState<DateValueType>(dateInitialValue);
  const dateReadyCloseState = useState<DateValueType>(dateInitialValue);
  const [, setDateOfRequestValue] = dateOfRequestState;
  const [, setDateFinalReportValue] = dateFinalReportState;

  const totalTabs = 3;

  const methods = useForm<FormInput>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });
  // console.log('dateValue: ', dateOfRequestValue);
  // console.log('touchedFields: ', touchedFields);
  //console.log(watch('firstName')); // watch input value by passing the name of it
  console.log('values: ', methods.getValues());
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
          <TechnicalDetailsTab indexTab={2} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectDetails
            indexTab={3}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            {...{ dateReadyCloseState }}
          />
        </Tabs>
        <TabsFooter reset={formReset} {...{ totalTabs, activeTabState }} />
      </Form>
    </FormProvider>
  );
};

export default RequestForm;
