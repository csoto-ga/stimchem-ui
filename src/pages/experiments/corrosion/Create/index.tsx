import { useState } from 'react';
import { Button, Collapse } from 'react-daisyui';
import Datepicker from '@components/form/Datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker';
import TextBox from '@components/form/Textbox';
import Dropdown from '@components/form/Dropdown';
import RecipeTable from './components/recipe-table';

type CorrosionExperimentCreateProps = {};

const CorrosionCreate = (props: CorrosionExperimentCreateProps) => {
  const dateInitialValue = {
    startDate: null,
    endDate: null,
  };
  const [dateValue, setDateValue] = useState<DateValueType>(dateInitialValue);

  return (
    <div className="flex flex-wrap gap-2">
      <Collapse checkbox={true} icon="plus" className="overflow-visible bg-base-200">
        <Collapse.Title className="text-xl font-medium">Experiment Information</Collapse.Title>
        <Collapse.Content>
          <div className="flex">
            <div className="w-2/5 px-1">
              <Datepicker
                label="Date"
                onChange={(newValue) => setDateValue(newValue)}
                value={dateValue}
              />
              <TextBox label="Operator" />
              <Dropdown label="Equipment" />
            </div>
            <div className="w-2/5 px-1">
              <Dropdown label="Cell Number" />
              <TextBox label="Temperature (deg F)" />
              <TextBox label="Temp Ramp Up Time (min)" />
            </div>
            <div className="w-2/5 px-1">
              <TextBox label="Pressure (psig)" />
              <TextBox label="Incubation Time (h)" />
            </div>
          </div>
        </Collapse.Content>
      </Collapse>
      <Collapse checkbox={true} icon="plus" className="overflow-visible bg-base-200">
        <Collapse.Title className="text-xl font-medium">Coupon Information</Collapse.Title>
        <Collapse.Content>
          <div className="flex">
            <div className="w-2/5 px-1">
              <Dropdown label="Metallurgy" />
              <Dropdown label="Shape" />
              <TextBox label="Initial Weight, g" />
            </div>
            <div className="flex flex-col justify-center">
              <img src="https://via.placeholder.com/420x320/fff/333333?text=Sample" alt="" />
            </div>
            <div className="w-2/5 px-1">
              <TextBox label="Length 1 (L1), in" />
              <TextBox label="Length 2 (L2), in" />
              <TextBox label="Height (Ht), in" />
              <TextBox label="Thickness (Th), in" />
              <TextBox label="Hole Diameter (H), in" />
              <TextBox label="Surface Area" />
            </div>
          </div>
        </Collapse.Content>
      </Collapse>
      <Collapse checkbox={true} icon="plus" className="bg-base-200 z-0">
        <Collapse.Title className="text-xl font-medium">Acid Blend Recipe</Collapse.Title>
        <Collapse.Content>
          <div className="flex flex-row gap-5">
            <span>
              <TextBox label="Sample Volume (mL)" />
            </span>
            <span>
              <TextBox label="Desired Acid Conc" />
            </span>
            <div className="flex items-end pb-3">
              <Button color="neutral" size="sm">
                HCL Calculator
              </Button>
            </div>
          </div>
          <RecipeTable />
        </Collapse.Content>
      </Collapse>
      <Collapse checkbox={true} icon="plus" className="bg-base-200 z-0">
        <Collapse.Title className="text-xl font-medium">Results</Collapse.Title>
        <Collapse.Content>Results</Collapse.Content>
      </Collapse>
    </div>
  );
};

export default CorrosionCreate;
