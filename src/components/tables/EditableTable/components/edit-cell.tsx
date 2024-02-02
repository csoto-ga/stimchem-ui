import { Row as RTRow, Table } from '@tanstack/react-table';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { CustomTableMeta, Row } from './types';

type EditCellProps<T extends Row> = {
  row: RTRow<T>;
  table: Table<T>;
};

const EditCell = <T extends Row>({ row, table }: EditCellProps<T>) => {
  const meta = table.options.meta as CustomTableMeta<T>;

  const removeRow = () => {
    if (meta.removeRow) {
      meta?.removeRow(row.index);
    }
  };
  return (
    <div className="edit-cell-container">
      {
        <div className="edit-cell-action">
          <button onClick={removeRow} name="remove">
            <XCircleIcon className="h-6 w-6 text-red-400" color="error" />
          </button>
        </div>
      }
    </div>
  );
};

export default EditCell;
