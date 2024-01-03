import { Checkbox } from 'react-daisyui';
import './chem-process-item.css';

type ChemProcessItemProps = {
  name: string;
};
const ChemProcessItem = ({ name }: ChemProcessItemProps) => {
  return (
    <div className="relative flex gap-x-3 rounded-lg bg-white p-4 shadow-md">
      <Checkbox name={name} size="sm" />
      <div className="text-sm leading-6">
        <label htmlFor={name} className="font-medium text-gray-900">
          {name}
        </label>
      </div>
    </div>
  );
};

export default ChemProcessItem;
