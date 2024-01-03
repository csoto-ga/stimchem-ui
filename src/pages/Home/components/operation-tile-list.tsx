import OperationTile from './operation-tile';
import { OperationTileListProvider } from './operation-tile-list-context';
import './operation-tile-list.css';
import { Operation } from '../types';

type OperationTileListProps = {
  list: Operation[];
};

const OperationTileList = ({ list }: OperationTileListProps) => {
  return (
    <OperationTileListProvider>
      <ul className="no-bullets">
        {list.map((op, index) => (
          <li key={index}>
            <OperationTile name={op.name} items={op.processes} index={index} />
          </li>
        ))}
      </ul>
    </OperationTileListProvider>
  );
};

export default OperationTileList;
