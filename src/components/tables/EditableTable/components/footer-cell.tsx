import { Table } from '@tanstack/react-table';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button } from 'react-daisyui';
import { CustomTableMeta, Row } from './types';

type FooterCellProps<T extends object> = {
  table: Table<T>;
};

const FooterCell = <T extends object, D extends Row>({ table }: FooterCellProps<T>) => {
  const meta = table.options.meta as CustomTableMeta<D>;
  return (
    <div className="footer-buttons">
      <Button
        variant="outline"
        onClick={meta?.addRow}
        startIcon={<PlusIcon className="h-5 w-5" />}
        size="xs"
        color="accent"
      ></Button>
    </div>
  );
};

export default FooterCell;
