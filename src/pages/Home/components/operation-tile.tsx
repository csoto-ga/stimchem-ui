import { Accordion } from 'react-daisyui';
import './operation-tile.css';
import ChemProcessItem from './chem-process-item';

type OperationTileProps = {
  name: string;
  index: number;
  items: string[];
};
const OperationTile = ({ name, index, items }: OperationTileProps) => {
  return (
    <div className="p-2">
      <Accordion className="bg-base-200" icon="plus">
        <Accordion.Title className="text-xl font-medium">{name}</Accordion.Title>
        <Accordion.Content>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 title-content m-7">
            {items.map((item, index) => (
              <ChemProcessItem key={index} name={item} />
            ))}
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default OperationTile;
