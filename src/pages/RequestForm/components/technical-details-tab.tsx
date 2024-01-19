import { Tabs } from 'react-daisyui';
import { TabProps } from './types';
import TextArea from '@components/form/Textarea';
import TabContent from './tab-content';
import { CONTENT_TAB_STYLE } from './constants';
import TextBox from '@components/form/Textbox';
import useFormContextExtended from './useFormContextExtended';

const TechnicalDetailsTab = ({ indexTab, activeTab, setActiveTab }: TabProps) => {
  const { extendRegister, errors } = useFormContextExtended();

  return (
    <Tabs.RadioTab
      checked={activeTab === indexTab}
      onChange={() => setActiveTab(indexTab)}
      name="section"
      label="Technical Details"
      contentClassName={CONTENT_TAB_STYLE}
    >
      <TabContent>
        <div className="px-1 w-72">
          <TextBox label="Well Name" {...extendRegister('well_name')} />
          <TextBox label="Depth (ft)" {...extendRegister('depth')} />
          <TextBox
            label="Bottom Hole Temperature (°F)"
            {...extendRegister('bottom_hole_temperature')}
          />
          <TextBox label="Bottom Hole Pressure (psi)" {...extendRegister('bottom_hole_pressure')} />
        </div>

        <div className="px-1 flex flex-auto w-0">
          <TextArea
            label="Type of Data Requested"
            className="w-[30vw] h-[283px] rounded-badge"
            error={errors.type_of_data_requested?.message}
            {...extendRegister('type_of_data_requested')}
          />
          <TextArea
            label="Fluid Details"
            className="w-[30vw] h-[283px] rounded-badge"
            {...extendRegister('fluid_details')}
          />
        </div>
      </TabContent>
    </Tabs.RadioTab>
  );
};

export default TechnicalDetailsTab;
